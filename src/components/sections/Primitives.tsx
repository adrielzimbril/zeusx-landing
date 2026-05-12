import type { CSSProperties } from "react";
import { Frame } from "@/components/shared/Frame";
import { Core3D } from "@/components/effects/Core3D";
import { TacticalFrame } from "@/components/shared/TacticalFrame";

const primitives = [
  [
    "Target Continuity",
    "Sustain a unified picture across airframes, relay nodes, and operator consoles while every update remains traceable.",
  ],
  [
    "Sensor Fusion",
    "Merge optical, thermal, navigation, and terrain signals into one readable command layer for fast review.",
  ],
  [
    "Command Integrity",
    "Protect crew roles, aircraft state, and mission logs with enforced validation from launch to recovery.",
  ],
];

const particles = Array.from({ length: 34 }, (_, index) => ({
  id: `core-particle-${(index * 137).toString(16)}`,
  x: `${(index * 29) % 94}%`,
  y: `${(index * 47) % 88}%`,
  delay: `${(index % 9) * 0.38}s`,
}));

export function Primitives() {
  return (
    <section className="section-block bg-[#050606] pt-12 sm:pt-16">
      <div className="section-shell">
        <div className="grid border border-white/10 bg-black/30 lg:grid-cols-[1fr_340px]">
          <Frame className="core-simulation min-h-[520px] overflow-hidden bg-[#080909]">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:38px_38px]" />
            <div className="absolute inset-5 border border-white/10">
              <span className="absolute -left-px -top-px h-3 w-3 border-l border-t border-zinc-500" />
              <span className="absolute -right-px -top-px h-3 w-3 border-r border-t border-zinc-500" />
              <span className="absolute -bottom-px -left-px h-3 w-3 border-b border-l border-zinc-500" />
              <span className="absolute -bottom-px -right-px h-3 w-3 border-b border-r border-zinc-500" />
            </div>
            
            <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
              <div className="w-[480px] h-[480px]">
                <Core3D />
              </div>
            </div>

            <div className="particle-field" aria-hidden="true">
              {particles.map((particle) => (
                <span
                  className="core-particle"
                  key={particle.id}
                  style={
                    {
                      "--x": particle.x,
                      "--y": particle.y,
                      "--delay": particle.delay,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
            
            <div className="absolute bottom-9 left-10 z-20 rounded-full border border-cyan-300/20 bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,1)]" />
              Flight core / active
            </div>
            <p className="absolute right-10 top-12 z-20 font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-600">
              ZX_VER.880
            </p>
          </Frame>
          <div className="grid border-l border-white/10">
            <TacticalFrame className="flex min-h-[260px] flex-col justify-between bg-cyan-500 p-8 text-black border-none">
              <div className="flex items-center justify-between">
                <span className="grid h-8 w-8 place-items-center rounded bg-black/15 font-mono text-xs font-bold">
                  ZX
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-black/50">
                  FLEET_SYNC
                </span>
              </div>
              <div>
                <p className="text-6xl font-semibold tracking-tight">99.8%</p>
                <p className="mt-2 text-sm font-semibold text-black/70">
                  Active Squadron Coherence
                </p>
              </div>
            </TacticalFrame>
            <TacticalFrame className="flex min-h-[260px] flex-col justify-between bg-zinc-200 p-8 text-zinc-950 border-none border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="grid h-8 w-8 place-items-center rounded bg-black/20 font-mono text-xs font-bold">
                  RX
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                  RELAY_RATE
                </span>
              </div>
              <div>
                <p className="text-6xl font-semibold tracking-tight">2ms</p>
                <p className="mt-2 text-sm font-medium text-zinc-600">
                  Command Link Latency
                </p>
              </div>
            </TacticalFrame>
          </div>
        </div>
        <div className="grid border-x border-b border-white/10 bg-black/20 md:grid-cols-3">
          {primitives.map(([title, body], index) => (
            <TacticalFrame
              className="min-h-64 border-b border-white/10 p-9 md:border-b-0 md:border-r md:last:border-r-0"
              key={title}
            >
              <span className="grid h-5 w-5 place-items-center rounded bg-cyan-400/80 text-[10px] font-bold text-black">
                {index + 1}
              </span>
              <h3 className="mt-10 max-w-xs break-words text-xl font-semibold tracking-[0.28em] text-white">
                {title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-zinc-500">{body}</p>
            </TacticalFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
