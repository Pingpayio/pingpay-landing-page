
import React, { useRef } from "react";
import FeatureGrid from "./asset-management/FeatureGrid";

const AssetManagementSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      id="asset-management" 
      className="w-full py-16 md:py-24 px-4 relative overflow-hidden" 
      style={{ backgroundColor: '#E5DEFF' }}
      ref={sectionRef}
    >
      <div className="max-w-[1080px] mx-auto relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#000000]">The Easiest Tools for Crypto Payments</h2>
        </div>

        <FeatureGrid />
      </div>
    </section>
  );
};

export default AssetManagementSection;
