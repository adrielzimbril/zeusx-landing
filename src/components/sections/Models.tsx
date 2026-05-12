import { SectionHeader } from "@/components/shared/SectionHeader";
import Drone3D from "@/components/effects/Drone3D";
import { TacticalFrame } from "@/components/shared/TacticalFrame";

const models = [
  {
    name: "ZX-9 Aegis",
    role: "Long-endurance overwatch",
    endurance: "36 h",
    link: "Tri-band",
    payload: "Optical ISR",
    accent: "#22d3ee",
    stats: { speed: "180 kt", ceiling: "45k ft", range: "2.4k km" },
  },
  {
    name: "ZX-7 Nyx",
    role: "Low-signature reconnaissance",
    endurance: "18 h",
    link: "Mesh relay",
    payload: "Thermal suite",
    accent: "#a855f7",
    stats: { speed: "220 kt", ceiling: "30k ft", range: "1.2k km" },
  },
  {
    name: "ZX-5 Talon",
    role: "Rapid escort platform",
    endurance: "9 h",
    link: "Edge link",
    payload: "Modular bay",
    accent: "#ef4444",
    stats: { speed: "450 kt", ceiling: "25k ft", range: "800 km" },
  },
];

export function Models() {
  return (
    <section
      id="models"
      className="section-block bg-[#09090b] relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[1px] bg-cyan-500" />
        <div className="absolute top-[10%] left-[5%] w-[1px] h-[20%] bg-cyan-500" />
      </div>

      <div className="section-shell relative z-10">
        <SectionHeader
          eyebrow="Flagship models"
          title="Three airframes for layered theater coverage."
          body="Tactical deployment units optimized for diverse mission profiles, from high-altitude ISR to rapid-response kinetic support."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {models.map((model) => (
            <TacticalFrame
              className="group relative overflow-hidden flex flex-col bg-[#0d0d12]/50 border-none"
              key={model.name}
              intensity={20}
            >
              {/* Tactical Corners */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-white/20 transition-colors group-hover:border-cyan-500/50" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-white/20 transition-colors group-hover:border-cyan-500/50" />

              <div className="relative h-64 w-full">
                <Drone3D accentColor={model.accent} />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <div className="bg-black/60 backdrop-blur px-2 py-1 border border-white/10 text-[10px] font-mono text-zinc-400">
                    S/N: {model.name.replace(" ", "-")}
                  </div>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-1 h-3 bg-cyan-500/30" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-400 mb-1">
                      {model.role}
                    </p>
                    <h3 className="text-3xl font-light tracking-tight text-white group-hover:text-cyan-100 transition-colors">
                      {model.name}
                    </h3>
                  </div>
                  <div className="h-10 w-10 border border-white/10 grid place-items-center rounded-sm">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: model.accent }}
                    />
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {Object.entries(model.stats).map(([label, value]) => (
                    <div key={label} className="border-l border-white/5 pl-3">
                      <p className="text-[10px] uppercase text-zinc-500 font-mono">
                        {label}
                      </p>
                      <p className="text-lg text-white font-light">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-8">
                  <dl className="grid grid-cols-3 gap-px bg-white/5 text-[11px]">
                    {[
                      ["Endurance", model.endurance],
                      ["Link", model.link],
                      ["Payload", model.payload],
                    ].map(([label, value]) => (
                      <div className="bg-[#09090b] p-2" key={label}>
                        <dt className="text-zinc-600 mb-1">{label}</dt>
                        <dd className="text-zinc-200 truncate">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </TacticalFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
