
import React from "react";

interface DesktopMenuProps {
  onScrollToSection: (id: string, alignNavbarBottom?: boolean) => void;
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({ onScrollToSection }) => {
  return (
    <div className="hidden md:flex items-center gap-8 text-white">
      <button 
        onClick={() => onScrollToSection('asset-management', true)} 
        className="navbar-button hover:text-[#AB9FF2] transition-all duration-300"
      >
        Features
      </button>
      <button 
        onClick={() => onScrollToSection('use-cases', true)} 
        className="navbar-button hover:text-[#AB9FF2] transition-all duration-300"
      >
        Use Cases
      </button>
      <a 
        href="https://x.com/pingpay_io" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="navbar-button hover:text-[#AB9FF2] transition-all duration-300"
      >
        Community
      </a>
    </div>
  );
};

export default DesktopMenu;
