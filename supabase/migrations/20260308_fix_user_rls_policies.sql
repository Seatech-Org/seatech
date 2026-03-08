-- ============================================================
-- Fix: Enable RLS on quotes and quote_items for authenticated users
-- Allows users to manage their own data using the anon key.
-- This removes the need for the service role key in the frontend.
-- ============================================================

-- QUOTES TABLE
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage their own quotes" ON public.quotes;
DROP POLICY IF EXISTS "Admins can read all quotes" ON public.quotes;
DROP POLICY IF EXISTS "Admins can update all quotes" ON public.quotes;

-- Authenticated users can manage their own quotes (draft creation, reading status)
CREATE POLICY "Users can manage their own quotes"
  ON public.quotes FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Admins can read ALL quotes (for admin dashboard)
CREATE POLICY "Admins can read all quotes"
  ON public.quotes FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Admins can update ALL quotes (for approve/reject)
CREATE POLICY "Admins can update all quotes"
  ON public.quotes FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- QUOTE_ITEMS TABLE
ALTER TABLE public.quote_items ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can manage their own quote items" ON public.quote_items;
DROP POLICY IF EXISTS "Admins can read all quote items" ON public.quote_items;

-- Authenticated users can manage items in their own quotes
CREATE POLICY "Users can manage their own quote items"
  ON public.quote_items FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.quotes
      WHERE quotes.id = quote_items.quote_id
        AND quotes.user_id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.quotes
      WHERE quotes.id = quote_items.quote_id
        AND quotes.user_id = auth.uid()
    )
  );

-- Admins can read all quote items
CREATE POLICY "Admins can read all quote items"
  ON public.quote_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.user_roles
      WHERE user_id = auth.uid() AND role = 'admin'
    )
  );

-- Grants
GRANT ALL ON TABLE public.quotes TO authenticated;
GRANT ALL ON TABLE public.quote_items TO authenticated;
GRANT ALL ON TABLE public.quotes TO service_role;
GRANT ALL ON TABLE public.quote_items TO service_role;
