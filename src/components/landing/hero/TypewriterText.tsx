
import React, { useState, useEffect, useRef } from "react";

const words = ["Commerce", "AI Agents", "Subscriptions", "Enterprise", "Savings", "Bill Splitting", "Ticketing", "Invoicing", "Freelancing", "Services"];
const TYPING_SPEED = 70; // ms per character
const DELETING_SPEED = 100;
const PAUSE_AFTER_TYPED = 900;
const PAUSE_AFTER_DELETED = 350;

const TypewriterText: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting">("typing");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const currentWord = words[wordIndex];
    if (phase === "typing") {
      if (charIndex < currentWord.length) {
        timeoutRef.current = window.setTimeout(() => {
          setDisplayText(currentWord.slice(0, charIndex + 1));
          setCharIndex(i => i + 1);
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
          setCharIndex(i => i - 1);
        }, DELETING_SPEED);
      } else {
        timeoutRef.current = window.setTimeout(() => {
          setWordIndex(i => (i + 1) % words.length);
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
    <span className="
        block
        md:inline
        mt-2
        md:mt-0
        mb-0
        px-0
        md:pl-2
        transition-all
        min-h-[1.4em] md:min-h-0
        ">
      <span className="relative">
        <span className="inline-flex items-center whitespace-nowrap text-[#AB9FF2]" style={{
        maxWidth: "100vw"
      }}>
          {displayText}
          <span key={displayText.length + "-" + wordIndex + "-" + phase} className="ml-0.5 w-[2px] h-[1em] bg-black inline-block align-middle animate-blink" aria-hidden="true" />
        </span>
      </span>
    </span>
  );
};

export default TypewriterText;
