
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
        animationDuration: '30s', // Faster animation (was 45s)
        animationPlayState: 'running',
        backgroundColor: 'transparent',
        willChange: 'transform'
      }}
      data-prefix={prefix} // Add data attribute for CSS targeting
      aria-hidden={!isVisible}
      key={`token-set-${prefix}-${tokens.length}`} // Add a key that changes when tokens change
    >
      {tokens.map((token) => (
        <TokenItem key={`${prefix}-${token.id}`} token={token} prefix={prefix} />
      ))}
    </div>
  );
};

// Memoize the component to prevent unnecessary re-renders
export default memo(TokenCardSet);
