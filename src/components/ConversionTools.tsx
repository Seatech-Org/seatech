import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MessageCircle, X, Download, Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from './ui/input';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

// --- WHATSAPP COMPONENT ---
export const FloatingWhatsApp = ({ productName }: { productName?: string }) => {
  const location = useLocation();
  
  const getWhatsAppUrl = () => {
    let message = "Hello, I have a query about Seatech products. Please assist.";
    
    if (productName) {
       message = `Hello, I am interested in ${productName} for bulk supply. Please share official quotation.`;
    } else if (location.pathname.startsWith('/products/')) {
       message = "Hello, I am interested in this product for bulk supply. Please share official quotation.";
    } else if (location.pathname === '/products') {
       message = "Hello, I need bulk pricing for institutional furniture. Please assist.";
    }
    
    return `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
  };

  return (
    <motion.a 
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] flex items-center justify-center text-white hover:brightness-110 transition-all border-4 border-slate-900 group"
    >
       <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75 animate-ping group-hover:animate-none"></span>
       <MessageCircle className="h-8 w-8 fill-current relative z-10" />
    </motion.a>
  );
};

// --- EXIT INTENT POPUP ---
const exitIntentSchema = z.object({
  name: z.string().min(2, "Name is required"),
  organization: z.string().min(2, "Organization is required"),
  phone: z.string().regex(/^[0-9]{10}$/, "Invalid phone number"),
  email: z.string().email("Invalid email"),
  role: z.string().min(1, "Please select a role"),
});

export const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const form = useForm<z.infer<typeof exitIntentSchema>>({
    resolver: zodResolver(exitIntentSchema),
    defaultValues: {
      name: "",
      organization: "",
      phone: "",
      email: "",
      role: "",
    }
  });

  const onSubmit = async (values: z.infer<typeof exitIntentSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Exit Intent Form:", values);
    toast.success("Guide Sent!", {
      description: "Check your email for the procurement guide.",
    });
    setIsSubmitting(false);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-slate-900 border border-white/10 w-full max-w-lg rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="p-8 md:p-10">
               <div className="mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-6">
                     <Download className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">Wait! Don't Miss Out.</h2>
                  <p className="text-slate-400">Get our <span className="text-white font-bold italic">"Institutional Bulk Buying Guide 2026"</span> to streamline your next project.</p>
               </div>

               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <FormField control={form.control} name="name" render={({ field }) => (
                        <FormItem><FormControl><Input className="h-12 bg-slate-950 border-slate-800 text-white" placeholder="Full Name" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="organization" render={({ field }) => (
                        <FormItem><FormControl><Input className="h-12 bg-slate-950 border-slate-800 text-white" placeholder="Organization" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <FormField control={form.control} name="phone" render={({ field }) => (
                        <FormItem><FormControl><Input className="h-12 bg-slate-950 border-slate-800 text-white" placeholder="Phone" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="email" render={({ field }) => (
                        <FormItem><FormControl><Input className="h-12 bg-slate-950 border-slate-800 text-white" type="email" placeholder="Email" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>

                    <FormField control={form.control} name="role" render={({ field }) => (
                      <FormItem>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-slate-950 border-slate-800 text-white">
                              <SelectValue placeholder="Select Your Role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-slate-900 border-slate-800 text-white z-[110]">
                            <SelectItem value="Procurement Officer">Procurement Officer</SelectItem>
                            <SelectItem value="Admin">Admin</SelectItem>
                            <SelectItem value="Contractor">Contractor</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />

                    <Button type="submit" className="w-full h-14 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-900/30" disabled={isSubmitting}>
                      {isSubmitting ? <Loader2 className="animate-spin h-5 w-5" /> : "Send Me The Guide"}
                    </Button>
                  </form>
               </Form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
