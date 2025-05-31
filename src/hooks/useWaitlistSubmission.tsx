
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface FormValues {
  email: string;
  wallet_address?: string;
}

export const useWaitlistSubmission = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const submitToWaitlist = async (data: FormValues) => {
    setIsLoading(true);
    
    try {
      console.log("Submitting to Supabase:", data);
      
      // Insert email and optional wallet address into the waitlist table
      const insertData = {
        email: data.email,
        ...(data.wallet_address && data.wallet_address.trim() && { wallet_address: data.wallet_address.trim() })
      };
      
      const { error } = await supabase
        .from('waitlist')
        .insert([insertData]);
      
      if (error) {
        console.error("Error submitting to waitlist:", error);
        
        // Show appropriate message for duplicate emails
        if (error.code === '23505') { // PostgreSQL unique constraint violation code
          console.log("Duplicate email detected:", data.email);
          toast({
            title: "Already on the list",
            description: "This email is already on our waitlist.",
            variant: "default",
          });
          
          // Still consider this a "success" from the user's perspective
          return { success: true, isDuplicate: true };
        } else {
          throw error;
        }
      } else {
        console.log("Email added to waitlist successfully");
        
        toast({
          title: "Success!",
          description: "Thanks! Your email was added.",
          variant: "default",
        });
        
        return { success: true, isDuplicate: false };
      }
      
    } catch (error) {
      console.error("Error submitting email:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
      return { success: false, isDuplicate: false };
    } finally {
      setIsLoading(false);
    }
  };

  return { submitToWaitlist, isLoading };
};
