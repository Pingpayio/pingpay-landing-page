
import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        scrolled 
          ? "bg-black" 
          : "bg-transparent flex justify-center"
      }`}
    >
      <div 
        className={`flex items-center h-[54px] transition-all duration-300 ease-in-out ${
          scrolled 
            ? "w-full" 
            : "w-full max-w-[1080px] rounded-full"
        } bg-[#071311] px-8`}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/bbaf03e746c54fdab851e2e8fa65b939/2f6813c475c096bc3c474f6ac9c81e9296f3100e?placeholderIfAbsent=true"
              alt="HyperLend Logo"
              className="h-5 mr-2"
            />
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[rgba(202,234,229,1)]">
            <button className="hover:opacity-80 transition-opacity">Features</button>
            <button className="hover:opacity-80 transition-opacity">Docs</button>
            <button className="hover:opacity-80 transition-opacity">Security</button>
            <button className="hover:opacity-80 transition-opacity">FAQ</button>
            <button className="hover:opacity-80 transition-opacity">Community</button>
          </div>
          
          <button className="bg-[rgba(202,234,229,1)] text-[rgba(7,19,17,1)] text-center px-5 py-2 rounded-full hover:opacity-90 transition-opacity">
            Launch App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
