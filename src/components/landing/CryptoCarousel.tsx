
import React, { useEffect, useState, useRef, useCallback } from "react";
import { TokenInfo } from "@/types/token";
import { allTokens } from "@/data/tokenData";
import { containerStyle } from "./CryptoCarouselStyles";
import { CarouselStyles } from "./CryptoCarouselStyles";
import TokenItem from "./TokenItem";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

const CryptoCarousel: React.FC = () => {
  // State to store randomized tokens
  const [tokens, setTokens] = useState<TokenInfo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);
  const autoScrollIntervalRef = useRef<number | null>(null);

  // Randomize tokens on component mount
  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffleTokens = (array: TokenInfo[]): TokenInfo[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    // Create a repeated array for continuous scrolling effect
    const repeatedTokens = [...shuffleTokens(allTokens), ...shuffleTokens(allTokens)];
    setTokens(repeatedTokens);
    
    // Set loaded state after a small delay to ensure DOM is ready
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const startAutoScroll = useCallback(() => {
    if (api && autoScrollIntervalRef.current === null && !isPaused) {
      autoScrollIntervalRef.current = window.setInterval(() => {
        api.scrollNext();
      }, 3000); // Scroll every 3 seconds
    }
  }, [api, isPaused]);

  const stopAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current !== null) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []);

  // Set up auto-scrolling when API is ready
  useEffect(() => {
    if (api) {
      startAutoScroll();
    }
    
    return () => {
      stopAutoScroll();
    };
  }, [api, startAutoScroll, stopAutoScroll]);

  // Handle mouse interactions
  const handleMouseEnter = () => {
    setIsPaused(true);
    stopAutoScroll();
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    startAutoScroll();
  };

  return (
    <>
      <CarouselStyles />
    
      <div 
        className="w-full max-w-[1000px] px-4 md:px-4 mx-auto overflow-hidden" 
        style={containerStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        {isLoaded && (
          <Carousel 
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              dragFree: true,
              containScroll: "trimSnaps",
              slidesToScroll: 1
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {tokens.map((token, index) => (
                <CarouselItem 
                  key={`${token.id}-${index}`}
                  className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <TokenItem token={token} prefix={`carousel-${index}`} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:flex">
              <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
              <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
            </div>
          </Carousel>
        )}
      </div>
    </>
  );
};

export default CryptoCarousel;
