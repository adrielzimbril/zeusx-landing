import { Frame } from "@/components/shared/Frame";
import { SectionHeader } from "@/components/shared/SectionHeader";

const telemetry = [
  ["Fleet readiness", "98.4%", "Aircraft available across assigned squadrons"],
  ["Median link", "42 ms", "Console-to-relay status propagation"],
  ["Coverage", "1,280 km2", "Persistent mapped theater visibility"],
  ["Audit window", "24/7", "Continuous event capture and review"],
];

export function Telemetry() {
  return (
    <section id="telemetry" className="section-block bg-[#09090b]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Live telemetry operations"
          title="A command board for fleet health and mission status."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <Frame className="min-h-[460px] overflow-hidden bg-black/40 p-6">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:36px_36px]" />
            <div className="relative h-full">
              <div className="absolute left-[12%] top-[22%] h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_24px_rgba(103,232,249,1)]" />
              <div className="absolute right-[18%] top-[34%] h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_24px_rgba(110,231,183,0.9)]" />
              <div className="absolute bottom-[24%] left-[44%] h-3 w-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
              <div className="radar-ring absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20" />
              <div className="radar-ring radar-ring-delay absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30" />
            </div>
          </Frame>
          <div className="grid gap-4 sm:grid-cols-2">
            {telemetry.map(([label, value, body]) => (
              <Frame className="bento-card p-6" key={label}>
                <p className="text-sm text-zinc-500">{label}</p>
                <p className="mt-8 text-4xl font-light tracking-tight text-white">
                  {value}
                </p>
                <p className="mt-5 text-sm leading-6 text-zinc-500">{body}</p>
              </Frame>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
