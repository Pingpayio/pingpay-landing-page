
import React, { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset to account for navbar height
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { title: "Features", id: "asset-management" },
    { title: "Use Cases", id: "use-cases" },
    { title: "Docs", id: null },
    { title: "Community", id: null },
  ];

  return (
    <>
      {/* Desktop and mobile navbar */}
      <nav 
        className={`fixed z-50 w-full transition-all duration-700 ease-in-out ${
          scrolled 
            ? "bg-[#100713]" 
            : "bg-transparent"
        }`}
      >
        <div 
          className={`
            mx-auto flex items-center justify-between
            ${scrolled 
              ? "h-16 transition-all duration-300 ease-in-out" 
              : "h-20 transition-all duration-300 ease-in-out"
            }
            ${!isMobile && !scrolled ? "max-w-[1080px] rounded-full bg-[#231529]/90 backdrop-blur-sm px-8" : "px-4 md:px-8"}
            ${isMobile ? "bg-[#100713]" : ""}
          `}
        >
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/lovable-uploads/1e51f881-cf85-4f9c-929a-501fd222233c.png" 
              alt="Ping Logo"
              className="h-6" 
            />
          </div>
          
          {/* Desktop navigation links */}
          {!isMobile && (
            <div className="hidden md:flex items-center gap-8 text-white">
              {navLinks.map((link) => (
                <button 
                  key={link.title}
                  onClick={() => link.id && scrollToSection(link.id)} 
                  className="navbar-button hover:text-[#AB9FF2] transition-all duration-300"
                >
                  {link.title}
                </button>
              ))}
            </div>
          )}
          
          {/* Launch App button & Mobile menu button */}
          <div className="flex items-center gap-4">
            <button className="bg-[#AB9FF2] text-[#3D315E] text-center px-4 py-1.5 text-sm md:text-base md:px-5 md:py-2 rounded-full hover:opacity-90 transition-opacity">
              Launch App
            </button>
            
            {isMobile && (
              <Sheet>
                <SheetTrigger asChild>
                  <button 
                    className="text-white p-1.5 rounded-md hover:bg-[#1a1a1a]/40"
                    aria-label="Open menu"
                  >
                    <Menu size={24} />
                  </button>
                </SheetTrigger>
                <SheetContent side="left" className="bg-[#100713] p-0 w-[280px]">
                  <div className="flex flex-col h-full text-white">
                    {/* Mobile sidebar header */}
                    <div className="p-4 flex justify-between items-center border-b border-white/10">
                      <img
                        src="/lovable-uploads/1e51f881-cf85-4f9c-929a-501fd222233c.png" 
                        alt="Ping Logo"
                        className="h-6" 
                      />
                    </div>
                    
                    {/* Mobile sidebar navigation items */}
                    <div className="flex flex-col p-4 gap-4">
                      {navLinks.map((link) => (
                        <button
                          key={link.title}
                          onClick={() => {
                            if (link.id) scrollToSection(link.id);
                          }}
                          className="flex items-center justify-between py-3 border-b border-white/10 hover:text-[#AB9FF2] transition-colors"
                        >
                          <span className="text-lg font-medium">{link.title}</span>
                          <ChevronDown size={20} />
                        </button>
                      ))}
                    </div>
                    
                    {/* Mobile sidebar footer with launch button */}
                    <div className="mt-auto p-4 border-t border-white/10">
                      <button className="w-full bg-[#AB9FF2] text-[#3D315E] font-medium text-center py-3 rounded-lg">
                        Launch App
                      </button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
