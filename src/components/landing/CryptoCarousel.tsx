import React, { useEffect, useState, useRef } from "react";
import { TokenInfo } from "@/types/token";
import { allTokens } from "@/data/tokenData";
import { containerStyle } from "./CryptoCarouselStyles";
import { CarouselStyles } from "./CryptoCarouselStyles";
import TokenItem from "./TokenItem";

const CryptoCarousel: React.FC = () => {
  // State to store randomized tokens
  const [tokens, setTokens] = useState<TokenInfo[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Randomize tokens and set up visibility observer on component mount
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

    // Set up Intersection Observer to detect when carousel is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // Once visible, no need to keep observing
          if (carouselRef.current) {
            observer.unobserve(carouselRef.current);
          }
        }
      },
      { threshold: 0.1 } // Trigger when 10% of element is visible
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  // Pause animations when tab is not visible to save resources
  useEffect(() => {
    const handleVisibilityChange = () => {
      const isHidden = document.hidden;
      const scrollElements = document.querySelectorAll('.continuous-scroll');
      
      scrollElements.forEach(el => {
        if (isHidden) {
          (el as HTMLElement).style.animationPlayState = 'paused';
        } else {
          (el as HTMLElement).style.animationPlayState = 'running';
        }
      });
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <CarouselStyles />
    
      <div 
        className="w-full max-w-[1000px] px-4 md:px-4 mx-auto overflow-hidden" 
        style={{
          ...containerStyle,
          backgroundColor: 'transparent',
          background: 'transparent'
        }}
        ref={carouselRef}
      >
        <div 
          className="relative overflow-hidden" 
          style={{
            ...containerStyle,
            backgroundColor: 'transparent',
            background: 'transparent'
          }}
        >
          <div 
            className={`flex whitespace-nowrap transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{
              ...containerStyle,
              backgroundColor: 'transparent',
              background: 'transparent'
            }}
          >
            {/* First set of tokens */}
            <div 
              className={`flex ${isVisible ? 'continuous-scroll' : ''}`}
              style={{
                ...containerStyle,
                backgroundColor: 'transparent',
                background: 'transparent'
              }}
              aria-hidden={!isVisible}
            >
              {tokens.map((token) => (
                <TokenItem key={`first-${token.id}`} token={token} prefix="first" />
              ))}
            </div>

            {/* Second set of tokens - creates the continuous effect */}
            <div 
              className={`flex ${isVisible ? 'continuous-scroll' : ''}`}
              style={{
                ...containerStyle,
                backgroundColor: 'transparent',
                background: 'transparent'
              }}
              aria-hidden={!isVisible}
            >
              {tokens.map((token) => (
                <TokenItem key={`second-${token.id}`} token={token} prefix="second" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoCarousel;
