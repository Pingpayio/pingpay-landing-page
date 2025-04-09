
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface AssetManagementSectionProps {
  id?: string;
}

const AssetManagementSection: React.FC<AssetManagementSectionProps> = ({ id }) => {
  const isMobile = useIsMobile();
  
  return (
    <section 
      id={id} 
      className="w-full flex flex-col items-center pt-16 md:pt-28 pb-16 md:pb-28 px-4 md:px-10 relative z-10"
      style={{
        minHeight: isMobile ? "auto" : "900px",
        backgroundColor: "#100713",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div className="max-w-[1080px] w-full h-full flex items-center justify-center">
        <h2 className="text-[#AB9FF2] text-2xl md:text-4xl font-bold text-center">
          Asset Management Features Coming Soon
        </h2>
      </div>
    </section>
  );
};

export default AssetManagementSection;
