import { DroneVisual } from "@/components/shared/DroneVisual";
import { Frame } from "@/components/shared/Frame";
import { SectionHeader } from "@/components/shared/SectionHeader";

const models = [
  {
    name: "ZX-9 Aegis",
    role: "Long-endurance overwatch",
    endurance: "36 h",
    link: "Tri-band",
    payload: "Optical ISR",
  },
  {
    name: "ZX-7 Nyx",
    role: "Low-signature reconnaissance",
    endurance: "18 h",
    link: "Mesh relay",
    payload: "Thermal suite",
  },
  {
    name: "ZX-5 Talon",
    role: "Rapid escort platform",
    endurance: "9 h",
    link: "Edge link",
    payload: "Modular bay",
  },
];

export function Models() {
  return (
    <section id="models" className="section-block bg-[#09090b]">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Flagship models"
          title="Three airframes for layered theater coverage."
          body="Each model card is built as a bento product panel with a dedicated 3D-style aircraft preview and dense specifications."
        />
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {models.map((model) => (
            <Frame className="bento-card overflow-hidden p-4" key={model.name}>
              <DroneVisual compact label={model.name} />
              <div className="p-3">
                <p className="mt-4 text-sm text-cyan-300">{model.role}</p>
                <h3 className="mt-3 text-3xl font-normal tracking-tight text-white">
                  {model.name}
                </h3>
                <dl className="mt-8 grid grid-cols-3 gap-px bg-white/10 text-sm">
                  {[
                    ["Endurance", model.endurance],
                    ["Link", model.link],
                    ["Payload", model.payload],
                  ].map(([label, value]) => (
                    <div className="bg-[#101014] p-3" key={label}>
                      <dt className="text-zinc-500">{label}</dt>
                      <dd className="mt-2 text-white">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Frame>
          ))}
        </div>
      </div>
    </section>
  );
}
