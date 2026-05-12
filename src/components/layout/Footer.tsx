"use client";
import React from "react";
import { TacticalFrame } from "../shared/TacticalFrame";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#09090b] py-20 relative z-10 overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 grid place-items-center group-hover:border-cyan-500/50 transition-colors">
                <div className="w-3 h-3 bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-light tracking-[0.2em] text-white uppercase">Zeusx</span>
                <span className="text-[10px] font-mono text-cyan-500/60 tracking-[0.3em] -mt-1">TACTICAL DEFENSE</span>
              </div>
            </div>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-zinc-500 font-light">
              Redefining battlefield awareness through advanced aerial autonomy, 
              decentralized mesh intelligence, and sovereign data custody.
            </p>
            
            <div className="mt-10 flex gap-4">
              {['Twitter', 'LinkedIn', 'Discord'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/5 bg-white/5 grid place-items-center text-zinc-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-current" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            <div>
              <p className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest mb-6">Operations</p>
              <ul className="space-y-4 text-xs text-zinc-500 font-light">
                <li className="hover:text-white transition-colors cursor-pointer">Fleet Command</li>
                <li className="hover:text-white transition-colors cursor-pointer">Mission Planning</li>
                <li className="hover:text-white transition-colors cursor-pointer">Payload Config</li>
                <li className="hover:text-white transition-colors cursor-pointer">Live Analytics</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest mb-6">Sovereign</p>
              <ul className="space-y-4 text-xs text-zinc-500 font-light">
                <li className="hover:text-white transition-colors cursor-pointer">Security Core</li>
                <li className="hover:text-white transition-colors cursor-pointer">Data Custody</li>
                <li className="hover:text-white transition-colors cursor-pointer">Audit Ledger</li>
                <li className="hover:text-white transition-colors cursor-pointer">Encryption Standards</li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-mono text-cyan-500/60 uppercase tracking-widest mb-6">Legal</p>
              <ul className="space-y-4 text-xs text-zinc-500 font-light">
                <li className="hover:text-white transition-colors cursor-pointer">Privacy Protocol</li>
                <li className="hover:text-white transition-colors cursor-pointer">Terms of Service</li>
                <li className="hover:text-white transition-colors cursor-pointer">Export Control</li>
                <li className="hover:text-white transition-colors cursor-pointer">Compliance</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5">
          <TacticalFrame className="bg-black/40 backdrop-blur-sm p-6 border border-white/5" intensity={5}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-200" />
                </span>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                  System status: <span className="text-emerald-400">NOMINAL</span> / © 2026 ZEUSX DEFENSE SYSTEMS
                </p>
              </div>
              <div className="flex gap-8 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                <div className="flex flex-col">
                  <span className="text-zinc-700">LATITUDE</span>
                  <span className="text-zinc-300">34.0522° N</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-700">LONGITUDE</span>
                  <span className="text-zinc-300">118.2437° W</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-zinc-700">UPTIME</span>
                  <span className="text-zinc-300">99.998%</span>
                </div>
              </div>
            </div>
          </TacticalFrame>
        </div>
      </div>
    </footer>
  );
}
