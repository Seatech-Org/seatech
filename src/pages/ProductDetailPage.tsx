import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronRight, 
  Home,
  ExternalLink,
  ZoomIn,
  ShoppingBag,
  Loader2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products as localProducts } from "@/data/products";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import AuthDialog from "@/components/AuthDialog";
import { ProductCard } from "@/components/ProductCard";
import { Helmet } from "react-helmet-async";
import { useProducts } from "@/services/product-service";

// --- CONFIG: SPECS TO HIDE ---
const IGNORED_SPECS = [
  "Governing Standard", 
  "Types of Almirah", 
  "Test Report Details", 
  "Type of test report",
  "Conformity to IS 3312"
];

const groupSpecifications = (specs: any[]) => {
  return (specs || [])
    .filter(spec => !IGNORED_SPECS.includes(spec.name) && !IGNORED_SPECS.includes(spec.category))
    .reduce((acc, spec) => {
      (acc[spec.category] = acc[spec.category] || []).push(spec);
      return acc;
    }, {} as Record<string, any[]>);
};

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { data: allProducts, isLoading, error } = useProducts({});
  const product = allProducts?.find((p: any) => p.id === productId);
  
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product && product.images && product.images.length > 0) {
      setSelectedImage(product.images[0].main);
    }
  }, [product]);

  const handleAddToQuote = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      setIsAuthDialogOpen(true);
    } else {
      if (!product) return;
      addToCart(product as any, quantity);
      toast.success("Added to Project Cart", { description: `${quantity} x ${product.name}` });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col font-sans">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
           <Loader2 className="h-12 w-12 text-blue-500 animate-spin" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!product || error) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col font-sans">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <div className="bg-slate-900 p-12 rounded-[2.5rem] max-w-md w-full border border-slate-800">
            <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
            <p className="text-slate-400 mb-8">The product you are looking for might have been removed or is temporarily unavailable.</p>
            <Button asChild className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-full h-12 font-bold">
              <Link to="/products">Back to Category</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const specificationGroups = groupSpecifications(product.specifications);

  return (
    <div className="bg-slate-950 min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-100">
      <Helmet>
        <title>{`${product.name} | ${product.brand} | Seatech`}</title>
        <meta name="description" content={`Buy ${product.name} (${product.model}) from ${product.brand}. High-quality ${product.category} for institutional and corporate needs.`} />
        <meta property="og:title" content={`${product.name} | Seatech`} />
        <meta property="og:image" content={product.images?.[0]?.main} />
        <meta property="og:type" content="product" />
      </Helmet>
      
      <Navbar />

      <AuthDialog 
        isOpen={isAuthDialogOpen} 
        onOpenChange={setIsAuthDialogOpen} 
        message="You must be logged in to create a project inquiry."
      />
      
      <main className="pt-28">
        {/* Breadcrumb Header */}
        <div className="bg-slate-950/80 backdrop-blur-md border-b border-white/5 sticky top-20 z-30">
          <div className="container mx-auto max-w-7xl px-4 py-4">
            <div className="text-sm text-slate-400 flex items-center gap-2 font-medium overflow-hidden whitespace-nowrap">
              <Link to="/" className="hover:text-blue-400 transition-colors"><Home className="h-4 w-4" /></Link>
              <ChevronRight className="h-4 w-4 text-slate-600 flex-shrink-0" />
              <Link to="/products" className="hover:text-blue-400 transition-colors">Category</Link> 
              <ChevronRight className="h-4 w-4 text-slate-600 flex-shrink-0" />
              <span className="text-white truncate font-semibold">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-12">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* --- LEFT COLUMN: Images --- */}
            <div className="md:col-span-7 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="aspect-[4/3] bg-white rounded-[2.5rem] p-12 flex items-center justify-center relative overflow-hidden border border-white/10 group shadow-2xl"
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
              >
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-slate-900/0 transition-colors"></div>
                
                <AnimatePresence>
                  {isImageHovered && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-6 right-6 bg-slate-900/80 backdrop-blur text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 z-20"
                    >
                      <ZoomIn className="h-3 w-3" /> Double tap to zoom
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.img 
                    key={selectedImage}
                    src={selectedImage} 
                    alt={product.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: isImageHovered ? 1.05 : 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="w-full h-full object-contain mix-blend-multiply relative z-10"
                    loading="lazy"
                    decoding="async"
                  />
                </AnimatePresence>
              </motion.div>
             
              {/* THUMBNAILS */}
              <div className="flex gap-3 overflow-x-auto pb-2 px-1 scrollbar-hide justify-center md:justify-start">
                {product.images?.map((image: any, index: number) => {
                  const isSelected = selectedImage === image.main;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image.main)}
                      onMouseEnter={() => setSelectedImage(image.main)}
                      className={cn(
                        "relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden transition-all duration-300 bg-white p-2 cursor-pointer flex items-center justify-center border",
                        isSelected 
                          ? "border-blue-500 shadow-md ring-1 ring-blue-500/50" 
                          : "border-slate-700 hover:border-slate-500 opacity-70 hover:opacity-100"
                      )}
                    >
                      <img 
                        src={image.thumbnail} 
                        alt={`View ${index + 1}`}
                        className="w-full h-full object-contain mix-blend-multiply"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  );
                })}
              </div>
            </div>{/* closes md:col-span-7 */}

            {/* --- RIGHT COLUMN: Info & Actions --- */}
            <div className="md:col-span-5">
              <div className="bg-slate-900 p-6 rounded-[2rem] border border-white/10 shadow-2xl shadow-black/50">
                
                {/* GeM ID */}
                <div className="mb-5">
                  <a 
                    href={`https://mkp.gem.gov.in/search?q=${encodeURIComponent(product.id)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="bg-gradient-to-r from-orange-950/40 to-orange-900/40 border border-orange-500/30 rounded-xl p-3 flex items-center justify-between hover:border-orange-500/50 transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className="bg-white p-1.5 rounded-lg shadow-sm">
                          <img src="https://gem.gov.in/resources/images/gem-new-logo-v6.svg" alt="GeM" className="h-5 w-auto" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-orange-400 uppercase tracking-wider leading-none mb-1">GeM Portal</p>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-white text-base">{product.id}</span>
                            <ExternalLink className="h-3.5 w-3.5 text-orange-400 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                      <div className="text-right hidden sm:block">
                        <span className="text-[10px] font-bold text-orange-300 bg-orange-500/10 px-2 py-1 rounded-md border border-orange-500/20 uppercase tracking-wide">
                          View Portal
                        </span>
                      </div>
                    </div>
                  </a>
                </div>

                {/* Name & Category */}
                <div className="mb-6">
                  <Badge variant="outline" className="border-blue-500/30 bg-blue-500/10 text-blue-300 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-2">
                    {product.category}
                  </Badge>
                  <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-1">
                    {product.name}
                  </h1>
                  <p className="text-slate-400 font-medium text-xs">Model: <span className="text-slate-200">{product.model}</span></p>
                </div>

                {/* Price & Actions */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800">
                    <span className="text-slate-400 text-sm font-medium">Price</span>
                    <div className="text-right">
                      <p className="text-xl font-bold text-blue-400">On Request</p>
                      <p className="text-[10px] text-slate-400 font-medium">Add to quote for pricing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex items-center h-14 rounded-2xl bg-slate-950 border border-slate-800 px-2">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-xl hover:bg-slate-800 text-white transition-colors"
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        className="w-12 bg-transparent text-center text-white font-bold focus:outline-none"
                      />
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-xl hover:bg-slate-800 text-white transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <Button 
                      onClick={handleAddToQuote}
                      size="lg" 
                      className="flex-1 h-14 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-900/30 gap-2"
                    >
                      <ShoppingBag className="h-5 w-5" /> Add to Quote
                    </Button>
                  </div>
                </div>

                {/* Availability only */}
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Availability</p>
                  <p className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    In Stock
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- SPECIFICATIONS SECTION --- */}
          <section className="py-24">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-tight">Technical Specifications</h2>
              <p className="text-slate-400 max-w-xl">Detailed engineering parameters and material compositions for compliance verification.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {(Object.entries(specificationGroups) as [string, any[]][]).map(([category, specs]: [string, any[]], idx: number) => (
                <motion.div 
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-slate-900 rounded-[2rem] border border-white/5 overflow-hidden shadow-xl"
                >
                  <div className="bg-slate-800/50 px-8 py-5 border-b border-white/5">
                    <h3 className="font-bold text-blue-400 uppercase tracking-widest text-xs">{category}</h3>
                  </div>
                  <div className="divide-y divide-white/5">
                    {specs.map((spec: any, sIdx: number) => (
                      <div key={sIdx} className="grid grid-cols-2 px-8 py-4 hover:bg-white/[0.02] transition-colors">
                        <span className="text-slate-400 text-sm font-medium">{spec.name}</span>
                        <span className="text-slate-200 text-sm font-bold text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>{/* closes container */}

        {/* --- RELATED PRODUCTS --- */}
        <section className="bg-slate-900/30 border-t border-white/5 py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">Similar Solutions</h2>
              <p className="text-slate-400">Explore other products in the {product.category} category.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {localProducts
                .filter((p: any) => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map((p: any) => (
                  <ProductCard key={p.id} product={p} />
                ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;