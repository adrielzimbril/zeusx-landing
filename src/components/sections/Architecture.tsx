import { SectionHeader } from "@/components/shared/SectionHeader";
import ArchitectureNodes from "@/components/effects/ArchitectureNodes";
import { TacticalFrame } from "@/components/shared/TacticalFrame";

const architecture = [
  {
    title: "Edge autonomy",
    body: "Critical routines stay onboard to preserve continuity when a field link is degraded.",
    tag: "RESILIENCE",
  },
  {
    title: "Mission fabric",
    body: "Aircraft and relay units share a compact state model that keeps the tactical view coherent.",
    tag: "SYNC",
  },
  {
    title: "Operator console",
    body: "Sensitive decisions surface through a human command interface with logs and validation.",
    tag: "CONTROL",
  },
];

export function Architecture() {
  return (
    <section
      id="architecture"
      className="section-block bg-[#09090b] relative overflow-hidden"
    >
      <div className="section-shell">
        <SectionHeader
          eyebrow="Advanced architecture"
          title="Built around aircraft, relay, console, and audit."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <TacticalFrame 
            className="min-h-[500px] overflow-hidden bg-[#0d0d12] p-8 lg:col-span-7 group relative"
            intensity={10}
            glareOpacity={0.1}
          >
            <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-60 transition-opacity">
              <ArchitectureNodes />
            </div>

            <div className="relative z-10 flex h-full flex-col justify-between pointer-events-none">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-400">
                  Core Network Topology
                </p>
                <h3 className="mt-6 max-w-lg text-4xl font-light leading-[1.1] tracking-tight text-white">
                  A decentralized command plane for synchronized operations.
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-px bg-white/5 border border-white/5">
                {["AIRCRAFT", "RELAY", "CONSOLE"].map((item) => (
                  <div
                    className="bg-[#09090b]/80 backdrop-blur-sm p-4 text-center"
                    key={item}
                  >
                    <p className="text-[10px] font-mono tracking-widest text-zinc-500">
                      {item}
                    </p>
                    <div className="mt-2 h-1 w-full bg-cyan-500/20">
                      <div className="h-full w-2/3 bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TacticalFrame>

          <div className="grid gap-6 lg:col-span-5">
            {architecture.map((item) => (
              <TacticalFrame
                className="group p-8 bg-[#0d0d12] hover:bg-[#111118] transition-colors relative"
                key={item.title}
                intensity={15}
              >
                <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-600 border border-white/5 px-2 py-0.5">
                  {item.tag}
                </div>
                <h3 className="text-2xl font-light text-white group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-zinc-400 font-light">
                  {item.body}
                </p>

                <div className="mt-6 flex items-center gap-2">
                  <div className="h-px flex-1 bg-white/5" />
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40" />
                </div>
              </TacticalFrame>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
