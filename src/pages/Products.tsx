import { useState, useEffect, useMemo } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { products as allProducts, Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { ArrowLeft, ShieldCheck, AlertCircle, ArrowRight, Package, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Categories Configuration ---
const GEM_CATEGORIES = [
  { title: "Steel Almirah / Cabinets conforming to IS 3312 (V4)", productIds: ["5116877-84550989804"] },
  { title: "Chair (Without Wheels) for General Purpose", productIds: ["5116877-28259191521"] },
  { title: "Revolving Chair (V5)", productIds: ["5116877-55035709738"] },
  { title: "Steel Filing Cabinets for General Office Purpose (V2)", productIds: ["5116877-98128241302"] },
  { title: "Modular Table / Meeting Table / Centre Table (V2)", productIds: ["5116877-49535649906"] },
  { title: "Executive Table (V3)", productIds: ["5116877-81186347518"] },
  { title: "Metal Shelving Racks (Adjustable Type) confirming to IS 1883 (V2)", productIds: ["5116877-28208451747"] },
  { title: "Auditorium Chair (V2)", productIds: ["5116877-65592269550"] },
  { title: "Classroom Stools", productIds: ["5116877-89307053900"] },
  { title: "Writing Pad Chair", productIds: ["5116877-55170119102"] },
  { title: "Sofas (V2)", productIds: ["5116877-54303299961"] },
  { title: "Cafeteria Chair", productIds: ["5116877-72425320728"] },
  { title: "Metal Beds (V3)", productIds: ["5116877-7868588492"] },
  { title: "Desk and Chair Set for Classroom/Training Area", productIds: ["5116877-88634729090"] },
  { title: "Computer Table (V2)", productIds: ["5116877-21412275353"] },
  { title: "Desk Only for Classroom/Training Area", productIds: ["5116877-92939289690"] },
  { title: "Desk and Bench Set for Classroom/Training Area", productIds: ["5116877-63067243215"] },
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const selectedCategoryName = searchParams.get("category");
  const searchQuery = searchParams.get("search");
  
  const [quantityDialogOpen, setQuantityDialogOpen] = useState(false);
  const [selectedProductForCart, setSelectedProductForCart] = useState<Product | null>(null);
  const [quantityToAdd, setQuantityToAdd] = useState<number>(1);

  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedCategoryName, searchQuery]);

  const openAddToCartDialog = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation();
    setSelectedProductForCart(product);
    setQuantityToAdd(product.minQty || 1); 
    setQuantityDialogOpen(true);
  };

  const confirmAddToCart = () => {
    if (selectedProductForCart) {
      addToCart(selectedProductForCart, quantityToAdd);
      toast.success("Added to quote cart", { 
        description: `${quantityToAdd} x ${selectedProductForCart.name}` 
      });
      setQuantityDialogOpen(false);
      setSelectedProductForCart(null);
    }
  };

  const handleCardClick = (productId: string) => {
    navigate(`/products/${productId}`);
  };

  // --- FILTER LOGIC (Memoized for performance) ---
  const { displayProducts, pageTitle, pageDescription, showCategories } = useMemo(() => {
    let products: Product[] = [];
    let title = "Full Catalogue";
    let description = "Browse our comprehensive list of government-approved furniture.";
    let isCategoryView = true;

    if (selectedCategoryName) {
      isCategoryView = false;
      title = selectedCategoryName;
      description = "Official Selection for Government Contracts";
      
      // Strict + Loose Matching
      const categoryConfig = GEM_CATEGORIES.find(c => c.title === selectedCategoryName);
      
      if (categoryConfig) {
        // Match by ID from config
        products = allProducts.filter(p => categoryConfig.productIds.includes(p.id));
      } 
      
      // Fallback: If config match found 0 products, OR no config found, search text
      if (products.length === 0) {
        const lowerCat = selectedCategoryName.toLowerCase();
        products = allProducts.filter((p) => 
          p.specifications.some(s => s.value.toLowerCase().includes(lowerCat)) ||
          p.name.toLowerCase().includes(lowerCat) || 
          p.model.toLowerCase().includes(lowerCat)
        );
      }

    } else if (searchQuery) {
      isCategoryView = false;
      title = `Search Results`;
      description = `Showing results for "${searchQuery}"`;
      const query = searchQuery.toLowerCase();
      products = allProducts.filter((p) => 
        p.name.toLowerCase().includes(query) || 
        p.brand.toLowerCase().includes(query) || 
        p.model.toLowerCase().includes(query)
      );
    }

    return { 
      displayProducts: products, 
      pageTitle: title, 
      pageDescription: description, 
      showCategories: isCategoryView 
    };
  }, [selectedCategoryName, searchQuery]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      
      {/* --- HERO HEADER --- */}
      <div className="relative bg-slate-900 py-24 overflow-hidden">
        {/* Aesthetic Background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
           {!showCategories && (
              <Button 
                variant="ghost" 
                className="mb-8 pl-0 text-slate-300 hover:text-white hover:bg-white/10 group transition-all" 
                onClick={() => navigate("/products")}
              >
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Categories
              </Button>
            )}

          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
            >
              {pageTitle}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl"
            >
              {pageDescription}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 -mt-8 relative z-20">
        <AnimatePresence mode="wait">
          {!showCategories ? (
            // === PRODUCT LIST VIEW ===
            displayProducts.length > 0 ? (
              <motion.div 
                key="product-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              >
                {displayProducts.map((product, idx) => (
                  <motion.div 
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                  >
                    <Card
                      onClick={() => handleCardClick(product.id)}
                      className="group border-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col ring-1 ring-slate-100"
                    >
                      {/* Image Area */}
                      <div className="relative aspect-[4/3] bg-white p-6 flex items-center justify-center overflow-hidden border-b border-slate-50">
                          <div className="absolute inset-0 bg-gradient-to-tr from-slate-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <img 
                            src={product.images[0].main} 
                            alt={product.name} 
                            className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply" 
                          />
                          <Badge className={`absolute top-4 right-4 border-0 shadow-none font-semibold ${product.availability > 0 ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
                            {product.availability > 0 ? "In Stock" : "Out of Stock"}
                          </Badge>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 flex flex-col flex-grow">
                          <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{product.brand}</div>
                          <h3 className="text-lg font-bold text-slate-900 leading-snug line-clamp-2 mb-2 group-hover:text-blue-700 transition-colors">{product.name}</h3>
                          <p className="text-sm text-slate-400 font-medium mb-6 line-clamp-1">{product.model}</p>
                          
                          <div className="mt-auto pt-5 border-t border-slate-50 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Bulk Pricing</span>
                                <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                                  <ShieldCheck className="h-3.5 w-3.5 text-blue-600" /> On Request
                                </span>
                            </div>
                            <Button
                              size="sm"
                              disabled={product.availability === 0}
                              className="bg-slate-900 hover:bg-blue-600 text-white transition-all rounded-lg shadow-md hover:shadow-lg h-9 px-4 font-medium"
                              onClick={(e) => openAddToCartDialog(e, product)}
                            >
                              Add to Quote
                            </Button>
                          </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              // --- NO PRODUCTS FOUND STATE ---
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-200 shadow-sm"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-10 w-10 text-slate-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">No Products Found</h3>
                <p className="text-slate-500 max-w-md mx-auto mb-8">
                  We couldn't find any products matching your criteria in this category.
                </p>
                <Button 
                  size="lg" 
                  className="bg-slate-900 hover:bg-blue-600 text-white rounded-xl" 
                  onClick={() => navigate("/products")}
                >
                  View All Categories
                </Button>
              </motion.div>
            )
          ) : (
            // === CATEGORY LIST VIEW ===
            <motion.div 
              key="category-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {GEM_CATEGORIES.map((category, idx) => {
                const repProduct = allProducts.find(p => p.id === category.productIds[0]);
                const categoryImage = repProduct?.images[0].main || "";
                const count = allProducts.filter(p => category.productIds.includes(p.id)).length;

                return (
                  <motion.div 
                    key={category.title} 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Card
                      onClick={() => navigate(`/products?category=${encodeURIComponent(category.title)}`)}
                      className="group border-0 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer h-full ring-1 ring-slate-100"
                    >
                      <div className="flex h-full p-1.5">
                        {/* Image Container */}
                        <div className="w-1/3 bg-slate-50 rounded-xl p-4 flex items-center justify-center relative overflow-hidden group-hover:bg-blue-50/50 transition-colors">
                           {categoryImage ? (
                             <img 
                               src={categoryImage} 
                               alt="" 
                               className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" 
                             />
                           ) : (
                             <Package className="h-8 w-8 text-slate-300" />
                           )}
                        </div>
                        {/* Text Container */}
                        <div className="w-2/3 p-5 flex flex-col justify-center relative">
                          <h3 className="text-base font-bold text-slate-900 leading-snug mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 pr-4">
                            {category.title}
                          </h3>
                          <div className="flex items-center gap-3 mt-auto">
                             <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-slate-100 text-slate-500 rounded-md border border-slate-200 group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                               {count} Items
                             </span>
                             <div className="h-8 w-8 rounded-full bg-white border border-slate-200 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-sm absolute right-4 bottom-4">
                                <ArrowRight className="h-3.5 w-3.5 text-blue-600" />
                             </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- QUANTITY DIALOG --- */}
      <Dialog open={quantityDialogOpen} onOpenChange={setQuantityDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white rounded-3xl border-0 shadow-2xl p-0 overflow-hidden">
          <div className="bg-slate-50 p-6 border-b border-slate-100">
             <DialogTitle className="text-xl font-bold text-slate-900">Add to Quote Cart</DialogTitle>
             <p className="text-slate-500 text-sm mt-1">Specify quantity for bulk estimation.</p>
          </div>
          
          <div className="p-6">
            <div className="flex items-center gap-5 mb-8">
              <div className="h-20 w-20 bg-white border border-slate-100 rounded-xl p-2 flex-shrink-0 flex items-center justify-center shadow-sm">
                 {selectedProductForCart && (
                   <img src={selectedProductForCart.images[0].main} alt="" className="h-full w-full object-contain" />
                 )}
              </div>
              <div>
                 <p className="font-bold text-slate-900 line-clamp-2 leading-tight mb-1">{selectedProductForCart?.name}</p>
                 <Badge variant="outline" className="text-xs text-slate-500 border-slate-200 font-medium">
                   Min Order: {selectedProductForCart?.minQty} units
                 </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="quantity" className="text-base font-medium text-slate-700">
                  Quantity Required
                </Label>
                <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 overflow-hidden">
                   <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-12 w-12 rounded-none hover:bg-white hover:text-blue-600 transition-colors"
                      onClick={() => setQuantityToAdd(Math.max((selectedProductForCart?.minQty || 1), quantityToAdd - 1))}
                    >
                      -
                    </Button>
                    <Input
                      id="quantity"
                      type="number"
                      min={selectedProductForCart?.minQty || 1}
                      value={quantityToAdd}
                      onChange={(e) => setQuantityToAdd(Math.max((selectedProductForCart?.minQty || 1), parseInt(e.target.value) || 0))}
                      className="w-20 h-12 border-0 bg-transparent text-center font-bold focus-visible:ring-0 p-0 text-lg shadow-none rounded-none"
                    />
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-12 w-12 rounded-none hover:bg-white hover:text-blue-600 transition-colors"
                      onClick={() => setQuantityToAdd(quantityToAdd + 1)}
                    >
                      +
                    </Button>
                </div>
              </div>
            </div>
          </div>
          <DialogFooter className="p-6 bg-slate-50 border-t border-slate-100">
            <Button variant="outline" onClick={() => setQuantityDialogOpen(false)} className="border-slate-200 h-12 px-6 rounded-xl hover:bg-white hover:text-slate-900">Cancel</Button>
            <Button type="submit" onClick={confirmAddToCart} className="bg-blue-600 hover:bg-blue-700 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-blue-500/20">
              Confirm & Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Products;