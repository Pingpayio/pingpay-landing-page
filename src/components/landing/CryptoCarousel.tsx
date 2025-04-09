
import React from "react";

// Token data structure
interface TokenInfo {
  id: string;
  imagePath: string;
}

const CryptoCarousel: React.FC = () => {
  // Token list with the newly uploaded images
  const tokens: TokenInfo[] = [
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
  ];

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
                <div className="flex flex-col items-center p-4 transition-all duration-300 hover:scale-105">
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
                <div className="flex flex-col items-center p-4 transition-all duration-300 hover:scale-105">
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
