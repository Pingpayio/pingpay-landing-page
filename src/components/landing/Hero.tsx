
import React from "react";
import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";

const Hero: React.FC = () => {
  return (
    <header className="flex flex-col items-center p-4 md:p-6 rounded-2xl">
      <HeroContent />
      <HeroImage />
      <style>
        {`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s steps(1) infinite;
        }
        @keyframes pulse-coming-soon {
          0%, 100% { opacity: 0.9; transform: translateY(15%) scale(1); }
          50% { opacity: 1; transform: translateY(15%) scale(1.05); }
        }
        .animate-pulse-coming-soon {
          animation: pulse-coming-soon 2s ease-in-out infinite;
        }
        `}
      </style>
    </header>
  );
};

export default Hero;
