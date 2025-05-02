
import React, { useState, useEffect } from "react";
import { TokenInfo } from "@/types/token";
import { allTokens } from "@/data/tokenData";
import TokenCardSet from "./tokens/TokenCardSet";
import { useCarouselVisibility } from "@/hooks/useCarouselVisibility";
import { shuffleArray } from "@/utils/carouselUtils";
import CarouselVisibilityHandler from "./usecases/CarouselVisibilityHandler";

const CryptoCarousel: React.FC = () => {
  // State to store randomized tokens
  const [tokens, setTokens] = useState<TokenInfo[]>([]);
  const { isVisible, carouselRef } = useCarouselVisibility({ immediatelyVisible: true });

  // Initialize tokens immediately to avoid empty carousel
  useEffect(() => {
    // Use memo to avoid unnecessary re-renders
    if (tokens.length === 0) {
      setTokens(shuffleArray(allTokens));
    }
  }, [tokens.length]);

  return (
    <div 
      className="w-full max-w-[1000px] px-4 md:px-4 mx-auto overflow-hidden" 
      style={{ backgroundColor: 'transparent' }}
      ref={carouselRef}
    >
      <CarouselVisibilityHandler />
      
      <div className="relative overflow-hidden">
        <div 
          className={`flex whitespace-nowrap transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* First set of tokens */}
          <TokenCardSet 
            tokens={tokens} 
            prefix="first" 
            isVisible={isVisible} 
          />

          {/* Second set of tokens - creates the continuous effect */}
          <TokenCardSet 
            tokens={tokens} 
            prefix="second" 
            isVisible={isVisible} 
          />
        </div>
      </div>
    </div>
  );
};

export default CryptoCarousel;
