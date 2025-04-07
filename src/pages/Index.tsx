
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
  
  // Enhanced gradient with brand colors and interactive effect
  const gradientStyle = {
    background: `
      linear-gradient(135deg, #322442 0%, #1E1629 100%),
      radial-gradient(
        circle at ${50 + (mousePosition.x - 0.5) * 20}% ${50 + (mousePosition.y - 0.5) * 20}%, 
        rgba(155, 135, 245, 0.3) 0%, 
        rgba(107, 87, 161, 0.2) 40%, 
        rgba(46, 32, 78, 0.1) 80%
      )
    `,
    backgroundBlendMode: 'overlay',
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
