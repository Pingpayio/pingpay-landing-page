
import React from 'react';
import { TokenInfo } from '@/types/token';
import { imageStyle } from './CryptoCarouselStyles';

interface TokenItemProps {
  token: TokenInfo;
}

const TokenItem: React.FC<TokenItemProps> = ({ token }) => {
  return (
    <div className="token-mask">
      <img 
        src={token.imagePath}
        alt={token.id}
        className="token-image"
        style={imageStyle}
        loading="lazy"
      />
    </div>
  );
};

export default TokenItem;
