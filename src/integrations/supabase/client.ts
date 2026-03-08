import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

// Public client — uses anon key, respects RLS for all user-facing operations.
// The service role key is intentionally NOT used here — it lives in the Edge Function only.
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});

// Helper: call the admin-action Edge Function with the current user's JWT
export const callAdminAction = async (
  method: 'GET' | 'POST',
  params: Record<string, string> = {},
  body?: object
): Promise<any> => {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) throw new Error('Not authenticated');

  const query = new URLSearchParams(params).toString();
  const url = `${SUPABASE_URL}/functions/v1/admin-action${query ? `?${query}` : ''}`;

  const res = await fetch(url, {
    method,
    headers: {
      'Authorization': `Bearer ${session.access_token}`,
      'Content-Type': 'application/json',
      'apikey': SUPABASE_PUBLISHABLE_KEY,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const json = await res.json();
  if (!res.ok) throw new Error(json.error || 'Admin action failed');
  return json;
};