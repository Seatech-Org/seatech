-- 1. Drop the incorrect foreign key constraint that references "profiles"
ALTER TABLE public.quotes 
DROP CONSTRAINT IF EXISTS quotes_user_id_fkey;

-- 2. Add the correct foreign key constraint referencing "auth.users"
-- This ensures that as long as the user is authenticated (exists in auth.users), they can create a quote.
ALTER TABLE public.quotes
ADD CONSTRAINT quotes_user_id_fkey
FOREIGN KEY (user_id)
REFERENCES auth.users(id)
ON DELETE CASCADE;

-- 3. Ensure the columns are correct (just in case)
ALTER TABLE public.quotes 
ALTER COLUMN user_id SET NOT NULL;

-- 4. Re-apply permissions (Safety measure)
GRANT ALL ON TABLE public.quotes TO authenticated;
GRANT ALL ON TABLE public.quote_items TO authenticated;
GRANT ALL ON TABLE public.quotes TO service_role;
GRANT ALL ON TABLE public.quote_items TO service_role;
