
import React from 'react';
import { TokenInfo } from '@/types/token';
import { imageContainerStyle, imageStyle, containerStyle } from './CryptoCarouselStyles';
import CarouselImage from './CarouselImage';

interface TokenItemProps {
  token: TokenInfo;
  prefix: string;
}

const TokenItem: React.FC<TokenItemProps> = ({ token, prefix }) => {
  return (
    <div
      key={`${prefix}-${token.id}`}
      className="shrink-0 pl-4 inline-flex flex-col items-center carousel-item carousel-slide no-border"
      style={{ 
        minWidth: "140px", 
        ...containerStyle,
        backgroundColor: 'transparent',
        background: 'transparent',
        boxShadow: 'none !important',
        border: '0 none transparent !important',
        outline: '0 none transparent !important',
        padding: 0,
        transform: 'translate3d(0, 0, 0)',
      }}
    >
      <div
        className="flex flex-col items-center p-4 transition-all duration-300 hover:scale-105 carousel-item carousel-slide no-border"
        style={{
          ...containerStyle,
          backgroundColor: 'transparent',
          background: 'transparent',
          boxShadow: 'none !important',
          border: '0 none transparent !important',
          outline: '0 none transparent !important',
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        <div
          className="token-mask relative carousel-slide carousel-image-wrapper no-border"
          style={{
            ...imageContainerStyle,
            visibility: "visible",
            opacity: 1,
            display: "flex",
            backgroundColor: 'transparent',
            background: 'transparent',
            boxShadow: 'none !important',
            border: '0 none transparent !important',
            outline: '0 none transparent !important',
            transform: 'translate3d(0, 0, 0)',
            overflow: 'visible',
            borderRadius: 0,
            clipPath: 'none',
            WebkitClipPath: 'none',
          }}
        >
          <CarouselImage
            src={token.imagePath}
            alt={token.id}
            className="token-image relative z-10 carousel-img no-border"
            style={{
              ...imageStyle,
              visibility: "visible",
              opacity: 1,
              backgroundColor: 'transparent',
              background: 'transparent',
              boxShadow: 'none !important',
              border: '0 none transparent !important',
              outline: '0 none transparent !important',
              transform: 'translate3d(0, 0, 0)',
              imageRendering: 'auto',
              WebkitMaskImage: 'none',
              borderRadius: 0,
              clipPath: 'none',
              WebkitClipPath: 'none',
            }}
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

export default TokenItem;
