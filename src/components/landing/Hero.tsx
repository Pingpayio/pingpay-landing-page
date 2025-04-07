import React from "react";

const Hero: React.FC = () => {
  return (
    <header className="flex flex-col items-center">
      <h1 className="text-black text-[46px] font-bold leading-[60px] text-center mt-[159px] max-md:max-w-full max-md:text-[40px] max-md:leading-[59px] max-md:mt-10">
        The Liquidity Backbone
        <br />
        of the Hyperliquid Ecosystem
      </h1>
      <p className="text-black text-2xl font-normal text-center mt-[21px] max-md:max-w-full">
        Earn interest, borrow assets & repeat!
      </p>
      <button className="bg-black border flex w-[219px] max-w-full items-stretch gap-[17px] text-white font-medium text-center mt-[61px] px-11 py-5 rounded-[30px] border-black border-solid max-md:mt-10 max-md:px-5 cursor-pointer">
        <span className="text-base leading-none">Start Earning</span>
        <span className="text-sm leading-loose my-auto">→</span>
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
