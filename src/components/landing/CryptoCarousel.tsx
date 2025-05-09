
import React, { useState, useEffect, useRef } from "react";
import { TokenInfo } from "@/types/token";
import { allTokens } from "@/data/tokenData";
import TokenCardSet from "./tokens/TokenCardSet";
import { useCarouselVisibility } from "@/hooks/useCarouselVisibility";
import { shuffleArray } from "@/utils/carouselUtils";
import CarouselVisibilityHandler from "./usecases/CarouselVisibilityHandler";
import { useIsMobile } from "@/hooks/use-mobile";

const CryptoCarousel: React.FC = () => {
  // Use key for forcing re-render
  const [carouselKey, setCarouselKey] = useState(Date.now());
  // State to store randomized tokens
  const [tokens, setTokens] = useState<TokenInfo[]>([]);
  const { isVisible, carouselRef } = useCarouselVisibility({ immediatelyVisible: true });
  const isMobile = useIsMobile();
  
  // Force a complete refresh of tokens on mount
  useEffect(() => {
    // Clear any potentially cached tokens and create a new shuffled array
    setTokens([]);
    setTimeout(() => {
      setTokens(shuffleArray(allTokens));
      // Update key to force full re-render
      setCarouselKey(Date.now());
    }, 50);
  }, []);

  // Force reflow on mobile devices when visibility changes
  useEffect(() => {
    if (isVisible) {
      // Force a reflow to trigger animation
      if (carouselRef.current) {
        const element = carouselRef.current;
        // Reading offsetHeight forces a reflow
        const height = element.offsetHeight;
        
        // Additional mobile-specific animation restarting
        if (isMobile) {
          const scrollElements = element.querySelectorAll('.continuous-scroll');
          scrollElements.forEach((el: HTMLElement) => {
            // Force animation restart by toggling className
            el.classList.remove('continuous-scroll');
            // Force reflow with proper type casting
            void el.offsetWidth;
            // Add class back
            setTimeout(() => {
              el.classList.add('continuous-scroll');
            }, 10);
          });
        }
      }
    }
  }, [isVisible, isMobile]);

  // If no tokens, show nothing until loaded
  if (tokens.length === 0) {
    return null;
  }

  return (
    <div 
      key={carouselKey}
      className="w-full max-w-[1000px] px-4 md:px-4 mx-auto overflow-hidden" 
      style={{ 
        backgroundColor: 'transparent',
        transform: 'translate3d(0,0,0)',
        WebkitTransform: 'translate3d(0,0,0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
      ref={carouselRef}
    >
      <CarouselVisibilityHandler />
      
      <div className="relative overflow-hidden">
        <div 
          className={`flex whitespace-nowrap transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            WebkitPerspective: '1000',
            perspective: '1000',
            WebkitTransform: 'translate3d(0,0,0)',
            transform: 'translate3d(0,0,0)',
            WebkitTransformStyle: 'preserve-3d',
            transformStyle: 'preserve-3d',
            willChange: 'transform'
          }}
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
