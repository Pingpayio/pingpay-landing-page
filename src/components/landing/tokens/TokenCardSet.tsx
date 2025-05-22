
import React, { memo } from "react";
import { TokenInfo } from "@/types/token";
import TokenItem from "../TokenItem";

interface TokenCardSetProps {
  tokens: TokenInfo[];
  prefix: string;
  isVisible: boolean;
}

const TokenCardSet: React.FC<TokenCardSetProps> = ({ tokens, prefix, isVisible }) => {
  // Generate a unique key for this render cycle
  const renderKey = `${prefix}-${Date.now()}`;
  
  return (
    <div 
      key={renderKey}
      className={`flex ${isVisible ? 'continuous-scroll' : ''}`}
      style={{ 
        animationDuration: '30s', // Faster animation (was 45s)
        animationPlayState: 'running',
        backgroundColor: 'transparent',
        willChange: 'transform'
      }}
      data-prefix={prefix}
      aria-hidden={!isVisible}
    >
      {tokens.map((token, index) => (
        <TokenItem 
          key={`${prefix}-${token.id}-${index}-${renderKey}`} 
          token={token} 
          prefix={`${prefix}-${index}`} 
        />
      ))}
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(TokenCardSet);
