import { SectionHeader } from "@/components/shared/SectionHeader";
import { TacticalFrame } from "@/components/shared/TacticalFrame";

const plans = [
  {
    tier: "Evaluation",
    label: "Brief",
    body: "Capability review, operating constraints, procurement fit, and initial fleet sizing.",
  },
  {
    tier: "Squadron",
    label: "Pilot",
    body: "Limited deployment package with operator console, training track, and field support.",
  },
  {
    tier: "Theater",
    label: "Program",
    body: "Multi-site command architecture, governance model, support desk, and integration planning.",
  },
];

export default function Access() {
  return (
    <section id="access" className="section-block bg-[#09090b]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Hardware access layers"
          title="Choose the engagement model."
          body="Procurement language stays direct: evaluation, pilot squadron, or full program engagement."
          align="center"
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <TacticalFrame
              className={`bento-card p-0 overflow-hidden ${
                index === 1 ? "bg-cyan-300 border-none" : "bg-white/5"
              }`}
              key={plan.tier}
              intensity={20}
            >
              <div className="p-7">
                <h3 className={`text-2xl font-normal ${"text-white"}`}>
                  {plan.tier}
                </h3>
                <p
                  className={`mt-8 text-5xl font-light tracking-tight ${"text-cyan-200"}`}
                >
                  {plan.label}
                </p>
                <p
                  className={`mt-7 min-h-24 text-sm leading-7 ${"text-zinc-400"}`}
                >
                  {plan.body}
                </p>
                <a
                  className={
                    index === 1
                      ? "mt-8 inline-flex rounded-full bg-black px-5 py-3 text-sm text-white"
                      : "mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm text-white"
                  }
                  href="#contact"
                >
                  Open dossier
                </a>
              </div>
            </TacticalFrame>
          ))}
        </div>
        <div className="mt-4 grid grid-cols-2 gap-px border border-white/10 bg-white/10 lg:grid-cols-4">
          {["Procurement", "R&D Labs", "Training", "Field Ops"].map((label) => (
            <div
              className="bg-[#0d0d10] p-6 text-center text-xs uppercase tracking-[0.22em] text-zinc-400"
              key={label}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
