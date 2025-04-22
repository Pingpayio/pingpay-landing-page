
import React, { useState, useEffect, useRef } from "react";
import { Timer, FileText } from "lucide-react";

const words = [
  "Commerce",
  "AI Agents",
  "Subscriptions",
  "Enterprise",
  "Savings",
  "Bill Splitting",
  "Ticketing",
  "Invoicing",
  "Freelancing",
  "Services",
];

// Get longest word for minWidth calculation (for mono font, but set extra to be safe)
const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");
const minWidthStyle = {
  minWidth: `calc(${longestWord.length + 2}ch)`,
  display: "inline-block",
  fontVariantLigatures: "none",
};

/**
 * Custom blinking cursor animation for mono/variable width text.
 * Keeps the cursor attached directly after text.
 */
const blinkAnimation = `
@keyframes hero-blink {
  0% { opacity: 1; }
  49% { opacity: 1; }
  50% { opacity: 0; }
  80% { opacity: 0; }
  100% { opacity: 1; }
}
`;

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [speed, setSpeed] = useState(90); // Control consistent typing/deleting speed
  const isMounted = useRef(true);

  // Typing animation logic
  useEffect(() => {
    isMounted.current = true;
    const currentWord = words[currentWordIdx];
    let timeout: number | undefined;
    if (!isDeleting) {
      // Typing forward
      if (displayText.length < currentWord.length) {
        timeout = window.setTimeout(() => {
          if (isMounted.current) setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, speed);
      } else {
        // Pause at fully typed word
        timeout = window.setTimeout(() => {
          if (isMounted.current) setIsDeleting(true);
        }, 1300); // Pause before deleting (pause duration)
      }
    } else {
      // Deleting
      if (displayText.length > 0) {
        timeout = window.setTimeout(() => {
          if (isMounted.current) setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, speed);
      } else {
        // Move to next word, pause before typing
        timeout = window.setTimeout(() => {
          if (isMounted.current) {
            setIsDeleting(false);
            setCurrentWordIdx((prev) => (prev + 1) % words.length);
          }
        }, 450);
      }
    }
    return () => {
      isMounted.current = false;
      if (timeout) clearTimeout(timeout);
    };
  }, [displayText, isDeleting, currentWordIdx, speed]);

  // On word change, reset displayText to ""
  useEffect(() => {
    setDisplayText("");
  }, [currentWordIdx]);

  return (
    <header className="flex flex-col items-center p-4 md:p-6 rounded-2xl">
      {/* Inject custom cursor blink animation */}
      <style>{blinkAnimation}</style>
      <h1 className="text-[#000000] text-3xl md:text-[48px] font-bold leading-tight md:leading-[60px] text-center mt-16 md:mt-[140px] max-w-full text-shadow-sm">
        The Payment Layer
        <br className="md:block" />
        for the Future of{" "}
        <span className="relative">
          <span
            className="
              inline-flex items-center 
              font-mono 
              text-[#AB9FF2] 
              transition-[width] 
              min-w-0
              text-nowrap 
              text-shadow-md
              "
            style={{
              ...minWidthStyle,
              fontSize: "inherit",
              whiteSpace: "nowrap",
              verticalAlign: "baseline"
            }}
            aria-live="off"
            aria-label={words[currentWordIdx]}
          >
            {displayText}
          </span>
          {/* Animated cursor RIGHT AFTER variable displayText */}
          <span
            className="ml-0 h-[1em] w-[0.07em] bg-black"
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              marginLeft: "-0.05em",
              animation: "hero-blink 1s step-end infinite"
            }}
            aria-hidden="true"
          ></span>
        </span>
      </h1>
      <p className="text-[#000000] text-base md:text-2xl font-normal text-center mt-4 max-w-full px-4 md:leading-9">
        Make &amp; Receive Instant Borderless Payments
      </p>

      <div className="flex gap-4 mt-6 md:mt-8">
        <button className="bg-[#AB9FF2] border h-[56px] w-[219px] flex items-center justify-center gap-2 text-[#3D315E] font-medium text-center px-4 py-2 rounded-[30px] border-[#AB9FF2] border-solid cursor-pointer whitespace-nowrap hover:bg-[#9B87F5] hover:scale-105 transition-all duration-300">
          <span className="text-sm md:text-base">Coming Soon</span>
          <Timer size={16} className="md:size-18" />
        </button>
        <button className="bg-[#F0F1FF] border h-[56px] w-[219px] flex items-center justify-center gap-2 text-[#3D315E] font-medium text-center px-4 py-2 rounded-[30px] border-[#F0F1FF] border-solid cursor-pointer whitespace-nowrap hover:bg-[#E0E1EE] hover:scale-105 transition-all duration-300">
          <span className="text-sm md:text-base">Documentation</span>
          <FileText size={16} className="md:size-18" />
        </button>
      </div>

      <div className="mt-8 md:mt-[60px] px-4 w-full mb-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/bbaf03e746c54fdab851e2e8fa65b939/28094319b78a85233278e4f17a4e3e2b46bcc4fe?placeholderIfAbsent=true"
          alt="HyperLend Platform"
          className="aspect-[1.68] object-contain w-[765px] mx-auto h-auto max-h-[calc(100vh*0.45)] md:max-h-[calc(100vh*0.5)]"
          style={{ marginBottom: "-25px" }}
        />
      </div>
    </header>
  );
};

export default Hero;
