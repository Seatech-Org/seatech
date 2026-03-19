import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase, callAdminAction } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LogOut, CheckCircle, XCircle, Clock, ShoppingBag, User, FileText, Eye, Box, Plus, Pencil, Trash2 } from "lucide-react";
import { fetchProducts, Product } from "@/services/product-service";
import { sendCustomerEmail } from "@/utils/email";

interface DealerApplication {
  id: string;
  dealer_name: string;
  mobile: string;
  email: string;
  director_name: string;
  director_mobile: string;
  gst_number: string;
  product_requirements?: string;
  remarks?: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  turnover_proof_url?: string;
  auth_code?: string;
}

interface QuoteItem {
  product_name: string;
  quantity: number;
}

interface Quote {
  id: string;
  user_id: string;
  status: string;
  total_items: number;
  created_at: string;
  additional_remarks?: string;
  quote_items: QuoteItem[];
  profiles?: {
    contact_person: string;
    company_name: string;
    email: string;
    phone: string;
  };
}

const Admin = () => {
  const navigate = useNavigate();

  const [oemRequests, setOemRequests] = useState<DealerApplication[]>([]);
  const [partnerRequests, setPartnerRequests] = useState<DealerApplication[]>([]);

  // App Approval Dialog State
  const [approveDialogOpen, setApproveDialogOpen] = useState(false);
  const [selectedAppForApproval, setSelectedAppForApproval] = useState<DealerApplication | null>(null);
  const [authCodeInput, setAuthCodeInput] = useState("");
  const [adminRemarkInput, setAdminRemarkInput] = useState("");
  const [isApproving, setIsApproving] = useState(false);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const [isLoadingApps, setIsLoadingApps] = useState(true);
  const [isLoadingQuotes, setIsLoadingQuotes] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);

  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
  const [selectedApp, setSelectedApp] = useState<DealerApplication | null>(null);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const [productFormData, setProductFormData] = useState({
    id: "",
    name: "",
    brand: "Seatech OEM",
    model: "",
    category: "",
    price: 0,
    availability: 0,
    minQty: 1,
    imageMain: "",
    imageThumbnail: ""
  });

  useEffect(() => {
    checkAuth();
  }, []);

  const openAddProduct = () => {
    setEditingProduct(null);
    setProductFormData({
      id: Math.random().toString(36).substr(2, 9),
      name: "",
      brand: "Seatech OEM",
      model: "",
      category: "",
      price: 0,
      availability: 0,
      minQty: 1,
      imageMain: "",
      imageThumbnail: ""
    });
    setIsProductDialogOpen(true);
  };

  const openEditProduct = (product: Product) => {
    setEditingProduct(product);
    setProductFormData({
      id: product.id,
      name: product.name,
      brand: product.brand,
      model: product.model,
      category: product.category,
      price: product.price,
      availability: product.availability,
      minQty: product.minQty,
      imageMain: product.images?.[0]?.main || "",
      imageThumbnail: product.images?.[0]?.thumbnail || ""
    });
    setIsProductDialogOpen(true);
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const productPayload = {
        id: productFormData.id,
        name: productFormData.name,
        brand: productFormData.brand,
        model: productFormData.model,
        category_name: productFormData.category,
        base_price: productFormData.price,
        discount_percentage: 0,
        min_order_qty: productFormData.minQty,
        images: [{ main: productFormData.imageMain, thumbnail: productFormData.imageThumbnail }],
        seller_info: { name: productFormData.brand, verified: true, rating: 4.5 },
        country_of_origin: "India"
      };

      const { error: prodError } = await (supabase as any)
        .from('products')
        .upsert(productPayload);

      if (prodError) throw prodError;

      const { error: invError } = await (supabase as any)
        .from('inventory')
        .upsert({
          product_id: productFormData.id,
          quantity_available: productFormData.availability,
        });

      if (invError) throw invError;

      toast.success(editingProduct ? "Product updated" : "Product added");
      setIsProductDialogOpen(false);
      loadProducts();
    } catch (error) {
      console.error(error);
      toast.error("Operation failed");
    }
  };

  const checkAuth = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      navigate("/auth");
      return;
    }
    // Check role
    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!roleData) {
      toast.error("Access Denied");
      navigate("/");
      return;
    }

    setIsAdmin(true);
    fetchApplications();
    fetchQuotes();
    loadProducts();
  };

  const fetchApplications = async () => {
    setIsLoadingApps(true);
    try {
      const { data } = await callAdminAction('GET', { action: 'list-applications' });
      const allApps: DealerApplication[] = data || [];
      setPartnerRequests(allApps.filter((a: DealerApplication) => a.dealer_name === "Not Provided"));
      setOemRequests(allApps.filter((a: DealerApplication) => a.dealer_name !== "Not Provided"));
    } catch (error: any) {
      toast.error("Failed to load applications");
    } finally {
      setIsLoadingApps(false);
    }
  };

  const fetchQuotes = async () => {
    setIsLoadingQuotes(true);
    try {
      const { data } = await callAdminAction('GET', { action: 'list-quotes' });
      setQuotes(data || []);
    } catch (error: any) {
      console.error("Quote fetch error:", error);
      toast.error("Failed to load quotes");
    } finally {
      setIsLoadingQuotes(false);
    }
  };

  const loadProducts = async () => {
    setIsLoadingProducts(true);
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      toast.error("Failed to load products");
    } finally {
      setIsLoadingProducts(false);
    }
  };

  const updateAppStatus = async (app: DealerApplication, newStatus: string, authCode?: string, adminRemark?: string) => {
    try {
      const payload: any = { action: 'update-app-status', id: app.id, status: newStatus };
      if (authCode) payload.auth_code = authCode;

      await callAdminAction('POST', {}, payload);

      // Send Email Notification to applicant
      const statusText = newStatus === 'approved' ? 'Approved' : 'Rejected';
      const isPartner = app.dealer_name === "Not Provided";
      const subject = `${isPartner ? 'Partnership' : 'OEM Authorization'} Request ${statusText}`;
      
      let msg = `Your recent ${isPartner ? 'partnership' : 'OEM authorization'} request has been ${statusText} by our admin team.\n\n`;
      
      if (newStatus === 'approved' && authCode) {
        msg += `Congratulations! Your official OEM Auth Code is: ${authCode}\n\n`;
      }

      if (newStatus === 'approved' && adminRemark) {
        msg += `Message from Seatech Admin:\n${adminRemark}\n\n`;
      }
      
      msg += `If approved, our team will reach out to you shortly with the next steps.\nIf you have any questions, please contact our support.`;

      // Send the email directly to the applicant
      if (app.email) {
        await sendCustomerEmail(app.email, app.director_name, subject, msg);
      }

      toast.success(`Application ${newStatus}`);
      fetchApplications();
    } catch (error) {
      console.error("App status update error:", error);
      toast.error("Update failed");
    }
  };

  const handleApprovePrompt = (app: DealerApplication) => {
    setSelectedAppForApproval(app);
    setAuthCodeInput("");
    setAdminRemarkInput("");
    setApproveDialogOpen(true);
  };

  const confirmApprove = async () => {
    if (!selectedAppForApproval) return;
    setIsApproving(true);
    await updateAppStatus(selectedAppForApproval, "approved", authCodeInput.trim() || undefined, adminRemarkInput.trim() || undefined);
    setIsApproving(false);
    setApproveDialogOpen(false);
    setSelectedAppForApproval(null);
  };

  const updateQuoteStatus = async (quote: Quote, newStatus: string) => {
    try {
      await callAdminAction('POST', {}, { action: 'update-quote-status', id: quote.id, status: newStatus });

      // Send email notification
      const email = quote.profiles?.email;
      const customerName = quote.profiles?.contact_person || "Customer";
      if (email) {
        const statusText = newStatus === 'approved' ? 'Approved' : 'Rejected';
        const itemsList = quote.quote_items?.map(i => `${i.quantity}x ${i.product_name}`).join(', ') || 'N/A';
        const msg = `Your quote request (Ref: #${quote.id.slice(0, 8)}) has been ${statusText} by our team.\n\nItems: ${itemsList}\n\nIf approved, our sales team will contact you shortly with the formal L1 quotation.\nIf you have questions, please reach out to our support team.`;

        // Send email directly to the customer
        await sendCustomerEmail(email, customerName, `Quote Request ${statusText}`, msg);
      }

      toast.success(`Quote ${newStatus === 'approved' ? 'approved' : 'rejected'} successfully`);
      fetchQuotes();
    } catch (error) {
      console.error("Quote status update error:", error);
      toast.error("Update failed");
    }
  };

  const deleteProduct = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const { error } = await supabase.from("products").delete().eq("id", id);
      if (error) throw error;
      toast.success("Product deleted successfully");
      loadProducts();
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
      case "processed":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/50 hover:bg-green-500/30"><CheckCircle className="h-3 w-3 mr-1" /> Processed</Badge>;
      case "rejected":
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/50 hover:bg-red-500/30"><XCircle className="h-3 w-3 mr-1" /> Rejected</Badge>;
      default:
        return <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/50 hover:bg-blue-500/30"><Clock className="h-3 w-3 mr-1" /> Pending</Badge>;
    }
  };

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-slate-950 font-sans selection:bg-blue-500/30 selection:text-blue-100">
      <header className="border-b border-slate-800 bg-slate-900/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg"><User className="h-5 w-5 text-white" /></div>
            <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
          </div>
          <Button variant="outline" onClick={handleSignOut} className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
            <LogOut className="h-4 w-4 mr-2" /> Sign Out
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="quotes" className="space-y-8">
          <TabsList className="bg-slate-900 border border-slate-800 p-1 rounded-xl h-14 flex overflow-x-auto no-scrollbar">
            <TabsTrigger value="quotes" className="h-12 px-6 rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-white text-slate-400 text-base whitespace-nowrap">
              <ShoppingBag className="h-4 w-4 mr-2" /> Quote Requests
            </TabsTrigger>
            <TabsTrigger value="products" className="h-12 px-6 rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-white text-slate-400 text-base whitespace-nowrap">
              <Box className="h-4 w-4 mr-2" /> Products
            </TabsTrigger>
            <TabsTrigger value="applications" className="h-12 px-6 rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-white text-slate-400 text-base whitespace-nowrap">
              <FileText className="h-4 w-4 mr-2" /> OEM Authorization Requests
            </TabsTrigger>
            <TabsTrigger value="partners" className="h-12 px-6 rounded-lg data-[state=active]:bg-slate-800 data-[state=active]:text-white text-slate-400 text-base whitespace-nowrap">
              <User className="h-4 w-4 mr-2" /> Join as Partner Requests
            </TabsTrigger>
          </TabsList>

          {/* --- QUOTES TAB --- */}
          <TabsContent value="quotes">
            <Card className="border-slate-800 shadow-xl bg-slate-900 text-white">
              <CardHeader className="border-b border-slate-800 pb-6">
                <CardTitle className="text-2xl text-white">Incoming Quote Requests</CardTitle>
                <CardDescription className="text-slate-400">Review and process bulk pricing inquiries from customers.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                {isLoadingQuotes ? (
                  <div className="text-center py-20 text-slate-500">Loading quotes...</div>
                ) : quotes.length === 0 ? (
                  <div className="text-center py-20 text-slate-500">No pending quotes found.</div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-slate-950/50">
                        <TableRow className="border-slate-800 hover:bg-slate-900">
                          <TableHead className="text-slate-400 font-bold">Quote ID</TableHead>
                          <TableHead className="text-slate-400 font-bold">Customer</TableHead>
                          <TableHead className="text-slate-400 font-bold">Company</TableHead>
                          <TableHead className="text-slate-400 font-bold">Items</TableHead>
                          <TableHead className="text-slate-400 font-bold">Date</TableHead>
                          <TableHead className="text-slate-400 font-bold">Status</TableHead>
                          <TableHead className="text-slate-400 font-bold text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {quotes.map((quote) => (
                          <TableRow key={quote.id} className="border-slate-800 hover:bg-slate-800/50 transition-colors">
                            <TableCell className="font-mono text-blue-400">#{quote.id.slice(0, 8)}</TableCell>
                            <TableCell className="font-medium text-white">
                              {quote.profiles?.contact_person || "Unknown User"}
                              <div className="text-xs text-slate-500">{quote.profiles?.email}</div>
                            </TableCell>
                            <TableCell className="text-slate-300">
                              {quote.profiles?.company_name || "-"}
                            </TableCell>
                            <TableCell className="text-white font-bold">{quote.quote_items?.length || 0}</TableCell>
                            <TableCell className="text-slate-500 text-sm">
                              {new Date(quote.created_at).toLocaleDateString()}
                            </TableCell>
                            <TableCell>{getStatusBadge(quote.status)}</TableCell>
                            <TableCell>
                              <div className="flex gap-2 justify-end">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button size="sm" variant="outline" className="border-blue-900/30 text-blue-400 hover:bg-blue-900/20 hover:border-blue-800" onClick={() => setSelectedQuote(quote)}>
                                      <Eye className="h-4 w-4 mr-2" /> View
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-2xl">
                                    <DialogHeader>
                                      <DialogTitle className="text-xl">Quote Details #{selectedQuote?.id.slice(0, 8)}</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-6 pt-4">
                                      <div className="grid grid-cols-2 gap-4 bg-slate-800/50 p-4 rounded-xl border border-slate-800">
                                        <div>
                                          <p className="text-xs text-slate-500 uppercase font-bold">Customer</p>
                                          <p className="text-white font-medium">{selectedQuote?.profiles?.contact_person}</p>
                                          <p className="text-slate-400 text-sm">{selectedQuote?.profiles?.email}</p>
                                          <p className="text-slate-400 text-sm">{selectedQuote?.profiles?.phone}</p>
                                        </div>
                                        <div>
                                          <p className="text-xs text-slate-500 uppercase font-bold">Company</p>
                                          <p className="text-white font-medium">{selectedQuote?.profiles?.company_name || "N/A"}</p>
                                        </div>
                                      </div>

                                      <div>
                                        <h4 className="text-sm font-bold text-slate-400 uppercase mb-3">Requested Items</h4>
                                        <div className="border border-slate-800 rounded-xl overflow-hidden">
                                          <Table>
                                            <TableHeader className="bg-slate-950">
                                              <TableRow className="border-slate-800 hover:bg-slate-950">
                                                <TableHead className="text-slate-400">Product Name</TableHead>
                                                <TableHead className="text-slate-400 text-right">Quantity</TableHead>
                                              </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                              {selectedQuote?.quote_items?.map((item, idx) => (
                                                <TableRow key={idx} className="border-slate-800 hover:bg-slate-800/50">
                                                  <TableCell className="text-slate-200">{item.product_name}</TableCell>
                                                  <TableCell className="text-right text-white font-bold">{item.quantity}</TableCell>
                                                </TableRow>
                                              ))}
                                            </TableBody>
                                          </Table>
                                        </div>
                                      </div>

                                      {selectedQuote?.additional_remarks && (
                                        <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-800">
                                          <p className="text-xs text-slate-500 uppercase font-bold mb-1">Remarks</p>
                                          <p className="text-slate-300 text-sm italic">"{selectedQuote.additional_remarks}"</p>
                                        </div>
                                      )}
                                    </div>
                                  </DialogContent>
                                </Dialog>

                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-green-900/30 text-green-500 hover:bg-green-900/20 hover:text-green-400 hover:border-green-800"
                                  onClick={() => updateQuoteStatus(quote, "approved")}
                                  disabled={quote.status === "approved" || quote.status === "processed"}
                                >
                                  Approve
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-red-900/30 text-red-500 hover:bg-red-900/20 hover:text-red-400 hover:border-red-800"
                                  onClick={() => updateQuoteStatus(quote, "rejected")}
                                  disabled={quote.status === "rejected"}
                                >
                                  Reject
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* --- PRODUCTS TAB --- */}
          <TabsContent value="products">
            <Card className="border-slate-800 shadow-xl bg-slate-900 text-white">
              <CardHeader className="border-b border-slate-800 pb-6 flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle className="text-2xl text-white">Product Catalog</CardTitle>
                  <CardDescription className="text-slate-400">Manage your product listings and inventory.</CardDescription>
                </div>
                <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-500 text-white" onClick={openAddProduct}>
                      <Plus className="h-4 w-4 mr-2" /> Add Product
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl">{editingProduct ? "Edit Product" : "Add New Product"}</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleProductSubmit} className="space-y-6 pt-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400">Product Name</label>
                          <input required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.name} onChange={(e) => setProductFormData({ ...productFormData, name: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400">Brand</label>
                          <input required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.brand} onChange={(e) => setProductFormData({ ...productFormData, brand: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400">Model</label>
                          <input required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.model} onChange={(e) => setProductFormData({ ...productFormData, model: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400">Category</label>
                          <input required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.category} onChange={(e) => setProductFormData({ ...productFormData, category: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400">Price (₹)</label>
                          <input required type="number" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.price} onChange={(e) => setProductFormData({ ...productFormData, price: parseInt(e.target.value) })} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400">Stock Availability</label>
                          <input required type="number" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.availability} onChange={(e) => setProductFormData({ ...productFormData, availability: parseInt(e.target.value) })} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400">Main Image URL</label>
                          <input required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.imageMain} onChange={(e) => setProductFormData({ ...productFormData, imageMain: e.target.value })} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400">Thumbnail URL</label>
                          <input required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.imageThumbnail} onChange={(e) => setProductFormData({ ...productFormData, imageThumbnail: e.target.value })} />
                        </div>
                      </div>
                      <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                        <Button type="button" variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800" onClick={() => setIsProductDialogOpen(false)}>Cancel</Button>
                        <Button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white">
                          {editingProduct ? "Update Product" : "Save Product"}
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent className="p-0">
                {isLoadingProducts ? (
                  <div className="text-center py-20 text-slate-500">Loading products...</div>
                ) : products.length === 0 ? (
                  <div className="text-center py-20 text-slate-500">No products found.</div>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-slate-950/50">
                        <TableRow className="border-slate-800 hover:bg-slate-900">
                          <TableHead className="text-slate-400 font-bold">Image</TableHead>
                          <TableHead className="text-slate-400 font-bold">Name / Brand</TableHead>
                          <TableHead className="text-slate-400 font-bold">Category</TableHead>
                          <TableHead className="text-slate-400 font-bold">Price</TableHead>
                          <TableHead className="text-slate-400 font-bold">Stock</TableHead>
                          <TableHead className="text-slate-400 font-bold text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {products.map((product) => (
                          <TableRow key={product.id} className="border-slate-800 hover:bg-slate-800/50 transition-colors">
                            <TableCell>
                              <div className="h-12 w-12 rounded bg-slate-800 overflow-hidden border border-slate-700">
                                {product.images?.[0]?.thumbnail ? (
                                  <img src={product.images[0].thumbnail} alt={product.name} className="h-full w-full object-cover" />
                                ) : (
                                  <div className="h-full w-full flex items-center justify-center text-slate-600"><Box className="h-6 w-6" /></div>
                                )}
                              </div>
                            </TableCell>
                            <TableCell className="font-medium">
                              <div className="text-white">{product.name}</div>
                              <div className="text-xs text-slate-500">{product.brand} | {product.model}</div>
                            </TableCell>
                            <TableCell className="text-slate-300">
                              {product.category}
                            </TableCell>
                            <TableCell className="text-white font-mono">₹{product.price.toLocaleString()}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className={product.availability > 0 ? "border-green-500/50 text-green-400" : "border-red-500/50 text-red-400"}>
                                {product.availability}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <div className="flex gap-2 justify-end">
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-slate-400 hover:text-white hover:bg-slate-800" onClick={() => openEditProduct(product)}>
                                  <Pencil className="h-4 w-4" />
                                </Button>
                                <Button size="icon" variant="ghost" className="h-8 w-8 text-red-400 hover:text-red-500 hover:bg-red-950/30" onClick={() => deleteProduct(product.id)}>
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* --- APPLICATIONS TAB --- */}
          <TabsContent value="applications">
            <Card className="border-slate-800 shadow-xl bg-slate-900 text-white">
              <CardHeader className="border-b border-slate-800 pb-6">
                <CardTitle className="text-2xl text-white">OEM Authorization Requests</CardTitle>
                <CardDescription className="text-slate-400">Manage OEM authorization requests.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                {isLoadingApps ? (
                  <p className="text-center py-12 text-slate-500">Loading requests...</p>
                ) : oemRequests.length === 0 ? (
                  <p className="text-center py-12 text-slate-500">No requests found</p>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-slate-950/50">
                        <TableRow className="border-slate-800 hover:bg-slate-900">
                          <TableHead className="text-slate-400 font-bold">Dealer Name</TableHead>
                          <TableHead className="text-slate-400 font-bold">Contact</TableHead>
                          <TableHead className="text-slate-400 font-bold">GST Number</TableHead>
                          <TableHead className="text-slate-400 font-bold">Director</TableHead>
                          <TableHead className="text-slate-400 font-bold">Status</TableHead>
                          <TableHead className="text-slate-400 font-bold">Submitted</TableHead>
                          <TableHead className="text-slate-400 font-bold text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {oemRequests.map((app) => (
                          <TableRow key={app.id} className="border-slate-800 hover:bg-slate-800/50 transition-colors">
                            <TableCell className="font-medium text-white">{app.dealer_name}</TableCell>
                            <TableCell>
                              <div className="text-sm">
                                <div className="text-slate-300">{app.email}</div>
                                <div className="text-slate-500 text-xs">{app.mobile}</div>
                              </div>
                            </TableCell>
                            <TableCell className="font-mono text-sm text-slate-400">{app.gst_number}</TableCell>
                            <TableCell>
                              <div className="text-sm">
                                <div className="text-slate-300">{app.director_name}</div>
                                <div className="text-slate-500 text-xs">{app.director_mobile}</div>
                              </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(app.status)}</TableCell>
                            <TableCell className="text-sm text-slate-500">{new Date(app.created_at).toLocaleDateString()}</TableCell>
                            <TableCell>
                              <div className="flex gap-2 justify-end">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button size="sm" variant="outline" className="border-blue-900/30 text-blue-400 hover:bg-blue-900/20 hover:border-blue-800" onClick={() => setSelectedApp(app)}>
                                      <Eye className="h-4 w-4 mr-2" /> View
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-2xl">
                                    <DialogHeader>
                                      <DialogTitle className="text-xl">OEM Request Details</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4 pt-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                                          <p className="text-xs text-slate-500 uppercase">Dealer Name</p>
                                          <p className="font-medium text-white">{selectedApp?.dealer_name}</p>
                                        </div>
                                        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                                          <p className="text-xs text-slate-500 uppercase">Director</p>
                                          <p className="font-medium text-white">{selectedApp?.director_name}</p>
                                        </div>
                                        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                                          <p className="text-xs text-slate-500 uppercase">Contact</p>
                                          <p className="text-sm text-slate-300">{selectedApp?.email}</p>
                                          <p className="text-sm text-slate-300">{selectedApp?.mobile}</p>
                                        </div>
                                        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                                          <p className="text-xs text-slate-500 uppercase">GST Number</p>
                                          <p className="font-medium text-slate-300">{selectedApp?.gst_number}</p>
                                        </div>
                                      </div>

                                      <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-800 mt-4">
                                        <p className="text-xs text-slate-500 uppercase font-bold mb-2">Requirements / Products</p>
                                        <p className="text-slate-200 whitespace-pre-wrap">{selectedApp?.product_requirements || "None specified"}</p>
                                      </div>

                                      <div className="grid grid-cols-2 gap-4 mt-4">
                                        <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-800">
                                          <p className="text-xs text-slate-500 uppercase font-bold mb-2">Remarks</p>
                                          <p className="text-slate-300 text-sm whitespace-pre-wrap">{selectedApp?.remarks || "No additional remarks."}</p>
                                        </div>

                                        {selectedApp?.turnover_proof_url && (
                                          <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-800">
                                            <p className="text-xs text-slate-500 uppercase font-bold mb-1">Attached Documents</p>
                                            <a href={selectedApp.turnover_proof_url} target="_blank" rel="noreferrer" className="text-blue-400 text-sm font-semibold hover:underline flex items-center gap-2 mt-2">
                                              <FileText className="h-4 w-4" /> View Turnover Proof
                                            </a>
                                          </div>
                                        )}
                                      </div>

                                      {selectedApp?.auth_code && (
                                        <div className="bg-emerald-900/20 p-4 rounded-xl border border-emerald-800/30 mt-4 flex items-center justify-between">
                                          <div>
                                            <p className="text-xs text-emerald-500/70 uppercase font-bold mb-1">Assigned OEM Auth Code</p>
                                            <p className="text-emerald-400 font-mono text-lg font-bold tracking-wider">{selectedApp.auth_code}</p>
                                          </div>
                                          <CheckCircle className="h-6 w-6 text-emerald-500/50" />
                                        </div>
                                      )}
                                    </div>
                                  </DialogContent>
                                </Dialog>

                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-green-900/30 text-green-500 hover:bg-green-900/20 hover:text-green-400 hover:border-green-800"
                                  onClick={() => handleApprovePrompt(app)}
                                  disabled={app.status === "approved"}
                                >
                                  Approve
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-red-900/30 text-red-500 hover:bg-red-900/20 hover:text-red-400 hover:border-red-800"
                                  onClick={() => updateAppStatus(app, "rejected")}
                                  disabled={app.status === "rejected"}
                                >
                                  Reject
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* --- PARTNERS TAB --- */}
          <TabsContent value="partners">
            <Card className="border-slate-800 shadow-xl bg-slate-900 text-white">
              <CardHeader className="border-b border-slate-800 pb-6">
                <CardTitle className="text-2xl text-white">Join as Partner Requests</CardTitle>
                <CardDescription className="text-slate-400">Manage inquiries for distributorship, retail, and OEM partnerships.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                {isLoadingApps ? (
                  <p className="text-center py-12 text-slate-500">Loading requests...</p>
                ) : partnerRequests.length === 0 ? (
                  <p className="text-center py-12 text-slate-500">No partner requests found</p>
                ) : (
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-slate-950/50">
                        <TableRow className="border-slate-800 hover:bg-slate-900">
                          <TableHead className="text-slate-400 font-bold">Contact Person</TableHead>
                          <TableHead className="text-slate-400 font-bold">Email</TableHead>
                          <TableHead className="text-slate-400 font-bold">Phone</TableHead>
                          <TableHead className="text-slate-400 font-bold">Partnership Type</TableHead>
                          <TableHead className="text-slate-400 font-bold">Details</TableHead>
                          <TableHead className="text-slate-400 font-bold">Status</TableHead>
                          <TableHead className="text-slate-400 font-bold">Submitted</TableHead>
                          <TableHead className="text-slate-400 font-bold text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {partnerRequests.map((app) => (
                          <TableRow key={app.id} className="border-slate-800 hover:bg-slate-800/50 transition-colors">
                            <TableCell className="font-medium text-white">{app.director_name}</TableCell>
                            <TableCell className="text-slate-300 text-sm">{app.email}</TableCell>
                            <TableCell className="text-slate-300 text-sm">{app.mobile}</TableCell>
                            <TableCell className="font-medium text-blue-400 text-sm">{app.product_requirements}</TableCell>
                            <TableCell>
                              <div className="text-xs text-slate-400 max-w-[200px] truncate" title={app.remarks || ""}>
                                {app.remarks || "-"}
                              </div>
                            </TableCell>
                            <TableCell>{getStatusBadge(app.status)}</TableCell>
                            <TableCell className="text-sm text-slate-500">{new Date(app.created_at).toLocaleDateString()}</TableCell>
                            <TableCell>
                              <div className="flex gap-2 justify-end">
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <Button size="sm" variant="outline" className="border-blue-900/30 text-blue-400 hover:bg-blue-900/20 hover:border-blue-800" onClick={() => setSelectedApp(app)}>
                                      <Eye className="h-4 w-4 mr-2" /> View
                                    </Button>
                                  </DialogTrigger>
                                  <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-xl">
                                    <DialogHeader>
                                      <DialogTitle className="text-xl">Partner Request Details</DialogTitle>
                                    </DialogHeader>
                                    <div className="space-y-4 pt-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <div className="col-span-2 bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                                          <p className="text-xs text-slate-500 uppercase">Contact Person</p>
                                          <p className="font-medium text-white">{selectedApp?.director_name}</p>
                                        </div>
                                        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                                          <p className="text-xs text-slate-500 uppercase">Email</p>
                                          <p className="text-sm text-slate-300">{selectedApp?.email}</p>
                                        </div>
                                        <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700">
                                          <p className="text-xs text-slate-500 uppercase">Phone</p>
                                          <p className="text-sm text-slate-300">{selectedApp?.mobile}</p>
                                        </div>
                                      </div>

                                      <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-800 mt-2">
                                        <p className="text-xs text-slate-500 uppercase font-bold mb-2">Partnership Type</p>
                                        <p className="text-blue-400 font-bold">{selectedApp?.product_requirements}</p>
                                      </div>

                                      <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-800">
                                        <p className="text-xs text-slate-500 uppercase font-bold mb-2">Details & Remarks</p>
                                        <p className="text-slate-300 text-sm whitespace-pre-wrap">{selectedApp?.remarks || "No additional remarks."}</p>
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>

                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-green-900/30 text-green-500 hover:bg-green-900/20 hover:text-green-400 hover:border-green-800"
                                  onClick={() => handleApprovePrompt(app)}
                                  disabled={app.status === "approved"}
                                >
                                  Process
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-red-900/30 text-red-500 hover:bg-red-900/20 hover:text-red-400 hover:border-red-800"
                                  onClick={() => updateAppStatus(app, "rejected")}
                                  disabled={app.status === "rejected"}
                                >
                                  Reject
                                </Button>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Admin Approval Dialog */}
      <Dialog open={approveDialogOpen} onOpenChange={setApproveDialogOpen}>
        <DialogContent className="bg-slate-900 border border-slate-800 text-white sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-emerald-400 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Approve Application
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              You are about to approve <span className="font-bold text-white">{selectedAppForApproval?.director_name}</span>. Provide any optional details below.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-6 py-4">
            {selectedAppForApproval?.dealer_name !== "Not Provided" && (
              <div className="grid gap-2">
                <Label htmlFor="authCode" className="text-slate-300 font-semibold">OEM Auth Code (Optional)</Label>
                <Input
                  id="authCode"
                  value={authCodeInput}
                  onChange={(e) => setAuthCodeInput(e.target.value)}
                  placeholder="e.g. ST-2024-XYZ"
                  className="bg-slate-950 border-slate-700 text-white focus:ring-emerald-500 focus:border-emerald-500 font-mono"
                />
                <p className="text-xs text-slate-500">This code will immediately be emailed to the applicant.</p>
              </div>
            )}

            <div className="grid gap-2">
              <Label htmlFor="adminRemark" className="text-slate-300 font-semibold">Admin Remarks for Email (Optional)</Label>
              <Textarea
                id="adminRemark"
                value={adminRemarkInput}
                onChange={(e) => setAdminRemarkInput(e.target.value)}
                placeholder="e.g. Welcome aboard! Here is the partner portal link..."
                className="min-h-[100px] bg-slate-950 border-slate-700 text-white focus:ring-emerald-500 focus:border-emerald-500 resize-none"
              />
              <p className="text-xs text-slate-500">These remarks will be securely injected into their approval email.</p>
            </div>
          </div>

          <DialogFooter className="sm:justify-end gap-2">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setApproveDialogOpen(false)}
              className="text-slate-300 hover:text-white hover:bg-slate-800"
              disabled={isApproving}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={confirmApprove}
              className="bg-emerald-600 hover:bg-emerald-500 text-white"
              disabled={isApproving}
            >
              {isApproving ? "Approving..." : "Confirm & Send Email"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;