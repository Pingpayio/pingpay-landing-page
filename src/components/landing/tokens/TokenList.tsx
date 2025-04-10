
import React from "react";
import TokenMask from "./TokenMask";
import { TokenInfo } from "./types";

interface TokenListProps {
  tokens: TokenInfo[];
  prefix: string;
}

const TokenList: React.FC<TokenListProps> = ({ tokens, prefix }) => {
  // Container style for transparency
  const containerStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    borderRadius: '0'
  };

  return (
    <div 
      className="flex continuous-scroll crypto-carousel-container" 
      style={containerStyle}
    >
      {tokens.map((token) => (
        <div 
          key={`${prefix}-${token.id}`} 
          className="shrink-0 pl-4 inline-flex flex-col items-center carousel-item"
          style={{ minWidth: "160px", ...containerStyle }}
        >
          <div className="carousel-item-wrapper">
            <div 
              className="flex flex-col items-center p-4 transition-all duration-300 hover:scale-105 carousel-item" 
              style={containerStyle}
            >
              <TokenMask imagePath={token.imagePath} id={token.id} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenList;
