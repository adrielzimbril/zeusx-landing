import { DroneVisual } from "@/components/shared/DroneVisual";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-white/10 px-5 pt-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_28%,rgba(34,211,238,0.18),transparent_30%),radial-gradient(circle_at_18%_68%,rgba(16,185,129,0.12),transparent_28%),linear-gradient(to_bottom,transparent,#060607_88%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.38em] text-cyan-300">
            Day 11 / Tactical drone systems
          </p>
          <h1 className="max-w-5xl text-5xl font-normal leading-[0.88] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Zeusx deploys aerial dominance.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
            Flagship combat drone platforms engineered for reconnaissance, fleet
            coordination, protected command workflows, and decisive field
            visibility.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href="#models">
              View flagship models
            </a>
            <a className="button-secondary" href="#architecture">
              Explore architecture
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-8 rounded-full bg-cyan-400/10 blur-3xl" />
          <DroneVisual label="ZX command airframe" />
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 grid-cols-4 border-x border-t border-white/10 bg-black/30 backdrop-blur lg:grid">
        {["ISR-ready", "Mesh-linked", "Human-approved", "Mission logged"].map(
          (item) => (
            <div
              className="border-r border-white/10 px-6 py-4 text-xs uppercase tracking-[0.24em] text-zinc-400 last:border-r-0"
              key={item}
            >
              {item}
            </div>
          ),
        )}
      </div>
    </section>
  );
}
