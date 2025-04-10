
import { useState, useEffect } from 'react';
import { TokenInfo } from './types';

export const useTokenShuffle = (allTokens: TokenInfo[]) => {
  const [tokens, setTokens] = useState<TokenInfo[]>([]);

  useEffect(() => {
    // Fisher-Yates shuffle algorithm
    const shuffleTokens = (array: TokenInfo[]): TokenInfo[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setTokens(shuffleTokens(allTokens));
  }, [allTokens]);
  
  return tokens;
};
