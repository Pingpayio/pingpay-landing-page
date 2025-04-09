
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Token data structure
interface TokenInfo {
  id: string;
  imagePath: string;
}

const CryptoCarousel: React.FC = () => {
  // All tokens including the new ones
  const allTokens: TokenInfo[] = [
    // Existing tokens
    { id: "coin1", imagePath: "/lovable-uploads/e6f8b545-fa42-4e22-9ad8-1e99474862b2.png" },
    { id: "coin2", imagePath: "/lovable-uploads/6d4ff297-c8d2-4651-9da4-14185bef8a7f.png" },
    { id: "coin3", imagePath: "/lovable-uploads/2dd79dd2-c23f-4f1e-b1bd-73afcae0ea29.png" },
    { id: "coin4", imagePath: "/lovable-uploads/b45c55a9-c1d6-485c-8707-54c039d4d5ef.png" },
    { id: "coin5", imagePath: "/lovable-uploads/abef287a-5b0e-4e3d-9328-d41f5096d7a3.png" },
    { id: "coin6", imagePath: "/lovable-uploads/2b3aa215-b6e5-4c4b-8514-f0d3106135cd.png" },
    { id: "coin7", imagePath: "/lovable-uploads/34df4987-58fd-4221-a4b5-52f3acc57d2a.png" },
    { id: "coin8", imagePath: "/lovable-uploads/830f9d36-f9b7-4860-aaa8-511a963d1a4c.png" },
    { id: "coin9", imagePath: "/lovable-uploads/0eeaec2e-d7af-42fe-b6f2-8956118e5523.png" },
    { id: "coin10", imagePath: "/lovable-uploads/0833e98a-f70e-46ef-b6ce-1a04dff38d0f.png" },
    { id: "coin11", imagePath: "/lovable-uploads/3487923f-3750-4d2d-9729-3093d309d810.png" },
    { id: "coin12", imagePath: "/lovable-uploads/c0f0f9f5-318d-4cf4-b6ee-1d864a05d9a5.png" },
    { id: "coin13", imagePath: "/lovable-uploads/30212935-4627-41da-88eb-c62982a9dffe.png" },
    { id: "coin14", imagePath: "/lovable-uploads/5b60922e-f63b-4e8f-a95e-e584727f8b0a.png" },
    
    // New tokens from the uploaded images
    { id: "coin15", imagePath: "/lovable-uploads/2e4bdbc8-b725-41ca-b2d8-4281234435f6.png" }, // Dog coin
    { id: "coin16", imagePath: "/lovable-uploads/a6debefc-797f-4e48-92d8-6bff8224cae6.png" }, // Solana coin
    { id: "coin17", imagePath: "/lovable-uploads/19b83477-b528-4649-9821-dbd84fbcf0c0.png" }, // Ox coin
    { id: "coin18", imagePath: "/lovable-uploads/6443065c-4ef1-4166-858a-0b3a3d16152f.png" }, // Unicorn coin
    { id: "coin19", imagePath: "/lovable-uploads/f3b935de-e4db-4807-b3fc-c84ba81f8d95.png" }, // USD coin
    { id: "coin20", imagePath: "/lovable-uploads/5248b9e5-d6ed-4e1a-a022-e0ee1aa4e09f.png" }, // Tether coin
    { id: "coin21", imagePath: "/lovable-uploads/bcf32a69-4562-4179-93db-ceb746386d60.png" }, // Dog with hat coin
    { id: "coin22", imagePath: "/lovable-uploads/9b36567e-97a5-4aac-a103-a487e2b62540.png" }, // XRP coin
    { id: "coin23", imagePath: "/lovable-uploads/fc76b8fb-ff5c-4967-896f-eb1cdc083088.png" }, // Z coin
  ];

  // State to store randomized tokens
  const [tokens, setTokens] = useState<TokenInfo[]>([]);

  // Randomize tokens on component mount
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
  }, []);

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
                style={{ minWidth: "140px" }}
              >
                <div className="flex flex-col items-center p-4 bg-gradient-to-br from-[#dfd7fc] to-[#f0e8ff] rounded-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center overflow-hidden size-36 md:size-48">
                    <img 
                      src={token.imagePath}
                      alt={token.id}
                      className="w-full h-full object-contain"
                    />
                  </div>
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
                style={{ minWidth: "140px" }}
              >
                <div className="flex flex-col items-center p-4 bg-gradient-to-br from-[#dfd7fc] to-[#f0e8ff] rounded-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center overflow-hidden size-36 md:size-48">
                    <img 
                      src={token.imagePath}
                      alt={token.id}
                      className="w-full h-full object-contain"
                    />
                  </div>
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
