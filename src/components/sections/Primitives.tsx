import { Frame } from "@/components/shared/Frame";
import { SectionHeader } from "@/components/shared/SectionHeader";

const primitives = [
  [
    "Multispectral vision",
    "Electro-optical, thermal, and low-light feeds in one operator view.",
  ],
  [
    "Redundant compute",
    "Dual mission processors keep navigation and telemetry isolated from payload workloads.",
  ],
  [
    "Hardened relay",
    "Encrypted mesh routing keeps fleet state readable across difficult terrain.",
  ],
];

export function Primitives() {
  return (
    <section className="section-block bg-[#09090b]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Infrastructure primitives"
          title="Three core layers behind every Zeusx aircraft."
          body="The page now borrows the infrastructure template language: framed systems, sparse labels, technical cards, and strong visual hierarchy."
        />
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {primitives.map(([title, body], index) => (
            <Frame className="bento-card min-h-72 p-6" key={title}>
              <span className="font-mono text-xs text-cyan-300">
                0{index + 1}
              </span>
              <div className="mt-16 h-px bg-gradient-to-r from-cyan-300/50 to-transparent" />
              <h3 className="mt-8 text-2xl font-normal tracking-tight text-white">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{body}</p>
            </Frame>
          ))}
        </div>
      </div>
    </section>
  );
}
