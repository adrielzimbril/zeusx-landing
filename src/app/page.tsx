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
import PixelBlast from "@/components/background/PixelBlast";
import LightRays from "@/components/background/LightRays";

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
    <div className="min-h-screen overflow-x-hidden bg-black text-white selection:bg-cyan-500/30">
      <div className="fixed inset-0 z-0 vertical-streaks pointer-events-none" />
      <div className="fixed inset-0 z-0 crt-scanlines opacity-30 pointer-events-none" />
      <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_16%,rgba(34,211,238,0.14),transparent_32%),linear-gradient(180deg,#020617_0%,#000_62%,#020617_100%)] pointer-events-none" />

      <main className="relative min-h-screen bg-[#09090b] selection:bg-cyan-500/30 selection:text-cyan-200">
        {/* Global PixelBlast Background */}
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.75]">
          <LightRays
            raysOrigin="top-center"
            raysColor="#1691e4"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            pulsating={false}
            fadeDistance={1}
            saturation={1}
            followMouse
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
          />
        </div>
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.75]">
          <PixelBlast
            variant="square"
            pixelSize={2}
            color="#22d3ee"
            patternScale={3}
            patternDensity={1.2}
            enableRipples={true}
            rippleSpeed={0.4}
            rippleThickness={0.15}
            rippleIntensityScale={0.6}
            speed={0.02}
            transparent
            edgeFade={0.4}
          />
        </div>
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
    </div>
  );
}
