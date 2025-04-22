
import React, { useEffect, useState } from "react";
import { TokenInfo } from "@/types/token";
import { allTokens } from "@/data/tokenData";
import { containerStyle } from "./CryptoCarouselStyles";
import { CarouselStyles } from "./CryptoCarouselStyles";
import TokenItem from "./TokenItem";

const CryptoCarousel: React.FC = () => {
  const [tokens, setTokens] = useState<TokenInfo[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const shuffleTokens = (array: TokenInfo[]): TokenInfo[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setTokens(shuffleTokens(allTokens));
  }, []);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <>
      <CarouselStyles />
      <div
        className="w-full max-w-[1000px] px-3 md:px-4 mx-auto overflow-hidden"
        style={containerStyle}
      >
        <div
          className="relative overflow-hidden"
          style={containerStyle}
        >
          <div
            className="flex whitespace-nowrap"
            style={containerStyle}
          >
            {/* First set of tokens */}
            <div className="flex continuous-scroll" style={containerStyle}>
              {tokens.map((token) => (
                <TokenItem key={`first-${token.id}`} token={token} prefix="first" mobile={isMobile} />
              ))}
            </div>
            {/* Second set of tokens */}
            <div className="flex continuous-scroll" style={containerStyle}>
              {tokens.map((token) => (
                <TokenItem key={`second-${token.id}`} token={token} prefix="second" mobile={isMobile} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoCarousel;
