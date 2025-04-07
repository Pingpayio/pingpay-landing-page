
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
  
  // Create a marbled gradient background inspired by the reference image
  // with subtle interactivity based on mouse position
  const gradientStyle = {
    background: `
      linear-gradient(135deg, #3C315B 0%, #6E4A8E 40%, #9B5CB8 70%, #AB9FF2 100%),
      radial-gradient(
        circle at ${50 + (mousePosition.x - 0.5) * 30}% ${50 + (mousePosition.y - 0.5) * 30}%, 
        rgba(210, 150, 255, 0.4) 5%, 
        rgba(171, 93, 242, 0.3) 30%, 
        rgba(110, 74, 142, 0.2) 60%,
        rgba(60, 49, 91, 0.1) 90%
      )
    `,
    backgroundBlendMode: 'overlay',
    backgroundSize: '200% 200%',
    transition: 'background-position 0.5s ease',
    backgroundPosition: `${mousePosition.x * 10}% ${mousePosition.y * 10}%`,
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
