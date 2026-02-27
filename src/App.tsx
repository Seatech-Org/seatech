import { Suspense, lazy } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { Loader2 } from "lucide-react";
import { HelmetProvider } from "react-helmet-async";

// --- LAZY LOADED PAGES ---
const Index = lazy(() => import("./pages/Index"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const DealerApplication = lazy(() => import("./pages/DealerApplication"));
const Contact = lazy(() => import("./pages/Contact"));
const Location = lazy(() => import("./pages/Location"));
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const CartPage = lazy(() => import("./pages/CartPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Clients = lazy(() => import("./pages/Clients"));
const RequestOEMAuthorization = lazy(() => import("./pages/RequestOEMAuthorization"));
const GovernmentProcurement = lazy(() => import("./pages/GovernmentProcurement"));
const QuoteRequest = lazy(() => import("./pages/QuoteRequest"));

const queryClient = new QueryClient();

// Cinematic Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center">
    <div className="relative">
      <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full animate-pulse"></div>
      <Loader2 className="h-12 w-12 text-blue-500 animate-spin relative z-10" />
    </div>
    <p className="mt-4 text-slate-500 font-medium tracking-widest uppercase text-xs animate-pulse">Loading Seatech...</p>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <CartProvider>
          <Sonner />
          <BrowserRouter>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productId" element={<ProductDetailPage />} />
                <Route path="/dealer-application" element={<DealerApplication />} />
                <Route path="/quote-request" element={<QuoteRequest />} />
                <Route path="/request-oem" element={<RequestOEMAuthorization />} />
                <Route path="/government-procurement" element={<GovernmentProcurement />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/location" element={<Location />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/clients" element={<Clients />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
