import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full max-w-[1080px] text-base font-medium max-md:max-w-full">
      <div className="bg-[rgba(7,19,17,1)] border flex w-full items-center gap-5 flex-wrap justify-between px-[31px] py-[9px] rounded-full border-[rgba(7,19,17,0.3)] border-solid max-md:max-w-full max-md:px-5">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/bbaf03e746c54fdab851e2e8fa65b939/2f6813c475c096bc3c474f6ac9c81e9296f3100e?placeholderIfAbsent=true"
          alt="HyperLend Logo"
          className="aspect-[5.29] object-contain w-[127px] self-stretch shrink-0 max-w-full my-auto"
        />
        <div className="self-stretch flex items-stretch gap-[26px] text-[rgba(202,234,229,1)] whitespace-nowrap leading-[1.3] my-auto max-md:hidden">
          <button className="grow cursor-pointer">Features</button>
          <button className="leading-none cursor-pointer">Docs</button>
          <button className="cursor-pointer">Security</button>
          <button className="cursor-pointer">FAQ</button>
          <button className="cursor-pointer">Community</button>
        </div>
        <button className="bg-[rgba(202,234,229,1)] self-stretch text-[rgba(7,19,17,1)] text-center px-[23px] py-[11px] rounded-full max-md:px-5 cursor-pointer">
          Launch App
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
