import PixelBlast from "@/components/PixelBlast";
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
    <main className="tactical-grid min-h-screen overflow-hidden bg-[#020303] text-zinc-100">
      <div className="fixed inset-0 z-0 opacity-70">
        <PixelBlast
          variant="square"
          pixelSize={2}
          color="#10b981"
          patternScale={1.85}
          patternDensity={0.34}
          enableRipples
          rippleSpeed={0.35}
          rippleThickness={0.14}
          rippleIntensityScale={0.55}
          speed={0.025}
          transparent
          edgeFade={0.34}
          noiseAmount={0.035}
        />
      </div>
      <nav className="fixed left-0 right-0 top-6 z-50 px-5">
        <div className="nav-pill mx-auto flex h-14 max-w-4xl items-center justify-between px-6">
          <a
            className="text-sm font-semibold tracking-tight text-white"
            href="#hero"
          >
            Zeusx
          </a>
          <div className="hidden items-center gap-10 text-sm text-zinc-500 md:flex">
            <a className="transition hover:text-white" href="#architecture">
              Platform
            </a>
            <a className="transition hover:text-white" href="#models">
              Models
            </a>
            <a className="transition hover:text-white" href="#telemetry">
              Docs
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a
              className="hidden text-sm text-zinc-500 hover:text-white sm:block"
              href="#access"
            >
              Log in
            </a>
            <a
              className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-cyan-200"
              href="#contact"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
      <div className="page-frame">
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
      </div>
    </main>
  );
}
