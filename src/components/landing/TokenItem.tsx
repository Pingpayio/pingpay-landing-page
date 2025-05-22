
import React, { useState, memo } from 'react';
import { TokenInfo } from '@/types/token';
import CarouselImage from './CarouselImage';

interface TokenItemProps {
  token: TokenInfo;
  prefix: string;
}

const TokenItem: React.FC<TokenItemProps> = ({ token, prefix }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  
  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };
  
  const handleImageError = () => {
    console.error(`Failed to load image: ${token.imagePath}`);
    setImageError(true);
    setImageLoaded(false);
  };

  // Use a placeholder if the image fails to load
  const imagePath = imageError ? "/placeholder.svg" : token.imagePath;
  
  // Add a unique key for each rendering to avoid caching issues
  const uniqueKey = `${prefix}-${token.id}-${Date.now()}`;

  return (
    <div
      key={`${prefix}-${token.id}`}
      className="shrink-0 pl-4 inline-flex flex-col items-center will-change-transform"
      data-token-id={token.id}
      style={{ 
        minWidth: "140px", 
        maxWidth: "140px",
        scrollSnapAlign: "start",
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
            backgroundColor: 'transparent',
            border: "none",
            outline: "none",
            boxShadow: "none"
          }}
        >
          <div className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <CarouselImage
              src={imagePath}
              alt={token.id}
              className="token-image"
              width={100}
              height={100}
              onLoad={handleImageLoad}
              onError={handleImageError}
              style={{
                border: "none",
                outline: "none",
                boxShadow: "none"
              }}
              key={uniqueKey} // Force re-render with unique key
            />
          </div>
          
          {!imageLoaded && !imageError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-t-transparent border-primary rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(TokenItem);
