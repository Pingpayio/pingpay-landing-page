
import React from "react";
import { ChevronDown } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onScrollToSection: (id: string, alignNavbarBottom?: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onScrollToSection }) => {
  if (!isOpen) return null;

  const handleMenuItemClick = (id: string) => {
    onScrollToSection(id, true);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-40 bg-[#100713] pt-[54px] flex flex-col animate-in slide-in-from-right duration-300">
      <div className="flex flex-col p-6 h-full">
        <div className="flex flex-col space-y-6 text-white text-lg mt-4">
          <div 
            onClick={() => handleMenuItemClick('asset-management')} 
            className="flex items-center justify-between border-b border-white/10 pb-4 cursor-pointer hover:text-[#AB9FF2] transition-colors duration-300"
          >
            <span className="text-base font-medium">Features</span>
            <ChevronDown size={18} />
          </div>
          <div 
            onClick={() => handleMenuItemClick('use-cases')} 
            className="flex items-center justify-between border-b border-white/10 pb-4 cursor-pointer hover:text-[#AB9FF2] transition-colors duration-300"
          >
            <span className="text-base font-medium">Use Cases</span>
            <ChevronDown size={18} />
          </div>
          <a 
            href="https://x.com/pingpay_io"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border-b border-white/10 pb-4 hover:text-[#AB9FF2] transition-colors duration-300"
          >
            <span className="text-base font-medium">Community</span>
            <ChevronDown size={18} />
          </a>
        </div>
        
        <div className="mt-auto mb-8">
          <button className="w-full bg-[#AB9FF2] text-[#3D315E] font-medium text-center py-3 rounded-lg">
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
