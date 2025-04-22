
import React from 'react';
import { TokenInfo } from '@/types/token';
import { imageContainerStyle, imageStyle, containerStyle } from './CryptoCarouselStyles';

interface TokenItemProps {
  token: TokenInfo;
  prefix: string;
  mobile?: boolean;
}

const TokenItem: React.FC<TokenItemProps> = ({ token, prefix, mobile }) => {
  // Adjust size for smaller mobile rendering
  const mobileContainer = {
    ...containerStyle,
    width: '90px',
    height: '90px',
  };
  const mobileImage = {
    ...imageStyle,
    width: "75%",
    height: "75%",
    minWidth: "60px",
    minHeight: "60px",
  };
  return (
    <div
      key={`${prefix}-${token.id}`}
      className="shrink-0 pl-2 md:pl-4 inline-flex flex-col items-center carousel-item"
      style={{
        minWidth: mobile ? "100px" : "140px",
        ...containerStyle,
      }}
    >
      <div
        className="flex flex-col items-center p-2 md:p-4 transition-all duration-300 hover:scale-105 carousel-item"
        style={mobile ? mobileContainer : containerStyle}
      >
        <div
          className="token-mask"
          style={mobile ? { ...imageContainerStyle, width: "90px", height: "90px" } : imageContainerStyle}
        >
          <img
            src={token.imagePath}
            alt={token.id}
            className="token-image"
            style={mobile ? mobileImage : imageStyle}
            loading="lazy"
            sizes={mobile ? "90px" : "180px"}
            width={mobile ? 90 : 180}
            height={mobile ? 90 : 180}
          />
        </div>
      </div>
    </div>
  );
};

export default TokenItem;
