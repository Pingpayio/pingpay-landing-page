
import React, { useEffect, useCallback } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  useCarousel
} from "@/components/ui/carousel";
import { Bitcoin, Circle, DollarSign, Euro, JapaneseYen, PoundSterling } from "lucide-react";
import Swiss from "../icons/Swiss";

// Token data structure
interface TokenInfo {
  id: string;
  name: string;
  icon: React.ReactNode;
}

const AutoScrollCarousel: React.FC = () => {
  const { api } = useCarousel();
  
  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  // Set up auto-scrolling with useEffect
  useEffect(() => {
    if (!api) return;
    
    const interval = setInterval(() => {
      scrollNext();
    }, 3000); // Scroll every 3 seconds
    
    return () => clearInterval(interval);
  }, [api, scrollNext]);
  
  return null;
};

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

  return (
    <div className="w-full max-w-[1000px] px-8 md:px-4 mx-auto">
      <Carousel 
        opts={{
          align: "start",
          loop: true,
          dragFree: true,
          containScroll: "trimSnaps",
        }}
        className="w-full"
      >
        <AutoScrollCarousel />
        <CarouselContent className="-ml-2 md:-ml-4">
          {tokens.map((token) => (
            <CarouselItem key={token.id} className="pl-2 md:pl-4 md:basis-1/4 lg:basis-1/5">
              <div className="flex flex-col items-center p-4 transition-all duration-300 hover:scale-105">
                <div className="rounded-full bg-white p-4 shadow-md flex items-center justify-center mb-3 size-16 md:size-20">
                  {token.icon}
                </div>
                <span className="text-white text-sm md:text-base font-medium">{token.name}</span>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CryptoCarousel;
