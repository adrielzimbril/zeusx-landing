"use client";
import React from "react";
import HeaderDrone from "../effects/HeaderDrone";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] border-b border-white/5 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-4 group cursor-pointer">
          <div className="relative">
            <HeaderDrone />
            <div className="absolute -inset-1 bg-cyan-500/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-light tracking-[0.2em] text-white">ZEUSX</span>
            <span className="text-[10px] font-mono text-cyan-500/80 tracking-[0.3em] -mt-1 group-hover:text-cyan-400 transition-colors">
              TACTICAL AI SYSTEMS
            </span>
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
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 border border-white/5 bg-white/5 rounded-sm">
            <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Secure Link</span>
          </div>
          <button className="tactile-glass px-6 py-2 text-[10px] font-mono uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-all border border-white/10 active:scale-95">
            Command Center
          </button>
        </div>
      </div>
    </nav>
  );
}
