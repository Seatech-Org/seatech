import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Building2, 
  TrendingUp,
  Phone,
  MessageCircle,
  Briefcase,
  ShoppingCart,
  Gavel,
  Globe2
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { CLIENTS } from "../data/clients";
import { Helmet } from "react-helmet-async";
import { Star, Quote } from "lucide-react";

// --- REVIEWS / TESTIMONIALS DATA ---
const REVIEWS = [
  {
    name: "Dr. Shakuntala Misra University",
    role: "National Rehabilitation University",
    text: "Seatech provided exceptional auditorium seating solutions. The quality and installation were top-notch, perfectly meeting our accessibility requirements.",
    rating: 5
  },
  {
    name: "University of Lucknow",
    role: "Higher Education Institution",
    text: "The classroom furniture from Seatech is durable and ergonomic. It has significantly improved the learning environment for our students.",
    rating: 5
  },
  {
    name: "Tata 1mg",
    role: "Corporate Healthcare",
    text: "Efficiency and professionalism. Seatech's office infrastructure solutions helped us scale our workspace rapidly without compromising on quality.",
    rating: 5
  },
  {
    name: "Judiciary U.P.",
    role: "Government Body",
    text: "Reliable partner for long-term projects. Their compliance with GeM standards makes procurement transparent and hassle-free.",
    rating: 5
  }
];

// --- IMPORT LOCAL HERO IMAGES ---
import conferenceImg from "../assets/heropage/Modern Executive Conference Room.jpg";
import classroomImg from "../assets/heropage/University Lecture Hall & Classroom.jpg";
import auditoriumImg from "../assets/heropage/Large Auditorium Hall.jpg";
import lobbyImg from "../assets/heropage/Modern Institutional Lobby Space.jpg";

// --- HERO IMAGES CONFIGURATION ---
const HERO_IMAGES = [
  { url: conferenceImg, alt: "Modern Executive Conference Room" },
  { url: classroomImg, alt: "University Lecture Hall & Classroom" },
  { url: auditoriumImg, alt: "Large Auditorium Hall" },
  { url: lobbyImg, alt: "Modern Institutional Lobby Space" }
];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cycle through background images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 selection:text-blue-100 overflow-x-hidden">
      <Helmet>
        <title>Seatech</title>
        <meta name="description" content="Discover Seatech's extensive range of government-approved furniture, auditorium chairs, and office infrastructure solutions. Quality and reliability for your workspace." />
        <meta property="og:title" content="Seatech | Premium Office Furniture" />
        <meta property="og:description" content="Quality infrastructure and furniture solutions approved for government and corporate use." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />

      {/* --- FLOATING CONTACT BUTTONS (Fixed Bottom Right) --- */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4 items-end">
        <motion.a 
          href="tel:+919876543210" 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-slate-800/90 backdrop-blur-xl rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex items-center justify-center text-slate-200 hover:text-white border border-white/10 transition-colors"
          title="Call Us"
        >
          <Phone className="h-6 w-6 fill-current" />
        </motion.a>
        <motion.a 
          href="https://wa.me/919876543210" 
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-16 h-16 bg-[#25D366] rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] flex items-center justify-center text-white hover:brightness-110 transition-all border-4 border-slate-900 relative group"
          title="Chat on WhatsApp"
        >
          <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:animate-none"></span>
          <MessageCircle className="h-8 w-8 fill-current relative z-10" />
        </motion.a>
      </div>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-slate-950 overflow-hidden">
        
        {/* DYNAMIC BACKGROUND SLIDESHOW */}
        <div className="absolute inset-0 w-full h-full z-0">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImageIndex}
              src={HERO_IMAGES[currentImageIndex].url}
              alt={HERO_IMAGES[currentImageIndex].alt}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }} // Custom ease
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
          </AnimatePresence>
          {/* Refined Overlays */}
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full pt-32 md:pt-20">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/5 border border-white/10 backdrop-blur-xl text-blue-200 text-sm font-medium tracking-wide shadow-2xl hover:bg-slate-900/10 transition-colors cursor-default">
                 <Globe2 className="w-4 h-4 text-blue-400" />
                 <span>Global Standard Supply Chain</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 50 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tighter leading-[0.95] drop-shadow-xl"
            >
              Smart
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"> Buying.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed text-balance"
            >
              The unified platform streamlining <span className="text-white font-medium">Buying</span>, <span className="text-white font-medium">Selling</span>, and <span className="text-white font-medium">Bidding</span> for Enterprise & Institutional Furniture Infrastructure.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <Link to="/products" className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                <Button size="lg" className="relative h-16 px-10 text-lg bg-slate-900 text-white hover:bg-blue-50 hover:text-slate-900 border-0 rounded-full transition-all font-bold flex items-center gap-3">
                   Start Buying
                  <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Glass Stats Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-20 md:mt-32 w-full max-w-6xl"
            >
               <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-white/10 bg-slate-900/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                 {[
                   { label: "Active Tenders", value: "2.5K+", icon: Gavel },
                   { label: "Verified OEMs", value: "500+", icon: ShieldCheck },
                   { label: "Products Listed", value: "10K+", icon: ShoppingCart },
                   { label: "Institutions", value: "150+", icon: Building2 },
                 ].map((stat, i) => (
                   <div key={i} className="flex flex-col items-center justify-center text-center px-4">
                      <div className="text-3xl md:text-4xl font-bold text-white mb-1 tracking-tight">{stat.value}</div>
                      <div className="flex items-center gap-2 text-sm font-medium text-blue-200/70 uppercase tracking-widest">
                        <stat.icon className="h-4 w-4" /> {stat.label}
                      </div>
                   </div>
                 ))}
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TRUSTED PARTNERS (Single Track Marquee) --- */}
      <section className="py-20 bg-slate-950 border-b border-slate-900 overflow-hidden relative">
         <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-24">
            
            <div className="md:w-1/3 text-center md:text-left">
               <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-4">
                 Our Network
               </span>
               <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Trusted by Leaders.</h2>
               <p className="text-slate-400 leading-relaxed text-lg">
                 We power the infrastructure procurement for top universities, government bodies, and corporations across the region.
               </p>
               <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
                  <div className="flex -space-x-3">
                    {[1,2,3,4].map((_,i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-bold text-slate-400">
                        {String.fromCharCode(65+i)}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-medium text-slate-400">
                    <span className="font-bold text-white">100+</span> Partners
                  </div>
               </div>
            </div>

            <div className="md:w-2/3 h-[300px] relative overflow-hidden mask-linear-gradient w-full">
               <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-2xl relative">
                    {/* Floating Cards Marquee */}
                     <div className="relative h-[300px] overflow-hidden">
                        <motion.div
                          animate={{ y: [0, "-50%"] }}
                          transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30,
                          }}
                          className="flex flex-col gap-4"
                        >
                          {[...CLIENTS, ...CLIENTS].map((client, index) => (
                            <div
                              key={`${client.name}-${index}`}
                              className="bg-white rounded-2xl p-4 flex items-center justify-center shadow-lg hover:scale-105 transition-transform w-48 h-24 mx-auto ring-1 ring-black/5"
                            >
                              {client.logo ? (
                                <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                              ) : (
                                <Building2 className="w-8 h-8 text-slate-300" />
                              )}
                            </div>
                          ))}
                        </motion.div>
                     </div>
                     {/* Gradient Masks */}
                     <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none z-10"></div>
                     <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none z-10"></div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- ECOSYSTEM SECTION --- */}
      <section className="py-32 container mx-auto px-4 bg-slate-900/30">
         <div className="text-center max-w-3xl mx-auto mb-24">
           <Badge variant="outline" className="mb-6 border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-1.5 text-sm font-semibold tracking-wide">The Ecosystem</Badge>
           <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">Complete Supply Chain.</h2>
           <p className="text-xl text-slate-400 font-light text-balance">
             Connecting every stakeholder in the infrastructure lifecycle on a single, unified platform.
           </p>
         </div>

         <div className="grid md:grid-cols-3 gap-10">
            
            {/* CARD 1: GOVERNMENT BUYING */}
            <motion.div 
               whileHover={{ y: -8 }}
               className="bg-slate-900 rounded-[2rem] p-10 shadow-2xl shadow-black/20 border border-slate-800 hover:border-emerald-500/30 transition-all duration-300 relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-emerald-500/20 transition-colors"></div>
               <div className="relative z-10">
                 <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center mb-8 text-emerald-400 ring-1 ring-emerald-500/40">
                    <Briefcase className="h-7 w-7" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-3">Government Buying</h3>
                 <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                   For Government & Enterprises. L1 pricing, bulk ordering, and GeM compliance.
                 </p>
                 <ul className="space-y-4 mb-8">
                    {["L1 Price Discovery", "Bulk Order Management", "Compliance Ready"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                        <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                           <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                        </div>
                        {item}
                      </li>
                    ))}
                 </ul>
                 <Link to="/government-procurement">
                   <Button variant="outline" className="w-full h-12 rounded-xl border-emerald-500/30 text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 hover:border-emerald-500/50 font-bold tracking-wide">
                     Procurement Guide
                   </Button>
                 </Link>
               </div>
            </motion.div>

            {/* CARD 2: DIRECT BUYING */}
            <motion.div 
               whileHover={{ y: -8 }}
               className="bg-slate-800 rounded-[2rem] p-10 shadow-2xl shadow-black/40 relative overflow-hidden group"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900"></div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -ml-16 -mb-16 group-hover:bg-blue-600/30 transition-colors"></div>
               
               <div className="relative z-10">
                 <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center mb-8 text-blue-400 ring-1 ring-blue-500/40">
                    <ShoppingCart className="h-7 w-7" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-3">Direct Buying</h3>
                 <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                   For Dealers & Distributors. Direct OEM authorization and wholesale catalogs.
                 </p>
                 <ul className="space-y-4 mb-8">
                    {["OEM Authorization", "Wholesale Pricing", "Priority Logistics"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                        <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                           <CheckCircle2 className="h-3 w-3 text-blue-400" />
                        </div>
                        {item}
                      </li>
                    ))}
                 </ul>
                 <Link to="/products">
                   <Button className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold border-0 tracking-wide shadow-lg shadow-blue-900/50">
                     Browse Inventory
                   </Button>
                 </Link>
               </div>
            </motion.div>

            {/* CARD 3: SELLING */}
            <motion.div 
               whileHover={{ y: -8 }}
               className="bg-slate-900 rounded-[2rem] p-10 shadow-2xl shadow-black/20 border border-slate-800 hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl -mr-12 -mt-12 group-hover:bg-indigo-500/20 transition-colors"></div>
               <div className="relative z-10">
                 <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-8 text-indigo-400 ring-1 ring-indigo-500/40">
                    <TrendingUp className="h-7 w-7" />
                 </div>
                 <h3 className="text-2xl font-bold text-white mb-3">Strategic Selling</h3>
                 <p className="text-slate-400 mb-8 leading-relaxed text-sm">
                   For Manufacturers. Expand reach to government contracts and dealer networks.
                 </p>
                 <ul className="space-y-4 mb-8">
                    {["Nationwide Network", "Automated Tendering", "Secure Payments"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300 text-sm font-medium">
                        <div className="w-5 h-5 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0">
                           <CheckCircle2 className="h-3 w-3 text-indigo-400" />
                        </div>
                        {item}
                      </li>
                    ))}
                 </ul>
                 <Link to="/quote-request">
                   <Button variant="outline" className="w-full h-12 rounded-xl border-indigo-500/30 text-indigo-400 bg-indigo-500/10 hover:bg-indigo-500/20 hover:border-indigo-500/50 font-bold tracking-wide">
                     Join as Partner
                   </Button>
                 </Link>
               </div>
            </motion.div>

         </div>
      </section>

      {/* --- WHY CHOOSE US & REVIEWS --- */}
      <section className="py-32 bg-slate-950 overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
               <div>
                  <Badge variant="outline" className="mb-6 border-blue-500/30 bg-blue-500/10 text-blue-400 px-4 py-1.5 text-sm font-semibold tracking-wide uppercase">Why Seatech?</Badge>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">Delivering Infrastructure <br/>With <span className="text-blue-500">Excellence.</span></h2>
                  <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-xl">
                     We bring transparency, efficiency, and scale to a traditionally fragmented industry. Our platform is built on trust and technology, serving institutions across India.
                  </p>
                  <div className="space-y-8">
                     {[
                        { title: "Verified Quality", text: "Every product and OEM is vetted for compliance and durability." },
                        { title: "Transparent Bidding", text: "Fair and open tendering process for all government contracts." },
                        { title: "End-to-End Support", text: "From procurement to final delivery and expert installation." },
                     ].map((item, i) => (
                        <div key={i} className="flex gap-5 group">
                           <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center flex-shrink-0 text-white font-bold text-sm border border-slate-800 group-hover:border-blue-500/50 group-hover:bg-blue-600/10 transition-all duration-300">
                              0{i+1}
                           </div>
                           <div>
                              <h4 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{item.title}</h4>
                              <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-[3rem] blur-3xl opacity-50"></div>
                  
                  {/* Motion Reviews Card */}
                  <div className="relative bg-slate-900 border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-center">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                       <Quote className="w-32 h-32 text-white" />
                    </div>
                    
                    <div className="relative z-10">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex % REVIEWS.length} // Reusing image timer logic for simplicity or separate one
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="space-y-8"
                        >
                          <div className="flex gap-1">
                             {[...Array(REVIEWS[currentImageIndex % REVIEWS.length].rating)].map((_, i) => (
                               <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                             ))}
                          </div>
                          <p className="text-xl md:text-2xl text-white font-medium leading-relaxed italic">
                            "{REVIEWS[currentImageIndex % REVIEWS.length].text}"
                          </p>
                          <div className="flex items-center gap-4 pt-4">
                             <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                                {REVIEWS[currentImageIndex % REVIEWS.length].name.charAt(0)}
                             </div>
                             <div>
                                <h5 className="text-white font-bold text-lg">{REVIEWS[currentImageIndex % REVIEWS.length].name}</h5>
                                <p className="text-slate-400 text-sm font-medium">{REVIEWS[currentImageIndex % REVIEWS.length].role}</p>
                             </div>
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>

                    {/* Progress Bar for Reviews */}
                    <div className="absolute bottom-0 left-0 h-1 bg-blue-600/30 w-full">
                       <motion.div 
                         key={currentImageIndex}
                         initial={{ scaleX: 0 }}
                         animate={{ scaleX: 1 }}
                         transition={{ duration: 5, ease: "linear" }}
                         className="h-full bg-blue-500 origin-left"
                       />
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <section className="py-32 bg-slate-900 relative overflow-hidden">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
         <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Ready to Scale?</h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
               Join thousands of institutions and businesses transforming their supply chain today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <Link to="/quote-request">
                  <Button size="lg" className="h-14 px-10 text-lg bg-blue-600 text-white hover:bg-blue-500 rounded-full shadow-xl shadow-blue-900/50 font-bold">
                    Get Started Now
                  </Button>
               </Link>
               <Link to="/about">
                  <Button variant="outline" size="lg" className="h-14 px-10 text-lg border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white rounded-full font-bold bg-transparent">
                    Learn More
                  </Button>
               </Link>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;