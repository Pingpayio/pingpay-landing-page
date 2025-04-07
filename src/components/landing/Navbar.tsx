
import React, { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        scrolled 
          ? "bg-[rgba(7,19,17,1)] py-0 px-8 shadow-md" 
          : "bg-transparent py-0 px-0 flex justify-center"
      }`}
    >
      <div className={`${
        scrolled 
          ? "w-full max-w-[1080px] mx-auto h-[54px]" 
          : "w-full max-w-[1080px] h-[54px]"
        } bg-[rgba(7,19,17,1)] border flex items-center gap-5 flex-wrap justify-between px-[31px] rounded-full border-[rgba(7,19,17,0.3)] border-solid max-md:max-w-full max-md:px-5`}>
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
