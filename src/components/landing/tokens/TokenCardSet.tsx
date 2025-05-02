
import React, { memo } from "react";
import { TokenInfo } from "@/types/token";
import TokenItem from "../TokenItem";

interface TokenCardSetProps {
  tokens: TokenInfo[];
  prefix: string;
  isVisible: boolean;
}

const TokenCardSet: React.FC<TokenCardSetProps> = ({ tokens, prefix, isVisible }) => {
  return (
    <div 
      className={`flex ${isVisible ? 'continuous-scroll' : ''}`}
      style={{ 
        animationDuration: '45s', // Slower animation for better consistency
        backgroundColor: 'transparent'
      }}
      aria-hidden={!isVisible}
    >
      {tokens.map((token) => (
        <TokenItem key={`${prefix}-${token.id}`} token={token} prefix={prefix} />
      ))}
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(TokenCardSet);
