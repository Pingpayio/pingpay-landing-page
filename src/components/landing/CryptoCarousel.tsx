
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
    // Existing tokens with updates for Bitcoin (coin1), Doge (coin15 & coin21), XRP (coin22), Zcash (coin23)
    { id: "coin1", imagePath: "/lovable-uploads/6d492b84-cccd-40f7-98ed-8d6bda294b26.png" }, // Updated Bitcoin
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
    
    // Updated Dog coin (Doge)
    { id: "coin15", imagePath: "/lovable-uploads/2af6591e-0b29-448e-88e5-33224165fbf9.png" }, 
    { id: "coin16", imagePath: "/lovable-uploads/a6debefc-797f-4e48-92d8-6bff8224cae6.png" }, 
    { id: "coin17", imagePath: "/lovable-uploads/19b83477-b528-4649-9821-dbd84fbcf0c0.png" }, 
    { id: "coin18", imagePath: "/lovable-uploads/6443065c-4ef1-4166-858a-0b3a3d16152f.png" }, 
    { id: "coin19", imagePath: "/lovable-uploads/f3b935de-e4db-4807-b3fc-c84ba81f8d95.png" }, 
    { id: "coin20", imagePath: "/lovable-uploads/5248b9e5-d6ed-4e1a-a022-e0ee1aa4e09f.png" }, 
    // Updated Dog with hat coin
    { id: "coin21", imagePath: "/lovable-uploads/1c0b518e-a843-4ee5-8c42-39e92469ba62.png" }, 
    // Updated XRP coin
    { id: "coin22", imagePath: "/lovable-uploads/e5b0cc20-427d-4ab7-838c-2d8fa200e8ab.png" }, 
    // Updated Z coin (Zcash)
    { id: "coin23", imagePath: "/lovable-uploads/2dd8366c-5a0f-462e-b9b3-1520c4e42c72.png" }, 
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

  // Enhanced CSS with improved circular mask
  const containerStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    borderRadius: '0'
  };

  // Standardized container size for all tokens
  const imageContainerStyle: React.CSSProperties = {
    ...containerStyle,
    padding: '0',
    margin: '0',
    background: 'transparent',
    isolation: 'isolate',
    position: 'relative',
    width: '180px',
    height: '180px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: '50%', // Circular mask
  };

  // Standardized image style for consistent appearance
  const imageStyle: React.CSSProperties = {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    width: '75%', // Fixed percentage for all images
    height: '75%', // Fixed percentage for all images
    objectFit: 'contain',
    display: 'block',
    mixBlendMode: 'normal',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)', // Center both horizontally and vertically
  };

  return (
    <>
      {/* CSS to ensure consistent token sizing and remove purple lines */}
      <style>
        {`
          .carousel-item, .carousel-item img {
            background-color: transparent !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
          }
          
          img {
            background-color: transparent !important;
            mix-blend-mode: normal !important;
          }
          
          .token-mask {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: transparent;
            position: relative;
          }

          /* Inner mask to ensure no purple lines are visible */
          .token-mask::after {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            border-radius: 50%;
            box-shadow: 0 0 0 5px #000; /* Black shadow to cover any lines */
            pointer-events: none;
          }
          
          /* Ensure all token images have consistent size */
          .token-image {
            width: 75% !important;
            height: 75% !important;
            max-width: 75% !important;
            max-height: 75% !important;
            object-fit: contain !important;
            position: absolute !important;
            left: 50% !important;
            top: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
        `}
      </style>
    
      <div 
        className="w-full max-w-[1000px] px-8 md:px-4 mx-auto overflow-hidden" 
        style={containerStyle}
      >
        <div 
          className="relative overflow-hidden" 
          style={containerStyle}
        >
          <div 
            className="flex whitespace-nowrap" 
            style={containerStyle}
          >
            {/* First set of tokens */}
            <div 
              className="flex continuous-scroll" 
              style={containerStyle}
            >
              {tokens.map((token) => (
                <div 
                  key={`first-${token.id}`} 
                  className="shrink-0 pl-4 inline-flex flex-col items-center carousel-item"
                  style={{ minWidth: "140px", ...containerStyle }}
                >
                  <div 
                    className="flex flex-col items-center p-4 transition-all duration-300 hover:scale-105 carousel-item" 
                    style={containerStyle}
                  >
                    <div 
                      className="token-mask"
                      style={imageContainerStyle}
                    >
                      <img 
                        src={token.imagePath}
                        alt={token.id}
                        className="token-image"
                        style={imageStyle}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second set of tokens - creates the continuous effect */}
            <div 
              className="flex continuous-scroll" 
              style={containerStyle}
            >
              {tokens.map((token) => (
                <div 
                  key={`second-${token.id}`} 
                  className="shrink-0 pl-4 inline-flex flex-col items-center carousel-item"
                  style={{ minWidth: "140px", ...containerStyle }}
                >
                  <div 
                    className="flex flex-col items-center p-4 transition-all duration-300 hover:scale-105 carousel-item" 
                    style={containerStyle}
                  >
                    <div 
                      className="token-mask"
                      style={imageContainerStyle}
                    >
                      <img 
                        src={token.imagePath}
                        alt={token.id}
                        className="token-image"
                        style={imageStyle}
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CryptoCarousel;
