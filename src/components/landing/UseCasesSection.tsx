
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import UseCasesCarousel from "./UseCasesCarousel";
import ComingSoonButton from "./ComingSoonButton";
import SectionHeader from "./SectionHeader";
import { FileText } from "lucide-react";

const UseCasesSection: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section 
      id="use-cases"
      className="w-full flex flex-col items-center pt-12 md:pt-28 pb-12 md:pb-20 px-4 md:px-10 relative z-10 overflow-hidden"
      style={{
        minHeight: isMobile ? "auto" : "900px",
        backgroundColor: "#100713"
      }}
    >
      <div className="max-w-[1080px] mx-auto w-full h-full flex flex-col">
        <div className="text-center mb-12 md:mb-20">
          <SectionHeader
            title="Payments for All Use Cases"
            description=""
            maxWidth="full"
          />
        </div>
        
        <UseCasesCarousel />
        
        {/* Buttons container */}
        <div className="flex justify-center mt-8 md:mt-16 space-x-4">
          <ComingSoonButton />
          
          <button 
            className="bg-[#F0F1FF] border h-[56px] w-[219px] flex items-center justify-center gap-2 text-[#3D315E] font-medium text-center px-4 py-2 rounded-[30px] border-[#F0F1FF] border-solid cursor-pointer whitespace-nowrap hover:bg-[#E0E1FF] hover:scale-105 transition-all duration-300"
          >
            <span className="text-sm md:text-base">Documentation</span>
            <FileText size={16} className="md:size-18" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;

