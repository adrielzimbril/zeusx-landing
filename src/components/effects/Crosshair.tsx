"use client";
import React, { useEffect, useState } from "react";

export function Crosshair() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setActive(true);
    };

    const handleMouseLeave = () => setActive(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (!active) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] mix-blend-difference"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* Outer Circle */}
      <div className="absolute inset-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 border border-cyan-400/50 rounded-full scale-100 group-hover:scale-150 transition-transform duration-300" />
      
      {/* Crosshair Lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-[1px] bg-cyan-400/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-10 bg-cyan-400/50" />
      
      {/* Target Dot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]" />
      
      {/* Coordinates (Subtle) */}
      <div className="absolute top-6 left-6 font-mono text-[8px] text-cyan-400/40 whitespace-nowrap">
        X:{position.x} Y:{position.y}
      </div>
    </div>
  );
}
