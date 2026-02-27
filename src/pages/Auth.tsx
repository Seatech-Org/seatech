import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import { Loader2, Building2, User, Phone, MapPin, FileText, Eye, EyeOff, Mail, Lock, ArrowLeft } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // Auth State
  const [isSignUp, setIsSignUp] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isIndividual, setIsIndividual] = useState(true);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // User Fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");

  // Company Fields
  const [companyName, setCompanyName] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    // Check URL for mode
    if (searchParams.get("mode") === "signup") {
      setIsSignUp(true);
    }

    // Redirect if already logged in
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/dashboard"); 
      }
    });
  }, [navigate, searchParams]);

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin + '/dashboard',
        }
      });
      if (error) throw error;
    } catch (error: any) {
      toast.error(error.message || "Google login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/auth?mode=reset',
      });
      if (error) throw error;
      toast.success("Password reset link sent to your email!");
      setIsForgotPassword(false);
    } catch (error: any) {
      toast.error(error.message || "Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let authData;
      let authError;

      if (isSignUp) {
        // --- VALIDATION ---
        if (!fullName || !mobile) {
          throw new Error("Please fill in all required fields.");
        }
        if (!isIndividual && (!companyName || !address)) {
          throw new Error("Please fill in organization details.");
        }

        // --- SIGN UP LOGIC ---
        const result = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
              company_name: isIndividual ? null : companyName,
              phone: mobile,
              is_individual: isIndividual
            }
          }
        });
        authData = result.data;
        authError = result.error;
        
        if (authError) throw authError;
        toast.success("Account created successfully!");

      } else {
        // --- LOGIN LOGIC ---
        const result = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        authData = result.data;
        authError = result.error;

        if (authError) throw authError;
        toast.success("Welcome back!");
      }

      // --- SYNC TO PROFILES TABLE ---
      if (authData?.user) {
        const profileUpdate: any = {
          id: authData.user.id,
          email: authData.user.email,
          updated_at: new Date().toISOString(),
        };

        // Only update these on sign up (or if they were provided)
        if (isSignUp) {
          profileUpdate.contact_person = fullName;
          profileUpdate.phone = mobile;
          if (!isIndividual) {
            profileUpdate.company_name = companyName;
            profileUpdate.address = address;
            profileUpdate.gst_number = gstNumber;
          }
        }

        const { error: profileError } = await (supabase as any)
          .from('profiles')
          .upsert(profileUpdate, { onConflict: 'id' });

        if (profileError) {
          console.error("Profile sync error:", profileError);
        }
      }

      // Determine redirect
      navigate("/dashboard");

    } catch (error: any) {
      toast.error(error.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  if (isForgotPassword) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col font-sans">
        <Navbar />
        <div className="flex-grow flex items-center justify-center px-4 py-12 pt-32 pb-24">
          <Card className="w-full max-w-md border-slate-800 shadow-2xl bg-slate-900 rounded-2xl overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600 w-full"></div>
            <CardHeader className="text-center space-y-2 pt-8">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-blue-500/10 rounded-full">
                  <Lock className="h-8 w-8 text-blue-500" />
                </div>
              </div>
              <CardTitle className="text-3xl font-bold text-white tracking-tight">
                Forgot Password?
              </CardTitle>
              <CardDescription className="text-slate-400 text-base">
                Enter your email to receive a password reset link.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-4">
              <form onSubmit={handleForgotPassword} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300 ml-1">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                    <Input 
                      type="email" 
                      placeholder="name@example.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-9 h-11 bg-slate-800 border-slate-700 text-white focus:bg-slate-900 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-all" 
                  disabled={loading}
                >
                  {loading ? <Loader2 className="animate-spin mr-2 h-5 w-5" /> : null}
                  Send Reset Link
                </Button>
                <button 
                  type="button"
                  onClick={() => setIsForgotPassword(false)}
                  className="flex items-center justify-center gap-2 w-full text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to Login
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col font-sans">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-12 pt-32 pb-24">
        <Card className="w-full max-w-xl border-slate-800 shadow-2xl bg-slate-900 rounded-2xl overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-blue-600 to-indigo-600 w-full"></div>
          <CardHeader className="text-center space-y-2 pt-8">
            <CardTitle className="text-3xl font-bold text-white tracking-tight">
              {isSignUp ? (isIndividual ? "Create Personal Account" : "Register Organization") : "Member Login"}
            </CardTitle>
            <CardDescription className="text-slate-400 text-base">
              {isSignUp 
                ? "Join Seatech to manage your procurements." 
                : "Access your dashboard and order history."}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-4">
            <div className="grid grid-cols-1 gap-4 mb-8">
              <Button 
                variant="outline" 
                onClick={handleGoogleLogin}
                className="h-12 border-slate-700 bg-slate-800 text-white hover:bg-slate-700 rounded-xl flex items-center justify-center gap-3 font-semibold"
                disabled={loading}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>
              <div className="relative flex items-center gap-2 my-2">
                <span className="h-px bg-slate-800 flex-grow"></span>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Or continue with email</span>
                <span className="h-px bg-slate-800 flex-grow"></span>
              </div>
            </div>

            <form onSubmit={handleAuth} className="space-y-6">
              
              {isSignUp && (
                <>
                  {/* --- ACCOUNT TYPE SELECTOR --- */}
                  <div className="flex p-1 bg-slate-800 rounded-xl mb-6">
                    <button
                      type="button"
                      onClick={() => setIsIndividual(true)}
                      className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${isIndividual ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Individual
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsIndividual(false)}
                      className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${!isIndividual ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-200'}`}
                    >
                      Business
                    </button>
                  </div>

                  {/* --- USER DETAILS SECTION --- */}
                  <div className="space-y-4 animate-in slide-in-from-top-4 fade-in duration-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Full Name *</label>
                            <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                            <Input 
                                placeholder="Your Name" 
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required={isSignUp}
                                className="pl-9 h-11 bg-slate-800 border-slate-700 text-white focus:bg-slate-900 focus:border-blue-500"
                            />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-slate-300 ml-1">Mobile *</label>
                            <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                            <Input 
                                placeholder="10-digit Mobile" 
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required={isSignUp}
                                type="tel"
                                className="pl-9 h-11 bg-slate-800 border-slate-700 text-white focus:bg-slate-900 focus:border-blue-500"
                            />
                            </div>
                        </div>
                    </div>
                  </div>

                  {/* --- ORGANIZATION DETAILS SECTION --- */}
                  {!isIndividual && (
                    <div className="space-y-4 mt-6 animate-in slide-in-from-top-8 fade-in duration-500">
                      <div className="flex items-center gap-2 mb-2 mt-2">
                          <span className="h-px bg-slate-800 flex-grow"></span>
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Organization Details</span>
                          <span className="h-px bg-slate-800 flex-grow"></span>
                      </div>

                      <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300 ml-1">Company Name *</label>
                          <div className="relative">
                          <Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                          <Input 
                              placeholder="Registered Organization Name" 
                              value={companyName}
                              onChange={(e) => setCompanyName(e.target.value)}
                              required={!isIndividual}
                              className="pl-9 h-11 bg-slate-800 border-slate-700 text-white focus:bg-slate-900 focus:border-blue-500"
                          />
                          </div>
                      </div>

                      <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300 ml-1">GST Number (Optional)</label>
                          <div className="relative">
                          <FileText className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                          <Input 
                              placeholder="GSTIN" 
                              value={gstNumber}
                              onChange={(e) => setGstNumber(e.target.value)}
                              className="pl-9 h-11 bg-slate-800 border-slate-700 text-white focus:bg-slate-900 focus:border-blue-500 font-mono"
                          />
                          </div>
                      </div>

                      <div className="space-y-2">
                          <label className="text-sm font-semibold text-slate-300 ml-1">Address *</label>
                          <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                          <Textarea 
                              placeholder="Registered Office Address" 
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              required={!isIndividual}
                              className="pl-9 min-h-[80px] bg-slate-800 border-slate-700 text-white focus:bg-slate-900 focus:border-blue-500 resize-none py-2"
                          />
                          </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-2 mb-2 mt-6">
                        <span className="h-px bg-slate-800 flex-grow"></span>
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Credentials</span>
                        <span className="h-px bg-slate-800 flex-grow"></span>
                  </div>
                </>
              )}

              {/* --- LOGIN / CREDENTIALS --- */}
              <div className="space-y-4">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300 ml-1">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                      <Input 
                        type="email" 
                        placeholder="name@example.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-9 h-11 bg-slate-800 border-slate-700 text-white focus:bg-slate-900 focus:border-blue-500 transition-all"
                      />
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-semibold text-slate-300 ml-1">Password *</label>
                      {!isSignUp && (
                        <button 
                          type="button"
                          onClick={() => setIsForgotPassword(true)}
                          className="text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Forgot Password?
                        </button>
                      )}
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
                      <Input 
                        type={showPassword ? "text" : "password"} 
                        placeholder={isSignUp ? "Create a strong password" : "Enter your password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pl-9 pr-10 h-11 bg-slate-800 border-slate-700 text-white focus:bg-slate-900 focus:border-blue-500 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-slate-500 hover:text-slate-300 transition-colors"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 text-lg bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-all mt-6" 
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin mr-2 h-5 w-5" /> : null}
                {isSignUp ? "Complete Registration" : "Sign In"}
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-slate-400 border-t border-slate-800 pt-6">
              {isSignUp ? "Already have an account? " : "New to Seatech? "}
              <button 
                onClick={() => {
                    setIsSignUp(!isSignUp);
                    // Reset fields when switching
                    setFullName("");
                    setCompanyName("");
                    setAddress("");
                    setGstNumber("");
                    setMobile("");
                    setIsForgotPassword(false);
                }}
                className="text-blue-400 font-bold hover:text-blue-300 transition-colors"
              >
                {isSignUp ? "Sign In Here" : "Create Account"}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;