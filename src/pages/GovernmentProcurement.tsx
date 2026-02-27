import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  ShieldCheck, 
  FileText, 
  Gavel, 
  CheckCircle2, 
  Building2, 
  ArrowRight,
  ClipboardCheck,
  Truck,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const GovernmentProcurement = () => {
  const steps = [
    {
      title: "GeM Portal Search",
      description: "Search for Seatech products directly on the Government e-Marketplace (GeM) using our unique GeM IDs.",
      icon: ClipboardCheck,
      color: "text-blue-500",
      bg: "bg-blue-500/10"
    },
    {
      title: "L1 Price Discovery",
      description: "Our products are listed at competitive L1 prices, ensuring the best value for public funds.",
      icon: Gavel,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10"
    },
    {
      title: "Direct Purchase / Bidding",
      description: "Option for direct purchase for small orders or automated bidding participation for large tenders.",
      icon: FileText,
      color: "text-orange-500",
      bg: "bg-orange-500/10"
    },
    {
      title: "Seamless Fulfillment",
      description: "End-to-end logistics and professional installation at your institution's location.",
      icon: Truck,
      color: "text-purple-500",
      bg: "bg-purple-500/10"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 selection:text-blue-100">
      <Helmet>
        <title>Government Procurement | Seatech</title>
        <meta name="description" content="Official procurement guide for government departments, PSUs, and educational institutions through GeM." />
      </Helmet>
      
      <Navbar />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold uppercase tracking-widest mb-8"
            >
              <Award className="w-4 h-4" />
              <span>GeM Registered OEM</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight"
            >
              Government & Institutional <br/>
              <span className="text-blue-500">Procurement Simplified.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-10"
            >
              We provide end-to-end support for government departments, public sector undertakings, and educational institutions to procure high-quality infrastructure solutions efficiently.
            </motion.p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="h-14 px-10 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full">
                Download Catalog
              </Button>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="h-14 px-10 border-slate-700 text-slate-300 hover:bg-slate-800 rounded-full font-bold">
                  Contact Nodal Officer
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Procurement Steps */}
        <section className="container mx-auto px-4 mb-32">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 border border-slate-800 p-8 rounded-[2rem] hover:border-blue-500/30 transition-all group"
              >
                <div className={`w-14 h-14 ${step.bg} ${step.color} rounded-2xl flex items-center justify-center mb-6 ring-1 ring-white/5`}>
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Compliance Section */}
        <section className="bg-slate-900/50 border-y border-slate-800 py-24 mb-32">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">Full Compliance & Quality Assurance</h2>
                <div className="space-y-6">
                  {[
                    "ISO 9001:2015, ISO 14001:2015 Certified",
                    "Products Conforming to BIS Standards (IS:3312, IS:8126)",
                    "Listed on GeM (Government e-Marketplace)",
                    "Class 1 Local Content Supplier (Make in India)",
                    "Environment Friendly & Sustainable Manufacturing"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </div>
                      <span className="text-slate-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-video bg-slate-800 border border-slate-700 flex items-center justify-center group">
                 <ShieldCheck className="w-32 h-32 text-blue-500/20 group-hover:scale-110 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
                 <div className="absolute bottom-8 left-8">
                    <p className="text-white font-bold text-xl mb-1">Trusted Quality</p>
                    <p className="text-slate-400 text-sm">Certified infrastructure solutions since 2010.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center shadow-2xl shadow-blue-900/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">Need a customized proposal for <br/>your department?</h2>
              <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto opacity-90">
                Our expert consultants can assist you in preparing technical specifications and budget estimates for your infrastructure projects.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <Link to="/contact">
                    <Button size="lg" className="h-16 px-10 bg-white text-blue-600 hover:bg-blue-50 font-bold rounded-full text-lg shadow-xl">
                       Talk to an Expert
                    </Button>
                 </Link>
                 <Link to="/products">
                    <Button variant="outline" size="lg" className="h-16 px-10 border-white/30 text-white hover:bg-white/10 rounded-full font-bold text-lg">
                       View Products
                    </Button>
                 </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GovernmentProcurement;
