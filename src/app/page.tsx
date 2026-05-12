"use client";
import { useEffect, useRef } from "react";
import { Hero } from "@/components/sections/Hero";
import { Models } from "@/components/sections/Models";
import { Capabilities } from "@/components/sections/Capabilities";
import { Architecture } from "@/components/sections/Architecture";
import { Telemetry } from "@/components/sections/Telemetry";
import { Network } from "@/components/sections/Network";
import { Security } from "@/components/sections/Security";
import { Pipeline } from "@/components/sections/Pipeline";
import Access from "@/components/sections/Access";
import { Primitives } from "@/components/sections/Primitives";
import { CTA } from "@/components/sections/CTA";
import MouseFollower from "@/components/effects/MouseFollower";
import { Crosshair } from "@/components/effects/Crosshair";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrolled = window.scrollY;
      parallaxRef.current.style.transform = `translateY(${scrolled * 0.15}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#09090b] selection:bg-cyan-500/30 selection:text-cyan-200">
      <MouseFollower />
      <Crosshair />
      
      {/* Background Parallax Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0">
          <div className="absolute top-[10%] left-[15%] w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]" />
          <div className="absolute top-[40%] right-[10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-[10%] left-[20%] w-80 h-80 bg-blue-500/5 rounded-full blur-[100px]" />
        </div>
      </div>

      <Navbar />

      <div className="relative z-10">
        <Hero />
        <Models />
        <Capabilities />
        <Architecture />
        <Telemetry />
        <Network />
        <Security />
        <Pipeline />
        <Access />
        <Primitives />
        <CTA />
      </div>

      <Footer />
    </main>
  );
}
