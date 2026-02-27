import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Send, MessageCircle, ChevronDown, Headset, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const FAQ_ITEMS = [
  {
    question: "How can I get technical specifications for a GeM tender?",
    answer: "Our nodal officers provide complete technical compliance sheets, drawing support, and certification documents for all GeM-listed products within 24-48 hours."
  },
  {
    question: "Do you offer on-site measurement and planning?",
    answer: "Yes, for large-scale institutional projects, our technical team provides on-site space planning and layout optimization services at no extra cost."
  },
  {
    question: "What is your typical turnaround time for bulk manufacturing?",
    answer: "Depending on the category, we typically fulfill bulk institutional orders within 21 to 45 business days, including multi-location delivery."
  }
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Contact form submitted:", values);
    toast.success("Inquiry Received", {
      description: "Our nodal officer will contact you shortly.",
    });
    form.reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Assistance",
      content: "support@seatech.gov.in",
      subContent: "For technical queries & quotes",
      link: "mailto:support@seatech.gov.in",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      icon: Phone,
      title: "Priority Helpline",
      content: "+91 11-2345-6789",
      subContent: "Nodal Officer: 9 AM - 7 PM",
      link: "tel:+911123456789",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    {
      icon: MapPin,
      title: "Corporate Office",
      content: "Plot 45, Phase 2",
      subContent: "New Delhi, IND 110020",
      link: null,
      color: "text-orange-400",
      bg: "bg-orange-400/10",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 selection:text-blue-100">
      <Helmet>
        <title>Contact Seatech | Institutional & GeM Procurement Support</title>
        <meta name="description" content="Direct contact for government departments and corporate institutions. Get expert assistance with GeM tenders, bulk orders, and technical specifications." />
      </Helmet>
      
      <Navbar />

      {/* Hero Header */}
      <section className="bg-slate-950 pt-32 pb-20 relative overflow-hidden text-center">
         <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950"></div>
         <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold mb-8 tracking-widest uppercase">
                <Headset className="w-4 h-4" />
                <span>Dedicated Nodal Support</span>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">Expert Guidance <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">At Every Step.</span></h1>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
                Whether you need technical compliance for a GeM tender or a custom bulk quotation, our specialized procurement team is ready to assist.
              </p>
            </motion.div>
         </div>
      </section>

      <div className="container mx-auto px-4 pb-32">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-[2.5rem] blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-slate-900 border border-white/5 p-10 rounded-[2.5rem] hover:border-white/10 transition-all text-center h-full flex flex-col items-center">
                <div className={`w-16 h-16 rounded-2xl ${info.bg} ${info.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-3 transition-transform ring-1 ring-white/5 shadow-2xl`}>
                  <info.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tighter">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-blue-400 font-bold hover:text-blue-300 transition-colors text-xl tracking-tight">
                    {info.content}
                  </a>
                ) : (
                  <p className="text-slate-200 font-bold text-xl tracking-tight">{info.content}</p>
                )}
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-4 opacity-60">{info.subContent}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="relative">
               <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
               <Card className="border-white/5 shadow-2xl bg-slate-900/40 backdrop-blur-2xl rounded-[3rem] overflow-hidden relative z-10">
                <div className="p-10 md:p-16">
                  <div className="mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Project Inquiry</h2>
                    <p className="text-slate-400 text-lg font-light">Describe your requirement and our technical team will prepare a formal proposal.</p>
                  </div>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <FormField control={form.control} name="name" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-400 font-bold uppercase tracking-widest text-[10px] ml-1">Full Name</FormLabel>
                            <FormControl><Input className="h-14 bg-slate-950/50 border-slate-800 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 rounded-2xl transition-all" placeholder="Enter your name" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />

                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-400 font-bold uppercase tracking-widest text-[10px] ml-1">Work Email</FormLabel>
                            <FormControl><Input className="h-14 bg-slate-950/50 border-slate-800 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 rounded-2xl transition-all" type="email" placeholder="name@org.gov.in" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )} />
                      </div>

                      <FormField control={form.control} name="subject" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-400 font-bold uppercase tracking-widest text-[10px] ml-1">Interested Category</FormLabel>
                          <FormControl><Input className="h-14 bg-slate-950/50 border-slate-800 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 rounded-2xl transition-all" placeholder="e.g. Auditorium Seating, Office Workstations" {...field} /></FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <FormField control={form.control} name="message" render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-400 font-bold uppercase tracking-widest text-[10px] ml-1">Requirement Details</FormLabel>
                          <FormControl>
                            <Textarea className="min-h-[200px] bg-slate-950/50 border-slate-800 text-white focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 rounded-2xl resize-none py-5 transition-all" placeholder="Please specify quantity, location, and any specific compliance needs..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )} />

                      <Button type="submit" className="w-full h-16 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xl rounded-2xl shadow-2xl shadow-blue-900/30 transition-all group">
                        Submit Requirement <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Button>
                    </form>
                  </Form>
                </div>
              </Card>
            </div>
          </div>

          {/* Sidebar: FAQs & Trust */}
          <div className="lg:col-span-5 space-y-12">
             
             {/* GeM Badge */}
             <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/5 rounded-[3rem] p-10 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <BadgeCheck className="h-7 w-7" />
                   </div>
                   <h3 className="text-2xl font-bold text-white tracking-tight">Verified OEM Support</h3>
                </div>
                <p className="text-slate-400 leading-relaxed font-light mb-8">
                   We are a Class 1 Local Content Supplier. Our technical team is authorized to provide official OEM Authorization Letters (MAF) for GeM bidding.
                </p>
                <div className="flex flex-wrap gap-2">
                   {["MAF Support", "L1 Pricing", "Technical Compliance"].map((tag, i) => (
                     <span key={i} className="px-3 py-1 bg-slate-800 text-slate-300 text-[10px] font-bold uppercase rounded-lg border border-white/5">{tag}</span>
                   ))}
                </div>
             </div>

             {/* Interactive FAQ */}
             <div className="bg-slate-900/50 border border-slate-800 rounded-[3rem] p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                   <MessageCircle className="text-blue-500" />
                   Common Queries
                </h3>
                <div className="space-y-4">
                   {FAQ_ITEMS.map((item, i) => (
                     <div key={i} className="border-b border-white/5 last:border-0 pb-6">
                        <button 
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full flex justify-between items-center text-left text-white font-bold hover:text-blue-400 transition-colors py-2 group"
                        >
                           <span className="text-sm md:text-base leading-snug">{item.question}</span>
                           <ChevronDown className={`h-5 w-5 flex-shrink-0 transition-transform duration-500 ${openFaq === i ? "rotate-180" : "group-hover:translate-y-1"}`} />
                        </button>
                        <AnimatePresence>
                           {openFaq === i && (
                             <motion.div
                               initial={{ height: 0, opacity: 0 }}
                               animate={{ height: "auto", opacity: 1 }}
                               exit={{ height: 0, opacity: 0 }}
                               className="overflow-hidden"
                             >
                                <p className="text-slate-400 text-sm leading-relaxed pt-4 font-light">
                                   {item.answer}
                                </p>
                             </motion.div>
                           )}
                        </AnimatePresence>
                     </div>
                   ))}
                </div>
             </div>

             {/* Minimal Map Overlay */}
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 group h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688975472578!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, opacity: 0.6, filter: "invert(95%) hue-rotate(180deg) brightness(95%) contrast(90%) grayscale(100%)" }} 
                  allowFullScreen
                  loading="lazy"
                  title="Seatech Location"
                />
                <div className="absolute inset-0 bg-blue-600/5 group-hover:opacity-0 transition-opacity pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-slate-900/90 backdrop-blur rounded-2xl border border-white/10">
                   <p className="text-xs font-bold text-blue-400 uppercase mb-1">New Delhi, India</p>
                   <p className="text-white text-xs font-medium truncate">Industrial Area, Phase 2, Okhla</p>
                </div>
             </div>

          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
