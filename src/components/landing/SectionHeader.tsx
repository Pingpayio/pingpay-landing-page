
import React from "react";

interface SectionHeaderProps {
  title: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[#AB9FF2] text-2xl md:text-4xl font-bold leading-relaxed text-center max-w-full mt-0">
        {title}
      </h2>
      <p className="text-[#AB9FF2] text-base md:text-xl font-normal leading-normal md:leading-none text-center mt-2 max-w-full px-4">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
