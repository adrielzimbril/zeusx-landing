import { SectionHeader } from "@/components/shared/SectionHeader";
import Drone3D from "@/components/effects/Drone3D";
import { TacticalFrame } from "@/components/shared/TacticalFrame";

const relayNodes = [
  { name: "Relay Alpha", state: "Uplink stable", score: "99.1", load: 0.4 },
  { name: "Relay Bravo", state: "Terrain shadow", score: "86.7", load: 0.7 },
  { name: "Relay Cobalt", state: "Console sync", score: "94.2", load: 0.3 },
  { name: "Relay Delta", state: "Archive active", score: "100", load: 0.1 },
];

export function Network() {
  return (
    <section id="network" className="section-block bg-[#070708] relative">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Network command mesh"
          title="Fleet coordination with a visible command layer."
          body="Distributed mesh architecture ensuring low-latency communication and redundant data paths across all mission-critical airframes."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <TacticalFrame 
            className="lg:col-span-5 bg-[#0d0d12] p-0 overflow-hidden relative group"
            intensity={20}
          >
            <div className="h-80 w-full relative">
              <Drone3D accentColor="#10b981" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] to-transparent opacity-60" />
            </div>
            <div className="p-8 relative">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-light text-white">ZX Mesh Relay</h3>
                <div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
                  UPLINK: ACTIVE
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["NORTH GRID", "SPINE", "SOUTH GRID"].map((zone) => (
                  <div
                    className="bg-[#09090b] border border-white/5 p-4 text-center group-hover:border-emerald-500/30 transition-colors"
                    key={zone}
                  >
                    <p className="text-[10px] font-mono text-zinc-500 tracking-wider">
                      {zone}
                    </p>
                    <div className="mt-2 h-1 w-full bg-white/5">
                      <div className="h-full w-3/4 bg-emerald-500/40" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TacticalFrame>

          <TacticalFrame className="lg:col-span-7 bg-[#0d0d12] p-8" intensity={5}>
            <div className="grid gap-6 md:grid-cols-2">
              {relayNodes.map((node) => (
                <div
                  className="group/node border border-white/5 bg-[#09090b] p-6 hover:border-cyan-500/30 transition-all"
                  key={node.name}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-light text-white group-hover/node:text-cyan-400 transition-colors">
                      {node.name}
                    </h3>
                    <span className="font-mono text-xs text-cyan-200">
                      {node.score}%
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-zinc-500 font-mono uppercase tracking-widest">
                    {node.state}
                  </p>

                  <div className="mt-8 flex gap-1 h-2">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 ${i / 12 < node.load ? "bg-cyan-500/60" : "bg-white/5"}`}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <p className="text-[10px] text-zinc-600 font-mono">
                      LATENCY: 12MS
                    </p>
                    <p className="text-[10px] text-zinc-600 font-mono">
                      LOAD: {(node.load * 100).toFixed(0)}%
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-cyan-500/5 border border-cyan-500/10 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <p className="text-xs text-cyan-200/80 font-mono tracking-tight">
                ALL MESH NODES OPERATIONAL. ENCRYPTION HANDSHAKE VERIFIED.
              </p>
            </div>
          </TacticalFrame>
        </div>
      </div>
    </section>
  );
}
