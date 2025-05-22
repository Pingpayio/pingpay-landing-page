
import React, { useState, useEffect } from "react";
import { TokenInfo } from "@/types/token";
import { allTokens } from "@/data/tokenData";
import TokenCardSet from "./tokens/TokenCardSet";
import { useCarouselVisibility } from "@/hooks/useCarouselVisibility";
import { shuffleArray } from "@/utils/carouselUtils";
import CarouselVisibilityHandler from "./usecases/CarouselVisibilityHandler";
import { useIsMobile } from "@/hooks/use-mobile";

const CryptoCarousel: React.FC = () => {
  // State to store randomized tokens and force refreshes
  const [tokens, setTokens] = useState<TokenInfo[]>([]);
  const [refreshKey, setRefreshKey] = useState(Date.now());
  const { isVisible, carouselRef } = useCarouselVisibility({ immediatelyVisible: true });
  const isMobile = useIsMobile();

  // Function to force a complete refresh of the carousel
  const forceRefresh = () => {
    // Reshuffle tokens 
    setTokens(shuffleArray(allTokens));
    // Update refresh key to force re-render
    setRefreshKey(Date.now());
  };

  // Initialize tokens immediately to avoid empty carousel
  useEffect(() => {
    // Always initialize with fresh tokens
    setTokens(shuffleArray(allTokens));
    
    // Set up a periodic refresh to ensure images load correctly
    const refreshInterval = setInterval(() => {
      if (isVisible) {
        forceRefresh();
      }
    }, 30000); // Refresh every 30 seconds while visible
    
    return () => clearInterval(refreshInterval);
  }, [isVisible]);

  // Force token refresh when visibility changes
  useEffect(() => {
    if (isVisible) {
      // Force refresh of tokens to clear any cached images
      forceRefresh();
      
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

  return (
    <div 
      className="w-full max-w-[1000px] px-4 md:px-4 mx-auto overflow-hidden" 
      style={{ 
        backgroundColor: 'transparent',
        transform: 'translate3d(0,0,0)',
        WebkitTransform: 'translate3d(0,0,0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
      ref={carouselRef}
      key={`carousel-${refreshKey}`} // Add key to force re-render
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
