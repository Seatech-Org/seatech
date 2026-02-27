import { createClient } from "@supabase/supabase-js";
import 'dotenv/config';
import { products } from "../src/data/products"; // Import local data

const SUPABASE_URL = process.env.VITE_SUPABASE_URL || "";
const SUPABASE_KEY = process.env.VITE_SUPABASE_SERVICE_ROLE_KEY || "";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function seed() {
  console.log("Seeding started...");

  // 1. Clear existing data (Optional)
  // await supabase.from('products').delete().neq('id', '0');

  // 2. Iterate and Insert
  for (const product of products) {
    // 2a. Insert Product
    const { error: prodError } = await supabase
      .from('products')
      .upsert({
        id: product.id,
        name: product.name,
        brand: product.brand,
        model: product.model,
        category_name: product.category, // Storing name directly for simplicity
        base_price: product.price,
        discount_percentage: product.discount,
        min_order_qty: product.minQty,
        images: product.images,
        seller_info: product.seller,
        country_of_origin: product.countryOfOrigin
      });

    if (prodError) console.error(`Error inserting product ${product.id}:`, prodError);

    // 2b. Insert Inventory
    const { error: invError } = await supabase
      .from('inventory')
      .upsert({
        product_id: product.id,
        quantity_available: product.availability,
        warehouse_location: 'Main Warehouse'
      });
    
    if (invError) console.error(`Error inserting inventory ${product.id}:`, invError);

    // 2c. Insert Specifications
    const specs = product.specifications.map(spec => ({
      product_id: product.id,
      spec_group: spec.category,
      key: spec.name,
      value: spec.value
    }));

    const { error: specError } = await supabase
      .from('product_specifications')
      .upsert(specs); // Bulk upsert for this product

    if (specError) console.error(`Error inserting specs ${product.id}:`, specError);
  }

  console.log("Seeding complete!");
}

seed();
