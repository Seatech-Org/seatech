import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import { Loader2 } from "lucide-react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate("/dealer-application"); 
      }
    });
  }, [navigate]);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignUp) {
        // --- SIGN UP LOGIC ---
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });
        
        if (error) throw error;
        
        toast.success("Signup successful!");
        
        // Since we disabled "Confirm Email" in Supabase, we get a session immediately.
        // Redirect immediately to the application form.
        if (data.session || data.user) {
          navigate("/dealer-application");
        }

      } else {
        // --- LOGIN LOGIC ---
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        
        if (error) throw error;
        
        toast.success("Welcome back!");
        navigate("/dealer-application");
      }
    } catch (error: any) {
      toast.error(error.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md border-slate-200 shadow-xl bg-white rounded-2xl overflow-hidden">
          <div className="h-2 bg-blue-600 w-full"></div>
          <CardHeader className="text-center space-y-2 pt-8">
            <CardTitle className="text-3xl font-bold text-slate-900 tracking-tight">
              {isSignUp ? "Create an Account" : "Welcome Back"}
            </CardTitle>
            <CardDescription className="text-slate-500 text-base">
              {isSignUp 
                ? "Register to request quotes and track orders" 
                : "Sign in to access your saved quotes"}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleAuth} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <Input 
                  type="email" 
                  placeholder="name@organization.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 ml-1">Password</label>
                <Input 
                  type="password" 
                  placeholder="Min. 6 characters" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-12 text-lg bg-slate-900 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all mt-2" 
                disabled={loading}
              >
                {loading ? <Loader2 className="animate-spin mr-2 h-5 w-5" /> : null}
                {isSignUp ? "Sign Up" : "Sign In"}
              </Button>
            </form>

            <div className="mt-8 text-center text-sm text-slate-500 border-t border-slate-100 pt-6">
              {isSignUp ? "Already have an account? " : "Don't have an account? "}
              <button 
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-blue-600 font-bold hover:text-blue-800 transition-colors"
              >
                {isSignUp ? "Sign In" : "Sign Up Now"}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;