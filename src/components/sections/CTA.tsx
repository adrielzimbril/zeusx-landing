import { TacticalFrame } from "../shared/TacticalFrame";

export function CTA() {
  return (
    <section id="contact" className="relative bg-[#060607] px-5 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-white/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_34%)]" />
      <div className="relative mx-auto max-w-5xl">
        <TacticalFrame className="bg-[#0d0d12]/50 backdrop-blur-sm p-12 sm:p-24 border border-white/5" intensity={10}>
          <div className="text-center relative z-10">
            <p className="text-xs font-medium uppercase tracking-[0.38em] text-cyan-300">
              Initialize secure briefing
            </p>
            <h2 className="mt-5 text-5xl font-normal leading-[0.92] tracking-tight text-white sm:text-7xl">
              Bring Zeusx into the command review.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400">
              Review airframe fit, command workflows, training scope, and deployment
              architecture with a Zeusx systems team.
            </p>
            <a
              className="button-primary mt-10 bg-cyan-200 text-black hover:bg-white inline-block"
              href="mailto:brief@zeusx.example"
            >
              Schedule briefing
            </a>
          </div>

          {/* Tactical Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/30" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/30" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/30" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/30" />
        </TacticalFrame>
      </div>
    </section>
  );
}
