import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { 
  Star, 
  ShieldCheck, 
  Truck, 
  Package, 
  ChevronRight, 
  Home, 
  FileText,
  Info
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, ProductSpecification } from "@/data/products";
import { cn } from "@/lib/utils";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { motion } from "framer-motion";

const groupSpecifications = (specs: ProductSpecification[]) => {
  return specs.reduce((acc, spec) => {
    (acc[spec.category] = acc[spec.category] || []).push(spec);
    return acc;
  }, {} as Record<string, ProductSpecification[]>);
};

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);
  const [selectedImage, setSelectedImage] = useState(product?.images[0]?.main);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]?.main);
      setQuantity(product.minQty || 1);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-md w-full">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Package className="h-8 w-8 text-slate-400" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Product Not Found</h1>
            <p className="text-slate-500 mb-8">
              The product you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Button asChild className="w-full bg-slate-900 hover:bg-blue-600 text-white rounded-xl h-12">
              <Link to="/products">Back to Catalogue</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  const specificationGroups = groupSpecifications(product.specifications);

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-blue-100">
      <Navbar />
      
      {/* Breadcrumb Header */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="container mx-auto max-w-7xl px-4 py-4">
            <div className="text-sm text-slate-500 flex items-center gap-2 font-medium overflow-hidden whitespace-nowrap">
              <Link to="/" className="hover:text-blue-600 transition-colors"><Home className="h-4 w-4" /></Link>
              <ChevronRight className="h-4 w-4 text-slate-300 flex-shrink-0" />
              <Link to="/products" className="hover:text-blue-600 transition-colors">Catalogue</Link> 
              <ChevronRight className="h-4 w-4 text-slate-300 flex-shrink-0" />
              <span className="text-slate-900 truncate">{product.name}</span>
            </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid md:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* --- LEFT COLUMN: Image Gallery (Spans 7 cols) --- */}
          <div className="md:col-span-7 flex flex-col gap-6">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className="relative w-full aspect-[4/3] bg-white rounded-3xl border border-slate-200 p-8 flex items-center justify-center overflow-hidden shadow-sm group"
             >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-50 to-white opacity-50"></div>
                <img 
                  src={selectedImage} 
                  alt={product.name}
                  className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105"
                />
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="flex gap-4 overflow-x-auto pb-4 px-1 scrollbar-hide"
             >
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image.main)}
                  onMouseEnter={() => setSelectedImage(image.main)}
                  className={cn(
                    "relative w-24 h-24 flex-shrink-0 rounded-2xl border-2 overflow-hidden transition-all bg-white p-2 cursor-pointer",
                    selectedImage === image.main 
                        ? "border-blue-600 shadow-lg ring-2 ring-blue-50 -translate-y-1" 
                        : "border-slate-200 hover:border-slate-400 hover:shadow-md"
                  )}
                >
                  <img src={image.thumbnail} alt="" className="w-full h-full object-contain" />
                </button>
              ))}
            </motion.div>

            {/* Seller Info Card (Moved here for better balance on Desktop) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hidden md:block"
            >
               <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                 <ShieldCheck className="h-4 w-4" /> Verified Seller Information
               </h3>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-lg">
                      {product.seller.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">{product.seller.name}</p>
                      {product.seller.verified && (
                        <div className="flex items-center gap-1.5 mt-1">
                           <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-100 font-medium hover:bg-emerald-100">
                             OEM Verified
                           </Badge>
                           <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-100 font-medium hover:bg-blue-100">
                             GeM Authorized
                           </Badge>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end text-amber-500 mb-1">
                       <Star className="h-5 w-5 fill-current" />
                       <span className="text-xl font-bold text-slate-900">{product.seller.rating}</span>
                    </div>
                    <span className="text-xs text-slate-400">Seller Rating</span>
                  </div>
               </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: Product Info (Spans 5 cols) --- */}
          <div className="md:col-span-5 flex flex-col relative">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 sticky top-36"
            >
                {/* Header Info */}
                <div className="mb-8 border-b border-slate-100 pb-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge variant="outline" className="border-blue-200 bg-blue-50 text-blue-700 px-3 py-1 text-xs rounded-full font-bold uppercase tracking-wide">
                        {product.brand}
                      </Badge>
                      <span className="text-xs text-slate-400 font-mono bg-slate-50 px-2 py-1 rounded">ID: {product.id}</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-2">{product.name}</h1>
                  <p className="text-slate-500 font-medium">{product.model}</p>
                </div>

                {/* Price / Quote Section */}
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-10 -mt-10"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                       <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Pricing</p>
                       <Badge className="bg-slate-900 hover:bg-slate-800 text-white border-0">Bulk Order</Badge>
                    </div>
                    
                    <div className="flex items-baseline gap-2 mb-4">
                      <span className="text-3xl font-bold text-blue-700">Quote on Request</span>
                    </div>

                    <div className="flex flex-col gap-2 text-sm text-slate-600">
                       <div className="flex items-center gap-2">
                         <ShieldCheck className="h-4 w-4 text-emerald-600" />
                         <span>Official Government Pricing</span>
                       </div>
                       <div className="flex items-center gap-2">
                         <FileText className="h-4 w-4 text-blue-600" />
                         <span>GST Compliant Invoicing</span>
                       </div>
                    </div>
                  </div>
                </div>

                {/* Key Specs Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center hover:border-blue-100 transition-colors">
                      <Package className="h-6 w-6 text-slate-400 mb-2" />
                      <span className="text-xs text-slate-400 font-bold uppercase">Min Order</span>
                      <span className="text-lg font-bold text-slate-900">{product.minQty} Units</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-slate-100 flex flex-col items-center text-center hover:border-blue-100 transition-colors">
                      <Truck className="h-6 w-6 text-slate-400 mb-2" />
                      <span className="text-xs text-slate-400 font-bold uppercase">Origin</span>
                      <span className="text-lg font-bold text-slate-900">{product.countryOfOrigin}</span>
                  </div>
                </div>

                {/* Add to Cart Action */}
                <div className="space-y-4">
                   <div className="flex items-center justify-between">
                      <label className="text-sm font-medium text-slate-700">Quantity Required</label>
                      <span className="text-xs text-slate-400">Minimum: {product.minQty}</span>
                   </div>
                   
                   <div className="flex gap-3">
                      <div className="relative w-32">
                        <Input 
                          type="number" 
                          min={product.minQty} 
                          value={quantity} 
                          onChange={(e) => setQuantity(Math.max(product.minQty || 1, parseInt(e.target.value) || 0))}
                          className="h-14 text-lg font-bold text-center border-slate-200 bg-slate-50 focus:bg-white rounded-xl"
                        />
                      </div>
                      <Button 
                        size="lg" 
                        className="flex-grow h-14 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-200 transition-all hover:-translate-y-1 active:scale-[0.98]"
                        onClick={() => {
                          addToCart(product, quantity);
                          toast.success("Added to quote cart", { description: `${quantity} x ${product.name}` });
                        }}
                      >
                        Add to Quote
                      </Button>
                   </div>
                   <p className="text-center text-xs text-slate-400">
                     Adding to quote does not commit you to purchase.
                   </p>
                </div>
            </motion.div>
          </div>
        </div>
        
        {/* --- Specifications Section --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="h-10 w-2 bg-blue-600 rounded-full"></div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Technical Specifications</h2>
              <p className="text-slate-500">Detailed breakdown of product features and compliance.</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(specificationGroups).map(([category, specs], idx) => (
              <div key={category} className="break-inside-avoid">
                <Card className="border-0 shadow-sm overflow-hidden h-full bg-white rounded-2xl ring-1 ring-slate-200/60">
                   <div className="bg-slate-50/50 p-4 border-b border-slate-100 flex items-center gap-3">
                      <Info className="h-5 w-5 text-blue-500" />
                      <h3 className="font-bold text-slate-800">{category}</h3>
                   </div>
                   <div className="p-0">
                    <Table>
                      <TableBody>
                        {specs.map((spec, specIdx) => (
                          <TableRow key={spec.name} className="hover:bg-slate-50 border-b border-slate-50 last:border-0">
                            <TableCell className="font-medium text-slate-500 w-[40%] py-4 pl-6 align-top border-r border-slate-50 bg-slate-50/30">
                              {spec.name}
                            </TableCell>
                            <TableCell className="text-slate-900 font-medium py-4 pl-6 align-top">
                              {spec.value}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                   </div>
                </Card>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};
export default ProductDetailPage;