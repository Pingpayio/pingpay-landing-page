
import React from "react";
import { Timer } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <header className="flex flex-col items-center p-6 rounded-2xl">
      <h1 className="text-[#3C315B] text-[42px] font-bold leading-[52px] text-center mt-[140px] max-md:max-w-full max-md:text-[38px] max-md:leading-[48px] max-md:mt-6 text-shadow-sm">
        The Liquidity Backbone
        <br />
        of the Hyperliquid Ecosystem
      </h1>
      <p className="text-[#3C315B] text-xl font-normal text-center mt-4 max-md:max-w-full">
        Earn interest, borrow assets & repeat!
      </p>
      <button className="bg-[#AB9FF2] border flex w-[219px] h-[48px] max-w-full items-center justify-center gap-2 text-[#3D315E] font-medium text-center mt-8 px-4 rounded-[30px] border-[#AB9FF2] border-solid max-md:mt-6 max-md:px-3 cursor-pointer whitespace-nowrap hover:bg-[#9B87F5] hover:scale-105 transition-all duration-300">
        <span className="text-base">Coming Soon</span>
        <Timer size={18} />
      </button>
      <div className="mt-[60px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/bbaf03e746c54fdab851e2e8fa65b939/28094319b78a85233278e4f17a4e3e2b46bcc4fe?placeholderIfAbsent=true"
          alt="HyperLend Platform"
          className="aspect-[1.68] object-contain w-[780px] max-w-full hover:scale-105 transition-transform duration-500"
        />
      </div>
    </header>
  );
};

export default Hero;
