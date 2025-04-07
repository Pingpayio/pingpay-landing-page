
import React from "react";
import SupplyBorrowTabs from "./SupplyBorrowTabs";
import CryptoCarousel from "./CryptoCarousel";

const DiscoverSection: React.FC = () => {
  return (
    <section 
      className="bg-[#100713] self-stretch flex w-full flex-col items-center pt-20 md:pt-28 pb-16 md:pb-20 px-4 md:px-10 max-w-full"
      style={{ minHeight: "840px", maxHeight: "840px" }}
    >
      <div className="flex mb-8 md:mb-12 w-full max-w-[777px] flex-col items-center">
        <h2 className="text-[#AB9FF2] text-2xl md:text-4xl font-bold leading-relaxed text-center max-w-full mt-0">
          Discover HyperLend
        </h2>
        <p className="text-[#AB9FF2] text-base md:text-xl font-normal leading-normal md:leading-none text-center mt-2 max-w-full px-4">
          Grow your assets. Access flexible borrowing.
        </p>
        
        {/* Cryptocurrency Carousel */}
        <div className="w-full my-8 md:my-12">
          <CryptoCarousel />
        </div>
        
        <SupplyBorrowTabs />
      </div>
    </section>
  );
};

export default DiscoverSection;
