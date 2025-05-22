
import React, { useState, useEffect } from "react";
import { TokenInfo } from "@/types/token";
import { allTokens } from "@/data/tokenData";
import TokenCardSet from "./tokens/TokenCardSet";
import { useCarouselVisibility } from "@/hooks/useCarouselVisibility";
import { shuffleArray } from "@/utils/carouselUtils";
import CarouselVisibilityHandler from "./usecases/CarouselVisibilityHandler";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield } from "lucide-react";

const CryptoCarousel: React.FC = () => {
  // State to store randomized tokens
  const [tokens, setTokens] = useState<TokenInfo[]>([]);
  const { isVisible, carouselRef } = useCarouselVisibility({ immediatelyVisible: true });
  const isMobile = useIsMobile();

  // Initialize tokens - updated to run on every render to ensure we get the latest token data
  useEffect(() => {
    // Use the latest allTokens data each time
    setTokens(shuffleArray([...allTokens]));
  }, [allTokens.length]); // Re-run when the token array length changes

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
  }, [isVisible, isMobile, tokens]); // Also reflow when tokens change

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
      
      {/* Admin link to coin identifier */}
      <div className="flex justify-center mt-6">
        <Button variant="outline" size="sm" asChild>
          <Link to="/coin-identifier" className="flex items-center text-xs text-gray-500">
            <Shield className="h-3 w-3 mr-1" />
            Identify Coins
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default CryptoCarousel;
