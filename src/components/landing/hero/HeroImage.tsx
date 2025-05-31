
import React, { useState } from "react";

const HeroImage: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="mt-8 md:mt-[60px] px-4 w-full mb-0 relative">
      <div className={`transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <img 
          src="https://cdn.builder.io/api/v1/image/assets/bbaf03e746c54fdab851e2e8fa65b939/28094319b78a85233278e4f17a4e3e2b46bcc4fe?placeholderIfAbsent=true" 
          alt="HyperLend Platform" 
          className="aspect-[1.68] object-contain w-full md:w-[765px] mx-auto h-auto max-h-[calc(100vh*0.45)] md:max-h-[calc(100vh*0.5)]" 
          style={{
            marginBottom: "-25px"
          }}
          loading="lazy"
          onLoad={handleImageLoad}
          fetchPriority="high"
        />
      </div>
      
      {/* Coming Soon Overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white px-5 py-2 font-bold text-xl md:text-3xl shadow-lg animate-pulse-coming-soon translate-y-[15%]">
          COMING SOON
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
