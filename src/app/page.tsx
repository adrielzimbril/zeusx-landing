"use client";
import { useEffect, useRef } from "react";
import { Hero } from "@/components/sections/Hero";
import { Models } from "@/components/sections/Models";
import { Architecture } from "@/components/sections/Architecture";
import { Telemetry } from "@/components/sections/Telemetry";
import { Network } from "@/components/sections/Network";
import { Security } from "@/components/sections/Security";
import { Pipeline } from "@/components/sections/Pipeline";
import { Access } from "@/components/sections/Access";
import { Primitives } from "@/components/sections/Primitives";
import { CTA } from "@/components/sections/CTA";
import MouseFollower from "@/components/effects/MouseFollower";
import HeaderDrone from "@/components/effects/HeaderDrone";
import { Crosshair } from "@/components/effects/Crosshair";

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

      <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-black/40 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <HeaderDrone />
            <div className="flex flex-col">
              <span className="text-xl font-light tracking-[0.2em] text-white">ZEUSX</span>
              <span className="text-[10px] font-mono text-cyan-500/80 tracking-[0.3em] -mt-1">TACTICAL AI SYSTEMS</span>
            </div>
          </div>
          
          <div className="hidden items-center gap-10 md:flex">
            {["Models", "Architecture", "Telemetry", "Security"].map((item) => (
              <a
                href={`#${item.toLowerCase()}`}
                key={item}
                className="group relative text-xs uppercase tracking-[0.25em] text-zinc-400 transition-colors hover:text-white"
              >
                {item}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-cyan-500 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
          
          <button className="tactile-glass px-6 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-all border border-white/10">
            Command Center
          </button>
        </div>
      </nav>

      <div className="relative z-10">
        <Hero />
        <Models />
        <Architecture />
        <Telemetry />
        <Network />
        <Security />
        <Pipeline />
        <Access />
        <Primitives />
        <CTA />
      </div>

      <footer className="border-t border-white/5 bg-[#09090b] py-20 relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-sm bg-white/10 border border-white/10 grid place-items-center">
                  <div className="w-2 h-2 bg-white" />
                </div>
                <span className="text-2xl font-light tracking-widest text-white uppercase">Zeusx</span>
              </div>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-zinc-500 font-light">
                Redefining battlefield awareness through advanced aerial autonomy and decentralized intelligence.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-6">Operations</p>
                <ul className="space-y-4 text-xs text-zinc-600 font-light">
                  <li>Fleet Command</li>
                  <li>Mission Planning</li>
                  <li>Payload Config</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-6">Sovereign</p>
                <ul className="space-y-4 text-xs text-zinc-600 font-light">
                  <li>Security Core</li>
                  <li>Data Custody</li>
                  <li>Audit Ledger</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest mb-6">Legal</p>
                <ul className="space-y-4 text-xs text-zinc-600 font-light">
                  <li>Privacy</li>
                  <li>Terms</li>
                  <li>Export Control</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-200" />
              </span>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                System status: online / © 2026 ZEUSX DEFENSE SYSTEMS
              </p>
            </div>
            <div className="flex gap-6 text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
              <span>LAT: 34.0522° N</span>
              <span>LNG: 118.2437° W</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
