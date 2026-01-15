import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"; // <-- CHANGED
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, CheckCircle, XCircle, Clock } from "lucide-react";

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

const Admin = () => {
  const navigate = useNavigate();
  // const { toast } = useToast(); // <-- REMOVED THIS LINE

  const [applications, setApplications] = useState<DealerApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      navigate("/auth");
      return;
    }
    const { data: roleData, error: roleError } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (roleError || !roleData) {
      toast.error("Access Denied", { // <-- toast() is now used directly
        description: "You don't have admin privileges",
      });
      navigate("/");
      return;
    }
    setIsAdmin(true);
    fetchApplications();
  };

  const fetchApplications = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from("dealer_applications")
        .select(
          "id, dealer_name, mobile, email, director_name, director_mobile, gst_number, status, created_at"
        )
        .order("created_at", { ascending: false });
      if (error) throw error;
      setApplications((data || []) as DealerApplication[]);
    } catch (error: any) {
      toast.error("Error", { // <-- toast() is now used directly
        description: error.message || "Failed to fetch applications",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (
    id: string,
    newStatus: "approved" | "rejected"
  ) => {
    try {
      const { error } = await supabase
        .from("dealer_applications")
        .update({ status: newStatus })
        .eq("id", id);
      if (error) throw error;
      toast.success("Success", { // <-- toast() is now used directly
        description: `Application ${newStatus} successfully`,
      });
      fetchApplications();
    } catch (error: any) {
      toast.error("Error", { // <-- toast() is now used directly
        description: error.message || "Failed to update status",
      });
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "approved":
        return (
          <Badge className="bg-green-500 hover:bg-green-600">
            <CheckCircle className="h-3 w-3 mr-1" />
            Approved
          </Badge>
        );
      case "rejected":
        return (
          <Badge variant="destructive">
            <XCircle className="h-3 w-3 mr-1" />
            Rejected
          </Badge>
        );
      default:
        return (
          <Badge variant="secondary">
            <Clock className="h-3 w-3 mr-1" />
            Pending
          </Badge>
        );
    }
  };

  if (!isAdmin) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <header className="border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <Card className="border-0 shadow-strong">
          <CardHeader>
            <CardTitle className="text-2xl">Dealer Applications</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <p className="text-center py-8 text-muted-foreground">
                Loading applications...
              </p>
            ) : applications.length === 0 ? (
              <p className="text-center py-8 text-muted-foreground">
                No applications found
              </p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Dealer Name</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>GST Number</TableHead>
                      <TableHead>Director</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Submitted</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {applications.map((app) => (
                      <TableRow key={app.id}>
                        <TableCell className="font-medium">
                          {app.dealer_name}
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{app.email}</div>
                            <div className="text-muted-foreground">
                              {app.mobile}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-mono text-sm">
                          {app.gst_number}
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <div>{app.director_name}</div>
                            <div className="text-muted-foreground">
                              {app.director_mobile}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(app.status)}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {new Date(app.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-green-600 hover:bg-green-50"
                              onClick={() => updateStatus(app.id, "approved")}
                              disabled={app.status === "approved"}
                            >
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              className="text-red-600 hover:bg-red-50"
                              onClick={() => updateStatus(app.id, "rejected")}
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
      </main>
    </div>
  );
};
export default Admin;