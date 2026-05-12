import type { CSSProperties } from "react";
import { Frame } from "@/components/shared/Frame";

const primitives = [
  [
    "State Persistence",
    "Maintain rigorous flight-state continuity across parallel drone environments. Snapshots occur continuously without operational decay.",
  ],
  [
    "Telemetry Aggregation",
    "Consume scattered field signals into a strictly parsed, singular data structure. Reveal truth through raw metric convergence.",
  ],
  [
    "Identity Encryption",
    "Zero-trust boundary logic applied universally. Cryptographic exchange happens invisibly at the compute edge.",
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
            <div className="wire-core" aria-hidden="true">
              <svg viewBox="0 0 420 420" role="img">
                <title>Zeusx core simulation wireframe</title>
                <g className="wire-orbit">
                  <polygon points="210,12 332,60 407,182 352,338 205,407 64,348 18,210 68,95" />
                  <polygon points="210,68 310,112 356,218 300,318 190,344 88,292 82,154" />
                  <polyline points="210,12 210,68 407,182 356,218 205,407 190,344 18,210 82,154 332,60 310,112 352,338 300,318 64,348 88,292 68,95 210,68" />
                </g>
                <g className="wire-body">
                  <polygon points="215,86 318,170 295,300 190,345 75,272 78,155" />
                  <polyline points="215,86 190,345 78,155 318,170 75,272 295,300 215,86" />
                </g>
              </svg>
            </div>
            <div className="absolute bottom-9 left-10 rounded-full border border-white/10 bg-black/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              <span className="mr-3 inline-block h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,1)]" />
              Core simulation / active
            </div>
            <p className="absolute right-10 top-12 font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-600">
              ZX_VER.880
            </p>
          </Frame>
          <div className="grid border-l border-white/10">
            <div className="flex min-h-[260px] flex-col justify-between bg-emerald-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <span className="grid h-8 w-8 place-items-center rounded bg-white/15 font-mono text-lg">
                  ◫
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/55">
                  SYS_LOAD
                </span>
              </div>
              <div>
                <p className="text-6xl font-semibold tracking-tight">99.8%</p>
                <p className="mt-2 text-sm font-medium text-white/80">
                  Processing Node Utilization
                </p>
              </div>
            </div>
            <div className="flex min-h-[260px] flex-col justify-between bg-zinc-200 p-8 text-zinc-950">
              <div className="flex items-center justify-between">
                <span className="grid h-8 w-8 place-items-center rounded bg-black/20 font-mono text-lg">
                  ▣
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                  SYNC_RATE
                </span>
              </div>
              <div>
                <p className="text-6xl font-semibold tracking-tight">2ms</p>
                <p className="mt-2 text-sm font-medium text-zinc-600">
                  Cross-cluster Latency
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid border-x border-b border-white/10 bg-black/20 md:grid-cols-3">
          {primitives.map(([title, body], index) => (
            <article
              className="min-h-64 border-b border-white/10 p-9 md:border-b-0 md:border-r md:last:border-r-0"
              key={title}
            >
              <span className="grid h-5 w-5 place-items-center rounded bg-zinc-500 text-[10px] text-white">
                {index + 1}
              </span>
              <h3 className="mt-10 max-w-xs break-words text-xl font-semibold tracking-[0.28em] text-white">
                {title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-zinc-500">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
