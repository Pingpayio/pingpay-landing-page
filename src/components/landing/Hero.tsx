
import React, { useState, useEffect } from "react";
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

const TYPING_SPEED = 70; // ms per character
const DELETING_SPEED = 100; // Increased from 50 to slow down deletion
const PAUSE_AFTER_TYPED = 900; // ms pause after type
const PAUSE_AFTER_DELETED = 350; // ms pause after delete

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const timeoutRef = useRef<number | null>(null);

  // Typing effect state machine
  useEffect(() => {
    const currentWord = words[wordIndex];

    if (phase === "typing") {
      if (charIndex < currentWord.length) {
        timeoutRef.current = window.setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex + 1));
          setCharIndex((i) => i + 1);
        }, TYPING_SPEED);
      } else {
        timeoutRef.current = window.setTimeout(() => {
          setPhase("pausing");
        }, PAUSE_AFTER_TYPED);
      }
    } else if (phase === "deleting") {
      if (charIndex > 0) {
        timeoutRef.current = window.setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex - 1));
          setCharIndex((i) => i - 1);
        }, DELETING_SPEED);
      } else {
        timeoutRef.current = window.setTimeout(() => {
          setWordIndex((i) => (i + 1) % words.length);
          setPhase("typing");
        }, PAUSE_AFTER_DELETED);
      }
    } else if (phase === "pausing") {
      timeoutRef.current = window.setTimeout(() => {
        setPhase("deleting");
      }, 150);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [charIndex, phase, wordIndex]);

  // When new word is activated, always reset charIndex
  useEffect(() => {
    if (phase === "typing") setCharIndex(0);
  }, [wordIndex]);

  // Responsive: Ensure changing word fits and doesn't wrap (white-space: nowrap)
  // Cursor: Hug the text (inline, not absolutely positioned), with its own blinking animation.
  // No min-width hack.

  return (
    <header className="flex flex-col items-center p-4 md:p-6 rounded-2xl">
      <h1 className="text-[#000000] text-3xl md:text-[48px] font-bold leading-tight md:leading-[60px] text-center mt-16 md:mt-[140px] max-w-full text-shadow-sm">
        The Payment Layer
        <br className="md:block" />
        for the Future of{" "}
        <span className="relative">
          <span
            className="inline-flex items-center whitespace-nowrap text-[#AB9FF2]"
            style={{
              maxWidth: "100vw",
            }}
          >
            {/* Typed Text */}
            {displayText}
            {/* Blinking Cursor */}
            <span
              key={displayText.length + "-" + wordIndex + "-" + phase}
              className="ml-0.5 w-[2px] h-[1em] bg-black inline-block align-middle animate-blink"
              aria-hidden="true"
            />
          </span>
        </span>
      </h1>
      <p className="text-[#000000] text-base md:text-2xl font-normal text-center mt-4 max-w-full px-4 md:leading-9">
        Make & Receive Instant Borderless Payments
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
      {/* Add the blinking animation to tailwind via index.css if not already */}
      <style>
        {`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s steps(1) infinite;
        }
        `}
      </style>
    </header>
  );
};

export default Hero;
