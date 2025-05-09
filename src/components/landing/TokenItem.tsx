
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

  // Calculate if this is one of our newly updated images
  const isUpdatedToken = [
    "/lovable-uploads/0bfb64bd-4b10-4ac2-864b-765b6df0d91f.png", // Bitcoin
    "/lovable-uploads/5986bc32-15ab-4ebf-b584-134622a18185.png", // Doge
    "/lovable-uploads/ad9e01c9-cceb-4145-ac1e-336a65e1d26b.png", // WIF
    "/lovable-uploads/54d2365e-114b-41a9-af5d-baabc560bc44.png", // XRP
    "/lovable-uploads/ccf024e4-3885-4167-a9c1-ee73f77d24ba.png"  // Zcash
  ].includes(token.imagePath);

  return (
    <div
      key={`${prefix}-${token.id}`}
      className="shrink-0 pl-4 inline-flex flex-col items-center will-change-transform"
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
              style={{
                // Apply larger scale to the new tokens to match others visually
                width: isUpdatedToken ? '95%' : '85%', 
                height: isUpdatedToken ? '95%' : '85%',
                maxWidth: isUpdatedToken ? '95%' : '85%',
                maxHeight: isUpdatedToken ? '95%' : '85%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(TokenItem);
