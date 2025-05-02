
import React, { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CheckCircle, X, AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface WaitlistModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const formSchema = z.object({
  email: z.string()
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email is required" }),
});

type FormValues = z.infer<typeof formSchema>;

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, setIsOpen }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    
    try {
      // Here you would integrate with your backend service (Supabase, Zapier, etc)
      // For now we'll simulate a successful submission
      console.log("Email submitted:", data.email);
      
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
      
      toast({
        title: "Success!",
        description: "Thanks! Your email was added.",
        variant: "default",
      });
      
      // Close modal after showing success for 3 seconds
      setTimeout(() => {
        setIsOpen(false);
        setIsSubmitted(false);
        form.reset();
      }, 3000);
      
    } catch (error) {
      console.error("Error submitting email:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="bg-[#100713] border-l border-[#2a1a30] text-white overflow-y-auto">
        <div className="absolute right-4 top-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(false)}
            className="text-white hover:bg-white/10"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        
        <SheetHeader className="pt-8 pb-6">
          <SheetTitle className="text-2xl font-bold text-white">Join the Waitlist</SheetTitle>
          <SheetDescription className="text-base text-gray-300">
            Be the first to get access when we launch.
          </SheetDescription>
        </SheetHeader>
        
        <div className="py-6">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="rounded-full bg-[#E5DEFF] p-3 mb-4">
                <CheckCircle className="h-8 w-8 text-[#9B87F5]" />
              </div>
              <h3 className="text-xl font-medium mb-2">You're on the list!</h3>
              <p className="text-gray-300">
                Thanks! Your email was added.
              </p>
              <p className="text-gray-300 mt-2">
                We'll let you know as soon as we're live.
              </p>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field, fieldState }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          className="bg-[#1a1a1a] border-[#2a1a30] text-white focus:border-[#AB9FF2] focus:ring-[#AB9FF2] h-12"
                          {...field}
                          autoComplete="email"
                        />
                      </FormControl>
                      {fieldState.invalid && fieldState.error && (
                        <Alert variant="destructive" className="bg-[#301a2a] border-[#AB9FF2] mt-2 py-2 flex items-center justify-start">
                          <div className="flex items-center h-full">
                            <AlertCircle className="h-4 w-4 mr-2 text-[#E5DEFF]" />
                          </div>
                          <AlertDescription className="text-sm text-[#E5DEFF] flex-1 py-0.5">
                            {fieldState.error.message}
                          </AlertDescription>
                        </Alert>
                      )}
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isLoading || !form.formState.isValid}
                  className="w-full bg-[#AB9FF2] hover:bg-[#9B87F5] text-[#3D315E] font-medium h-12 rounded-[30px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default WaitlistModal;
