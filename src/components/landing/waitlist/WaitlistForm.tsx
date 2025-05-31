
import React from "react";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useWaitlistSubmission } from "@/hooks/useWaitlistSubmission";

const formSchema = z.object({
  email: z.string()
    .email({ message: "Please enter a valid email address" })
    .min(1, { message: "Email is required" }),
  wallet_address: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface WaitlistFormProps {
  onSuccess: () => void;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ onSuccess }) => {
  const { submitToWaitlist, isLoading } = useWaitlistSubmission();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      wallet_address: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormValues) => {
    const result = await submitToWaitlist(data);
    if (result.success) {
      onSuccess();
    }
  };

  return (
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

        <FormField
          control={form.control}
          name="wallet_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-gray-300 text-sm">
                Wallet Address (Optional)
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your wallet address"
                  className="bg-[#1a1a1a] border-[#2a1a30] text-white focus:border-[#AB9FF2] focus:ring-[#AB9FF2] h-12"
                  {...field}
                />
              </FormControl>
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
  );
};

export default WaitlistForm;
