import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { products as localProducts } from "@/data/products";

// Types
export interface Product {
  id: string;
  name: string;
  brand: string;
  model: string;
  category: string;
  price: number;
  availability: number;
  minQty: number;
  images: { main: string; thumbnail: string }[];
  specifications: { category: string; name: string; value: string }[];
  discount: number;
  seller: { name: string; verified: boolean; rating: number };
  countryOfOrigin: string;
}

interface ProductFilters {
  category?: string;
  search?: string;
}

// Service Layer: Fetch Catalog from Supabase
export const fetchProducts = async (filters: ProductFilters = {}): Promise<Product[]> => {
  let query = supabase.from('products').select(`
    *,
    inventory(quantity_available),
    product_specifications(key, value, spec_group)
  `);

  if (filters.category && filters.category !== 'All') {
    // If we have category IDs, we would query by ID. For now, we use the denormalized 'category_name' or slug.
    // Assuming 'category_name' or we join categories table.
    // For simplicity, let's assume 'category_name' exists on products for now.
    query = query.eq('category_name', filters.category);
  }
  
  if (filters.search) {
    query = query.ilike('name', `%${filters.search}%`);
  }

  const { data, error } = await query;
  
  // Fallback to local data if DB is empty or error (for development/demo)
  if (error || !data || data.length === 0) {
    console.warn("Fetching from Supabase failed or empty, falling back to local data.", error);
    
    let filtered = localProducts;
    if (filters.category && filters.category !== 'All') {
      filtered = filtered.filter(p => p.category === filters.category);
    }
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(searchLower) || 
        p.model.toLowerCase().includes(searchLower)
      );
    }
    return filtered;
  }

  // Transform Data to Frontend Shape
  return (data || []).map((p: any) => ({
    id: p.id,
    name: p.name,
    brand: p.brand,
    model: p.model,
    category: p.category_name || "Unknown",
    price: p.base_price,
    availability: p.inventory?.[0]?.quantity_available || 0,
    minQty: p.min_order_qty,
    images: p.images || [],
    specifications: (p.product_specifications || []).map((s: any) => ({
      category: s.spec_group,
      name: s.key,
      value: s.value
    })),
    discount: p.discount_percentage,
    seller: p.seller_info || {},
    countryOfOrigin: p.country_of_origin
  }));
};

// React Query Hook
export const useProducts = (filters: ProductFilters) => {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
  });
};
