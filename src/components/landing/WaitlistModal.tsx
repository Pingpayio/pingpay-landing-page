
import React, { useState } from "react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import WaitlistForm from "./waitlist/WaitlistForm";
import WaitlistSuccess from "./waitlist/WaitlistSuccess";

interface WaitlistModalProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, setIsOpen }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccess = () => {
    setIsSubmitted(true);
    
    // Close modal after showing success for 3 seconds
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
    }, 3000);
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
            <WaitlistSuccess />
          ) : (
            <WaitlistForm onSuccess={handleSuccess} />
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default WaitlistModal;
