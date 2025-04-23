
import React, { useEffect, useState } from "react";
import { TokenInfo } from "@/types/token";
import { allTokens } from "@/data/tokenData";
import { CarouselStyles } from "./CryptoCarouselStyles";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CryptoCarousel: React.FC = () => {
  // State to store randomized tokens
  const [tokens, setTokens] = useState<TokenInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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

    setTokens(shuffleTokens(allTokens));
    // Use a small timeout to ensure tokens are loaded before displaying
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full flex justify-center py-8">
        <div className="animate-pulse flex space-x-4">
          {[...Array(5)].map((_, i) => (
            <div 
              key={`skeleton-${i}`} 
              className="rounded-full bg-purple-100 h-16 w-16 md:h-24 md:w-24"
            ></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <CarouselStyles />
      
      <div className="w-full max-w-[1000px] px-4 md:px-8 mx-auto overflow-hidden relative">
        <Carousel 
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            containScroll: "trimSnaps",
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {tokens.map((token) => (
              <CarouselItem 
                key={token.id} 
                className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className="flex flex-col items-center p-2 md:p-4 transition-all duration-300 hover:scale-105">
                  <div className="token-mask">
                    <img 
                      src={token.imagePath}
                      alt={token.id}
                      className="token-image"
                      loading="lazy"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2" />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default CryptoCarousel;
