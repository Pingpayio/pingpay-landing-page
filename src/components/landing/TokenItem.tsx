
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
      className="shrink-0 pl-4 inline-flex flex-col items-center carousel-item"
      style={{ minWidth: "140px", ...containerStyle }}
    >
      <div
        className="flex flex-col items-center p-4 transition-all duration-300 hover:scale-105 carousel-item"
        style={containerStyle}
      >
        <div
          className="token-mask relative"
          style={imageContainerStyle}
        >
          <CarouselImage
            src={token.imagePath}
            alt={token.id}
            className="token-image relative z-10"
            style={imageStyle}
            width={120}
            height={120}
          />
        </div>
      </div>
    </div>
  );
};

export default TokenItem;
