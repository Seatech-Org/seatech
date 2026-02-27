import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
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
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { LogOut, CheckCircle, XCircle, Clock, ShoppingBag, User, FileText, Eye, Box, Plus, Pencil, Trash2 } from "lucide-react";
import { fetchProducts, Product } from "@/services/product-service";

interface DealerApplication {
  id: string;
  dealer_name: string;
  mobile: string;
  email: string;
  director_name: string;
  director_mobile: string;
  gst_number: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
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
  
  const [applications, setApplications] = useState<DealerApplication[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  
  const [isLoadingApps, setIsLoadingApps] = useState(true);
  const [isLoadingQuotes, setIsLoadingQuotes] = useState(true);
  const [isLoadingProducts, setIsLoadingProducts] = useState(true);
  
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedQuote, setSelectedQuote] = useState<Quote | null>(null);
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

      const { error: prodError } = await supabase
        .from('products')
        .upsert(productPayload);

      if (prodError) throw prodError;

      const { error: invError } = await supabase
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
      const { data, error } = await (supabase as any)
        .from("dealer_applications")
        .select("*")
        .order("created_at", { ascending: false });
        
      if (error) throw error;
      setApplications(data || []);
    } catch (error: any) {
      toast.error("Failed to load applications");
    } finally {
      setIsLoadingApps(false);
    }
  };

  const fetchQuotes = async () => {
    setIsLoadingQuotes(true);
    try {
      // Fetch quotes and related items + profile
      // Note: We need to ensure the foreign key relation exists for this join to work perfectly.
      // If 'profiles' join fails, we might need a fallback.
      const { data, error } = await (supabase as any)
        .from("quotes")
        .select(`
          *,
          quote_items (product_name, quantity),
          profiles (contact_person, company_name, email, phone)
        `)
        .neq('status', 'draft') // Only show submitted quotes
        .order("created_at", { ascending: false });

      if (error) throw error;
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

  const updateAppStatus = async (id: string, newStatus: string) => {
    try {
      await (supabase as any).from("dealer_applications").update({ status: newStatus }).eq("id", id);
      toast.success(`Application ${newStatus}`);
      fetchApplications();
    } catch (error) {
      toast.error("Update failed");
    }
  };

  const updateQuoteStatus = async (id: string, newStatus: string) => {
    try {
      await (supabase as any).from("quotes").update({ status: newStatus }).eq("id", id);
      toast.success(`Quote marked as ${newStatus}`);
      fetchQuotes();
    } catch (error) {
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
               <FileText className="h-4 w-4 mr-2" /> Dealer Applications
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
                            <TableCell className="font-mono text-blue-400">#{quote.id.slice(0,8)}</TableCell>
                            <TableCell className="font-medium text-white">
                              {quote.profiles?.contact_person || "Unknown User"}
                              <div className="text-xs text-slate-500">{quote.profiles?.email}</div>
                            </TableCell>
                            <TableCell className="text-slate-300">
                               {quote.profiles?.company_name || "-"}
                            </TableCell>
                            <TableCell className="text-white font-bold">{quote.total_items}</TableCell>
                            <TableCell className="text-slate-500 text-sm">
                              {new Date(quote.created_at).toLocaleDateString()}
                            </TableCell>
                            <TableCell>{getStatusBadge(quote.status)}</TableCell>
                            <TableCell className="text-right">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button size="sm" variant="outline" className="border-blue-900/30 text-blue-400 hover:bg-blue-900/20 hover:border-blue-800" onClick={() => setSelectedQuote(quote)}>
                                    <Eye className="h-4 w-4 mr-2" /> View
                                  </Button>
                                </DialogTrigger>
                                <DialogContent className="bg-slate-900 border-slate-800 text-white max-w-2xl">
                                  <DialogHeader>
                                    <DialogTitle className="text-xl">Quote Details #{selectedQuote?.id.slice(0,8)}</DialogTitle>
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
                                                 {selectedQuote?.quote_items.map((item, idx) => (
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

                                     <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
                                        <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800" onClick={() => document.getElementById('close-dialog')?.click()}>Close</Button>
                                        <Button className="bg-green-600 hover:bg-green-500 text-white" onClick={() => updateQuoteStatus(selectedQuote!.id, 'processed')}>Mark Processed</Button>
                                     </div>
                                  </div>
                                </DialogContent>
                              </Dialog>
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
                          <input required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.name} onChange={(e) => setProductFormData({...productFormData, name: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400">Brand</label>
                          <input required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.brand} onChange={(e) => setProductFormData({...productFormData, brand: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400">Model</label>
                          <input required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.model} onChange={(e) => setProductFormData({...productFormData, model: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400">Category</label>
                          <input required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.category} onChange={(e) => setProductFormData({...productFormData, category: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400">Price (₹)</label>
                          <input required type="number" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.price} onChange={(e) => setProductFormData({...productFormData, price: parseInt(e.target.value)})} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400">Stock Availability</label>
                          <input required type="number" className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.availability} onChange={(e) => setProductFormData({...productFormData, availability: parseInt(e.target.value)})} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400">Main Image URL</label>
                          <input required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.imageMain} onChange={(e) => setProductFormData({...productFormData, imageMain: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-400">Thumbnail URL</label>
                          <input required className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:border-blue-500 focus:outline-none" value={productFormData.imageThumbnail} onChange={(e) => setProductFormData({...productFormData, imageThumbnail: e.target.value})} />
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
                <CardTitle className="text-2xl text-white">Dealer Applications</CardTitle>
                <CardDescription className="text-slate-400">Manage OEM authorization requests.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                {isLoadingApps ? (
                  <p className="text-center py-12 text-slate-500">Loading applications...</p>
                ) : applications.length === 0 ? (
                  <p className="text-center py-12 text-slate-500">No applications found</p>
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
                        {applications.map((app) => (
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
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-green-900/30 text-green-500 hover:bg-green-900/20 hover:text-green-400 hover:border-green-800"
                                  onClick={() => updateAppStatus(app.id, "approved")}
                                  disabled={app.status === "approved"}
                                >
                                  Approve
                                </Button>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-red-900/30 text-red-500 hover:bg-red-900/20 hover:text-red-400 hover:border-red-800"
                                  onClick={() => updateAppStatus(app.id, "rejected")}
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
    </div>
  );
};

export default Admin;