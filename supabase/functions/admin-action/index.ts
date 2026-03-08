// Edge Function: Admin Action Handler
// All privileged admin operations go through here.
// The service role key is stored server-side ONLY — never in the frontend bundle.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? '';
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '';

serve(async (req: Request) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    try {
        // 1. Extract user JWT from Authorization header
        const authHeader = req.headers.get('Authorization');
        if (!authHeader) {
            return json({ error: 'Missing Authorization header' }, 401);
        }

        // 2. Verify the caller is an authenticated admin using their user JWT (anon key)
        const userClient = createClient(
            SUPABASE_URL,
            Deno.env.get('SUPABASE_ANON_KEY') ?? '',
            { global: { headers: { Authorization: authHeader } } }
        );

        const { data: { user }, error: authError } = await userClient.auth.getUser();
        if (authError || !user) {
            return json({ error: 'Unauthorized' }, 401);
        }

        // 3. Check admin role in user_roles table
        const { data: roleRow } = await userClient
            .from('user_roles')
            .select('role')
            .eq('user_id', user.id)
            .eq('role', 'admin')
            .maybeSingle();

        if (!roleRow) {
            return json({ error: 'Access denied. Admin role required.' }, 403);
        }

        // 4. Admin verified — create service role client for privileged operations
        const adminSB = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

        const url = new URL(req.url);
        const action = url.searchParams.get('action');

        // ---- GET actions (read-only) ----
        if (req.method === 'GET') {
            if (action === 'list-quotes') {
                // Fetch all non-draft quotes
                const { data: quotes, error } = await adminSB
                    .from('quotes')
                    .select('*')
                    .neq('status', 'draft')
                    .order('created_at', { ascending: false });

                if (error) throw error;

                // Enrich with items + profile
                const enriched = await Promise.all((quotes || []).map(async (q: any) => {
                    const [{ data: items }, { data: profile }] = await Promise.all([
                        adminSB.from('quote_items').select('product_name, quantity').eq('quote_id', q.id),
                        adminSB.from('profiles').select('contact_person, company_name, email, phone').eq('id', q.user_id).maybeSingle()
                    ]);
                    return { ...q, quote_items: items || [], profiles: profile || null };
                }));

                return json({ data: enriched });
            }

            if (action === 'list-applications') {
                const { data, error } = await adminSB
                    .from('dealer_applications')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (error) throw error;
                return json({ data });
            }

            return json({ error: 'Unknown action' }, 400);
        }

        // ---- POST actions (mutations) ----
        if (req.method === 'POST') {
            const body = await req.json();
            const { action: postAction, id, status } = body;

            if (postAction === 'update-quote-status') {
                if (!id || !status) return json({ error: 'Missing id or status' }, 400);
                const { error } = await adminSB.from('quotes').update({ status }).eq('id', id);
                if (error) throw error;
                return json({ success: true });
            }

            if (postAction === 'update-app-status') {
                if (!id || !status) return json({ error: 'Missing id or status' }, 400);
                const { error } = await adminSB.from('dealer_applications').update({ status }).eq('id', id);
                if (error) throw error;
                return json({ success: true });
            }

            return json({ error: 'Unknown action' }, 400);
        }

        return json({ error: 'Method not allowed' }, 405);

    } catch (err: any) {
        console.error('admin-action error:', err);
        return json({ error: err.message || 'Internal server error' }, 500);
    }
});

function json(data: unknown, status = 200) {
    return new Response(JSON.stringify(data), {
        status,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
}
