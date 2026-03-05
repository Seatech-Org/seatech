import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import logoSrc from "../assets/logo.png";
import { toast } from "sonner";

interface ProtectedRouteProps {
    children: React.ReactNode;
    requireAuth?: boolean;
    requiredRole?: "admin" | "user";
}

export const ProtectedRoute = ({
    children,
    requireAuth = true,
    requiredRole,
}: ProtectedRouteProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
    const [userRole, setUserRole] = useState<string | null>(null);
    const [debugContext, setDebugContext] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;

        const checkAuthStatus = async () => {
            try {
                const { data: { session }, error: sessionError } = await supabase.auth.getSession();

                if (sessionError) throw sessionError;

                if (session) {
                    if (isMounted) setIsAuthenticated(true);

                    if (requiredRole) {
                        // Fetch the user's role from the profiles table
                        const { data: profile, error: profileError } = await supabase
                            .from('profiles')
                            .select('role')
                            .eq('id', session.user.id)
                            .single();

                        if (profileError && profileError.code !== 'PGRST116') {
                            console.error("Error fetching profile role:", profileError);
                            if (isMounted) setDebugContext(`DB Error: ${profileError.message}`);
                        } else if (!profile) {
                            if (isMounted) setDebugContext(`No profile found for ID: ${session.user.id}`);
                        } else {
                            if (isMounted) setDebugContext(`Found role: ${(profile as any).role}`);
                        }
                        if (isMounted) setUserRole((profile as any)?.role || 'user');
                    }
                } else {
                    if (isMounted) setIsAuthenticated(false);
                }
            } catch (error) {
                console.error("Auth check failed:", error);
                if (isMounted) setIsAuthenticated(false);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        checkAuthStatus();

        // Listen for auth state changes (e.g., user logs out in another tab)
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                if (isMounted) {
                    setIsAuthenticated(!!session);
                    if (!session) {
                        setUserRole(null);
                        setIsLoading(false);
                    } else {
                        checkAuthStatus(); // Re-check role when session changes
                    }
                }
            }
        );

        return () => {
            isMounted = false;
            subscription.unsubscribe();
        };
    }, [requiredRole]);

    // Handle Loading State (either initial load, or waiting for role to fetch)
    const isRolePending = isAuthenticated && requiredRole && userRole === null;

    if (isLoading || isRolePending) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center">
                <div className="relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/20 blur-[40px] rounded-full animate-pulse scale-150"></div>
                    <img src={logoSrc} alt="Verifying Security..." className="h-14 w-auto relative z-10 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                </div>
                <p className="mt-8 text-muted-foreground font-medium tracking-widest uppercase text-xs animate-pulse">
                    Verifying Access...
                </p>
            </div>
        );
    }

    // Handle Unauthenticated User Trying to Access Auth Route
    if (requireAuth && !isAuthenticated) {
        // Save the attempted URL so we can redirect them back after they log in (optional feature)
        return <Navigate to="/auth" state={{ from: location }} replace />;
    }

    // Handle Authenticated User Missing Required Role
    if (requiredRole && userRole !== requiredRole && userRole !== 'admin') {
        // Note: if userRole is 'admin', they generally have access to everything.
        // But if requiredRole is 'admin' and userRole is NOT 'admin', block them.
        toast.error("Access Denied", {
            description: debugContext || "You do not have the required permissions.",
            duration: 8000
        });
        return <Navigate to="/dashboard" replace />;
    }

    // User passed all checks!
    return <>{children}</>;
};
