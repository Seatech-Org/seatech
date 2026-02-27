import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CLIENTS } from "../data/clients";
import { Helmet } from "react-helmet-async";
import { Building2, GraduationCap, Gavel, Briefcase, Filter, Heart, Trophy, Users2, Globe } from "lucide-react";

const Clients = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    { name: "All", icon: Filter },
    { name: "Education", icon: GraduationCap },
    { name: "Government", icon: Gavel },
    { name: "Healthcare", icon: Briefcase },
    { name: "Corporate", icon: Building2 },
  ];

  const stats = [
    { label: "Institutions Served", value: "150+", icon: Building2 },
    { label: "Regional States", value: "12+", icon: Globe },
    { label: "Product Categories", value: "25+", icon: Trophy },
    { label: "Satisfied Users", value: "50K+", icon: Users2 },
  ];

  const filteredClients = activeFilter === "All" 
    ? CLIENTS 
    : CLIENTS.filter(client => {
        if (activeFilter === "Education") return client.category === "Education" || client.category === "Medical College";
        return client.category === activeFilter;
      });

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 selection:text-blue-100">
      <Helmet>
        <title>Our Clients | Seatech Trusted Partners</title>
        <meta name="description" content="View the list of prestigious universities, government departments, and corporate entities that trust Seatech for their infrastructure needs." />
      </Helmet>
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 overflow-hidden bg-slate-950 text-center border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 opacity-60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 tracking-widest uppercase">
              <Heart className="w-3 h-3 fill-current" />
              <span>Built on Trust</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
              A Legacy of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-black">Successful Partnerships.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
              We take pride in supporting the organizations that drive our nation forward. From premier universities to core government departments.
            </p>
          </motion.div>

          {/* Filter Bar */}
          <div className="mt-16 flex flex-wrap justify-center gap-3">
             {categories.map((cat) => (
               <button
                 key={cat.name}
                 onClick={() => setActiveFilter(cat.name)}
                 className={`flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all border ${
                   activeFilter === cat.name 
                     ? "bg-blue-600 border-blue-500 text-white shadow-lg shadow-blue-900/20 scale-105" 
                     : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                 }`}
               >
                 <cat.icon className="w-4 h-4" />
                 {cat.name}
               </button>
             ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 container mx-auto px-4">
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-[2.5rem] bg-slate-900/50 border border-white/5 shadow-xl">
                 <stat.icon className="w-8 h-8 text-blue-500 mb-4 opacity-50" />
                 <p className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</p>
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
         </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 container mx-auto px-4 min-h-[600px]">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredClients.map((client) => (
              <motion.div
                key={client.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group bg-slate-900 border border-white/5 rounded-[2.5rem] p-8 hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden flex flex-col h-full shadow-2xl"
              >
                {/* Logo Area */}
                <div className="aspect-square flex items-center justify-center bg-white rounded-3xl p-8 transition-all duration-500 shadow-inner group-hover:scale-[1.02] ring-1 ring-black/5 flex-grow">
                  {client.logo ? (
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="w-full h-full object-contain mix-blend-multiply" 
                      loading="lazy"
                    />
                  ) : (
                    <div className={`w-24 h-24 rounded-3xl bg-slate-50 flex items-center justify-center ${client.color || "text-slate-600"}`}>
                       {client.icon ? <client.icon className="w-12 h-12" /> : <Building2 className="w-12 h-12 text-slate-300" />}
                    </div>
                  )}
                </div>
                
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                   <Building2 className="w-24 h-24 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Trust Quote */}
      <section className="py-32 bg-slate-900/30">
         <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">"Our success is not defined by our products, but by the excellence of the institutions we serve."</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Clients;
