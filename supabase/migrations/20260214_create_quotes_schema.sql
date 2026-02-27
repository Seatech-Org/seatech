-- Create quotes table
CREATE TABLE IF NOT EXISTS public.quotes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'submitted', 'processed')),
    total_items INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create quote_items table
CREATE TABLE IF NOT EXISTS public.quote_items (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    quote_id UUID REFERENCES public.quotes(id) ON DELETE CASCADE NOT NULL,
    product_id TEXT NOT NULL,
    product_name TEXT NOT NULL,
    quantity INTEGER DEFAULT 1 CHECK (quantity > 0),
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quote_items ENABLE ROW LEVEL SECURITY;

-- Policies for quotes
CREATE POLICY "Users can view their own quotes" 
    ON public.quotes FOR SELECT 
    USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own quotes" 
    ON public.quotes FOR INSERT 
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own quotes" 
    ON public.quotes FOR UPDATE 
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own quotes" 
    ON public.quotes FOR DELETE 
    USING (auth.uid() = user_id);

-- Policies for quote_items
-- Users can see items if they own the parent quote
CREATE POLICY "Users can view their own quote items" 
    ON public.quote_items FOR SELECT 
    USING (
        EXISTS (
            SELECT 1 FROM public.quotes 
            WHERE quotes.id = quote_items.quote_id 
            AND quotes.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can insert items to their own quotes" 
    ON public.quote_items FOR INSERT 
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.quotes 
            WHERE quotes.id = quote_items.quote_id 
            AND quotes.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can update items in their own quotes" 
    ON public.quote_items FOR UPDATE 
    USING (
        EXISTS (
            SELECT 1 FROM public.quotes 
            WHERE quotes.id = quote_items.quote_id 
            AND quotes.user_id = auth.uid()
        )
    );

CREATE POLICY "Users can delete items from their own quotes" 
    ON public.quote_items FOR DELETE 
    USING (
        EXISTS (
            SELECT 1 FROM public.quotes 
            WHERE quotes.id = quote_items.quote_id 
            AND quotes.user_id = auth.uid()
        )
    );
