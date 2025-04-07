
import React, { useContext } from "react";
import { Timer } from "lucide-react";
import { MouseContext } from "../../context/MouseContext";

const Hero: React.FC = () => {
  const { cursorPosition } = useContext(MouseContext);
  
  // Gradient style that follows the cursor
  const gradientStyle = {
    background: `radial-gradient(circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(171, 159, 242, 0.3) 0%, rgba(245, 242, 255, 0) 50%)`,
    pointerEvents: 'none' as const,
    zIndex: 1
  };

  return (
    <header className="flex flex-col items-center p-6 rounded-2xl relative overflow-hidden">
      {/* Overlay gradient that follows cursor */}
      <div 
        className="absolute inset-0 transition-all duration-300 ease-out"
        style={gradientStyle}
      />
      
      <h1 className="text-[#3C315B] text-[42px] font-bold leading-[52px] text-center mt-[140px] max-md:max-w-full max-md:text-[38px] max-md:leading-[48px] max-md:mt-6 text-shadow-sm relative z-10">
        The Liquidity Backbone
        <br />
        of the Hyperliquid Ecosystem
      </h1>
      <p className="text-[#3C315B] text-xl font-normal text-center mt-4 max-md:max-w-full relative z-10">
        Earn interest, borrow assets & repeat!
      </p>
      <button className="bg-[#AB9FF2] border flex w-[219px] h-[48px] max-w-full items-center justify-center gap-2 text-[#3D315E] font-medium text-center mt-8 px-4 rounded-[30px] border-[#AB9FF2] border-solid max-md:mt-6 max-md:px-3 cursor-pointer whitespace-nowrap hover:bg-[#9B87F5] hover:scale-105 transition-all duration-300 relative z-10">
        <span className="text-base">Coming Soon</span>
        <Timer size={18} />
      </button>
      <div className="mt-[60px] relative z-10">
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
