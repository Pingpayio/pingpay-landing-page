
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Timer } from "lucide-react";

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
const DELETING_SPEED = 100;
const PAUSE_AFTER_TYPED = 900;
const PAUSE_AFTER_DELETED = 350;

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const timeoutRef = useRef<number | null>(null);

  // Calculate the widest word for anim span using a monospace-ish fallback (or CSS min-width)
  // We'll use a hidden span to measure text width dynamically for best results!
  const spanRef = useRef<HTMLSpanElement>(null);
  const [animatedMinWidth, setAnimatedMinWidth] = useState<number | undefined>(undefined);

  // Calculate (and cache) the widest word so mobile layout never shifts
  const widestWord = useMemo(() => {
    return words.reduce((a, b) => (a.length > b.length ? a : b), "");
  }, []);

  useEffect(() => {
    // After mount or on window resize: measure width of the largest word in its render context (font/size!)
    const measureMinWidth = () => {
      if (!spanRef.current) return;
      setAnimatedMinWidth(spanRef.current.offsetWidth);
    };
    measureMinWidth();
    window.addEventListener("resize", measureMinWidth);
    return () => window.removeEventListener("resize", measureMinWidth);
  }, []);

  // Typing effect state machine (same as before)
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

  useEffect(() => {
    if (phase === "typing") setCharIndex(0);
  }, [wordIndex]);

  return (
    <header className="flex flex-col items-center p-4 md:p-6 rounded-2xl w-full">
      <h1 className="text-[#000000] text-3xl md:text-[48px] font-bold leading-tight md:leading-[60px] text-center mt-16 md:mt-[140px] max-w-full text-shadow-sm">
        The Payment Layer
        <br className="md:block" />
        for the Future of
        {/* Hide on desktop, force line break before animated text on mobile */}
        <br className="block md:hidden" />
        <span className="relative inline-block w-full">
          {/* Hidden span to calculate animated word min-width for mobile */}
          <span
            ref={spanRef}
            className="invisible absolute whitespace-nowrap font-bold text-[#AB9FF2] pointer-events-none select-none"
            style={{
              // The same styles as animated text for exact width
              fontSize: "1.875rem", // 3xl default for mobile (30px)
              ...(window.innerWidth >= 768 ? { fontSize: "48px" } : {}),
            }}
          >
            {widestWord}
          </span>
          <span
            className="inline-flex items-center whitespace-nowrap text-[#AB9FF2]"
            style={{
              maxWidth: "100vw",
              minWidth:
                typeof animatedMinWidth === "number"
                  ? animatedMinWidth
                  : undefined,
              display: "inline-block",
              transition: "min-width 0.2s",
            }}
          >
            {displayText}
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
      {/* Remove the extra button. Reposition Coming Soon so it's centered and pushed up on mobile */}
      <div className="flex gap-4 mt-6 md:mt-8 justify-center w-full">
        <button className="bg-[#AB9FF2] border h-[48px] md:h-[56px] w-full max-w-[280px] flex items-center justify-center gap-2 text-[#3D315E] font-medium text-center px-4 py-2 rounded-[30px] border-[#AB9FF2] border-solid cursor-pointer whitespace-nowrap hover:bg-[#9B87F5] hover:scale-105 transition-all duration-300 shadow-lg">
          <span className="text-sm md:text-base">Coming Soon</span>
          <Timer size={16} className="md:size-18" />
        </button>
      </div>
      <div className="mt-8 md:mt-[60px] px-4 w-full mb-0">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/bbaf03e746c54fdab851e2e8fa65b939/28094319b78a85233278e4f17a4e3e2b46bcc4fe?placeholderIfAbsent=true"
          alt="HyperLend Platform"
          className="aspect-[1.68] object-contain w-full md:w-[765px] mx-auto h-auto max-h-[calc(100vh*0.45)] md:max-h-[calc(100vh*0.5)]"
          style={{ marginBottom: "-25px", background: "#f8f8ff", borderRadius: "1.5rem" }}
          loading="lazy"
        />
      </div>
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
