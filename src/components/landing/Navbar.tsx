import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav 
        className={`fixed z-50 w-full transition-all duration-700 ease-in-out ${
          scrolled 
            ? "top-0 bg-[#100713]" 
            : "top-[20px] md:top-[38px] bg-transparent flex justify-center"
        }`}
      >
        <div 
          className={`flex items-center h-[54px] ${
            scrolled 
              ? "w-full transition-all duration-1000 ease-in-out" 
              : "w-full max-w-[1080px] rounded-full transition-all duration-700 ease-in-out"
          } bg-[#100713] px-4 md:px-8`}
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              <img
                src="/lovable-uploads/1e51f881-cf85-4f9c-929a-501fd222233c.png" 
                alt="Ping Logo"
                className="h-6" // 24px height (h-6 = 24px in Tailwind)
              />
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-white">
              <button className="hover:opacity-80 transition-opacity">Features</button>
              <button className="hover:opacity-80 transition-opacity">Docs</button>
              <button className="hover:opacity-80 transition-opacity">Security</button>
              <button className="hover:opacity-80 transition-opacity">FAQ</button>
              <button className="hover:opacity-80 transition-opacity">Community</button>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="bg-[#AB9FF2] text-[#3D315E] text-center px-4 py-1.5 text-sm md:text-base md:px-5 md:py-2 rounded-full hover:opacity-90 transition-opacity">
                Launch App
              </button>
              
              {isMobile && (
                <button 
                  onClick={toggleMobileMenu}
                  className="ml-2 text-white p-1.5 rounded-md hover:bg-[#1a1a1a]/40"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#100713] bg-opacity-90 pt-[70px] flex flex-col animate-fade-in">
          <div className="flex flex-col items-center gap-6 text-white text-lg p-6">
            <button className="hover:opacity-80 transition-opacity py-2">Features</button>
            <button className="hover:opacity-80 transition-opacity py-2">Docs</button>
            <button className="hover:opacity-80 transition-opacity py-2">Security</button>
            <button className="hover:opacity-80 transition-opacity py-2">FAQ</button>
            <button className="hover:opacity-80 transition-opacity py-2">Community</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
