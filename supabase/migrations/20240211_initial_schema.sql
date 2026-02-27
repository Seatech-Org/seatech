-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Categories (Hierarchical Support)
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  parent_id UUID REFERENCES public.categories(id),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Products (Core Catalog)
CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY, -- Preserving existing alphanumeric IDs
  name TEXT NOT NULL,
  brand TEXT,
  model TEXT,
  category_id UUID REFERENCES public.categories(id),
  category_name TEXT, -- Denormalized for easier querying if needed, or rely on join
  base_price NUMERIC(10, 2) NOT NULL,
  discount_percentage NUMERIC(5, 2) DEFAULT 0,
  min_order_qty INTEGER DEFAULT 1,
  images JSONB, -- Stores array of {main, thumbnail}
  seller_info JSONB, -- Stores {name, rating, verified}
  country_of_origin TEXT,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Inventory (Separated for Scalability)
CREATE TABLE IF NOT EXISTS public.inventory (
  product_id TEXT REFERENCES public.products(id) PRIMARY KEY,
  quantity_available INTEGER DEFAULT 0,
  warehouse_location TEXT,
  last_updated TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Product Specifications (The "Composable Domain Model")
CREATE TABLE IF NOT EXISTS public.product_specifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  product_id TEXT REFERENCES public.products(id) ON DELETE CASCADE,
  spec_group TEXT, -- e.g., "Dimensions", "Compliance"
  key TEXT NOT NULL, -- e.g., "Height", "ISO Standard"
  value TEXT NOT NULL
);

-- 5. Enhanced Quotes Table (Order Aggregation)
ALTER TABLE public.quotes 
ADD COLUMN IF NOT EXISTS valid_until TIMESTAMPTZ,
ADD COLUMN IF NOT EXISTS currency TEXT DEFAULT 'INR';

-- RLS Policies (Security)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.inventory ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_specifications ENABLE ROW LEVEL SECURITY;

-- Public read access for catalog
CREATE POLICY "Public Read Categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Public Read Products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Public Read Inventory" ON public.inventory FOR SELECT USING (true);
CREATE POLICY "Public Read Specs" ON public.product_specifications FOR SELECT USING (true);
