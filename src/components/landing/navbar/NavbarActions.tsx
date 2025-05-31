
import React from "react";
import { Menu, X, Timer } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface NavbarActionsProps {
  onOpenWaitlist: () => void;
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
}

const NavbarActions: React.FC<NavbarActionsProps> = ({ 
  onOpenWaitlist, 
  mobileMenuOpen, 
  onToggleMobileMenu 
}) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={onOpenWaitlist}
        className="bg-[#AB9FF2] text-[#3D315E] text-center px-4 py-1.5 text-sm md:text-base md:px-5 md:py-2 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2"
      >
        <span>Join Waitlist</span>
        <Timer size={16} className="flex-shrink-0" />
      </button>
      
      {isMobile && (
        <button 
          onClick={onToggleMobileMenu}
          className="ml-2 text-white p-1.5 rounded-md hover:bg-[#1a1a1a]/40"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}
    </div>
  );
};

export default NavbarActions;
