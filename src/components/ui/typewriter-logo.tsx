"use client";

import { useState, useEffect } from "react";

export function TypewriterLogo() {
  const text = "jotter.";
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < text.length) {
        // Type next character
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, displayedText.length + 1));
        }, 150);
      } else {
        // Done typing, wait 5 seconds then restart
        setIsTyping(false);
        timeout = setTimeout(() => {
          setDisplayedText("");
          setIsTyping(true);
        }, 5000);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping]);

  return (
    <span className="font-semibold text-lg tracking-tight">
      {displayedText}
      <span
        className={`inline-block w-[2px] h-[1em] bg-charcoal ml-[1px] align-middle ${
          isTyping ? "animate-blink-fast" : "animate-blink"
        }`}
      />
    </span>
  );
}