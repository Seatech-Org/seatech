-- Fix missing category_name column in products table
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS category_name TEXT;

-- Ensure other potentially missing columns from initial schema are present (idempotent)
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS brand TEXT;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS model TEXT;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS min_order_qty INTEGER DEFAULT 1;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS images JSONB;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS seller_info JSONB;
ALTER TABLE public.products ADD COLUMN IF NOT EXISTS country_of_origin TEXT;
