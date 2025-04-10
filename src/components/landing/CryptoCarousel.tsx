
import React from "react";
import { cn } from "@/lib/utils";
import TokenList from "./tokens/TokenList";
import CarouselStyles from "./tokens/CarouselStyles";
import { useTokenShuffle } from "./tokens/useTokenShuffle";
import { allTokens } from "./tokens/tokenData";

const CryptoCarousel: React.FC = () => {
  // Use the hook to get shuffled tokens
  const tokens = useTokenShuffle(allTokens);

  // Base container style
  const containerStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    borderRadius: '0'
  };

  return (
    <>
      {/* Enhanced CSS styles */}
      <CarouselStyles />
    
      <div 
        className="w-full max-w-[1000px] px-8 md:px-4 mx-auto overflow-hidden crypto-carousel-container" 
        style={containerStyle}
      >
        <div 
          className="relative overflow-hidden crypto-carousel-container" 
          style={containerStyle}
        >
          <div 
            className="flex whitespace-nowrap crypto-carousel-container" 
            style={containerStyle}
          >
            {/* First set of tokens */}
            <TokenList tokens={tokens} prefix="first" />

            {/* Second set of tokens - creates the continuous effect */}
            <TokenList tokens={tokens} prefix="second" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoCarousel;
