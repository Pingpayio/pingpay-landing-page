
import React, { useEffect, useState } from "react";
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

const CryptoCarousel: React.FC = () => {
  // State to store randomized tokens
  const [tokens, setTokens] = useState<TokenInfo[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

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
    
    // Set loaded state after a small delay to ensure DOM is ready
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <>
      <CarouselStyles />
    
      <div 
        className="w-full max-w-[1000px] px-4 md:px-4 mx-auto overflow-hidden" 
        style={containerStyle}
      >
        {isLoaded && (
          <Carousel 
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
              {tokens.map((token) => (
                <CarouselItem 
                  key={token.id}
                  className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <TokenItem token={token} prefix="carousel" />
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
