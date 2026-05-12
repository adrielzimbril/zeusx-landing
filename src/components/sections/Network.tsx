import { DroneVisual } from "@/components/shared/DroneVisual";
import { Frame } from "@/components/shared/Frame";
import { SectionHeader } from "@/components/shared/SectionHeader";

export function Network() {
  return (
    <section id="network" className="section-block bg-[#070708]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Network command mesh"
          title="Fleet coordination with a visible command layer."
          body="The system view is built around structured borders, moving signal forms, and compact panels that feel closer to the AI infrastructure reference."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <Frame className="bento-card p-5">
            <DroneVisual compact label="ZX mesh relay" />
            <div className="mt-4 grid grid-cols-3 gap-px bg-white/10">
              {["North grid", "Relay spine", "South grid"].map((zone) => (
                <div
                  className="bg-black/50 p-4 text-center text-xs uppercase tracking-[0.18em] text-zinc-400"
                  key={zone}
                >
                  {zone}
                </div>
              ))}
            </div>
          </Frame>
          <Frame className="min-h-[420px] overflow-hidden bg-black/40 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(34,211,238,0.14),transparent_24%),radial-gradient(circle_at_72%_68%,rgba(16,185,129,0.12),transparent_28%)]" />
            <div className="relative grid h-full gap-4 md:grid-cols-2">
              {[
                ["Relay Alpha", "Uplink stable", "99.1"],
                ["Relay Bravo", "Terrain shadow", "86.7"],
                ["Relay Cobalt", "Console sync", "94.2"],
                ["Relay Delta", "Archive active", "100"],
              ].map(([name, state, score]) => (
                <div
                  className="border border-white/10 bg-white/[0.035] p-5"
                  key={name}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-normal text-white">{name}</h3>
                    <span className="font-mono text-xs text-cyan-200">
                      {score}%
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-500">{state}</p>
                  <div className="mt-8 h-1 overflow-hidden bg-white/10">
                    <div
                      className="h-full bg-cyan-300"
                      style={{ width: `${Number(score)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Frame>
        </div>
      </div>
    </section>
  );
}
