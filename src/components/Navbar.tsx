import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, ShoppingCart, User, LogOut, FileText, X, ChevronRight, LayoutDashboard } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import logoSrc from "../assets/logo.png";
import { useCart } from "../contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import { supabase } from "../integrations/supabase/client";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();
  
  // --- Auth State ---
  const [user, setUser] = useState<any>(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsProfileOpen(false);
    toast.success("Signed out successfully");
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Catalogue", path: "/products" },
    { name: "Dealers", path: "/dealer-application" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  // --- SMART VISIBILITY LOGIC ---
  const isHomePage = location.pathname === "/";
  // Light Skin (White Text) ONLY on Home Page top.
  const useLightSkin = isHomePage && !scrolled;

  // Colors
  const textColorClass = useLightSkin 
    ? "text-slate-200 hover:text-white" 
    : "text-slate-600 hover:text-blue-700";

  const buttonBgClass = useLightSkin
    ? "bg-white/10 hover:bg-white/20 border-white/20 text-white"
    : "hover:bg-slate-100 text-slate-600 border-transparent";

  // Mobile Menu Button Color
  const mobileMenuColor = useLightSkin ? "text-white" : "text-slate-100";

  return (
    <>
      <motion.nav    
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b ${
          scrolled 
            ? "h-16 bg-white/60 backdrop-blur-3xl border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]" 
            : "h-20 bg-transparent border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 h-full">
          {/* Using justify-between to push Logo Left and Menu Right */}
          <div className="flex items-center justify-between h-full relative">
            
            {/* --- LOGO --- */}
            {/* Added absolute centering for mobile if you strictly want it in the middle, 
                but to keep it clean and robust with the menu on right, standard flex behavior is best. 
                If you want strictly middle on phone: className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0" 
                But this can overlap the menu button on small screens. Keeping it Left-Aligned is safer for "uncluttered".
            */}
            <Link to="/" className="flex items-center gap-3 group relative z-50">
              <motion.div 
                layout 
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Logo Glow */}
                <div className={`absolute inset-0 bg-white/40 blur-xl rounded-full transition-opacity duration-500 ${useLightSkin ? "opacity-0 group-hover:opacity-100" : "opacity-0"}`}></div>
                <img 
                  src={logoSrc} 
                  alt="Seatech" 
                  className={`w-auto object-contain transition-all duration-500 drop-shadow-sm ${scrolled ? "h-8 md:h-10" : "h-10 md:h-14"}`} 
                />
              </motion.div>
            </Link>

            {/* --- DESKTOP NAV --- */}
            <div className={`hidden md:flex items-center p-1.5 rounded-full border backdrop-blur-md transition-all duration-500 ${
              useLightSkin 
                ? "bg-white/10 border-white/20 shadow-lg shadow-black/5" 
                : "bg-slate-100/50 border-white/50 shadow-inner"
            }`}>
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link key={link.path} to={link.path} className="relative px-5 py-2 rounded-full text-sm font-bold transition-colors duration-300">
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-white rounded-full shadow-sm"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 ${isActive ? "text-blue-600" : textColorClass}`}>
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* --- ACTIONS WRAPPER --- */}
            <div className="flex items-center gap-2 md:gap-3">
              
              {/* --- DESKTOP ICONS (HIDDEN ON MOBILE) --- */}
              <div className="hidden md:flex items-center gap-2 md:gap-3">
                {/* Search */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsSearchOpen(true)}
                  className={`p-2.5 rounded-full transition-colors border ${buttonBgClass}`}
                >
                  <Search className={`h-5 w-5 ${useLightSkin ? "mix-blend-overlay" : ""}`} />
                </motion.button>

                {/* Cart */}
                <Link to="/cart">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2.5 relative rounded-full transition-colors border ${buttonBgClass}`}
                  >
                    <ShoppingCart className={`h-5 w-5 ${useLightSkin ? "mix-blend-overlay" : ""}`} />
                    <AnimatePresence>
                      {itemCount > 0 && (
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="absolute -top-0.5 -right-0.5 h-5 w-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-white/80 shadow-lg"
                        >
                          {itemCount}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </Link>

                {/* User Profile */}
                <div className="relative ml-2">
                  {user ? (
                    <>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all ${
                          isProfileOpen 
                            ? "border-blue-200 bg-blue-50 text-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.3)]" 
                            : buttonBgClass
                        }`}
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                      >
                        <User className="h-5 w-5" />
                      </motion.button>
                      
                      <AnimatePresence>
                        {isProfileOpen && (
                          <motion.div 
                            initial={{ opacity: 0, y: 15, scale: 0.95, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: 10, scale: 0.95, filter: "blur(10px)" }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            className="absolute right-0 top-full mt-4 w-72 bg-white/70 backdrop-blur-3xl rounded-[2rem] shadow-[0_20px_50px_rgba(8,_112,_184,_0.1)] border border-white/60 overflow-hidden z-50"
                          >
                            <div className="px-6 py-5 border-b border-slate-100/50 bg-gradient-to-b from-white/40 to-transparent">
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Account</p>
                              <p className="text-sm font-bold text-slate-900 truncate">{user.email}</p>
                            </div>
                            <div className="p-3 space-y-1">
                              <Link to="/dealer-application" onClick={() => setIsProfileOpen(false)}>
                                <Button variant="ghost" className="w-full justify-between text-slate-600 hover:text-blue-700 hover:bg-blue-50/50 rounded-2xl h-12 px-4 font-medium transition-all group">
                                  <span className="flex items-center"><LayoutDashboard className="mr-3 h-4 w-4" /> Dashboard</span>
                                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Button>
                              </Link>
                              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent my-1" />
                              <Button 
                                variant="ghost" 
                                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50/50 rounded-2xl h-12 px-4 font-medium transition-all"
                                onClick={handleLogout}
                              >
                                <LogOut className="mr-3 h-4 w-4" /> Sign Out
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {isProfileOpen && (
                        <div className="fixed inset-0 z-40" onClick={() => setIsProfileOpen(false)} />
                      )}
                    </>
                  ) : (
                    <Link to="/auth">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className={`rounded-full font-semibold px-6 h-10 shadow-xl transition-all ${
                          useLightSkin 
                            ? "bg-white text-slate-900 hover:bg-blue-50" 
                            : "bg-slate-900 hover:bg-blue-700 text-white"
                        }`}>
                          Login
                        </Button>
                      </motion.div>
                    </Link>
                  )}
                </div>
              </div>

              {/* --- MOBILE MENU BUTTON (VISIBLE ON MOBILE) --- */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className={`md:hidden rounded-full w-10 h-10 ml-auto transition-colors hover:bg-white/20 ${mobileMenuColor}`}>
                    <Menu className="h-7 w-7" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-full sm:w-[400px] bg-white/95 backdrop-blur-3xl border-l border-white/20 p-0 shadow-2xl flex flex-col h-full">
                  
                  {/* Mobile Menu Header */}
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <img src={logoSrc} alt="Seatech" className="h-8 w-auto" />
                    <SheetClose asChild>
                      <Button variant="ghost" size="icon" className="rounded-full hover:bg-slate-100">
                        <X className="h-6 w-6" />
                      </Button>
                    </SheetClose>
                  </div>

                  {/* Mobile Menu Content */}
                  <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                    
                    {/* 1. Mobile Search */}
                    <div className="relative">
                       <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                       <input 
                         type="search" 
                         placeholder="Search products..." 
                         className="w-full h-12 pl-10 pr-4 rounded-xl bg-slate-100 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-900 placeholder:text-slate-400"
                         onKeyDown={(e) => {
                           if (e.key === 'Enter') {
                              navigate(`/products?search=${encodeURIComponent(e.currentTarget.value)}`);
                           }
                         }}
                       />
                    </div>

                    {/* 2. Mobile Cart Button */}
                    <SheetClose asChild>
                      <Link to="/cart">
                        <Button variant="outline" className="w-full justify-between h-14 rounded-2xl border-slate-200 bg-white hover:bg-blue-50 group">
                          <span className="flex items-center text-lg font-semibold text-slate-700 group-hover:text-blue-600">
                            <ShoppingCart className="mr-3 h-5 w-5" /> Your Quote Cart
                          </span>
                          {itemCount > 0 && (
                            <span className="h-6 w-6 bg-blue-600 text-white text-xs font-bold flex items-center justify-center rounded-full">
                              {itemCount}
                            </span>
                          )}
                        </Button>
                      </Link>
                    </SheetClose>

                    {/* 3. Navigation Links */}
                    <div className="space-y-2">
                      {navLinks.map((link) => (
                        <Link key={link.path} to={link.path}>
                          <SheetClose asChild>
                            <Button variant="ghost" className="w-full justify-between text-xl font-bold text-slate-800 hover:text-blue-600 hover:bg-slate-50 h-auto py-3 pl-2 rounded-xl group transition-all">
                              {link.name}
                              <ArrowRight className="h-5 w-5 opacity-50 group-hover:translate-x-1 transition-all text-blue-500" />
                            </Button>
                          </SheetClose>
                        </Link>
                      ))}
                    </div>

                    {/* Mobile Profile Link */}
                    {user ? (
                      <Link to="/dealer-application">
                        <SheetClose asChild>
                          <Button variant="ghost" className="w-full justify-between text-xl font-bold text-slate-800 hover:text-blue-600 hover:bg-slate-50 h-auto py-3 pl-2 rounded-xl group transition-all">
                            Profile
                            <User className="h-5 w-5 opacity-50 group-hover:text-blue-500" />
                          </Button>
                        </SheetClose>
                      </Link>
                    ) : (
                      <Link to="/auth">
                         <SheetClose asChild>
                           <Button variant="ghost" className="w-full justify-between text-xl font-bold text-slate-800 hover:text-blue-600 hover:bg-slate-50 h-auto py-3 pl-2 rounded-xl group transition-all">
                             Login
                             <User className="h-5 w-5 opacity-50 group-hover:text-blue-500" />
                           </Button>
                         </SheetClose>
                      </Link>
                    )}

                  </div>

                  {/* Mobile Footer (Sign Out) */}
                  {user && (
                    <div className="p-6 border-t border-slate-100 bg-slate-50/50 mt-auto">
                         <p className="text-xs text-center font-bold text-slate-400 uppercase tracking-widest mb-3">Signed in as {user.email}</p>
                         <SheetClose asChild>
                           <Button 
                            variant="outline" 
                            className="w-full justify-center text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 h-12 rounded-xl font-semibold bg-white"
                            onClick={handleLogout}
                          >
                            Sign Out
                          </Button>
                         </SheetClose>
                    </div>
                  )}

                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* --- CINEMATIC SEARCH OVERLAY (Desktop) --- */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-start justify-center pt-32 px-4"
          >
            <div 
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-3xl transition-all"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-3xl z-10"
            >
              <form onSubmit={handleSearch} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-cyan-500/40 blur-3xl rounded-full opacity-60 animate-pulse"></div>
                <div className="relative bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden flex items-center p-3 ring-1 ring-white/50 border border-white/40">
                  <Search className="h-7 w-7 text-slate-400 ml-4" />
                  <input
                    type="search"
                    placeholder="Type to search..."
                    className="flex-1 h-16 px-6 bg-transparent border-0 focus:ring-0 text-2xl font-medium placeholder:text-slate-400 text-slate-900"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <div className="flex items-center gap-3 pr-3">
                    <Button 
                      type="button" 
                      variant="ghost" 
                      size="icon" 
                      className="rounded-full hover:bg-slate-200/80 w-12 h-12"
                      onClick={() => setIsSearchOpen(false)}
                    >
                      <X className="h-6 w-6 text-slate-600" />
                    </Button>
                  </div>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Helper for ArrowRight in Mobile Menu
function ArrowRight(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export default Navbar;