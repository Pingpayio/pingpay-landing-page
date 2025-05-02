
import React from "react";
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
        backgroundColor: 'transparent',
        background: 'transparent'
      }}
      aria-hidden={!isVisible}
    >
      {tokens.map((token) => (
        <TokenItem key={`${prefix}-${token.id}`} token={token} prefix={prefix} />
      ))}
    </div>
  );
};

export default TokenCardSet;
