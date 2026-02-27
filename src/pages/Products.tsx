import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Armchair, 
  Briefcase, 
  Bed, 
  Grid, 
  Sofa,
  ArrowLeft,
  FolderOpen,
  Filter,
  Monitor,
  Archive,
  Box
} from "lucide-react";
import { useProducts } from "@/services/product-service";
import { products as localProducts } from "@/data/products";
import { motion, AnimatePresence } from "framer-motion";
import { ProductCard } from "@/components/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Helmet } from "react-helmet-async";

const TOP_LEVEL_CATEGORIES = [
  { name: "Furniture", icon: Sofa, desc: "Premium infrastructure and seating solutions." }
];

const FURNITURE_CATEGORIES = [
  { name: "Domestic Furniture", icon: Bed, desc: "Beds, wardrobes, and home essentials." },
  { name: "Office Furniture", icon: Briefcase, desc: "Workstations, desks, and executive seating." },
  { name: "Plastic Molded Furniture", icon: Armchair, desc: "Durable multipurpose molded chairs." },
];

const getCategoryIcon = (name: string) => {
  const lower = name.toLowerCase();
  if (lower.includes("chair")) return Armchair;
  if (lower.includes("bed")) return Bed;
  if (lower.includes("table") || lower.includes("desk")) return Monitor;
  if (lower.includes("sofa")) return Sofa;
  if (lower.includes("cabinet") || lower.includes("almirah") || lower.includes("storage") || lower.includes("rack") || lower.includes("case") || lower.includes("shelf") || lower.includes("bookcase")) return Archive;
  if (lower.includes("work station") || lower.includes("modular")) return Grid;
  if (lower.includes("stool")) return Box;
  return FolderOpen;
};

const OFFICE_SUBCATEGORIES = Array.from(new Set(localProducts.map(p => p.category))).map(name => ({
  name,
  icon: getCategoryIcon(name),
  desc: `${name} solutions.`
}));

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search"); 
  
  const [activeCategory, setActiveCategory] = useState(categoryParam || "All");
  const [searchQuery, setSearchQuery] = useState(searchParam || "");

  const { data: products = [], isLoading, error } = useProducts({ 
    category: activeCategory, 
    search: searchQuery 
  });

  useEffect(() => {
    if (categoryParam) setActiveCategory(categoryParam);
    else setActiveCategory("All");

    if (searchParam) setSearchQuery(searchParam);
    else setSearchQuery("");
  }, [categoryParam, searchParam]);

  const handleCategoryClick = (catName: string) => {
    setActiveCategory(catName);
    setSearchQuery("");
    setSearchParams({ category: catName });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToCategories = () => {
    if (activeCategory === "Furniture") {
      setActiveCategory("All");
      setSearchParams({});
    } else if (FURNITURE_CATEGORIES.find(c => c.name === activeCategory)) {
      setActiveCategory("Furniture");
      setSearchParams({ category: "Furniture" });
    } else if (OFFICE_SUBCATEGORIES.find(c => c.name === activeCategory)) {
      setActiveCategory("Office Furniture");
      setSearchParams({ category: "Office Furniture" });
    } else {
      setActiveCategory("All");
      setSearchParams({});
    }
    setSearchQuery("");
  };

  const isProductView = !["All", "Furniture", "Office Furniture"].includes(activeCategory) || searchQuery.length > 0;
  const filteredProducts = products; 

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 selection:text-blue-100">
      <Helmet>
        <title>{searchQuery ? `Search results for "${searchQuery}"` : activeCategory === "All" ? "Our Collections" : activeCategory} | Seatech</title>
        <meta name="description" content={`Browse our ${activeCategory === "All" ? "entire collection" : activeCategory} of premium furniture and infrastructure solutions.`} />
      </Helmet>
      <Navbar />

      {/* --- HEADER --- */}
      <section className="relative pt-32 pb-16 bg-slate-950 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-slate-950">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950/80 to-slate-950 opacity-80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              {searchQuery ? (
                <span>Results for <span className="text-blue-600">"{searchQuery}"</span></span>
              ) : (
                activeCategory === "All" ? "Product Category" : activeCategory
              )}
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
              {!isProductView
                ? "Explore our comprehensive range of high-performance furniture and specialized infrastructure solutions." 
                : `Showing ${filteredProducts.length} results in ${activeCategory}.`}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        
        <AnimatePresence mode="wait">
          {/* --- VIEW 1: CATEGORY SELECTION (TOP OR FURNITURE) --- */}
          {!isProductView ? (
            <motion.div
              key="category-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <div className="flex items-center gap-3">
                  {(activeCategory === "Furniture" || activeCategory === "Office Furniture") && (
                    <Button 
                      variant="ghost" 
                      onClick={handleBackToCategories}
                      className="mr-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 h-11 px-4 font-bold flex-shrink-0"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" /> Back
                    </Button>
                  )}
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center border border-blue-100">
                    <Grid className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                       {activeCategory === "All" ? "Main Categories" : activeCategory === "Furniture" ? "Furniture Sub-Categories" : "Office Furniture Collections"}
                    </h2>
                    <p className="text-slate-400 text-sm font-medium">Select a category to explore</p>
                  </div>
                </div>

                <div className="relative w-full md:max-w-md group">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                  <Input 
                    placeholder="Quick search products..." 
                    className="pl-11 h-14 rounded-2xl border-slate-800 bg-slate-900 focus:bg-slate-950 focus:border-blue-500 text-white placeholder:text-slate-400 transition-all text-base shadow-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && setSearchParams({ search: searchQuery })}
                  />
                </div>
              </div>
              
              <div className={`grid ${activeCategory === "Office Furniture" ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"}`}>
                {(activeCategory === "All" ? TOP_LEVEL_CATEGORIES : activeCategory === "Furniture" ? FURNITURE_CATEGORIES : OFFICE_SUBCATEGORIES).map((cat, i) => {
                  const Icon = cat.icon;
                  const isSmall = activeCategory === "Office Furniture";
                  return (
                    <motion.button
                      key={cat.name}
                      onClick={() => handleCategoryClick(cat.name)}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: isSmall ? i * 0.02 : i * 0.1 }}
                      className={`flex flex-col items-center justify-center ${isSmall ? 'p-4 min-h-[160px] rounded-2xl' : 'p-10 min-h-[250px] rounded-[2rem]'} bg-slate-900 border border-slate-800 shadow-xl hover:shadow-2xl hover:border-blue-300 hover:-translate-y-2 transition-all duration-300 group text-center`}
                    >
                      <div className={`${isSmall ? 'w-12 h-12 rounded-xl mb-4' : 'w-20 h-20 rounded-3xl mb-6'} bg-slate-950 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300 text-slate-400 border border-white/10 shadow-sm`}>
                        <Icon className={`${isSmall ? 'h-6 w-6' : 'h-10 w-10'} transition-transform duration-300 group-hover:scale-110`} />
                      </div>
                      <h3 className={`${isSmall ? 'text-xs' : 'text-xl'} font-bold text-white ${isSmall ? 'mb-1' : 'mb-2'} group-hover:text-blue-400 transition-colors line-clamp-2`}>
                        {cat.name}
                      </h3>
                      {!isSmall && (
                        <p className="text-sm text-slate-400 font-medium">
                          {cat.desc}
                        </p>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            /* --- VIEW 2: PRODUCT LIST --- */
            <motion.div
              key="product-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Refined Navigation Bar */}
              <div className="sticky top-20 md:top-24 z-30 mb-12">
                <div className="bg-slate-900/90 backdrop-blur-2xl border border-slate-800 shadow-lg rounded-[2rem] p-3 flex flex-col md:flex-row gap-4 items-center">
                  
                  <div className="flex items-center gap-2 p-1 bg-slate-950 rounded-2xl w-full md:w-auto">
                    <Button 
                      variant="ghost" 
                      onClick={handleBackToCategories}
                      className="rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/50 h-11 px-4 font-bold flex-shrink-0"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" /> 
                      Back
                    </Button>
                    <div className="h-6 w-px bg-slate-800/50 mx-1 hidden md:block"></div>
                    <div className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-blue-700 bg-blue-50 rounded-xl whitespace-nowrap overflow-hidden text-ellipsis border border-blue-100">
                      {activeCategory !== "All" ? activeCategory : "Search Results"}
                    </div>
                  </div>

                  {/* Quick Category Switcher (Horizontal Scroll) */}
                  <div className="flex-1 flex items-center gap-3 overflow-x-auto no-scrollbar py-1 px-2 mask-linear-gradient-horizontal">
                     {(OFFICE_SUBCATEGORIES.some(c => c.name === activeCategory) ? OFFICE_SUBCATEGORIES : FURNITURE_CATEGORIES).map((cat) => (
                       <button
                         key={cat.name}
                         onClick={() => handleCategoryClick(cat.name)}
                         className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                           activeCategory === cat.name 
                             ? "bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-200" 
                             : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-950"
                         }`}
                       >
                         {cat.name}
                       </button>
                     ))}
                  </div>

                  <div className="relative w-full md:w-72 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                    <Input 
                      placeholder="Search products..." 
                      className="pl-11 h-11 rounded-xl border-slate-800 bg-slate-900 focus:bg-slate-950 focus:border-blue-500 text-white placeholder:text-slate-400 transition-all text-sm shadow-sm"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Loading & Error States */}
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="bg-slate-900 rounded-[1.5rem] overflow-hidden border border-slate-800 flex flex-col h-full shadow-sm">
                      <div className="aspect-[4/3] bg-slate-950 p-8 relative">
                         <Skeleton className="w-full h-full rounded-xl bg-slate-800/50" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow border-t border-white/10">
                         <Skeleton className="h-3 w-20 mb-2 bg-slate-800/50" />
                         <Skeleton className="h-6 w-full mb-4 bg-slate-800/50" />
                         <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/10">
                            <div className="space-y-1">
                               <Skeleton className="h-2 w-10 bg-slate-800/50" />
                               <Skeleton className="h-4 w-16 bg-slate-800/50" />
                            </div>
                            <Skeleton className="h-8 w-24 rounded-full bg-slate-800/50" />
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="text-center py-20 px-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-50 text-red-500 mb-6 border border-red-100">
                    <Filter className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Unable to load products</h3>
                  <p className="text-slate-400 max-w-md mx-auto mb-6">{(error as Error).message}</p>
                  <Button onClick={() => window.location.reload()} variant="outline" className="border-slate-800 text-slate-300 hover:bg-slate-950">Try Again</Button>
                </div>
              ) : (
                /* Product Grid */
                filteredProducts.length > 0 ? (
                  <motion.div 
                     layout
                     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-20"
                  >
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-32 bg-slate-900 rounded-[3rem] border border-dashed border-slate-900 mb-20 shadow-sm"
                  >
                    <div className="w-24 h-24 bg-slate-950 rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10">
                      <FolderOpen className="h-10 w-10 text-slate-400" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">No matches found</h3>
                    <p className="text-slate-400 mb-10 max-w-md mx-auto text-lg leading-relaxed">
                      We couldn't find anything for "{searchQuery}" in this category. Try broader terms or reset filters.
                    </p>
                    <Button 
                      onClick={handleBackToCategories} 
                      className="rounded-full px-10 h-14 bg-blue-600 text-white hover:bg-blue-700 font-bold text-lg shadow-md shadow-blue-200"
                    >
                      Clear All Filters
                    </Button>
                  </motion.div>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
};

export default Products;