-- Create dealer_applications table
CREATE TABLE IF NOT EXISTS public.dealer_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    dealer_name TEXT NOT NULL,
    address TEXT NOT NULL,
    mobile TEXT NOT NULL,
    email TEXT NOT NULL,
    director_name TEXT NOT NULL,
    director_mobile TEXT NOT NULL,
    director_email TEXT NOT NULL,
    gst_number TEXT NOT NULL,
    turnover_year1 NUMERIC(15, 2),
    turnover_year2 NUMERIC(15, 2),
    turnover_year3 NUMERIC(15, 2),
    product_requirements TEXT NOT NULL,
    remarks TEXT,
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.dealer_applications ENABLE ROW LEVEL SECURITY;

-- Admins can view and manage all applications
CREATE POLICY "Admins can view all dealer applications"
    ON public.dealer_applications FOR SELECT
    USING (
        EXISTS (
            SELECT 1 FROM public.user_roles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

CREATE POLICY "Admins can manage dealer applications"
    ON public.dealer_applications FOR ALL
    USING (
        EXISTS (
            SELECT 1 FROM public.user_roles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Public can insert (for the application form)
CREATE POLICY "Public can submit dealer applications"
    ON public.dealer_applications FOR INSERT
    WITH CHECK (true);

-- Grant permissions
GRANT ALL ON TABLE public.dealer_applications TO authenticated;
GRANT ALL ON TABLE public.dealer_applications TO service_role;
GRANT INSERT ON TABLE public.dealer_applications TO anon;
