import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronRight,
  Home,
  ExternalLink,
  ZoomIn,
  ShoppingBag
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
import logoSrc from "../assets/logo.png";

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
      <div className="min-h-screen bg-background flex flex-col font-sans">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full animate-pulse scale-150"></div>
            <img src={logoSrc} alt="Loading..." className="h-14 w-auto relative z-10 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product || error) {
    return (
      <div className="min-h-screen bg-background flex flex-col font-sans">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <div className="bg-secondary p-12 rounded-[2.5rem] max-w-md w-full border border-white/[0.08]">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you are looking for might have been removed or is temporarily unavailable.</p>
            <Button asChild className="w-full bg-primary hover:-translate-y-1 text-primary-foreground rounded-full h-12 font-bold transition-all shadow-elevation">
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
    <div className="bg-background min-h-screen font-sans selection:bg-primary/30 selection:text-primary-foreground">
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
        <div className="bg-background/80 backdrop-blur-md border-b border-white/[0.08] sticky top-20 z-30">
          <div className="container mx-auto max-w-7xl px-4 py-4">
            <div className="text-sm text-muted-foreground flex items-center gap-2 font-medium overflow-hidden whitespace-nowrap">
              <Link to="/" className="hover:text-primary transition-colors"><Home className="h-4 w-4" /></Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground/50 flex-shrink-0" />
              <Link to="/products" className="hover:text-primary transition-colors">Category</Link>
              <ChevronRight className="h-4 w-4 text-muted-foreground/50 flex-shrink-0" />
              <span className="text-foreground truncate font-semibold">{product.name}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 py-8 md:py-12">
          <div className="grid md:grid-cols-12 gap-8 lg:gap-16 items-start">

            {/* --- LEFT COLUMN: Images --- */}
            <div className="md:col-span-7 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="aspect-[4/3] bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex items-center justify-center relative overflow-hidden border border-white/[0.08] group shadow-elevation"
                onMouseEnter={() => setIsImageHovered(true)}
                onMouseLeave={() => setIsImageHovered(false)}
              >
                <div className="absolute inset-0 bg-secondary/5 group-hover:bg-secondary/0 transition-colors"></div>

                <AnimatePresence>
                  {isImageHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-4 right-4 md:top-6 md:right-6 bg-secondary/80 backdrop-blur text-foreground px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 z-20"
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
                    className="w-full h-full object-contain relative z-10"
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
                        "relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-[10px] overflow-hidden transition-all duration-300 bg-white p-2 cursor-pointer flex items-center justify-center border border-white/[0.08]",
                        isSelected
                          ? "border-primary shadow-md ring-1 ring-primary/50"
                          : "border-secondary hover:border-muted-foreground opacity-70 hover:opacity-100"
                      )}
                    >
                      <img
                        src={image.thumbnail}
                        alt={`View ${index + 1}`}
                        className="w-full h-full object-contain"
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
              <div className="bg-card p-6 md:p-8 rounded-[2rem] border border-white/[0.08] shadow-elevation">

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
                            <span className="font-mono font-bold text-foreground text-sm md:text-base">{product.id}</span>
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
                <div className="mb-6 md:mb-8 mt-2">
                  <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider mb-4 inline-block">
                    {product.category}
                  </Badge>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight mb-2 tracking-tight">
                    {product.name}
                  </h1>
                  <p className="text-muted-foreground font-medium text-sm">Model: <span className="text-foreground">{product.model}</span></p>
                </div>

                {/* Price & Actions */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-secondary border border-white/[0.08]">
                    <span className="text-muted-foreground text-sm font-medium">Price</span>
                    <div className="text-right">
                      <p className="text-xl font-bold text-primary">On Request</p>
                      <p className="text-[10px] text-muted-foreground font-medium">Add to quote for pricing</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3">
                    <div className="flex items-center h-14 rounded-2xl bg-secondary border border-white/[0.08] px-2 w-full sm:w-auto justify-between sm:justify-center">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-xl hover:bg-background text-foreground transition-colors flex items-center justify-center font-bold text-xl"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                        className="w-12 bg-transparent text-center text-foreground font-bold focus:outline-none"
                      />
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-xl hover:bg-background text-foreground transition-colors flex items-center justify-center font-bold text-xl"
                      >
                        +
                      </button>
                    </div>
                    <Button
                      onClick={handleAddToQuote}
                      size="lg"
                      className="w-full sm:flex-1 h-14 bg-primary hover:-translate-y-1 text-primary-foreground font-bold rounded-2xl shadow-elevation gap-2 transition-all"
                    >
                      <ShoppingBag className="h-5 w-5" /> Add to Quote
                    </Button>
                  </div>
                </div>

                {/* Availability only */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Availability</p>
                  <p className="text-sm font-bold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse ring-2 ring-emerald-500/20"></span>
                    In Stock
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- SPECIFICATIONS SECTION --- */}
          <section className="py-16 md:py-24 border-t border-white/[0.08] mt-8">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 tracking-tight">Technical Specifications</h2>
              <p className="text-muted-foreground max-w-xl mx-auto md:mx-0">Detailed engineering parameters and material compositions for compliance verification.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {(Object.entries(specificationGroups) as [string, any[]][]).map(([category, specs]: [string, any[]], idx: number) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card rounded-[1.5rem] md:rounded-[2rem] border border-white/[0.08] overflow-hidden shadow-elevation"
                >
                  <div className="bg-secondary px-6 py-4 md:px-8 md:py-5 border-b border-white/[0.08]">
                    <h3 className="font-bold text-primary uppercase tracking-widest text-xs">{category}</h3>
                  </div>
                  <div className="divide-y divide-white/[0.08]">
                    {specs.map((spec: any, sIdx: number) => (
                      <div key={sIdx} className="grid grid-cols-2 px-6 py-3 md:px-8 md:py-4 hover:bg-secondary/50 transition-colors">
                        <span className="text-muted-foreground text-sm font-medium pr-4">{spec.name}</span>
                        <span className="text-foreground text-sm font-bold text-right pl-4">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>{/* closes container */}

        {/* --- RELATED PRODUCTS --- */}
        <section className="bg-secondary/30 border-t border-white/[0.08] py-16 md:py-24">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-bold text-foreground mb-4 tracking-tight">Similar Solutions</h2>
              <p className="text-muted-foreground">Explore other products in the {product.category} category.</p>
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