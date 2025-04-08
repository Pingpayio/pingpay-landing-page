
import React from "react";

// Token data structure
interface TokenInfo {
  id: string;
  imagePath: string;
}

const CryptoCarousel: React.FC = () => {
  // Token list with all the images (original ones + newly uploaded ones)
  const tokens: TokenInfo[] = [
    // New uploaded images
    { id: "pepe-coin", imagePath: "/lovable-uploads/32392d84-711d-46b9-a3ed-4efb0a7f73df.png" },
    { id: "dog-coin", imagePath: "/lovable-uploads/03381f3c-d4f0-453c-8bd9-7826e24aefcd.png" },
    { id: "solana", imagePath: "/lovable-uploads/1f781480-77eb-44eb-98ff-b07710351962.png" },
    { id: "usd-coin", imagePath: "/lovable-uploads/c74e6c36-409e-4745-8bb2-fdcbd6d7d9f1.png" },
    { id: "uniswap", imagePath: "/lovable-uploads/adce3f0a-a94c-42a9-9b48-dae916ed3395.png" },
    { id: "unicorn", imagePath: "/lovable-uploads/a97a962d-5373-4595-a678-cdc2359e82ce.png" },
    { id: "dollar", imagePath: "/lovable-uploads/3c5425ec-5dd5-49a5-9677-2f4d5c82b5c9.png" },
    { id: "tether", imagePath: "/lovable-uploads/c1087241-8714-4aec-bfcb-bfdebd2979ab.png" },
    { id: "xrp", imagePath: "/lovable-uploads/776aa779-6df3-4213-974c-1d86f64ae36e.png" },
    // Original images
    { id: "near", imagePath: "/lovable-uploads/a3afc788-dae9-4614-8708-6f353fb92e7d.png" },
    { id: "maticpolygon", imagePath: "/lovable-uploads/fb8736a4-287c-45c8-974e-e67b8e28c535.png" },
    { id: "apecoin", imagePath: "/lovable-uploads/2f909375-ec08-4b20-8a8d-34deac4397a1.png" },
    { id: "bitcoin", imagePath: "/lovable-uploads/14e29b50-9414-4c53-a490-fb8127c56cd1.png" },
    { id: "ethereum", imagePath: "/lovable-uploads/fe1f7beb-4d5e-480f-a58c-2ecab8aff459.png" },
    { id: "euro", imagePath: "/lovable-uploads/578b723a-599d-41e6-8e2b-760de110e2fb.png" },
    { id: "dogecoin", imagePath: "/lovable-uploads/dc4e8bef-3b60-46ca-a566-69d4b464b5dc.png" },
    { id: "pepe", imagePath: "/lovable-uploads/97c3e5ac-2952-4048-9ca4-59bb4290659a.png" },
    { id: "ufo", imagePath: "/lovable-uploads/cb202eb4-9e8f-426a-9ff7-0c461af2840a.png" },
    { id: "coolcat", imagePath: "/lovable-uploads/566eefb9-32d5-4d76-9f3c-7a5f6aa42409.png" },
    { id: "frog", imagePath: "/lovable-uploads/af6c55cd-3b20-4722-a17d-548e8624aa20.png" },
    { id: "venom", imagePath: "/lovable-uploads/ddeb5091-3b23-440f-bd59-c4c7d2d449e4.png" },
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
