import { SectionHeader } from "@/components/shared/SectionHeader";
import { TacticalFrame } from "@/components/shared/TacticalFrame";
import { useEffect, useState } from "react";

export function Capabilities() {
  const [activeNode, setActiveNode] = useState(0);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setActiveNode((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="capabilities"
      className="section-block bg-[#09090b] relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="section-shell relative z-10">
        <SectionHeader
          eyebrow="Mission capabilities"
          title="Engineered for multi-domain superiority."
          body="A distributed ecosystem of hardware and software working in unison to provide real-time battlefield dominance."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[1000px]">
          {/* Card 1: Neural Core (Main Bento Piece) */}
          <TacticalFrame
            className="md:col-span-2 md:row-span-2 bg-[#0d0d12] p-10 flex flex-col justify-between group overflow-hidden border-none bento-card-scanner scanner-active"
            intensity={15}
            glareOpacity={0.1}
          >
            <div className="scanner-line" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                <p className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.3em]">
                  Neural Core AI
                </p>
              </div>
              <h3 className="text-5xl font-light text-white leading-[1.1] tracking-tight">
                Autonomous <br />
                <span className="text-zinc-500">Fleet Logic</span>
              </h3>
              <p className="mt-6 text-sm text-zinc-400 max-w-xs font-light leading-relaxed">
                Proprietary machine learning models optimized for low-latency
                edge computing in contested electronic environments.
              </p>
            </div>

            {/* Visualizer inside the card */}
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 border border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-48 h-48 border border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute w-32 h-32 border border-cyan-500/10 rounded-full animate-[spin_10s_linear_infinite]" />
              </div>
            </div>

            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <div className="text-[10px] font-mono text-zinc-600 mb-1 uppercase tracking-widest">
                    Inference
                  </div>
                  <div className="text-2xl font-mono text-white">0.42ms</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono text-zinc-600 mb-1 uppercase tracking-widest">
                    Precision
                  </div>
                  <div className="text-2xl font-mono text-white">99.9%</div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-[10px] font-mono text-cyan-400 group/btn">
                <span>VIEW ARCHITECTURE</span>
                <span className="w-4 h-px bg-cyan-400 group-hover/btn:w-8 transition-all" />
              </button>
            </div>
          </TacticalFrame>

          {/* Card 2: Secure Link (Top Right Wide) */}
          <TacticalFrame
            className="md:col-span-2 bg-[#0d0d12] p-8 group overflow-hidden border-none bento-card-scanner scanner-active"
            intensity={10}
          >
            <div className="scanner-line" />
            <div className="flex justify-between items-start">
              <div className="max-w-[60%]">
                <p className="text-[10px] font-mono text-purple-500 uppercase tracking-widest mb-3">
                  Resilient Mesh
                </p>
                <h3 className="text-2xl font-light text-white">
                  Quantum-Resistant Signal Link
                </h3>
                <p className="mt-3 text-xs text-zinc-500 font-light leading-relaxed">
                  End-to-end encrypted communication using dynamic frequency
                  hopping and multi-path mesh relay protocols.
                </p>
              </div>
              <div className="w-24 h-24 relative">
                <div className="absolute inset-0 border border-purple-500/20 rounded-lg rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                <div className="absolute inset-2 border border-purple-500/40 rounded-lg -rotate-6 group-hover:-rotate-12 transition-transform duration-700" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                </div>
              </div>
            </div>
          </TacticalFrame>

          {/* Card 3: Modular (Bottom Middle) */}
          <TacticalFrame
            className="bg-[#0d0d12] p-8 group border-none bento-card-scanner scanner-active"
            intensity={20}
          >
            <div className="scanner-line" />
            <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-4">
              Payloads
            </p>
            <div className="text-4xl font-light text-white tracking-tighter mb-2">
              12+
            </div>
            <p className="text-xs text-zinc-500 font-mono uppercase tracking-widest">
              Configurations
            </p>
            <div className="mt-8 flex flex-col gap-2">
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-full bg-emerald-500/40 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700" />
              </div>
              <div className="h-1 w-3/4 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-full bg-emerald-500/40 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 delay-100" />
              </div>
            </div>
          </TacticalFrame>

          {/* Card 4: Global Status (Bottom Right) */}
          <TacticalFrame
            className="bg-[#0d0d12] p-8 group border-none bento-card-scanner scanner-active"
            intensity={20}
          >
            <div className="scanner-line" />
            <p className="text-[10px] font-mono text-rose-500 uppercase tracking-widest mb-4">
              Uptime
            </p>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div className="text-3xl font-light text-white">
                  99.99<span className="text-rose-500/50">%</span>
                </div>
                <div className="text-[10px] font-mono text-rose-500 animate-pulse">
                  LIVE
                </div>
              </div>
              <div className="h-20 flex items-end gap-1">
                {isMounted &&
                  Array.from({ length: 15 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-rose-500/20 group-hover:bg-rose-500/40 transition-colors"
                      style={{ height: `${Math.random() * 60 + 20}%` }}
                    />
                  ))}
              </div>
            </div>
          </TacticalFrame>

          {/* NEW Card 5: Signal Strength */}
          <TacticalFrame
            className="bg-[#0d0d12] p-8 group border-none bento-card-scanner scanner-active"
            intensity={15}
          >
            <div className="scanner-line" />
            <p className="text-[10px] font-mono text-cyan-500 uppercase tracking-widest mb-4">
              Signal
            </p>
            <div className="flex items-end gap-1 mb-4 h-12">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="flex-1 bg-cyan-500/20 rounded-sm transition-all group-hover:bg-cyan-500"
                  style={{
                    height: `${i * 20}%`,
                    animationDelay: `${i * 100}ms`,
                  }}
                />
              ))}
            </div>
            <p className="text-2xl font-light text-white">-42 dBm</p>
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mt-1">
              Excellent
            </p>
          </TacticalFrame>

          {/* NEW Card 6: Threat Detection (Wide) */}
          <TacticalFrame
            className="md:col-span-2 bg-[#0d0d12] p-8 group overflow-hidden border-none bento-card-scanner scanner-active"
            intensity={25}
          >
            <div className="scanner-line" />
            <div className="flex justify-between items-center h-full">
              <div>
                <p className="text-[10px] font-mono text-orange-500 uppercase tracking-widest mb-3">
                  Targeting
                </p>
                <h3 className="text-2xl font-light text-white">
                  Threat Detection
                </h3>
                <p className="mt-3 text-xs text-zinc-500 font-light max-w-xs leading-relaxed">
                  Real-time pattern matching for non-standard aerial signatures
                  and electronic interference.
                </p>
              </div>
              <div className="relative w-32 h-32 border border-white/5 rounded-full">
                <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#f9731633,transparent)] rounded-full animate-[spin_4s_linear_infinite]" />
                <div className="absolute inset-[15%] border border-orange-500/20 rounded-full" />
                <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_#f97316]" />
                <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-orange-500/50 rounded-full animate-pulse delay-700" />
              </div>
            </div>
          </TacticalFrame>

          {/* NEW Card 7: Encryption Status */}
          <TacticalFrame
            className="bg-[#0d0d12] p-8 group border-none bento-card-scanner scanner-active"
            intensity={15}
          >
            <div className="scanner-line" />
            <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">
              Encryption
            </p>
            <div className="text-3xl font-mono text-white mb-2 overflow-hidden whitespace-nowrap">
              <span className="animate-pulse">AES-XG</span>
            </div>
            <div className="text-[8px] font-mono text-zinc-600 break-all leading-tight">
              {isMounted ? "0x7F4A...B2C9" : "INITIALIZING..."}
            </div>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-full h-1 bg-white/5 rounded-full">
                <div className="h-full w-full bg-cyan-500/40 animate-[progress_3s_linear_infinite]" />
              </div>
            </div>
          </TacticalFrame>

          {/* NEW Card 8: Fleet Health */}
          <TacticalFrame
            className="md:col-span-1 bg-[#0d0d12] p-8 group border-none bento-card-scanner scanner-active"
            intensity={20}
          >
            <div className="scanner-line" />
            <p className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest mb-4">
              Fleet Health
            </p>
            <div className="flex flex-col gap-3">
              {[
                { label: "ZX-9", val: 98 },
                { label: "AL-7", val: 84 },
                { label: "K-4", val: 92 },
              ].map((fleet) => (
                <div key={fleet.label} className="space-y-1">
                  <div className="flex justify-between text-[8px] font-mono text-zinc-500">
                    <span>{fleet.label}</span>
                    <span>{fleet.val}%</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full">
                    <div
                      className="h-full bg-emerald-500 transition-all duration-1000"
                      style={{ width: isMounted ? `${fleet.val}%` : "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </TacticalFrame>
        </div>
      </div>
    </section>
  );
}
