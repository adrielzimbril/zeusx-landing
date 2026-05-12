import { SectionHeader } from "@/components/shared/SectionHeader";
import { TacticalFrame } from "@/components/shared/TacticalFrame";
import { MissionFlow3D } from "@/components/effects/MissionFlow3D";

const pipeline = [
  [
    "01",
    "Mission brief",
    "Objectives, boundaries, and approval chain are locked before launch.",
  ],
  [
    "02",
    "Fleet pairing",
    "Aircraft, relay units, and operator consoles receive a synchronized mission state.",
  ],
  [
    "03",
    "Sensor sync",
    "Live imagery and environmental feeds are normalized into a shared tactical picture.",
  ],
  [
    "04",
    "Command review",
    "Critical actions remain visible to authorized operators before execution.",
  ],
  [
    "05",
    "Field relay",
    "Mission status, audit events, and fleet health return through protected channels.",
  ],
];

export function Pipeline() {
  return (
    <section className="section-block relative overflow-hidden bg-[#070708]">
      {/* Background 3D Flow */}
      <div className="absolute inset-0 opacity-20">
        <MissionFlow3D />
      </div>

      <div className="section-shell relative z-10">
        <SectionHeader
          eyebrow="Hardware pipeline"
          title="A mission system that reads like infrastructure."
          body="Synchronized mission states, sensor normalization, and real-time command review layers."
        />
        <div className="mt-8 grid border border-white/10 bg-white/5 lg:grid-cols-5">
          {pipeline.map(([number, title, body], index) => (
            <TacticalFrame 
              className="min-h-80 bg-[#0b0b0d]/80 backdrop-blur-sm border-r border-white/10 last:border-r-0" 
              key={title}
              intensity={index % 2 === 0 ? 10 : 15}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-500">
                    {number}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                </div>
                <div className="mt-20 h-24 border-l border-cyan-300/30 pl-5">
                  <h3 className="text-xl font-normal text-white">{title}</h3>
                  <p className="mt-4 text-sm leading-6 text-zinc-500 transition group-hover:text-zinc-300">
                    {body}
                  </p>
                </div>
              </div>
            </TacticalFrame>
          ))}
        </div>
      </div>
    </section>
  );
}
