
import React, { useEffect, useRef } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import { Bitcoin, Circle, DollarSign, Euro, JapaneseYen, PoundSterling } from "lucide-react";
import Swiss from "../icons/Swiss";

// Token data structure
interface TokenInfo {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const CryptoCarousel: React.FC = () => {
  // Token list based on supported tokens from the SDK
  const tokens: TokenInfo[] = [
    { id: "near", name: "NEAR", icon: <Circle className="h-8 w-8 text-cyan-500" /> },
    { id: "usdc", name: "USDC", icon: <DollarSign className="h-8 w-8 text-blue-600" /> },
    { id: "usdt", name: "USDT", icon: <DollarSign className="h-8 w-8 text-green-500" /> },
    { id: "btc", name: "Bitcoin", icon: <Bitcoin className="h-8 w-8 text-orange-500" /> },
    { id: "eth", name: "Ethereum", icon: <Circle className="h-8 w-8 text-purple-600" /> },
    { id: "eur", name: "Euro", icon: <Euro className="h-8 w-8 text-blue-700" /> },
    { id: "gbp", name: "British Pound", icon: <PoundSterling className="h-8 w-8 text-blue-800" /> },
    { id: "jpy", name: "Japanese Yen", icon: <JapaneseYen className="h-8 w-8 text-red-600" /> },
    { id: "chf", name: "Swiss Franc", icon: <Swiss className="h-8 w-8 text-red-500" /> }
  ];

  // Use a ref to store the animation frame ID for cleanup
  const animationRef = useRef<number | null>(null);
  // Ref to access the carousel content directly
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const content = carouselRef.current;
    if (!content) return;
    
    let position = 0;
    const speed = 0.5; // Adjust this value to control scrolling speed
    
    const animate = () => {
      position += speed;
      
      // Reset position when we've scrolled one token width
      // This creates the continuous effect
      const firstItemWidth = content.querySelector('[role="group"]')?.clientWidth || 0;
      if (position >= firstItemWidth) {
        position = 0;
        
        // Move the first item to the end to create infinite scroll effect
        const firstItem = content.firstElementChild;
        if (firstItem) {
          content.appendChild(firstItem.cloneNode(true));
          content.removeChild(firstItem);
        }
      }
      
      // Apply the translation
      content.style.transform = `translateX(-${position}px)`;
      
      // Continue the animation
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start the animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup on component unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Duplicate the tokens to ensure continuous scrolling
  const duplicatedTokens = [...tokens, ...tokens, ...tokens];

  return (
    <div className="w-full max-w-[1000px] px-8 md:px-4 mx-auto overflow-hidden">
      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex transition-transform duration-1000"
          style={{ willChange: "transform" }}
        >
          {duplicatedTokens.map((token, index) => (
            <div 
              key={`${token.id}-${index}`} 
              role="group"
              className="shrink-0 pl-4 basis-auto"
              style={{ minWidth: "120px" }}
            >
              <div className="flex flex-col items-center p-4 transition-all duration-300 hover:scale-105">
                <div className="rounded-full bg-white p-4 shadow-md flex items-center justify-center mb-3 size-16 md:size-20">
                  {token.icon}
                </div>
                <span className="text-white text-sm md:text-base font-medium">{token.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoCarousel;
