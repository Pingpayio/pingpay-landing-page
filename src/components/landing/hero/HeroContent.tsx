import React from "react";
import TypewriterText from "./TypewriterText";
import ComingSoonButton from "../ComingSoonButton";

const HeroContent: React.FC = () => {
  return (
    <>
      <h1 className="text-[#000000] text-3xl md:text-[48px] font-bold leading-tight md:leading-[60px] text-center mt-16 md:mt-[140px] max-w-full text-shadow-sm">
        The Payment Layer
        <br className="md:block" />
        for the Future of
        {/* On mobile, animated text always on new line. On md+, keep inline with a space. */}
        <span className="block md:inline" />
        <span className="block md:inline"></span>
        <TypewriterText />
      </h1>
      <p className="text-[#000000] text-base md:text-2xl font-normal text-center mt-4 max-w-full px-4 md:leading-9">Send &amp; Receive Instant Borderless Payments</p>
      <div className="flex flex-col items-center gap-4 mt-6 md:mt-8 justify-center w-full max-w-[340px] md:flex-row md:max-w-full">
        <ComingSoonButton />
      </div>
    </>
  );
};

export default HeroContent;
