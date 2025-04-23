
import React, { useState } from 'react';
import { TokenInfo } from '@/types/token';
import { imageContainerStyle, imageStyle, containerStyle } from './CryptoCarouselStyles';

interface TokenItemProps {
  token: TokenInfo;
  prefix: string;
}

/**
 * Minimal inline blur placeholder, transition to image when loaded
 */
const TokenItem: React.FC<TokenItemProps> = ({ token, prefix }) => {
  const [loaded, setLoaded] = useState(false);

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
          {/* Blurred placeholder while loading */}
          {!loaded && (
            <div
              aria-hidden
              className="absolute inset-0 z-0 animate-pulse bg-gradient-to-br from-[#cfc0fa77] via-[#ede3ff99] to-[#e8e7fa66] blur-xl"
              style={{
                borderRadius: '50%',
                transition: "opacity .3s",
                opacity: loaded ? 0 : 1,
              }}
            />
          )}
          <img 
            src={token.imagePath}
            alt={token.id}
            className="token-image relative z-10"
            style={{
              ...imageStyle,
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.3s"
            }}
            width={120}
            height={120}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default TokenItem;
