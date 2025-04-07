
import React from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import DiscoverSection from "@/components/landing/DiscoverSection";
import { useIsMobile } from "@/hooks/use-mobile";

const Index: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Enhanced gradient with colors closer to #F5F2FF
  const gradientStyle = isMobile 
    ? { background: `linear-gradient(to bottom, #C4B5FD 0%, #DDD6FE 30%, #EDE9FE 60%, #F5F2FF 90%)` }
    : {
        background: `radial-gradient(circle at 50% 50%, 
                     #C4B5FD 0%, #DDD6FE 30%, #EDE9FE 60%, #F5F2FF 90%)`,
        backgroundSize: '200% 200%',
        animation: 'gradient-animation 15s ease infinite',
      };

  return (
    <div className="rounded-[0px_0px_0px_0px]">
      <Navbar />
      <main 
        className="flex w-full flex-col items-center pt-[80px] md:pt-[100px] max-w-full min-h-screen transition-all duration-300 ease-in-out overflow-hidden" 
        style={gradientStyle}
      >
        <style>
          {`
            @keyframes gradient-animation {
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
          `}
        </style>
        <div className="max-w-[1080px] w-full flex flex-col items-center px-4 md:px-6">
          <Hero />
        </div>
        <DiscoverSection />
      </main>
    </div>
  );
};

export default Index;
