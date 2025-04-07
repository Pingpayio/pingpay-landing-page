
import React from "react";
import { Timer } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <header className="flex flex-col items-center">
      <h1 className="text-[#3C315B] text-[46px] font-bold leading-[60px] text-center mt-[159px] max-md:max-w-full max-md:text-[40px] max-md:leading-[59px] max-md:mt-10">
        The Liquidity Backbone
        <br />
        of the Hyperliquid Ecosystem
      </h1>
      <p className="text-[#3C315B] text-2xl font-normal text-center mt-[21px] max-md:max-w-full">
        Earn interest, borrow assets & repeat!
      </p>
      <button className="bg-[#AB9FF2] border flex w-[219px] h-[56px] max-w-full items-center justify-center gap-[17px] text-[#3D315E] font-medium text-center mt-[61px] px-11 rounded-[30px] border-[#AB9FF2] border-solid max-md:mt-10 max-md:px-5 cursor-pointer">
        <span className="text-base leading-none">Coming Soon</span>
        <Timer size={18} />
      </button>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/bbaf03e746c54fdab851e2e8fa65b939/28094319b78a85233278e4f17a4e3e2b46bcc4fe?placeholderIfAbsent=true"
        alt="HyperLend Platform"
        className="aspect-[1.68] object-contain w-[806px] max-w-full mt-[50px] max-md:mt-10"
      />
    </header>
  );
};

export default Hero;
