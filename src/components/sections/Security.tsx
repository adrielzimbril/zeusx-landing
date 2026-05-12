import { Frame } from "@/components/shared/Frame";
import { SectionHeader } from "@/components/shared/SectionHeader";

const layers = [
  "Hardware-backed fleet keys",
  "Immutable mission event ledger",
  "Role-based crew access",
  "Separated payload and navigation channels",
];

export function Security() {
  return (
    <section id="security" className="section-block bg-[#070708]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Military-grade isolation"
          title="Control, separation, and audit at every layer."
          body="Security is shown as product trust infrastructure: clear, visual, and procurement-ready."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <Frame className="bento-card p-7">
            <p className="text-sm text-zinc-500">Current protection state</p>
            <p className="mt-12 text-7xl font-light tracking-tight text-white">
              4/4
            </p>
            <p className="mt-5 text-sm leading-7 text-zinc-400">
              Core layers active across command, telemetry, crew access, and
              mission records.
            </p>
          </Frame>
          <div className="grid gap-3">
            {layers.map((layer, index) => (
              <Frame
                className="flex items-center justify-between bg-white/[0.03] p-5"
                key={layer}
              >
                <div>
                  <span className="font-mono text-xs text-zinc-600">
                    SEC-0{index + 1}
                  </span>
                  <p className="mt-2 text-lg text-zinc-100">{layer}</p>
                </div>
                <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                  Active
                </span>
              </Frame>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
