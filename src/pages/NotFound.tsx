
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const NotFound = () => {
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    // Log the error for debugging purposes
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Show a toast to notify the user
    toast({
      variant: "destructive",
      title: "Page not found",
      description: `The page "${location.pathname}" does not exist.`,
    });
  }, [location.pathname, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#100713]">
      <div className="text-center p-8 rounded-lg max-w-md">
        <h1 className="text-6xl font-bold mb-6 text-[#AB9FF2]">404</h1>
        <p className="text-xl text-white mb-8">
          Oops! We couldn't find the page you're looking for.
        </p>
        <Button 
          onClick={() => window.location.href = "/"}
          className="bg-[#AB9FF2] hover:bg-[#9B87F5] text-[#3D315E] font-medium rounded-[30px] flex items-center gap-2"
        >
          <Home size={18} />
          Return Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
