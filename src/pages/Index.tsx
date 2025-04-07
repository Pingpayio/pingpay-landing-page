
import React, { useState, useEffect } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import DiscoverSection from "@/components/landing/DiscoverSection";

const Index: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Calculate mouse position as percentage of viewport
      const x = event.clientX / window.innerWidth;
      const y = event.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Enhanced gradient with colors closer to #F5F2FF
  const gradientStyle = {
    background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                 #C4B5FD 0%, #DDD6FE 30%, #EDE9FE 60%, #F5F2FF 90%)`,
    backgroundSize: '200% 200%',
    transition: 'background-position 0.3s ease-out',
  };

  return (
    <div className="rounded-[0px_0px_0px_0px]">
      <Navbar />
      <main className="flex w-full flex-col items-center pt-[120px] max-md:max-w-full min-h-screen transition-all duration-300 ease-in-out" style={gradientStyle}>
        <div className="max-w-[1080px] w-full flex flex-col items-center">
          <Hero />
        </div>
        <DiscoverSection />
      </main>
    </div>
  );
};

export default Index;
