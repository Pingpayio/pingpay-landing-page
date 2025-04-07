
import React from "react";
import SupplyBorrowTabs from "./SupplyBorrowTabs";

const DiscoverSection: React.FC = () => {
  return (
    <section className="bg-[rgba(7,19,17,1)] self-stretch flex w-full flex-col items-center pt-20 pb-80 px-10 max-md:max-w-full max-md:px-5 max-md:py-16">
      <div className="flex mb-12 w-[777px] max-w-full flex-col items-center max-md:mb-2.5">
        <h2 className="text-[rgba(202,234,229,1)] text-4xl font-bold leading-relaxed text-center max-md:max-w-full max-md:text-3xl">
          Discover HyperLend
        </h2>
        <p className="text-[rgba(202,234,229,1)] text-xl font-normal leading-none text-center mt-2 max-md:max-w-full">
          Grow your assets. Access flexible borrowing.
        </p>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/bbaf03e746c54fdab851e2e8fa65b939/e645f633500c3d6f5658dd477ec92eb681c57003?placeholderIfAbsent=true"
          alt="HyperLend Features"
          className="aspect-[4.98] object-contain w-full self-stretch mt-16 max-md:max-w-full max-md:mt-8"
        />
        <SupplyBorrowTabs />
      </div>
    </section>
  );
};

export default DiscoverSection;
