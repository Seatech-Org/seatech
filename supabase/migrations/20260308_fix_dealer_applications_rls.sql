-- ============================================================
-- Fix: Enable RLS on dealer_applications
-- This addresses the Supabase security warning:
--   "Table public.dealer_applications is public, but RLS has not been enabled."
-- The migration 20260216 defined this correctly but was never applied.
-- ============================================================

-- Enable Row Level Security (idempotent)
ALTER TABLE public.dealer_applications ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if any to recreate cleanly (idempotent)
DROP POLICY IF EXISTS "Admins can view all dealer applications" ON public.dealer_applications;
DROP POLICY IF EXISTS "Admins can manage dealer applications" ON public.dealer_applications;
DROP POLICY IF EXISTS "Public can submit dealer applications" ON public.dealer_applications;

-- Admins can read all applications
CREATE POLICY "Admins can view all dealer applications"
    ON public.dealer_applications FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.user_roles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Admins can update/delete applications
CREATE POLICY "Admins can manage dealer applications"
    ON public.dealer_applications FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM public.user_roles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Anyone (including unauthenticated) can submit an application via the form
CREATE POLICY "Public can submit dealer applications"
    ON public.dealer_applications FOR INSERT
    WITH CHECK (true);

-- Ensure correct grants
GRANT INSERT ON TABLE public.dealer_applications TO anon;
GRANT ALL ON TABLE public.dealer_applications TO authenticated;
GRANT ALL ON TABLE public.dealer_applications TO service_role;
