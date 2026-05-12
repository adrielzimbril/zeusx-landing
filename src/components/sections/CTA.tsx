export function CTA() {
  return (
    <section id="contact" className="relative bg-[#060607] px-5 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-white/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.18),transparent_34%)]" />
      <div className="relative mx-auto max-w-5xl text-center">
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
          className="button-primary mt-10 bg-cyan-200 text-black hover:bg-white"
          href="mailto:brief@zeusx.example"
        >
          Schedule briefing
        </a>
      </div>
    </section>
  );
}
