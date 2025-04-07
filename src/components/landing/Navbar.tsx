
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
      className={`fixed z-50 w-full transition-all duration-700 ease-in-out ${
        scrolled 
          ? "top-0 bg-black" 
          : "top-[38px] bg-transparent flex justify-center"
      }`}
    >
      <div 
        className={`flex items-center h-[54px] ${
          scrolled 
            ? "w-full transition-all duration-1000 ease-in-out" 
            : "w-full max-w-[1080px] rounded-full transition-all duration-700 ease-in-out"
        } bg-[#071311] px-8`}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            {/* Ensure the image path is correct and the image exists in the public folder */}
            <img
              src="/ping-logo.png" 
              alt="Ping Logo"
              className="h-6" // 24px height (h-6 = 24px in Tailwind)
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
