
import React, { useState, memo } from 'react';
import { TokenInfo } from '@/types/token';
import CarouselImage from './CarouselImage';

interface TokenItemProps {
  token: TokenInfo;
  prefix: string;
}

const TokenItem: React.FC<TokenItemProps> = ({ token, prefix }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div
      key={`${prefix}-${token.id}`}
      className="shrink-0 pl-4 inline-flex flex-col items-center will-change-transform"
      data-token-id={token.id}
      style={{ 
        minWidth: "140px", 
        maxWidth: "140px",
        scrollSnapAlign: "start", // For better mobile scrolling
        backgroundColor: 'transparent'
      }}
    >
      <div
        className="flex flex-col items-center p-2 md:p-4 transition-all duration-300 hover:scale-105"
      >
        <div
          className="token-mask relative"
          style={{
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: 'transparent'
          }}
        >
          <div className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <CarouselImage
              src={token.imagePath}
              alt={token.id}
              className="token-image"
              width={100}
              height={100}
              onLoad={handleImageLoad}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(TokenItem);
