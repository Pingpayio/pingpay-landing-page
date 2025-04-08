
import React from "react";

// Token data structure
interface TokenInfo {
  id: string;
  name: string;
  imagePath: string;
}

const CryptoCarousel: React.FC = () => {
  // Token list with proper image paths
  const tokens: TokenInfo[] = [
    { id: "near", name: "NEAR", imagePath: "/lovable-uploads/90633e1d-04fe-43f3-b2a4-a95cbd296b2b.png" },
    { id: "usdc", name: "USDC", imagePath: "/lovable-uploads/a7e6dbf3-9584-40ce-bf87-479d4f04fc18.png" },
    { id: "usdt", name: "USDT", imagePath: "/lovable-uploads/c604dab3-c20d-486c-9450-77969cbf616e.png" },
    { id: "btc", name: "Bitcoin", imagePath: "/lovable-uploads/6853e676-7e50-4200-b7df-7c86f6a7d996.png" },
    { id: "eth", name: "Ethereum", imagePath: "/lovable-uploads/2e580af0-9cac-4ddf-8e9e-a30d2665100d.png" },
    { id: "eur", name: "Euro", imagePath: "/lovable-uploads/881030f8-ed6c-49cb-ad52-cc009f383859.png" },
    { id: "gbp", name: "British Pound", imagePath: "/lovable-uploads/ee3d231f-51a3-4655-9de3-4e51afbe3dc2.png" },
    { id: "jpy", name: "Japanese Yen", imagePath: "/lovable-uploads/8acabdbc-d36f-40cf-9772-ac75c5a13965.png" },
    { id: "chf", name: "Swiss Franc", imagePath: "/lovable-uploads/2a6effa1-10aa-4415-bb94-7fffb7a54429.png" },
    { id: "sol", name: "Solana", imagePath: "/lovable-uploads/eadbfcb0-7e73-4c3d-92a5-93aa2a87156f.png" },
    { id: "doge", name: "Dogecoin", imagePath: "/lovable-uploads/9ff1701c-bdf0-4b73-b406-23ed3ebb61ac.png" },
    { id: "xrp", name: "XRP", imagePath: "/lovable-uploads/e064f9bf-617b-452b-9cda-1e339b98d9c5.png" },
    { id: "usdt", name: "Tether", imagePath: "/lovable-uploads/aae3b923-8e1f-4e29-bb9a-1588c592cdf4.png" },
  ];

  // Duplicate tokens to create a continuous scrolling effect
  const duplicatedTokens = [...tokens, ...tokens];

  return (
    <div className="w-full max-w-[1000px] px-8 md:px-4 mx-auto overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="flex whitespace-nowrap">
          {/* First set of tokens */}
          <div className="flex continuous-scroll">
            {tokens.map((token) => (
              <div 
                key={`first-${token.id}`} 
                className="shrink-0 pl-4 inline-flex flex-col items-center"
                style={{ minWidth: "120px" }}
              >
                <div className="flex flex-col items-center p-4 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center mb-3 size-16 md:size-20 overflow-hidden">
                    <img 
                      src={token.imagePath}
                      alt={token.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white text-sm md:text-base font-medium">{token.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Second set of tokens - creates the continuous effect */}
          <div className="flex continuous-scroll">
            {tokens.map((token) => (
              <div 
                key={`second-${token.id}`} 
                className="shrink-0 pl-4 inline-flex flex-col items-center"
                style={{ minWidth: "120px" }}
              >
                <div className="flex flex-col items-center p-4 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center mb-3 size-16 md:size-20 overflow-hidden">
                    <img 
                      src={token.imagePath}
                      alt={token.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-white text-sm md:text-base font-medium">{token.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCarousel;
