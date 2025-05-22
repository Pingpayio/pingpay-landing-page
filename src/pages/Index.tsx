
import React, { useState, useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import FeatureSection from "@/components/landing/DiscoverSection";
import AnalyticsSection from "@/components/landing/AssetManagementSection";
import ApplicationsSection from "@/components/landing/UseCasesSection";
import { useIsMobile } from "@/hooks/use-mobile";

const HomePage: React.FC = () => {
  const isMobile = useIsMobile();
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Track scroll position for potential parallax or scroll-based effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="overflow-hidden">
      <Navbar />
      <main className="flex w-full flex-col items-center pt-[70px] md:pt-[100px] max-w-full min-h-screen relative">
        {/* Hero solid background */}
        <div 
          className="absolute top-0 left-0 w-full h-full z-0" 
          style={{ backgroundColor: '#E5DEFF' }}
        ></div>
        
        <div className="max-w-[1080px] w-full flex flex-col items-center px-4 md:px-6 relative z-10">
          <Hero />
        </div>
        
        {/* Sections with specific background colors */}
        <FeatureSection />
        <AnalyticsSection />
        <ApplicationsSection />
      </main>
    </div>
  );
};

export default HomePage;
