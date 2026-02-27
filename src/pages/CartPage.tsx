import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, ArrowRight, ShieldCheck, Trash2, Plus, Minus, Receipt, Info } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, itemCount, isLoading } = useCart();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans selection:bg-blue-500/30 selection:text-blue-100">
      <Helmet>
        <title>Project Inquiry Cart | Seatech</title>
        <meta name="description" content="Review your selected infrastructure products and request a professional L1 quotation for your institution." />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-12 pt-32 pb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between mb-12"
          >
             <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
                   <Receipt className="h-7 w-7" />
                </div>
                <div>
                   <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Project Cart</h1>
                   <p className="text-slate-500 text-sm font-medium">Review your selection for institutional L1 quotation</p>
                </div>
             </div>
             {itemCount > 0 && (
               <Badge className="bg-slate-900 border-slate-800 text-slate-400 py-2 px-4 rounded-xl">
                 {itemCount} Items
               </Badge>
             )}
          </motion.div>
          
          {itemCount === 0 && !isLoading ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-32 bg-slate-900/50 rounded-[3rem] border border-dashed border-slate-800 shadow-2xl"
            >
              <div className="w-24 h-24 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner ring-1 ring-white/5">
                 <ShoppingBag className="h-10 w-10 text-slate-600" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Your project cart is empty</h2>
              <p className="text-slate-400 mb-10 max-w-md mx-auto text-lg leading-relaxed">Add items from our category to request a professional, factory-direct L1 quotation.</p>
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full h-14 px-10 shadow-xl shadow-blue-900/20">
                <Link to="/products">Browse Category</Link>
              </Button>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-12 gap-12">
              {/* --- Cart Items (Left) --- */}
              <div className="lg:col-span-8 space-y-6">
                <AnimatePresence>
                  {cartItems.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Card className="border-slate-800/50 shadow-xl overflow-hidden bg-slate-900/50 backdrop-blur-xl group hover:border-blue-500/30 transition-all duration-500 rounded-[2rem]">
                        <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-8">
                          <div className="w-32 h-32 bg-white rounded-3xl p-4 flex-shrink-0 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-500">
                             <Link to={`/products/${item.id}`}>
                              <img
                                src={item.images?.[0]?.thumbnail || item.images?.[0]?.main}
                                alt={item.name}
                                className="w-full h-full object-contain mix-blend-multiply"
                              />
                            </Link>
                          </div>
                          
                          <div className="flex-grow text-center md:text-left">
                            <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-2">{item.category}</div>
                            <Link to={`/products/${item.id}`} className="font-bold text-white hover:text-blue-400 text-xl leading-tight block mb-2 transition-colors">
                              {item.name}
                            </Link>
                            <p className="text-sm text-slate-500 font-mono mb-4">{item.id}</p>
                            
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wide">
                              <ShieldCheck className="h-3 w-3" /> L1 Price Guaranteed
                            </div>
                          </div>

                          <div className="flex flex-col items-center md:items-end gap-6">
                            <div className="flex items-center gap-3 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
                              <button 
                                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                className="w-10 h-10 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all flex items-center justify-center"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="w-12 text-center text-white font-bold text-lg">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-10 h-10 rounded-xl hover:bg-slate-800 text-slate-400 hover:text-white transition-all flex items-center justify-center"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={() => removeFromCart(item.id)} 
                              className="text-slate-500 hover:text-red-400 hover:bg-red-950/20 rounded-full h-10 px-4 transition-all"
                            >
                              <Trash2 className="w-4 h-4 mr-2" />
                              <span className="text-xs font-bold uppercase tracking-wider">Remove</span>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* --- Summary (Right) --- */}
              <div className="lg:col-span-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="sticky top-32"
                >
                  <Card className="border-slate-800 shadow-2xl bg-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden">
                    <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600 w-full"></div>
                    <CardContent className="p-8 md:p-10 space-y-8">
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Quote Summary</h2>
                        <p className="text-sm text-slate-500 font-medium">{itemCount} distinct solutions selected</p>
                      </div>
                      
                      <div className="bg-blue-600/10 rounded-[1.5rem] p-6 border border-blue-500/20">
                        <div className="flex items-center gap-3 text-blue-400 mb-3">
                           <Info className="h-5 w-5" />
                           <span className="font-bold text-xs uppercase tracking-widest">Important Note</span>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed font-light">
                          Submitting this selection will generate a technical requirement sheet for our sales team. You will receive a formal, GST-compliant L1 quotation within 24 hours.
                        </p>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-white/5">
                         <div className="flex justify-between items-center">
                            <span className="text-slate-400 font-medium">Total Units</span>
                            <span className="text-2xl font-bold text-white">{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
                         </div>
                      </div>

                      <Button 
                        size="lg" 
                        className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold h-16 text-lg shadow-xl shadow-blue-900/30 rounded-2xl group transition-all"
                        onClick={() => navigate('/dealer-application')}
                      >
                        Request Quote 
                        <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      
                      <p className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                        GeM Compliance Ready
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
