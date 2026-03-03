import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Menu, ShoppingCart, User, LogOut, FileText, X, ChevronRight, LayoutDashboard, Lock } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import logoSrc from "../assets/logo.png";
import { useCart } from "../contexts/CartContext";
import { supabase } from "../integrations/supabase/client";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const checkUserRole = async (userId: string) => {
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .eq("role", "admin")
        .maybeSingle();
      setIsAdmin(!!data);
    };

    supabase.auth.getSession().then(({ data: { session } }) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) checkUserRole(currentUser.id);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const currentUser = session?.user ?? null;
      setUser(currentUser);
      if (currentUser) checkUserRole(currentUser.id);
      else setIsAdmin(false);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsProfileOpen(false);
    setIsAdmin(false);
    toast.success("Signed out successfully");
    navigate("/");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Category", path: "/products" },
    { name: "Certifications", path: "/certifications" },
    { name: "About Us", path: "/about" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <>
      {/* ── Injected styles ── */}
      <style>{`
        /* Glowing logo effect */
        .logo-glow img {
          filter: brightness(1.6) contrast(1.1) saturate(1.3) drop-shadow(0 0 8px rgba(99,179,237,0.55)) drop-shadow(0 0 22px rgba(59,130,246,0.35));
          transition: filter 0.35s ease, transform 0.35s ease;
        }
        .logo-glow:hover img {
          filter: brightness(1.9) contrast(1.15) saturate(1.5) drop-shadow(0 0 12px rgba(147,210,255,0.75)) drop-shadow(0 0 32px rgba(59,130,246,0.55));
        }

        /* Shimmer sweep on the logo */
        .logo-shimmer {
          position: relative;
          overflow: hidden;
        }
        .logo-shimmer::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.22) 50%, transparent 60%);
          transform: translateX(-120%);
          animation: shimmer 3.5s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes shimmer {
          0%   { transform: translateX(-120%); }
          45%  { transform: translateX(-120%); }
          65%  { transform: translateX(140%); }
          100% { transform: translateX(140%); }
        }

        /* Nav link animated underline */
        .nav-link-underline::after {
          content: "";
          position: absolute;
          bottom: 4px;
          left: 50%;
          width: 0;
          height: 2px;
          border-radius: 99px;
          background: linear-gradient(90deg, #3b82f6, #60a5fa);
          transform: translateX(-50%);
          transition: width 0.28s cubic-bezier(0.34,1.56,0.64,1);
          box-shadow: 0 0 8px rgba(96,165,250,0.6);
        }
        .nav-link-underline:hover::after,
        .nav-link-underline.active::after {
          width: 60%;
        }

        /* Icon button glow on hover */
        .icon-btn:hover {
          box-shadow: 0 0 0 1px rgba(59,130,246,0.5), 0 0 16px rgba(59,130,246,0.2);
        }

        /* OEM button pulse ring */
        .oem-btn {
          position: relative;
        }
        .oem-btn::before {
          content: "";
          position: absolute;
          inset: -2px;
          border-radius: 99px;
          background: linear-gradient(135deg, #3b82f6, #06b6d4, #3b82f6);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: -1;
          filter: blur(6px);
        }
        .oem-btn:hover::before {
          opacity: 0.55;
        }

        /* Frosted glass divider line in navbar */
        .nav-glass-border {
          border-bottom: 1px solid rgba(255,255,255,0.06);
          box-shadow: 0 1px 0 rgba(255,255,255,0.03);
        }

        /* Active dot indicator */
        .active-dot::before {
          content: "";
          position: absolute;
          bottom: 2px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #3b82f6;
          box-shadow: 0 0 6px #3b82f6;
        }

        /* Cart badge glow */
        .cart-badge {
          box-shadow: 0 0 0 2px #111827, 0 0 12px rgba(59,130,246,0.7);
        }

        /* Profile dropdown refined */
        .profile-dropdown {
          backdrop-filter: blur(20px);
          background: rgba(17,24,39,0.92);
        }
      `}</style>

      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 nav-glass-border ${
          scrolled
            ? "h-[68px] bg-[#0d1320]/95 backdrop-blur-2xl"
            : "h-[88px] bg-[#111827]/98 backdrop-blur-md"
        }`}
        style={{
          backgroundImage: scrolled
            ? "none"
            : "linear-gradient(180deg, rgba(30,58,138,0.06) 0%, transparent 100%)",
        }}
      >
        {/* Top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.6) 20%, rgba(96,165,250,0.9) 50%, rgba(6,182,212,0.6) 80%, transparent 100%)",
          }}
        />

        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">

            {/* ── LOGO ── */}
            <Link to="/" className="flex items-center gap-3 z-50 logo-glow logo-shimmer group">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <img
                  src={logoSrc}
                  alt="Seatech"
                  className={`w-auto object-contain transition-all duration-300 ${
                    scrolled ? "h-9 md:h-10" : "h-12 md:h-14"
                  }`}
                />
              </motion.div>
            </Link>

            {/* ── DESKTOP NAV ── */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`nav-link-underline relative px-4 py-2 rounded-full transition-colors duration-200 group ${
                      isActive ? "active-dot" : ""
                    }`}
                    style={{
                      background: isActive
                        ? "rgba(59,130,246,0.08)"
                        : undefined,
                    }}
                  >
                    <span
                      className={`text-[14px] font-semibold tracking-wide transition-colors duration-200 ${
                        isActive
                          ? "text-blue-400"
                          : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* ── ACTIONS ── */}
            <div className="flex items-center gap-2 md:gap-3">
              <div className="hidden md:flex items-center gap-2">

                {/* Search */}
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  onClick={() => setIsSearchOpen(true)}
                  className="icon-btn flex items-center justify-center w-9 h-9 rounded-full border border-white/[0.09] bg-white/[0.04] text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-200"
                >
                  <Search className="h-[14px] w-[14px]" />
                </motion.button>

                {/* Cart */}
                <Link to="/cart">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.93 }}
                    className="icon-btn flex items-center justify-center w-9 h-9 rounded-full border border-white/[0.09] bg-white/[0.04] text-slate-400 hover:text-white hover:border-blue-500/50 transition-all duration-200 relative"
                  >
                    <ShoppingCart className="h-[14px] w-[14px]" />
                    <AnimatePresence>
                      {itemCount > 0 && (
                        <motion.span
                          initial={{ scale: 0, rotate: -15 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0 }}
                          transition={{ type: "spring", stiffness: 500, damping: 20 }}
                          className="cart-badge absolute -top-1 -right-1 h-[18px] w-[18px] bg-blue-500 text-white text-[9px] font-bold flex items-center justify-center rounded-full"
                        >
                          {itemCount}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </Link>

                {/* Profile */}
                <div className="relative">
                  {user ? (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.93 }}
                        className={`icon-btn flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 ${
                          isProfileOpen
                            ? "border-blue-500 bg-blue-500/15 text-blue-400 shadow-[0_0_16px_rgba(59,130,246,0.25)]"
                            : "border-white/[0.09] bg-white/[0.04] text-slate-400 hover:text-white hover:border-blue-500/50"
                        }`}
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                      >
                        <User className="h-[14px] w-[14px]" />
                      </motion.button>

                      <AnimatePresence>
                        {isProfileOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.93 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 28 }}
                            className="profile-dropdown absolute right-0 top-full mt-3 w-[280px] border border-white/[0.09] rounded-2xl shadow-2xl overflow-hidden z-50"
                          >
                            {/* Accent top stripe */}
                            <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

                            <div className="px-5 py-4 border-b border-white/[0.07]">
                              <p className="text-[10px] font-bold text-blue-400/70 uppercase tracking-[0.15em] mb-1">
                                Signed in as
                              </p>
                              <p className="text-sm font-semibold text-white truncate">
                                {user.email}
                              </p>
                            </div>
                            <div className="p-2 space-y-0.5">
                              {isAdmin && (
                                <Link to="/admin" onClick={() => setIsProfileOpen(false)}>
                                  <Button
                                    variant="ghost"
                                    className="w-full justify-start text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-xl h-10 text-[14px]"
                                  >
                                    <Lock className="mr-3 h-3.5 w-3.5 text-blue-400" /> Admin Panel
                                  </Button>
                                </Link>
                              )}
                              <Link to="/dashboard" onClick={() => setIsProfileOpen(false)}>
                                <Button
                                  variant="ghost"
                                  className="w-full justify-start text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-xl h-10 text-[14px]"
                                >
                                  <LayoutDashboard className="mr-3 h-3.5 w-3.5 text-blue-400" /> Dashboard
                                </Button>
                              </Link>
                              <div className="h-px bg-white/[0.07] my-1" />
                              <Button
                                variant="ghost"
                                className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-500/[0.08] rounded-xl h-10 text-[14px]"
                                onClick={handleLogout}
                              >
                                <LogOut className="mr-3 h-3.5 w-3.5" /> Sign Out
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                      {isProfileOpen && (
                        <div
                          className="fixed inset-0 z-40"
                          onClick={() => setIsProfileOpen(false)}
                        />
                      )}
                    </>
                  ) : (
                    <Link to="/auth">
                      <Button
                        variant="ghost"
                        className="h-9 px-5 rounded-full text-[14px] font-semibold text-slate-300 hover:text-white border border-white/[0.09] hover:border-blue-500/50 hover:bg-white/[0.05] transition-all"
                      >
                        Login
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              {/* OEM Request Button */}
              <div className="hidden lg:block ml-1">
                <Link to="/request-oem">
                  <div className="oem-btn">
                    <Button
                      className="rounded-full px-5 h-9 text-[14px] font-bold tracking-wide"
                      style={{
                        background: "linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #0ea5e9 100%)",
                        boxShadow: "0 0 20px rgba(37,99,235,0.35), 0 2px 8px rgba(0,0,0,0.3)",
                      }}
                    >
                      <FileText className="mr-2 h-3.5 w-3.5" /> OEM Request
                    </Button>
                  </div>
                </Link>
              </div>

              {/* Mobile Menu Trigger */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden rounded-full w-9 h-9 text-slate-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.08] ml-1"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>

                {/* ── MOBILE SHEET ── */}
                <SheetContent
                  side="right"
                  className="w-full sm:w-[400px] bg-[#0d1117] border-l border-white/[0.07] p-0 z-[100] flex flex-col"
                >
                  {/* Sheet Header */}
                  <div className="p-5 flex items-center justify-between border-b border-white/[0.07] bg-[#111827]">
                    <div className="logo-glow logo-shimmer">
                      <img src={logoSrc} alt="Seatech" className="h-8 w-auto" />
                    </div>
                    <SheetClose asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-slate-400 hover:text-white hover:bg-white/[0.07] w-9 h-9"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </SheetClose>
                  </div>

                  <div className="flex-1 overflow-y-auto p-5 space-y-5">
                    {/* OEM CTA */}
                    <SheetClose asChild>
                      <Link to="/request-oem">
                        <Button
                          className="w-full rounded-xl h-12 text-sm font-bold tracking-wide"
                          style={{
                            background: "linear-gradient(135deg, #1d4ed8, #2563eb, #0ea5e9)",
                            boxShadow: "0 0 24px rgba(37,99,235,0.3)",
                          }}
                        >
                          <FileText className="mr-2 h-4 w-4" /> Request OEM Auth
                        </Button>
                      </Link>
                    </SheetClose>

                    {/* Mobile Search */}
                    <div className="relative">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                      <input
                        type="search"
                        placeholder="Search products..."
                        className="w-full h-11 pl-11 pr-4 rounded-xl bg-white/[0.04] border border-white/[0.09] text-white placeholder:text-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500/60 focus:border-blue-500/50 transition-all text-sm"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            navigate(
                              `/products?search=${encodeURIComponent(e.currentTarget.value)}`
                            );
                          }
                        }}
                      />
                    </div>

                    {/* Cart Link */}
                    <SheetClose asChild>
                      <Link to="/cart">
                        <Button
                          variant="outline"
                          className="w-full justify-between h-12 rounded-xl border-white/[0.09] bg-white/[0.02] hover:border-blue-500/50 hover:bg-white/[0.05] group transition-all"
                        >
                          <span className="flex items-center text-slate-300 group-hover:text-white text-sm font-medium">
                            <ShoppingCart className="mr-3 h-4 w-4" /> Quote Cart
                          </span>
                          {itemCount > 0 && (
                            <span className="cart-badge h-6 w-6 bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                              {itemCount}
                            </span>
                          )}
                        </Button>
                      </Link>
                    </SheetClose>

                    {/* Nav Links */}
                    <div className="space-y-0.5">
                      {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                          <Link key={link.path} to={link.path}>
                            <SheetClose asChild>
                              <Button
                                variant="ghost"
                                className={`w-full justify-between text-[14px] font-medium h-11 rounded-xl group transition-all ${
                                  isActive
                                    ? "text-blue-400 bg-blue-500/[0.08] border border-blue-500/20"
                                    : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                                }`}
                              >
                                {link.name}
                                <ChevronRight
                                  className={`h-4 w-4 transition-all ${
                                    isActive
                                      ? "opacity-100 text-blue-400"
                                      : "opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"
                                  }`}
                                />
                              </Button>
                            </SheetClose>
                          </Link>
                        );
                      })}
                    </div>

                    {/* User Account */}
                    {user ? (
                      <div
                        className="rounded-2xl border border-white/[0.07] overflow-hidden"
                        style={{ background: "rgba(255,255,255,0.02)" }}
                      >
                        <div className="px-4 py-3 border-b border-white/[0.07]">
                          <p className="text-[10px] font-bold text-blue-400/60 uppercase tracking-widest mb-0.5">
                            Account
                          </p>
                          <p className="text-sm font-semibold text-white truncate">
                            {user.email}
                          </p>
                        </div>
                        <div className="p-3 space-y-2">
                          {isAdmin && (
                            <Link to="/admin">
                              <SheetClose asChild>
                                <Button
                                  className="w-full rounded-xl h-10 text-sm"
                                  style={{
                                    background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
                                  }}
                                >
                                  <Lock className="mr-2 h-3.5 w-3.5" /> Admin Panel
                                </Button>
                              </SheetClose>
                            </Link>
                          )}
                          <Link to="/dashboard">
                            <SheetClose asChild>
                              <Button
                                variant="outline"
                                className="w-full rounded-xl h-10 text-sm border-white/[0.09] text-slate-300 hover:text-white hover:bg-white/[0.06]"
                              >
                                <LayoutDashboard className="mr-2 h-3.5 w-3.5" /> Dashboard
                              </Button>
                            </SheetClose>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <Link to="/auth">
                        <SheetClose asChild>
                          <Button
                            variant="outline"
                            className="w-full rounded-xl h-12 text-sm font-bold border-white/[0.1] text-slate-300 hover:text-white hover:bg-white/[0.05]"
                          >
                            Login / Sign Up
                          </Button>
                        </SheetClose>
                      </Link>
                    )}
                  </div>

                  {/* Sheet Footer – Sign Out */}
                  {user && (
                    <div className="p-5 border-t border-white/[0.07]">
                      <SheetClose asChild>
                        <Button
                          variant="ghost"
                          className="w-full text-red-400 hover:text-red-300 hover:bg-red-500/[0.08] h-11 rounded-xl text-sm font-medium"
                          onClick={handleLogout}
                        >
                          <LogOut className="mr-2 h-4 w-4" /> Sign Out
                        </Button>
                      </SheetClose>
                    </div>
                  )}
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* ── SEARCH OVERLAY ── */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-start justify-center pt-28 px-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#0a0f1a]/85 backdrop-blur-xl"
              onClick={() => setIsSearchOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
              className="relative w-full max-w-2xl z-10"
            >
              {/* Top accent */}
              <div className="absolute -top-[2px] left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

              <form
                onSubmit={handleSearch}
                className="relative bg-[#111827]/95 backdrop-blur-xl rounded-2xl border border-white/[0.1] shadow-[0_24px_60px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)] overflow-hidden flex items-center p-2 focus-within:border-blue-500/40 focus-within:shadow-[0_24px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(59,130,246,0.12)] transition-all"
              >
                <Search className="h-5 w-5 text-blue-400/70 ml-4 flex-shrink-0" />
                <input
                  type="search"
                  placeholder="Search for products, categories..."
                  className="flex-1 h-14 px-4 bg-transparent border-0 focus:ring-0 text-base font-medium text-white placeholder:text-slate-600 outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white/[0.07] w-10 h-10 mr-1 text-slate-500 hover:text-white flex-shrink-0"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </form>

              <p className="text-center text-[11px] text-slate-600 mt-3 font-medium tracking-wide">
                Press{" "}
                <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.1] text-slate-500 font-mono text-[10px]">
                  Enter
                </kbd>{" "}
                to search ·{" "}
                <kbd className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.1] text-slate-500 font-mono text-[10px]">
                  Esc
                </kbd>{" "}
                to dismiss
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;