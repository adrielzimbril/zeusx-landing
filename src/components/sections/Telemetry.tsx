import { SectionHeader } from "@/components/shared/SectionHeader";
import Radar3D from "@/components/effects/Radar3D";
import { TacticalFrame } from "@/components/shared/TacticalFrame";
import { useEffect, useState } from "react";

const telemetryItems = [
  {
    label: "Fleet readiness",
    value: "98.4%",
    body: "Aircraft available across assigned squadrons",
    trend: "+0.2%",
  },
  {
    label: "Median link",
    value: "42 ms",
    body: "Console-to-relay status propagation",
    trend: "-2 ms",
  },
  {
    label: "Coverage",
    value: "1,280 km2",
    body: "Persistent mapped theater visibility",
    trend: "STABLE",
  },
  {
    label: "Audit window",
    value: "24/7",
    body: "Continuous event capture and review",
    trend: "LIVE",
  },
];

function FlickeringStat({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.95) {
        // Subtle flicker
        const chars = "0123456789%ms. ";
        const randomChar = chars[Math.floor(Math.random() * chars.length)];
        const idx = Math.floor(Math.random() * value.length);
        const flickered =
          value.substring(0, idx) + randomChar + value.substring(idx + 1);
        setDisplayValue(flickered);
        setTimeout(() => setDisplayValue(value), 50);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [value]);

  return <span>{displayValue}</span>;
}

export function Telemetry() {
  return (
    <section id="telemetry" className="section-block bg-[#09090b] relative">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Live telemetry operations"
          title="A command board for fleet health and mission status."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <TacticalFrame 
            className="min-h-[500px] overflow-hidden bg-[#0d0d12] p-0 relative group"
            intensity={10}
            glareOpacity={0.05}
          >
            <div className="absolute inset-0 z-0 opacity-50 group-hover:opacity-80 transition-opacity">
              <Radar3D />
            </div>

            {/* HUD Overlay */}
            <div className="absolute inset-0 pointer-events-none p-8 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="bg-cyan-500/10 backdrop-blur border border-cyan-500/30 p-3">
                  <p className="text-[10px] font-mono text-cyan-400 mb-1">
                    SCANNING THEATER
                  </p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-4 h-1 bg-cyan-500/40 animate-pulse"
                        style={{ animationDelay: `${i * 200}ms` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    Global Coordinates
                  </p>
                  <p className="text-xs text-white font-mono mt-1">
                    34.0522° N, 118.2437° W
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-end">
                <div className="text-[10px] font-mono text-zinc-600">
                  REF: ZEUSX-PRIME-RELAY-04
                </div>
                <div className="w-32 h-1 bg-white/5 overflow-hidden">
                  <div className="h-full bg-cyan-500/40 animate-[progress_2s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>
          </TacticalFrame>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            {telemetryItems.map((item) => (
              <TacticalFrame
                className="group p-8 bg-[#0d0d12] hover:bg-[#111118] transition-all relative border-l-2 border-transparent hover:border-cyan-500"
                key={item.label}
                intensity={15}
              >
                <div className="flex justify-between items-start">
                  <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                    {item.label}
                  </p>
                  <span
                    className={`text-[10px] font-mono ${item.trend.startsWith("+") ? "text-emerald-400" : item.trend.startsWith("-") ? "text-rose-400" : "text-cyan-400"}`}
                  >
                    {item.trend}
                  </span>
                </div>
                <p className="mt-6 text-5xl font-light tracking-tighter text-white">
                  <FlickeringStat value={item.value} />
                </p>
                <p className="mt-4 text-xs leading-relaxed text-zinc-500 font-light max-w-[200px]">
                  {item.body}
                </p>
              </TacticalFrame>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
