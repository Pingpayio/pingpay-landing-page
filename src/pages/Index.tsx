
import React, { useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import DiscoverSection from "@/components/landing/DiscoverSection";
import AssetManagementSection from "@/components/landing/AssetManagementSection";
import { useIsMobile } from "@/hooks/use-mobile";

const Index: React.FC = () => {
  const isMobile = useIsMobile();
  const [gradientOption] = useState<number>(2); // Default to option 2
  
  // Define gradient options
  const gradientOptions = {
    // Option 1: Smooth radial pulsing gradient
    1: isMobile 
      ? { background: `linear-gradient(to bottom, #C4B5FD 0%, #DDD6FE 30%, #EDE9FE 60%, #F5F2FF 90%)` }
      : {
          background: `radial-gradient(circle at 50% 50%, 
                      #C4B5FD 0%, #DDD6FE 30%, #EDE9FE 60%, #F5F2FF 90%)`,
          backgroundSize: '200% 200%',
          animation: 'pulse-gradient 8s ease infinite',
        },
    
    // Option 2: Flowing color waves
    2: isMobile
      ? { background: `linear-gradient(to bottom, #AB9FF2 0%, #C4B5FD 30%, #DDD6FE 60%, #F5F2FF 90%)` }
      : {
          background: `linear-gradient(45deg, 
                      #AB9FF2 0%, #C4B5FD 25%, #DDD6FE 50%, #EDE9FE 75%, #F5F2FF 100%)`,
          backgroundSize: '400% 400%',
          animation: 'flowing-gradient 15s ease infinite',
        },
        
    // Option 3: Ambient color shift
    3: isMobile
      ? { background: `linear-gradient(to bottom, #9B87F5 0%, #AB9FF2 30%, #C4B5FD 60%, #DDD6FE 90%)` }
      : {
          background: `radial-gradient(circle at 50% 50%, 
                      #9B87F5 0%, #AB9FF2 30%, #C4B5FD 60%, #DDD6FE 90%)`,
          backgroundSize: '200% 200%',
          animation: 'ambient-shift 20s ease-in-out infinite',
        },
  };

  // Select the current gradient option
  const gradientStyle = gradientOptions[gradientOption as keyof typeof gradientOptions];

  return (
    <div className="rounded-[0px_0px_0px_0px]">
      <Navbar />
      <main 
        className="flex w-full flex-col items-center pt-[70px] md:pt-[100px] max-w-full min-h-screen transition-all duration-300 ease-in-out overflow-hidden" 
        style={gradientStyle}
      >
        <style>
          {`
            @keyframes pulse-gradient {
              0% {
                background-position: 0% 0%;
              }
              50% {
                background-position: 100% 100%;
              }
              100% {
                background-position: 0% 0%;
              }
            }
            
            @keyframes flowing-gradient {
              0% {
                background-position: 0% 50%;
              }
              50% {
                background-position: 100% 50%;
              }
              100% {
                background-position: 0% 50%;
              }
            }
            
            @keyframes ambient-shift {
              0% {
                background-position: 0% 0%;
              }
              25% {
                background-position: 100% 0%;
              }
              50% {
                background-position: 100% 100%;
              }
              75% {
                background-position: 0% 100%;
              }
              100% {
                background-position: 0% 0%;
              }
            }
          `}
        </style>
        <div className="max-w-[1080px] w-full flex flex-col items-center px-4 md:px-6">
          <Hero />
        </div>
        <DiscoverSection />
        <AssetManagementSection />
      </main>
    </div>
  );
};

export default Index;
