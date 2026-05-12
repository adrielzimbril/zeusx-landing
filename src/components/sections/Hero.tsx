import Drone3D from "@/components/effects/Drone3D";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-white/5 px-5 pt-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(2,3,3,0.8)_100%)]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="tactical-bracket bracket-tl bracket-bl pl-8 py-4">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400 glow-cyan">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500"></span>
            </span>
            System Online: Gen-3 Tactical
          </div>
          <h1 className="max-w-5xl text-5xl font-normal leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl perspective-1000">
            <span className="block opacity-70">Zeusx deploys</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-white/50">
              aerial dominance.
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-400">
            Flagship combat drone platforms engineered for reconnaissance, fleet
            coordination, and decisive field visibility. Powered by autonomous
            tactical intelligence.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a className="button-primary" href="#models">
              View Flagship Models
            </a>
            <a className="button-secondary" href="#architecture">
              Explore Architecture
            </a>
          </div>
        </div>
        <div className="relative perspective-2000">
          <div className="absolute -inset-20 rounded-full bg-cyan-500/10 blur-[140px] glow-cyan opacity-40" />
          <div className="h-[500px] w-full">
            <Drone3D className="w-full h-full" />
          </div>

          {/* Metadata Overlay */}
          <div className="absolute -bottom-10 -left-10 tactile-glass rounded-lg p-4 border-l-4 border-cyan-500 hidden md:block">
            <div className="flex flex-col gap-2">
              <div className="metadata-tag">AL-709 // ACTIVE</div>
              <div className="text-[10px] font-mono text-zinc-500">
                COORD: 34.0522° N, 118.2437° W
              </div>
              <div className="h-1 w-32 bg-zinc-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 w-3/4 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 hidden w-full max-w-7xl -translate-x-1/2 grid-cols-4 border-x border-t border-white/5 bg-black/40 backdrop-blur-xl lg:grid">
        {["ISR-ready", "Mesh-linked", "Autonomous", "Encrypted"].map((item) => (
          <div
            className="group border-r border-white/5 px-8 py-6 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 transition-colors hover:text-cyan-400 last:border-r-0"
            key={item}
          >
            <div className="flex items-center gap-3">
              <div className="h-1 w-1 bg-cyan-500/50 group-hover:bg-cyan-400 group-hover:scale-150 transition-all"></div>
              {item}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
