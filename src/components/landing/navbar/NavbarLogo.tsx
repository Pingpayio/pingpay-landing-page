
import React from "react";

// Updated path to new Ping logo
const PING_LOGO = "/lovable-uploads/ee74f7f3-7dd6-4d45-a637-dace4ca34ded.png";

interface NavbarLogoProps {
  onScrollToTop: () => void;
}

const NavbarLogo: React.FC<NavbarLogoProps> = ({ onScrollToTop }) => {
  return (
    <div className="flex items-center">
      <button 
        onClick={onScrollToTop} 
        className="cursor-pointer"
        aria-label="Scroll to top"
      >
        <img
          src={PING_LOGO} 
          alt="Ping Logo"
          className="h-6" 
        />
      </button>
    </div>
  );
};

export default NavbarLogo;
