"use client";
import React, { useRef, useState } from "react";

interface TacticalFrameProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glareOpacity?: number;
  glareColor?: string;
}

export function TacticalFrame({
  children,
  className = "",
  intensity = 15,
  glareOpacity = 0.15,
  glareColor = "255, 255, 255",
}: TacticalFrameProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (mouseY / (rect.height / 2)) * -intensity;
    const rotateY = (mouseX / (rect.width / 2)) * intensity;

    setRotate({ x: rotateX, y: rotateY });

    // Glare position
    const glX = ((e.clientX - rect.left) / rect.width) * 100;
    const glY = ((e.clientY - rect.top) / rect.height) * 100;
    setGlare({ x: glX, y: glY, opacity: glareOpacity });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative group transition-transform duration-200 ease-out border border-white/10 ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Corner Accents */}
      <span className="absolute -left-px -top-px h-2 w-2 border-l border-t border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute -right-px -top-px h-2 w-2 border-r border-t border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute -left-px -bottom-px h-2 w-2 border-l border-b border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="absolute -right-px -bottom-px h-2 w-2 border-r border-b border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Tactical Grid Overlay (Subtle) */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />

      {/* Glare Effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(${glareColor},${glare.opacity}), transparent 60%)`,
        }}
      />

      <div className="relative z-10" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </div>
  );
}
