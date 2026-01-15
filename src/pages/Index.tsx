import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  Building2, 
  FileText,
  Landmark,
  Users,
  Box,
  TrendingUp,
  Award
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { motion, Variants } from "framer-motion";

const Index = () => {
  // Get 4 featured products for the showcase
  const featuredProducts = products.filter(p => p.price > 2000).slice(0, 4);

  const stats = [
    { label: "Active Products", value: "500+", icon: Box },
    { label: "Partner Dealers", value: "100+", icon: Users },
    { label: "Departments", value: "50+", icon: Landmark },
    { label: "Cities Served", value: "25+", icon: Truck },
  ];

  // Define Truck icon since it was missing in imports in previous version if copy-pasted wrong
  // (Assuming Truck is imported above, but just in case, ensuring imports match usage)
  function Truck(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11" />
        <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    )
  }

  const categories = [
    { title: "Office Chairs", count: "12 Models", link: "/products?category=Revolving Chair (V5)", icon: Users, color: "bg-blue-500" },
    { title: "Steel Almirahs", count: "5 Sizes", link: "/products?category=Steel Almirah / Cabinets conforming to IS 3312 (V4)", icon: ShieldCheck, color: "bg-emerald-500" },
    { title: "Executive Tables", count: "8 Designs", link: "/products?category=Executive Table (V3)", icon: Building2, color: "bg-indigo-500" },
    { title: "Classroom Sets", count: "Desks & Benches", link: "/products?category=Desk and Bench Set for Classroom/Training Area", icon: Landmark, color: "bg-amber-500" },
  ];

  // Animation variants with explicit typing to fix TS errors
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-900 overflow-x-hidden">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden py-20 md:py-32">
        
        {/* OPTIMIZED BACKGROUND: Static blobs instead of animated ones to fix lag */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-[1]"></div>
            
            {/* Static Blue Blob */}
            <div 
              className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] bg-indigo-600/30 rounded-full blur-[100px] z-0"
            />
            
            {/* Static Cyan Blob */}
            <div 
              className="absolute -bottom-[20%] -left-[10%] w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[80px] z-0"
            />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="outline" className="mb-8 text-indigo-200 border-indigo-500/30 bg-indigo-500/10 px-6 py-2 text-sm font-medium rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                <CheckCircle2 className="w-4 h-4 mr-2 text-indigo-400" />
                Trusted by 50+ Government Departments
              </Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight"
            >
              Procurement <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
                Reimagined.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
            >
              The premier e-marketplace for government furniture & office supplies. 
              <span className="text-white font-medium"> MII Compliant. ISO Certified. Gem Ready.</span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
            >
              <Link to="/products" className="w-full sm:w-auto group">
                <Button size="lg" className="w-full h-16 px-10 text-lg bg-white text-slate-900 hover:bg-indigo-50 border-0 rounded-2xl shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all hover:scale-105 font-bold">
                  Explore Catalogue
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/dealer-application" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-16 px-10 text-lg text-white border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 rounded-2xl backdrop-blur-md transition-all">
                  Partner With Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Simple Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 z-20"
        >
          <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center p-2">
            <div className="w-1 h-1 bg-slate-500 rounded-full animate-bounce"></div>
          </div>
        </motion.div>
      </section>

      {/* --- STATS BENTO GRID --- */}
      <section className="py-20 relative z-20 -mt-20 container mx-auto px-4">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeIn}
              className="bg-white/90 backdrop-blur-sm border border-white/40 p-8 rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl flex items-center justify-center mb-6 border border-indigo-100">
                <stat.icon className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-2">{stat.value}</h3>
              <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- CATEGORIES SHOWCASE --- */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-2 block">Our Collections</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Curated for Excellence</h2>
          </div>
          <Link to="/products">
             <Button variant="ghost" className="text-lg font-medium text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 px-6 py-6 rounded-xl">
               View Full Catalogue <ArrowRight className="ml-2 h-5 w-5" />
             </Button>
          </Link>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* REMOVED unused 'idx' variable here */}
          {categories.map((cat) => (
            <motion.div key={cat.title} variants={fadeIn}>
              <Link to={cat.link} className="group block h-full">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                  
                  {/* Static Hover Gradient Overlay (Performance Optimized) */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${cat.color}`}></div>
                  
                  <div className="flex justify-between items-start mb-12">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg ${cat.color} transition-transform duration-300 group-hover:scale-105`}>
                      <cat.icon className="h-7 w-7" />
                    </div>
                    <div className="bg-slate-50 px-3 py-1 rounded-full text-xs font-bold text-slate-500 border border-slate-200">
                      {cat.count}
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{cat.title}</h3>
                    <p className="text-slate-400 text-sm group-hover:text-slate-500 transition-colors flex items-center">
                      Explore Collection <ArrowRight className="ml-2 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- WHY CHOOSE US (Dark Section) --- */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
         
         {/* Static Background Glows */}
         <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="bg-blue-600 text-white hover:bg-blue-700 mb-6 px-4 py-1 text-sm rounded-full">Government Standard</Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Built for the scale of <br />
                <span className="text-blue-400">Public Infrastructure.</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-xl">
                We understand the complexity of government contracts. From Gem compliance to bulk logistics, our infrastructure is designed to handle national-scale requirements effortlessly.
              </p>
              
              <div className="grid gap-6">
                {[
                  { title: "ISO 9001:2015 Certified", desc: "International standard quality management systems." },
                  { title: "GST Compliant Invoicing", desc: "Automated B2B billing for seamless accounting." },
                  { title: "Pan-India Logistics", desc: "Delivery network covering 25+ major cities." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0 border border-blue-800">
                      <CheckCircle2 className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative">
               {/* Abstract Card Stack Visual */}
               <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[2.5rem] rotate-6 opacity-20 blur-sm transform translate-y-4"></div>
               <div className="bg-slate-800 border border-slate-700 p-8 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 p-10 opacity-5">
                    <ShieldCheck className="w-64 h-64 text-white" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600/50 backdrop-blur-md">
                        <TrendingUp className="h-8 w-8 text-emerald-400 mb-4" />
                        <div className="text-2xl font-bold text-white">98%</div>
                        <div className="text-xs text-slate-400">On-Time Delivery</div>
                     </div>
                     <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600/50 backdrop-blur-md mt-8">
                        <Award className="h-8 w-8 text-amber-400 mb-4" />
                        <div className="text-2xl font-bold text-white">Top Rated</div>
                        <div className="text-xs text-slate-400">OEM Seller</div>
                     </div>
                     <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600/50 backdrop-blur-md -mt-8">
                        <FileText className="h-8 w-8 text-blue-400 mb-4" />
                        <div className="text-2xl font-bold text-white">100%</div>
                        <div className="text-xs text-slate-400">Paperwork Compliance</div>
                     </div>
                     <div className="bg-slate-700/50 p-6 rounded-2xl border border-slate-600/50 backdrop-blur-md">
                        <Users className="h-8 w-8 text-purple-400 mb-4" />
                        <div className="text-2xl font-bold text-white">24/7</div>
                        <div className="text-xs text-slate-400">Dealer Support</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FEATURED INVENTORY --- */}
      <section className="py-24 bg-white container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <span className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-2 block">In Stock Now</span>
           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Premium Inventory</h2>
           <p className="text-slate-500 text-lg">High-demand items ready for immediate bulk dispatch.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className="group">
              <div className="bg-white rounded-3xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 border border-slate-100 flex flex-col h-full hover:-translate-y-1">
                <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden p-8 flex items-center justify-center">
                   <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300 z-0"></div>
                   <img 
                    src={product.images[0].main} 
                    alt={product.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 z-10 mix-blend-multiply"
                  />
                  {product.discount > 0 && (
                    <Badge className="absolute top-4 left-4 bg-white text-slate-900 shadow-sm border-0 font-bold z-20">
                      Save {product.discount}%
                    </Badge>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow relative">
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">{product.brand}</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                     <div>
                       <span className="text-xs text-slate-400 block mb-0.5">Starting at</span>
                       <span className="text-lg font-bold text-slate-900">Quote Only</span>
                     </div>
                     <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                       <ArrowRight className="w-4 h-4" />
                     </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <Link to="/products">
             <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:bg-slate-50">
               View Full Catalogue
             </Button>
           </Link>
        </div>
      </section>

      {/* --- BIG CALL TO ACTION --- */}
      <section className="py-32 container mx-auto px-4">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-900/30">
          
          {/* Static Decorative circles */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
              Ready to modernize your infrastructure?
            </h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Get a custom, GST-compliant quote today. No hidden fees, just transparent government pricing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact">
                <Button size="lg" className="h-16 px-10 bg-white text-blue-600 hover:bg-blue-50 font-bold text-lg rounded-2xl shadow-xl transition-transform hover:scale-105">
                  Contact Sales Team
                </Button>
              </Link>
              <Link to="/dealer-application">
                <Button size="lg" variant="outline" className="h-16 px-10 text-white border-white/30 bg-white/10 hover:bg-white/20 hover:text-white text-lg rounded-2xl backdrop-blur-md">
                  Dealer Registration
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;