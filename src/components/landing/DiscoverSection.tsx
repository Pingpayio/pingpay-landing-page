
import React from "react";
import SupplyBorrowTabs from "./SupplyBorrowTabs";
import CryptoCarousel from "./CryptoCarousel";

const DiscoverSection: React.FC = () => {
  return (
    <section 
      className="w-full flex flex-col items-center pt-12 md:pt-28 lg:pt-32 xl:pt-36 pb-12 md:pb-20 lg:pb-24 px-4 md:px-10 lg:px-12 relative z-10" 
      style={{
        minHeight: "auto",
        maxHeight: "840px",
        backgroundColor: "#100713"
      }}
    >
      <div className="flex mb-6 md:mb-12 lg:mb-16 w-full max-w-[1280px] mx-auto flex-col items-center">
        <h2 className="text-[#AB9FF2] text-2xl md:text-4xl lg:text-5xl font-bold leading-relaxed text-center max-w-full mt-0">
          Multi-currency Payment Support
        </h2>
        <p className="text-[#AB9FF2] text-base md:text-xl lg:text-2xl font-normal leading-normal md:leading-none text-center mt-2 max-w-full px-4">
          Settling cross-chain intents in seconds.
        </p>
        
        {/* Cryptocurrency Carousel */}
        <div className="w-full my-6 md:my-12 lg:my-16">
          <CryptoCarousel />
        </div>
        
        <SupplyBorrowTabs />
      </div>
    </section>
  );
};

export default DiscoverSection;
