"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Hide native cursor if on desktop (can be handled via CSS in globals)
    document.body.classList.add("hidden-cursor");
    
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = (e) => {
      if (
        e.target.tagName.toLowerCase() === "a" ||
        e.target.tagName.toLowerCase() === "button" ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        gsap.to(cursor, {
          scale: 2,
          backgroundColor: "rgba(107, 33, 168, 0.4)", // royal purple
          borderColor: "#D4A017",
          duration: 0.3,
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "#FFD700",
        duration: 0.3,
      });
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
      document.body.classList.remove("hidden-cursor");
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-8 h-8 border-2 border-gold-light rounded-full pointer-events-none z-[9999] transform -translate-x-1/2 -translate-y-1/2 hidden md:block"
      style={{
        boxShadow: "0 0 10px rgba(255, 215, 0, 0.3)",
        transition: "width 0.2s, height 0.2s",
      }}
    >
      <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-gold-light rounded-full transform -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}
