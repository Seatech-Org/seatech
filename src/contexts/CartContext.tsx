import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, products } from '@/data/products';
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => Promise<void>;
  removeFromCart: (productId: string) => Promise<void>;
  updateQuantity: (productId: string, quantity: number) => Promise<void>;
  clearCart: () => Promise<void>;
  itemCount: number;
  isLoading: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchCart(session.user.id);
      } else {
        setCartItems([]);
      }
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchCart(session.user.id);
      } else {
        setCartItems([]);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchCart = async (userId: string) => {
    setIsLoading(true);
    console.log("Cart Context: Fetching cart for user", userId);
    try {
      // 1. Get the LATEST active draft quote
      const { data: quote, error } = await (supabase as any)
        .from('quotes')
        .select('id')
        .eq('user_id', userId)
        .eq('status', 'draft')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) throw error;
      console.log("Cart Context: Active quote ID:", quote?.id);

      if (quote) {
        // 2. Get quote items
        const { data: items, error: itemsError } = await (supabase as any)
          .from('quote_items')
          .select('*')
          .eq('quote_id', quote.id);

        if (itemsError) throw itemsError;
        console.log("Cart Context: DB items found:", items?.length);

        // 3. Map back to full Product objects
        const loadedItems: CartItem[] = (items || []).map((item: any) => {
          const productDetails = products.find(p => p.id === item.product_id);
          if (!productDetails) {
            return {
              id: item.product_id,
              name: item.product_name,
              brand: "Unknown",
              model: "N/A",
              category: "General",
              price: 0,
              availability: 0,
              minQty: 1,
              images: [],
              specifications: [],
              discount: 0,
              seller: { name: "Seatech", verified: true, rating: 5 },
              countryOfOrigin: "India",
              quantity: item.quantity || 1
            } as CartItem;
          }
          return {
            ...productDetails,
            quantity: item.quantity || 1
          };
        });

        setCartItems(loadedItems);
      } else {
        setCartItems([]);
      }
    } catch (error) {
      console.error("Cart Context: Error fetching cart:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getOrCreateQuoteId = async (): Promise<string | null> => {
    if (!user) return null;

    const { data: existingQuote } = await (supabase as any)
      .from('quotes')
      .select('id')
      .eq('user_id', user.id)
      .eq('status', 'draft')
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existingQuote) return existingQuote.id;

    const { data: newQuote, error } = await (supabase as any)
      .from('quotes')
      .insert({ user_id: user.id, status: 'draft', total_items: 0 })
      .select('id')
      .single();

    if (error) {
      console.error("Cart Context: Error creating quote:", error);
      return null;
    }
    return newQuote.id;
  };

  const addToCart = async (product: Product, quantity: number = 1) => {
    if (!user) {
      toast.error("Please login to add items to quote.");
      return;
    }

    try {
      const quoteId = await getOrCreateQuoteId();
      if (!quoteId) return;

      const existingItem = cartItems.find(item => item.id === product.id);

      if (existingItem) {
        const newQty = existingItem.quantity + quantity;
        const { error } = await (supabase as any)
          .from('quote_items')
          .update({ quantity: newQty })
          .eq('quote_id', quoteId)
          .eq('product_id', product.id);

        if (error) throw error;
      } else {
        const { error } = await (supabase as any)
          .from('quote_items')
          .insert({
            quote_id: quoteId,
            product_id: product.id,
            product_name: product.name,
            quantity: quantity
          });

        if (error) throw error;
      }

      await fetchCart(user.id);
      toast.success(`${product.name} added to quote`);
      
    } catch (error) {
      console.error("Cart Context: Error adding to cart:", error);
      toast.error("Failed to update quote.");
    }
  };

  const removeFromCart = async (productId: string) => {
    if (!user) return;
    console.log("Cart Context: Removing product ID", productId);
    try {
      // Find ALL possible draft quotes for this user to be safe
      const { data: quotes } = await (supabase as any)
        .from('quotes')
        .select('id')
        .eq('user_id', user.id)
        .eq('status', 'draft');

      if (!quotes || quotes.length === 0) {
        console.log("Cart Context: No draft quotes found to delete from.");
        return;
      }

      const quoteIds = quotes.map((q: any) => q.id);
      console.log("Cart Context: Executing delete on quote IDs:", quoteIds);

      // Perform a bulk delete across any draft quotes the user might have
      const { error } = await (supabase as any)
        .from('quote_items')
        .delete()
        .in('quote_id', quoteIds)
        .eq('product_id', productId);

      if (error) throw error;
      
      // Update local state immediately
      setCartItems(prev => prev.filter(i => i.id !== productId));
      toast.success("Item removed from quote");
      
    } catch (error) {
      console.error("Cart Context: Error removing from cart:", error);
      toast.error("Failed to remove item.");
    }
  };

  const updateQuantity = async (productId: string, quantity: number) => {
    if (!user) return;
    if (quantity < 1) {
      await removeFromCart(productId);
      return;
    }

    try {
      const { data: quote } = await (supabase as any)
        .from('quotes')
        .select('id')
        .eq('user_id', user.id)
        .eq('status', 'draft')
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!quote) return;

      const { error } = await (supabase as any)
        .from('quote_items')
        .update({ quantity: quantity })
        .eq('quote_id', quote.id)
        .eq('product_id', productId);

      if (error) throw error;

      await fetchCart(user.id);

    } catch (error) {
      console.error("Cart Context: Error updating quantity:", error);
    }
  };

  const clearCart = async () => {
     if (!user) return;
     try {
       const { data: quotes } = await (supabase as any)
         .from('quotes')
         .select('id')
         .eq('user_id', user.id)
         .eq('status', 'draft');

       if (!quotes || quotes.length === 0) return;
       const quoteIds = quotes.map((q: any) => q.id);

       const { error } = await (supabase as any)
         .from('quote_items')
         .delete()
         .in('quote_id', quoteIds);

       if (error) throw error;
       setCartItems([]);
       toast.success("Cart cleared");
     } catch (error) {
       console.error("Cart Context: Error clearing cart:", error);
     }
  };

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider 
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, itemCount, isLoading }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
