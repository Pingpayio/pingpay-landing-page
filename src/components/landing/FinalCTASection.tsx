
import React from "react";
import { Button } from "@/components/ui/button";

const FinalCTASection: React.FC = () => {
  return (
    <section
      className="w-full flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-0 bg-[#100713] relative z-20"
      style={{
        // subtle gradient to add depth, layered with existing dark bg
        background: "linear-gradient(108deg, rgba(26,18,48,0.92) 60%, rgba(171,159,242,0.06) 100%)",
      }}
    >
      <div className="max-w-[800px] w-full mx-auto flex flex-col items-center text-center">
        <h2 className="text-white font-bold text-[2rem] md:text-4xl leading-tight md:leading-tight mb-4 md:mb-6">
          Ready to transform your <br className="hidden md:inline" /> payment experience?
        </h2>
        <p className="text-white/80 text-base md:text-lg mb-8 max-w-[500px]">
          Join thousands of businesses accepting any token and getting paid their way.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Button
            variant="default"
            className="bg-[#9b87f5] hover:bg-[#ab9ff2] text-white font-semibold px-8 py-3 md:text-base text-sm rounded-xl shadow-lg transition-all duration-200 w-full sm:w-auto"
            onClick={() => window.open("#", "_blank")}
          >
            Start Accepting Payments
          </Button>
          <Button
            variant="outline"
            className="border-[#ab9ff2] text-white font-semibold px-8 py-3 md:text-base text-sm rounded-xl hover:bg-[#271a3e] hover:border-[#9b87f5] transition-all duration-200 w-full sm:w-auto"
            onClick={() => window.open("#", "_blank")}
          >
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;

