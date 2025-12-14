// src/components/ui/typewriter-logo.tsx
"use client";

import { useState, useEffect, useCallback } from "react";

export function TypewriterLogo() {
  const text = "jotter.";
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<"typing" | "paused">("typing");

  const resetAnimation = useCallback(() => {
    setDisplayedText("");
    setPhase("typing");
  }, []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, 150);
      } else {
        setPhase("paused");
      }
    } else {
      // Paused - wait 5 seconds then restart
      timeout = setTimeout(resetAnimation, 5000);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, phase, resetAnimation]);

  return (
    <span className="font-semibold text-lg tracking-tight">
      {displayedText}
      <span
        className={`inline-block w-[2px] h-[1em] bg-charcoal ml-[1px] align-middle ${
          phase === "typing" ? "animate-blink-fast" : "animate-blink"
        }`}
      />
    </span>
  );
}