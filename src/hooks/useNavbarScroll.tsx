
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export const useNavbarScroll = () => {
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

  // Force scrolled state to true on mobile devices
  const isNavScrolled = isMobile ? true : scrolled;

  return { isNavScrolled };
};
