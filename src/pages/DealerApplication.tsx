import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useState, useEffect } from "react";
import { Building2, User, FileText, Receipt, Trash2, CheckCircle, Loader2 } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const formSchema = z.object({
  // Company Details
  companyName: z.string().trim().min(2, "Company name is required").max(100),
  address: z.string().trim().min(5, "Address is required").max(500),
  gstNumber: z.string().trim().regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/, "Invalid GST number format").optional().or(z.literal('')),
  
  // Contact Person
  contactName: z.string().trim().min(2, "Contact name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  mobile: z.string().trim().regex(/^[0-9]{10}$/, "Mobile must be 10 digits"),
  
  // Financials (Optional for simple quotes, but kept for full dealer registration)
  year1: z.string().optional(),
  turnoverYear1: z.string().optional(),
  year2: z.string().optional(),
  turnoverYear2: z.string().optional(),
  year3: z.string().optional(),
  turnoverYear3: z.string().optional(),
  
  // Requirements
  additionalRemarks: z.string().trim().max(1000).optional(),
});

const DealerApplication = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { cartItems, clearCart } = useCart();
  
  // Display text for the UI summary
  const [quoteListDisplay, setQuoteListDisplay] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyName: "",
      address: "",
      gstNumber: "",
      contactName: "",
      email: "",
      mobile: "",
      year1: "",
      turnoverYear1: "",
      year2: "",
      turnoverYear2: "",
      year3: "",
      turnoverYear3: "",
      additionalRemarks: "",
    },
  });

  // 1. Fetch User Profile to Auto-Fill
  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        // FIX: Cast supabase to any to bypass strict type checking on the table
        // FIX: Use .maybeSingle() instead of .single() to avoid 406 error if profile doesn't exist
        const { data, error } = await (supabase as any)
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .maybeSingle(); 

        if (error) {
          console.error("Error fetching profile:", error);
          return;
        }

        // Cast data to any so we can access properties without TS complaining
        const profile = data as any;

        if (profile) {
          form.reset({
            ...form.getValues(),
            companyName: profile.company_name || "",
            address: profile.address || "",
            contactName: profile.contact_person || "",
            email: user.email || "", 
            mobile: profile.phone || "",
            gstNumber: profile.gst_number || "",
          });
        } else {
             // If no profile exists, at least pre-fill the email from the auth user
             form.setValue('email', user.email || "");
        }
      }
    };
    fetchUserProfile();
  }, [form]);

  // 2. Load Quote Items for Display
  useEffect(() => {
    const rawBin = localStorage.getItem('quoteBin');
    let displayText = "";

    if (rawBin) {
      const quoteBin: string[] = JSON.parse(rawBin);
      displayText += quoteBin.join('\n');
    }
    
    if (cartItems.length > 0) {
      const cartText = cartItems.map(item => `• ${item.quantity} x ${item.name}`).join('\n');
      displayText += (displayText ? '\n' : '') + cartText;
    }

    if (displayText) {
      setQuoteListDisplay(displayText);
    }
  }, [cartItems]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      let userId = user?.id;

      if (!userId) {
        // Fallback: If for some reason they bypassed Auth page, try anonymous or error
        const { data: authData, error: authError } = await supabase.auth.signInAnonymously();
        if (authError) throw new Error("Please login to submit a quote.");
        userId = authData.user?.id;
      }

      if (!userId) throw new Error("User session error.");

      // A. Save/Update Profile (FORCE TYPE)
      const profileData = {
        id: userId,
        company_name: values.companyName,
        contact_person: values.contactName,
        email: values.email,
        phone: values.mobile,
        address: values.address,
        gst_number: values.gstNumber
      };
      
      // FIX: Cast supabase to any
      const { error: profileError } = await (supabase as any)
        .from('profiles')
        .upsert(profileData);

      if (profileError) throw profileError;

      // B. Create Quote Header (FORCE TYPE)
      const quotePayload = {
        user_id: userId,
        status: 'pending',
        total_items: cartItems.length,
        additional_remarks: values.additionalRemarks
      };

      // FIX: Cast supabase to any
      const { data: quoteData, error: quoteError } = await (supabase as any)
        .from('quotes')
        .insert(quotePayload)
        .select()
        .single();

      if (quoteError) throw quoteError;
      
      // Cast response data to any to access ID safely
      const data = quoteData as any;
      const quoteId = data.id;

      // C. Save Quote Items (FORCE TYPE)
      const dbItems = cartItems.map(item => ({
        quote_id: quoteId,
        product_id: item.id,
        product_name: item.name,
        quantity: item.quantity
      }));

      if (dbItems.length > 0) {
        // FIX: Cast supabase to any
        const { error: itemsError } = await (supabase as any)
          .from('quote_items')
          .insert(dbItems);
          
        if (itemsError) throw itemsError;
      }

      toast.success("Quote Request Sent Successfully!", {
        description: `Reference ID: ${quoteId.slice(0, 8)}. We will contact you shortly.`,
        duration: 5000,
      });

      // D. Cleanup
      localStorage.removeItem('quoteBin');
      clearCart();
      setQuoteListDisplay("");
      form.reset();

    } catch (error: any) {
      console.error("Submission error:", error);
      toast.error("Submission Failed", {
        description: error.message || "There was an error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const clearQuoteList = () => {
    localStorage.removeItem('quoteBin');
    clearCart();
    setQuoteListDisplay("");
    toast.info("Quote list cleared.");
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Navbar />
      
      {/* Hero Header */}
      <div className="bg-slate-900 py-16 mb-12 relative overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
         <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Finalize Your Quote Request</h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Please review your details below. Our team will generate a formal proforma invoice based on this information.
            </p>
         </div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: The Form (8 cols) */}
          <div className="md:col-span-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
                {/* Organization Details */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 transition-shadow hover:shadow-md">
                  <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                     <div className="bg-blue-50 p-2 rounded-lg"><Building2 className="h-6 w-6 text-blue-600" /></div>
                     <h2 className="text-xl font-bold text-slate-900">Organization Details</h2>
                  </div>
                  
                  <div className="grid gap-6">
                    <FormField control={form.control} name="companyName" render={({ field }) => (
                      <FormItem><FormLabel className="text-slate-700 font-semibold">Organization / Company Name *</FormLabel><FormControl><Input className="h-12" placeholder="e.g. Ministry of Textiles / Seatech Pvt Ltd" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="address" render={({ field }) => (
                      <FormItem><FormLabel className="text-slate-700 font-semibold">Billing Address *</FormLabel><FormControl><Textarea className="min-h-[80px]" placeholder="Enter complete billing address" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <FormField control={form.control} name="gstNumber" render={({ field }) => (
                        <FormItem><FormLabel className="text-slate-700 font-semibold">GST Number (Optional)</FormLabel><FormControl><Input className="h-12 font-mono" placeholder="22AAAAA0000A1Z5" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                  </div>
                </div>

                {/* Contact Person */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 transition-shadow hover:shadow-md">
                  <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                     <div className="bg-blue-50 p-2 rounded-lg"><User className="h-6 w-6 text-blue-600" /></div>
                     <h2 className="text-xl font-bold text-slate-900">Contact Person</h2>
                  </div>
                  
                  <div className="grid gap-6">
                      <FormField control={form.control} name="contactName" render={({ field }) => (
                        <FormItem><FormLabel className="text-slate-700 font-semibold">Full Name *</FormLabel><FormControl><Input className="h-12" placeholder="Enter your name" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField control={form.control} name="mobile" render={({ field }) => (
                          <FormItem><FormLabel className="text-slate-700 font-semibold">Mobile Number *</FormLabel><FormControl><Input className="h-12" placeholder="10-digit mobile" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                        <FormField control={form.control} name="email" render={({ field }) => (
                          <FormItem><FormLabel className="text-slate-700 font-semibold">Official Email *</FormLabel><FormControl><Input className="h-12" type="email" placeholder="name@organization.com" {...field} /></FormControl><FormMessage /></FormItem>
                        )} />
                      </div>
                  </div>
                </div>

                {/* Financial Section (Optional) */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 transition-shadow hover:shadow-md">
                  <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                     <div className="bg-blue-50 p-2 rounded-lg"><Receipt className="h-6 w-6 text-blue-600" /></div>
                     <div>
                        <h2 className="text-xl font-bold text-slate-900">Financial History</h2>
                        <p className="text-sm text-slate-500">Provide turnover if registering as a new dealer (Optional for quotes)</p>
                     </div>
                  </div>
                  
                  <div className="grid gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="year1" render={({ field }) => (
                        <FormItem><FormLabel>Financial Year 1</FormLabel><FormControl><Input className="h-12" placeholder="e.g. 2023-24" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="turnoverYear1" render={({ field }) => (
                        <FormItem><FormLabel>Turnover (₹)</FormLabel><FormControl><Input className="h-12" type="number" placeholder="0.00" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="year2" render={({ field }) => (
                        <FormItem><FormLabel>Financial Year 2</FormLabel><FormControl><Input className="h-12" placeholder="e.g. 2022-23" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="turnoverYear2" render={({ field }) => (
                        <FormItem><FormLabel>Turnover (₹)</FormLabel><FormControl><Input className="h-12" type="number" placeholder="0.00" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField control={form.control} name="year3" render={({ field }) => (
                        <FormItem><FormLabel>Financial Year 3</FormLabel><FormControl><Input className="h-12" placeholder="e.g. 2021-22" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                      <FormField control={form.control} name="turnoverYear3" render={({ field }) => (
                        <FormItem><FormLabel>Turnover (₹)</FormLabel><FormControl><Input className="h-12" type="number" placeholder="0.00" {...field} /></FormControl><FormMessage /></FormItem>
                      )} />
                    </div>
                  </div>
                </div>
                
                {/* Additional Remarks */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 transition-shadow hover:shadow-md">
                   <div className="flex items-center gap-4 mb-6 border-b border-slate-100 pb-4">
                     <div className="bg-blue-50 p-2 rounded-lg"><FileText className="h-6 w-6 text-blue-600" /></div>
                     <h2 className="text-xl font-bold text-slate-900">Additional Instructions</h2>
                  </div>
                  <FormField control={form.control} name="additionalRemarks" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-700 font-semibold">Remarks</FormLabel>
                      <FormControl>
                        <Textarea className="min-h-[100px]" placeholder="Specific delivery instructions, customization requests, etc." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>

                <div className="pt-4">
                  <Button 
                      type="submit" 
                      className="w-full h-14 text-lg bg-slate-900 hover:bg-blue-700 text-white shadow-xl shadow-slate-200 rounded-xl font-bold transition-all hover:-translate-y-1" 
                      disabled={isSubmitting}
                  >
                      {isSubmitting ? (
                          <span className="flex items-center gap-2"><Loader2 className="animate-spin" /> Processing Request...</span>
                      ) : (
                          <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Submit Quote Request</span>
                      )}
                  </Button>
                </div>
              </form>
            </Form>
          </div>

          {/* RIGHT COLUMN: The Summary (4 cols) */}
          <div className="md:col-span-4">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 sticky top-24">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Receipt className="h-5 w-5 text-blue-600" /> Quote Summary
              </h3>
              
              <div className="bg-slate-50 rounded-lg p-4 mb-6 border border-slate-100 max-h-[400px] overflow-y-auto">
                {quoteListDisplay ? (
                  <pre className="whitespace-pre-wrap font-sans text-sm text-slate-600 leading-relaxed">
                    {quoteListDisplay}
                  </pre>
                ) : (
                  <p className="text-sm text-slate-400 italic">No items added to quote yet.</p>
                )}
              </div>

              <div className="space-y-3 border-t border-slate-100 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Total Items</span>
                  <span className="font-bold text-slate-900">{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Est. Response</span>
                  <span className="font-bold text-emerald-600">24 Hours</span>
                </div>
              </div>

              <Button 
                variant="outline" 
                className="w-full mt-6 text-red-500 border-red-200 hover:bg-red-50 hover:border-red-300"
                onClick={clearQuoteList}
              >
                <Trash2 className="w-4 h-4 mr-2" /> Clear List
              </Button>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DealerApplication;