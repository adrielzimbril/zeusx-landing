import { Access } from "@/components/sections/Access";
import { Architecture } from "@/components/sections/Architecture";
import { CTA } from "@/components/sections/CTA";
import { Hero } from "@/components/sections/Hero";
import { Models } from "@/components/sections/Models";
import { Network } from "@/components/sections/Network";
import { Pipeline } from "@/components/sections/Pipeline";
import { Primitives } from "@/components/sections/Primitives";
import { Security } from "@/components/sections/Security";
import { Telemetry } from "@/components/sections/Telemetry";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060607] text-zinc-100">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a
            className="text-sm font-semibold tracking-[0.28em] text-white"
            href="#hero"
          >
            ZEUSX
          </a>
          <div className="hidden items-center gap-7 text-xs uppercase tracking-[0.22em] text-zinc-400 md:flex">
            <a className="transition hover:text-white" href="#models">
              Models
            </a>
            <a className="transition hover:text-white" href="#telemetry">
              Telemetry
            </a>
            <a className="transition hover:text-white" href="#access">
              Access
            </a>
          </div>
          <a
            className="rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100 transition hover:bg-cyan-300 hover:text-black"
            href="#contact"
          >
            Request brief
          </a>
        </div>
      </nav>
      <Hero />
      <Primitives />
      <Pipeline />
      <Telemetry />
      <Network />
      <Architecture />
      <Security />
      <Models />
      <Access />
      <CTA />
    </main>
  );
}
