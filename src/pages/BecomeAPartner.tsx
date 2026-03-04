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
import { User, FileText, CheckCircle, Loader2, Handshake, MapPin } from "lucide-react";
import { sendFormEmail } from "@/utils/email";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  // Partnership Details
  partnershipType: z.string().min(1, "Please select a partnership type"),
  operatingRegion: z.string().trim().min(2, "Operating region/state is required"),
  annualTurnover: z.string().optional(),

  // Contact Person
  contactName: z.string().trim().min(2, "Contact name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  mobile: z.string().trim().regex(/^[0-9]{10}$/, "Mobile must be 10 digits"),

  // Requirements
  additionalRemarks: z.string().trim().max(1000).optional(),
});

const BecomeAPartner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      partnershipType: "",
      operatingRegion: "",
      annualTurnover: "",
      contactName: "",
      email: "",
      mobile: "",
      additionalRemarks: "",
    },
  });

  // 1. Fetch User Profile to Auto-Fill
  useEffect(() => {
    const fetchUserProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (user) {
        // FIX: Cast supabase to any to bypass strict type checking on the table
        const { data, error } = await (supabase as any)
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .maybeSingle();

        if (error) {
          console.error("Error fetching profile:", error);
          return;
        }

        const profile = data as any;

        if (profile) {
          form.reset({
            ...form.getValues(),
            contactName: profile.contact_person || "",
            email: user.email || "",
            mobile: profile.phone || "",
          });
        } else {
          form.setValue('email', user.email || "");
        }
      }
    };
    fetchUserProfile();
  }, [form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      let userId = user?.id;
      // A. Save/Update Profile (Silent failure allowed if not logged in)
      if (userId) {
        const profileData = {
          id: userId,
          contact_person: values.contactName,
          email: values.email,
          phone: values.mobile,
        };
        await (supabase as any).from('profiles').upsert(profileData);
      }

      // B. Save application to database via dealer_applications instead of quotes
      const { error: insertError } = await (supabase as any)
        .from('dealer_applications')
        .insert({
          dealer_name: "Not Provided",
          director_name: values.contactName,
          address: "Not Provided",
          email: values.email,
          mobile: values.mobile,
          director_email: values.email, // using same for now
          director_mobile: values.mobile,
          gst_number: "Not Provided",
          product_requirements: values.partnershipType,
          status: 'pending',
          remarks: `Region: ${values.operatingRegion} | Turnover: ${values.annualTurnover} | Remarks: ${values.additionalRemarks}`
        });

      if (insertError) {
        console.warn("Could not save to database natively, relying on email.", insertError);
      }

      // Generate Reference ID
      const refId = Math.random().toString(36).substring(2, 10).toUpperCase();

      // C. Send notification email
      await sendFormEmail("New Partnership Application", {
        ...values,
        referenceId: refId
      });

      toast.success("Application Submitted Successfully!", {
        description: `Reference ID: ${refId}. Our partnership team will contact you shortly.`,
        duration: 5000,
      });

      // D. Cleanup
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

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 selection:text-blue-100">
      <Navbar />

      {/* Hero Header */}
      <div className="bg-slate-950 pt-32 pb-20 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950 pointer-events-none"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Become a Partner</h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Join the Seatech ecosystem. Whether you're a distributor, retailer, or manufacturer, let's build infrastructure excellence together.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        <div className="max-w-4xl mx-auto">

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

              {/* Partnership Details */}
              <div className="bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800 transition-shadow hover:shadow-xl hover:border-slate-700">
                <div className="flex items-center gap-4 mb-6 border-b border-slate-800 pb-4">
                  <div className="bg-blue-500/10 p-2 rounded-lg"><Handshake className="h-6 w-6 text-blue-400" /></div>
                  <h2 className="text-xl font-bold text-white">Partnership Interest</h2>
                </div>

                <div className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="partnershipType" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300 font-semibold">Type of Partnership *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 bg-slate-800 border-slate-700 text-white focus:ring-blue-500">
                              <SelectValue placeholder="Select interest" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-slate-800 border-slate-700 text-white">
                            <SelectItem value="Distributor">Distributor / Dealer</SelectItem>
                            <SelectItem value="Retailer">Retailer</SelectItem>
                            <SelectItem value="OEM Partner">OEM Manufacturer</SelectItem>
                            <SelectItem value="Consultant">System Integrator / Consultant</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )} />
                    <FormField control={form.control} name="annualTurnover" render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300 font-semibold">Annual Business Volume (Optional)</FormLabel>
                        <FormControl>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-12 bg-slate-800 border-slate-700 text-white focus:ring-blue-500">
                                <SelectValue placeholder="Select range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-slate-800 border-slate-700 text-white">
                              <SelectItem value="< 1 Cr">Under 1 Crore INR</SelectItem>
                              <SelectItem value="1 Cr - 5 Cr">1 Cr - 5 Cr</SelectItem>
                              <SelectItem value="5 Cr - 10 Cr">5 Cr - 10 Cr</SelectItem>
                              <SelectItem value="> 10 Cr">Over 10 Crore INR</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )} />
                  </div>
                  <FormField control={form.control} name="operatingRegion" render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300 font-semibold">Operating Region / State *</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-slate-400" />
                          <Input className="pl-10 h-12 bg-slate-800 border-slate-700 text-white focus:border-blue-500" placeholder="e.g. Maharashtra, North India, Pan India" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                </div>
              </div>

              {/* Contact Person */}
              <div className="bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800 transition-shadow hover:shadow-xl hover:border-slate-700">
                <div className="flex items-center gap-4 mb-6 border-b border-slate-800 pb-4">
                  <div className="bg-blue-500/10 p-2 rounded-lg"><User className="h-6 w-6 text-blue-400" /></div>
                  <h2 className="text-xl font-bold text-white">Contact Person</h2>
                </div>

                <div className="grid gap-6">
                  <FormField control={form.control} name="contactName" render={({ field }) => (
                    <FormItem><FormLabel className="text-slate-300 font-semibold">Full Name *</FormLabel><FormControl><Input className="h-12 bg-slate-800 border-slate-700 text-white focus:border-blue-500" placeholder="Enter your name" {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField control={form.control} name="mobile" render={({ field }) => (
                      <FormItem><FormLabel className="text-slate-300 font-semibold">Mobile Number *</FormLabel><FormControl><Input className="h-12 bg-slate-800 border-slate-700 text-white focus:border-blue-500" placeholder="10-digit mobile" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                    <FormField control={form.control} name="email" render={({ field }) => (
                      <FormItem><FormLabel className="text-slate-300 font-semibold">Official Email *</FormLabel><FormControl><Input className="h-12 bg-slate-800 border-slate-700 text-white focus:border-blue-500" type="email" placeholder="name@organization.com" {...field} /></FormControl><FormMessage /></FormItem>
                    )} />
                  </div>
                </div>
              </div>

              {/* Additional Remarks */}
              <div className="bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-800 transition-shadow hover:shadow-xl hover:border-slate-700">
                <div className="flex items-center gap-4 mb-6 border-b border-slate-800 pb-4">
                  <div className="bg-blue-500/10 p-2 rounded-lg"><FileText className="h-6 w-6 text-blue-400" /></div>
                  <h2 className="text-xl font-bold text-white">Additional Instructions</h2>
                </div>
                <FormField control={form.control} name="additionalRemarks" render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-slate-300 font-semibold">Remarks</FormLabel>
                    <FormControl>
                      <Textarea className="min-h-[100px] bg-slate-800 border-slate-700 text-white focus:border-blue-500" placeholder="Specific delivery instructions, customization requests, etc." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />
              </div>

              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full h-14 text-lg bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-900/20 rounded-xl font-bold transition-all hover:-translate-y-1 border border-blue-500"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2"><Loader2 className="animate-spin" /> Processing...</span>
                  ) : (
                    <span className="flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Submit Application</span>
                  )}
                </Button>
              </div>
            </form>
          </Form>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BecomeAPartner;
