
import React from "react";
import SupplyBorrowTabs from "./SupplyBorrowTabs";

const DiscoverSection: React.FC = () => {
  return (
    <section className="bg-[#100713] self-stretch flex w-full flex-col items-center pt-0 pb-40 md:pb-80 px-4 md:px-10 max-w-full">
      <div className="flex mb-8 md:mb-12 w-full max-w-[777px] flex-col items-center">
        <h2 className="text-[rgba(202,234,229,1)] text-2xl md:text-4xl font-bold leading-relaxed text-center max-w-full mt-28 md:mt-40">
          Discover HyperLend
        </h2>
        <p className="text-[rgba(202,234,229,1)] text-base md:text-xl font-normal leading-normal md:leading-none text-center mt-2 max-w-full px-4">
          Grow your assets. Access flexible borrowing.
        </p>
        <div className="w-full px-4 md:px-0 mt-8 md:mt-16">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/bbaf03e746c54fdab851e2e8fa65b939/e645f633500c3d6f5658dd477ec92eb681c57003?placeholderIfAbsent=true"
            alt="HyperLend Features"
            className="aspect-[4.98] object-contain w-full self-stretch"
          />
        </div>
        <SupplyBorrowTabs />
      </div>
    </section>
  );
};

export default DiscoverSection;
