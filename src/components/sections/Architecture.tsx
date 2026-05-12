import { Frame } from "@/components/shared/Frame";
import { SectionHeader } from "@/components/shared/SectionHeader";

const architecture = [
  [
    "Edge autonomy",
    "Critical routines stay onboard to preserve continuity when a field link is degraded.",
  ],
  [
    "Mission fabric",
    "Aircraft and relay units share a compact state model that keeps the tactical view coherent.",
  ],
  [
    "Operator console",
    "Sensitive decisions surface through a human command interface with logs and validation.",
  ],
];

export function Architecture() {
  return (
    <section id="architecture" className="section-block bg-[#09090b]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Advanced architecture"
          title="Built around aircraft, relay, console, and audit."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-12">
          <Frame className="min-h-[460px] overflow-hidden bg-black/45 p-7 lg:col-span-7">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(34,211,238,0.16),transparent_35%),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,48px_48px]" />
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-300">
                  Mission architecture
                </p>
                <h3 className="mt-5 max-w-xl text-4xl font-normal leading-none tracking-tight text-white">
                  One command plane across airframes and ground systems.
                </h3>
              </div>
              <div className="grid gap-px bg-white/10 md:grid-cols-3">
                {["Aircraft", "Relay", "Console"].map((item) => (
                  <div className="bg-[#0d0d10] p-5 text-zinc-300" key={item}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Frame>
          <div className="grid gap-4 lg:col-span-5">
            {architecture.map(([title, body]) => (
              <Frame className="bento-card p-6" key={title}>
                <h3 className="text-2xl font-normal text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-400">{body}</p>
              </Frame>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
