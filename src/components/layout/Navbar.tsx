"use client";
import React from "react";
import HeaderDrone from "../effects/HeaderDrone";

export function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4">
      <div className="nav-shell tactile-glass flex h-14 items-center justify-between px-6 rounded-full border border-white/10 shadow-2xl backdrop-blur-2xl">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="w-10 h-10 flex items-center justify-center">
              <HeaderDrone />
            </div>
            <div className="absolute -inset-1 bg-cyan-500/20 blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium tracking-[0.2em] text-white">ZEUSX</span>
            <div className="flex items-center gap-2">
              <span className="text-[8px] font-mono text-cyan-500/80 tracking-[0.2em] group-hover:text-cyan-400 transition-colors">
                GEN-3 AI
              </span>
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>
        </div>
        
        <div className="hidden items-center gap-8 md:flex">
          {["Models", "Architecture", "Telemetry", "Security"].map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className="group relative text-[10px] uppercase tracking-[0.2em] text-zinc-400 transition-colors hover:text-white font-medium"
            >
              {item}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-cyan-500 transition-all group-hover:w-full shadow-[0_0_8px_#22d3ee]" />
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex flex-col items-end mr-2">
            <span className="text-[7px] font-mono text-zinc-500 tracking-tighter uppercase">Signal Strength</span>
            <div className="flex gap-0.5 mt-0.5">
              {[1,2,3,4].map(i => (
                <div key={i} className={`w-1 h-${i === 4 ? '2' : '1.5'} bg-cyan-500/${i*20}`} />
              ))}
            </div>
          </div>
          <button className="button-secondary !px-5 !py-1.5 !text-[9px] !rounded-full">
            Command
          </button>
        </div>
      </div>
    </nav>
  );
}
