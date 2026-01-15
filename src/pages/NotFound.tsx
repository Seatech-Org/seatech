import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold gradient-text">404</h1>
        <p className="mb-4 text-2xl text-muted-foreground">Oops! Page not found</p>
        <p className="mb-8 text-muted-foreground">The page you are looking for does not exist.</p>
        <Button asChild>
          <Link to="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;