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
import { SEO } from "@/components/SEO";

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
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <SEO
        title={searchQuery ? `Search: "${searchQuery}" | Seatech Products` : activeCategory === "All" ? "Furniture Catalog | Seatech" : `${activeCategory} | Seatech`}
        description={searchQuery ? `Search results for "${searchQuery}" in Seatech's furniture catalog — hospital, office, auditorium, school and institutional furniture.` : `Browse Seatech's ${activeCategory === "All" ? "complete" : activeCategory} furniture catalog. Premium B2B institutional, hospital, educational and office furniture at wholesale prices.`}
        keywords="Seatech furniture catalog, hospital furniture India, office furniture bulk, auditorium chairs, school furniture wholesale, institutional furniture GeM"
      />
      <Navbar />

      {/* --- HEADER --- */}
      <section className="relative pt-32 pb-16 bg-background overflow-hidden border-b border-white/[0.08]">
        <div className="absolute inset-0 bg-background">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background/80 to-background opacity-80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight drop-shadow-md">
              {searchQuery ? (
                <span>Results for <span className="text-primary">"{searchQuery}"</span></span>
              ) : (
                activeCategory === "All" ? "Product Category" : activeCategory
              )}
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              {!isProductView
                ? "Explore our comprehensive range of high-performance furniture and specialized infrastructure solutions."
                : `Showing ${filteredProducts.length} results in ${activeCategory}.`}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 md:py-16">

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
                      className="mr-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary h-11 px-4 font-bold flex-shrink-0"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" /> Back
                    </Button>
                  )}
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Grid className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground tracking-tight">
                      {activeCategory === "All" ? "Main Categories" : activeCategory === "Furniture" ? "Furniture Sub-Categories" : "Office Furniture Collections"}
                    </h2>
                    <p className="text-muted-foreground text-sm font-medium">Select a category to explore</p>
                  </div>
                </div>

                <div className="relative w-full md:max-w-md group mt-4 md:mt-0">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                  <Input
                    placeholder="Quick search products..."
                    className="pl-11 h-14 rounded-2xl border-white/[0.08] bg-secondary focus:bg-background focus:border-primary text-foreground placeholder:text-muted-foreground transition-all text-base shadow-lg"
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
                      initial={{ opacity: 0, scale: 0.95, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: isSmall ? i * 0.05 : i * 0.1, duration: 0.5, type: "spring" }}
                      className={`flex flex-col items-center justify-center ${isSmall ? 'p-4 min-h-[160px] rounded-2xl' : 'p-10 min-h-[250px] rounded-[2rem]'} bg-card border border-white/[0.08] shadow-elevation hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 group text-center`}
                    >
                      <div className={`${isSmall ? 'w-12 h-12 rounded-xl mb-4' : 'w-20 h-20 rounded-3xl mb-6'} bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground group-hover:rotate-6 transition-all duration-300 text-muted-foreground border border-white/[0.08] shadow-sm`}>
                        <Icon className={`${isSmall ? 'h-6 w-6' : 'h-10 w-10'} transition-transform duration-300 group-hover:scale-110`} />
                      </div>
                      <h3 className={`${isSmall ? 'text-xs' : 'text-xl'} font-bold text-foreground ${isSmall ? 'mb-1' : 'mb-2'} group-hover:text-primary transition-colors line-clamp-2`}>
                        {cat.name}
                      </h3>
                      {!isSmall && (
                        <p className="text-sm text-muted-foreground font-medium">
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
              <div className="sticky top-20 md:top-24 z-30 mb-8 md:mb-12">
                <div className="bg-secondary/90 backdrop-blur-2xl border border-white/[0.08] shadow-elevation rounded-[2rem] p-3 flex flex-col md:flex-row gap-4 items-center">

                  <div className="flex items-center gap-2 p-1 bg-background rounded-2xl w-full md:w-auto">
                    <Button
                      variant="ghost"
                      onClick={handleBackToCategories}
                      className="rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary h-11 px-4 font-bold flex-shrink-0"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Back
                    </Button>
                    <div className="h-6 w-px bg-white/[0.08] mx-1 hidden md:block"></div>
                    <div className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-primary bg-primary/10 rounded-xl whitespace-nowrap overflow-hidden text-ellipsis border border-primary/20">
                      {activeCategory !== "All" ? activeCategory : "Search Results"}
                    </div>
                  </div>

                  {/* Quick Category Switcher (Horizontal Scroll) */}
                  <div className="flex-1 flex items-center gap-3 overflow-x-auto no-scrollbar py-1 px-2 mask-linear-gradient-horizontal">
                    {(OFFICE_SUBCATEGORIES.some(c => c.name === activeCategory) ? OFFICE_SUBCATEGORIES : FURNITURE_CATEGORIES).map((cat) => (
                      <button
                        key={cat.name}
                        onClick={() => handleCategoryClick(cat.name)}
                        className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-bold transition-all border ${activeCategory === cat.name
                          ? "bg-primary border-primary text-primary-foreground shadow-lg shadow-primary/20"
                          : "bg-secondary border-white/[0.08] text-muted-foreground hover:text-foreground hover:bg-background"
                          }`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>

                  <div className="relative w-full md:w-72 group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                    <Input
                      placeholder="Search products..."
                      className="pl-11 h-11 rounded-xl border-white/[0.08] bg-secondary focus:bg-background focus:border-primary text-foreground placeholder:text-muted-foreground transition-all text-sm shadow-sm"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Loading & Error States */}
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="bg-card rounded-[1.5rem] overflow-hidden border border-white/[0.08] flex flex-col h-full shadow-elevation">
                      <div className="aspect-[4/3] bg-background p-8 relative">
                        <Skeleton className="w-full h-full rounded-xl bg-secondary" />
                      </div>
                      <div className="p-6 flex flex-col flex-grow border-t border-white/[0.08]">
                        <Skeleton className="h-3 w-20 mb-2 bg-secondary" />
                        <Skeleton className="h-6 w-full mb-4 bg-secondary" />
                        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/[0.08]">
                          <div className="space-y-1">
                            <Skeleton className="h-2 w-10 bg-secondary" />
                            <Skeleton className="h-4 w-16 bg-secondary" />
                          </div>
                          <Skeleton className="h-8 w-24 rounded-full bg-secondary" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : error ? (
                <div className="text-center py-20 px-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 text-destructive mb-6 border border-destructive/20">
                    <Filter className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Unable to load products</h3>
                  <p className="text-muted-foreground max-w-md mx-auto mb-6">{(error as Error).message}</p>
                  <Button onClick={() => window.location.reload()} variant="outline" className="border-white/[0.08] text-foreground hover:bg-secondary">Try Again</Button>
                </div>
              ) : (
                /* Product Grid */
                filteredProducts.length > 0 ? (
                  <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pb-20"
                  >
                    {filteredProducts.map((product, i) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.5 }}
                      >
                        <ProductCard product={product} />
                      </motion.div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-24 md:py-32 bg-secondary rounded-[3rem] border border-dashed border-white/[0.08] mb-20 shadow-elevation mx-4 md:mx-0"
                  >
                    <div className="w-24 h-24 bg-background rounded-full flex items-center justify-center mx-auto mb-6 border border-white/[0.08]">
                      <FolderOpen className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h3 className="text-3xl font-bold text-foreground mb-3">
                      {searchQuery ? "No matches found" : "Products Coming Soon"}
                    </h3>
                    <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg leading-relaxed px-4">
                      {searchQuery
                        ? `We couldn't find anything for "${searchQuery}" in this category. Try broader terms or reset filters.`
                        : `We are currently updating our catalog for the ${activeCategory} category. Please check back soon or explore our other collections.`}
                    </p>
                    <Button
                      onClick={handleBackToCategories}
                      className="rounded-full px-10 h-14 bg-primary text-primary-foreground hover:-translate-y-1 font-bold text-lg shadow-elevation transition-all"
                    >
                      {searchQuery ? "Clear All Filters" : "Explore Other Categories"}
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