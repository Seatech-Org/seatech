// Edge Function: Order Aggregation & Validation
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    const { items, userId } = await req.json(); // Expected: [{ productId, qty }]

    // 1. Validation Layer (Business Logic)
    if (!items || items.length === 0) {
      throw new Error("No items in quote request");
    }

    // 2. Fetch Inventory & Rules
    const productIds = items.map((i: any) => i.productId);
    const { data: products, error: prodError } = await supabaseClient
      .from('products')
      .select('id, min_order_qty, base_price, inventory(quantity_available)')
      .in('id', productIds);

    if (prodError) throw prodError;

    // 3. Perform Checks
    for (const item of items) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const product = products?.find((p: any) => p.id === item.productId);
      if (!product) throw new Error(`Product ${item.productId} not found`);
      
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const productAny = product as any;

      if (item.qty < productAny.min_order_qty) {
        throw new Error(`Product ${item.productId} requires minimum qty of ${productAny.min_order_qty}`);
      }
      
      const available = productAny.inventory?.[0]?.quantity_available || 0;
      if (item.qty > available) {
        throw new Error(`Insufficient stock for ${item.productId}. Available: ${available}`);
      }
    }

    // 4. Create Quote (Transaction Simulation)
    const { data: quote, error: quoteError } = await supabaseClient
      .from('quotes')
      .insert({ 
        user_id: userId,
        status: 'draft',
        total_items: items.reduce((acc: number, curr: any) => acc + curr.qty, 0),
        valid_until: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // Valid for 7 days
      })
      .select()
      .single();

    if (quoteError) throw quoteError;

    // 5. Insert Items
    const quoteItems = items.map((item: any) => ({
      quote_id: quote.id,
      product_id: item.productId,
      quantity: item.qty
    }));

    const { error: itemsError } = await supabaseClient
      .from('quote_items')
      .insert(quoteItems);

    if (itemsError) throw itemsError;

    return new Response(JSON.stringify({ success: true, quoteId: quote.id }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 400,
    });
  }
});
