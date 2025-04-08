
import React from "react";
import { Timer } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <header className="flex flex-col items-center p-4 md:p-6 rounded-2xl">
      <div className="flex flex-col items-center">
        <img
          src="/lovable-uploads/20369f52-b96a-496b-ae8d-1078cd3ab125.png"
          alt="Ping Logo"
          className="w-10 h-10 mb-4 mt-12 md:mt-[100px]"
        />
        <h1 className="text-[#000000] text-3xl md:text-[48px] font-bold leading-tight md:leading-[60px] text-center mt-4 md:mt-8 max-w-full text-shadow-sm">
          The Abstracted Payment
          <br className="md:block" />
          Engine for the Future of Commerce
        </h1>
      </div>
      <p className="text-[#000000] text-base md:text-2xl font-normal text-center mt-4 max-w-full px-4 md:leading-9">
        Make & Receive Instant Borderless Payments
      </p>
      <button className="bg-[#AB9FF2] border flex max-w-full items-center justify-center gap-2 text-[#3D315E] font-medium text-center mt-6 md:mt-8 px-4 py-2 rounded-[30px] border-[#AB9FF2] border-solid cursor-pointer whitespace-nowrap hover:bg-[#9B87F5] hover:scale-105 transition-all duration-300">
        <span className="text-sm md:text-base">Coming Soon</span>
        <Timer size={16} className="md:size-18" />
      </button>
      <div className="mt-8 md:mt-[60px] px-4 w-full mb-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/bbaf03e746c54fdab851e2e8fa65b939/28094319b78a85233278e4f17a4e3e2b46bcc4fe?placeholderIfAbsent=true"
          alt="HyperLend Platform"
          className="aspect-[1.68] object-contain w-full max-w-[780px] mx-auto"
        />
      </div>
    </header>
  );
};

export default Hero;
