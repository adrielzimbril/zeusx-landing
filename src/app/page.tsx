const flagshipModels = [
  {
    name: "ZX-9 Aegis",
    role: "Surveillance longue endurance",
    range: "36 h",
    signal: "Tri-band",
    payload: "Optical ISR",
  },
  {
    name: "ZX-7 Nyx",
    role: "Reconnaissance basse signature",
    range: "18 h",
    signal: "Mesh relay",
    payload: "Thermal suite",
  },
  {
    name: "ZX-5 Talon",
    role: "Intervention rapide et escorte",
    range: "9 h",
    signal: "Edge link",
    payload: "Modular bay",
  },
];

const primitives = [
  "Vision multispectrale stabilisee",
  "Calcul embarque redondant",
  "Liaison terrain durcie",
];

const pipeline = [
  "Mission brief",
  "Fleet pairing",
  "Sensor sync",
  "Command review",
  "Field relay",
];

const telemetry = [
  ["Fleet readiness", "98.4%"],
  ["Median link", "42 ms"],
  ["Zone coverage", "1,280 km2"],
  ["Service window", "24/7"],
];

const architectureCards = [
  {
    title: "Edge autonomy",
    body: "Les routines critiques restent sur l'appareil afin de preserver la continuite lorsque le terrain degrade la liaison.",
  },
  {
    title: "Mission fabric",
    body: "Chaque drone partage un etat de mission compact avec les relais autorises pour garder une lecture tactique commune.",
  },
  {
    title: "Operator console",
    body: "Les decisions sensibles remontent vers une interface de controle claire, avec journaux, validation et priorites visibles.",
  },
];

const securityLayers = [
  "Chiffrement materiel par flotte",
  "Journalisation immuable des ordres",
  "Acces role-based pour equipages",
];

const accessPlans = [
  {
    tier: "Evaluation",
    price: "Brief",
    detail:
      "Session de qualification, besoins terrain et lecture des contraintes de mission.",
  },
  {
    tier: "Squadron",
    price: "Pilot",
    detail:
      "Lot restreint, console superviseur, formation initiale et support de deploiement.",
  },
  {
    tier: "Theater",
    price: "Program",
    detail:
      "Architecture multi-sites, integration SI defense et gouvernance longue duree.",
  },
];

function DroneMark({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`relative mx-auto ${compact ? "h-32 w-52" : "h-72 w-full max-w-3xl"}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_32px_rgba(103,232,249,0.8)]" />
      <div className="absolute left-1/2 top-1/2 h-8 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-500 bg-zinc-900 shadow-2xl" />
      <div className="absolute left-1/2 top-1/2 h-px w-[78%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-zinc-400 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[62%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-zinc-500 to-transparent" />
      {[
        "left-8 top-8",
        "right-8 top-8",
        "bottom-8 left-8",
        "bottom-8 right-8",
      ].map((position) => (
        <div
          className={`absolute ${position} grid h-20 w-20 place-items-center rounded-full border border-zinc-700 bg-black/60 shadow-[inset_0_0_30px_rgba(255,255,255,0.04)]`}
          key={position}
        >
          <div className="h-12 w-12 rounded-full border border-dashed border-cyan-300/50 animate-spin-slow" />
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#060607] text-zinc-100">
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/45 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a
            className="text-sm font-semibold tracking-[0.28em] text-white"
            href="#hero"
          >
            ZEUSX
          </a>
          <div className="hidden items-center gap-7 text-xs uppercase tracking-[0.22em] text-zinc-400 md:flex">
            <a className="transition hover:text-white" href="#models">
              Modeles
            </a>
            <a className="transition hover:text-white" href="#telemetry">
              Telemetrie
            </a>
            <a className="transition hover:text-white" href="#access">
              Acces
            </a>
          </div>
          <a
            className="rounded-full border border-cyan-300/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-100 transition hover:bg-cyan-300 hover:text-black"
            href="#contact"
          >
            Demander un brief
          </a>
        </div>
      </nav>

      <section
        id="hero"
        className="relative flex min-h-screen items-center border-b border-white/10 px-5 pt-24"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(34,211,238,0.18),transparent_32%),linear-gradient(to_bottom,transparent,#060607_88%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-6 text-xs uppercase tracking-[0.38em] text-cyan-300">
              Jour 11 / Defense aerial systems
            </p>
            <h1 className="max-w-5xl text-5xl font-normal leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
              Zeusx presente sa flotte flagship.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300">
              Une societe fictive de drones de guerre concue comme une vitrine
              premium: puissance industrielle, commandement humain et
              plateformes aeriennes modulaires.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
                href="#models"
              >
                Voir les modeles
              </a>
              <a
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white"
                href="#architecture"
              >
                Explorer l'architecture
              </a>
            </div>
          </div>
          <DroneMark />
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#09090b] px-5 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-zinc-500">
              Infrastructure primitives
            </p>
            <h2 className="mt-4 text-4xl font-normal tracking-tight text-white sm:text-6xl">
              Une plateforme, trois couches critiques.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {primitives.map((item, index) => (
              <div
                className="border border-white/10 bg-white/[0.03] p-6"
                key={item}
              >
                <span className="text-sm text-cyan-300">0{index + 1}</span>
                <h3 className="mt-12 text-xl font-normal text-white">{item}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-400">
                  Integre pour presenter la valeur produit sans exposer de
                  procedure sensible.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-white/10 bg-[#070708] px-5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">
                Hardware pipeline
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-normal tracking-tight text-white sm:text-6xl">
                De la mission au relais terrain.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-zinc-400">
              Une sequence inspiree des pages infrastructure: dense, technique,
              mais orientee presentation commerciale.
            </p>
          </div>
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-5">
            {pipeline.map((step, index) => (
              <div className="bg-[#0b0b0d] p-6" key={step}>
                <span className="font-mono text-xs text-zinc-500">
                  PHASE {index + 1}
                </span>
                <h3 className="mt-16 text-xl font-normal text-white">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="telemetry"
        className="border-b border-white/10 bg-[#09090b] px-5 py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-zinc-500">
              Live telemetry operations
            </p>
            <h2 className="mt-4 text-4xl font-normal tracking-tight text-white sm:text-6xl">
              Un centre de controle lisible en un regard.
            </h2>
          </div>
          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {telemetry.map(([label, value]) => (
              <div className="bg-[#0c0c0f] p-8" key={label}>
                <p className="text-sm text-zinc-500">{label}</p>
                <p className="mt-6 text-4xl font-light tracking-tight text-white">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="network"
        className="relative border-b border-white/10 bg-[#070708] px-5 py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="border border-white/10 bg-black/35 p-6">
            <DroneMark compact />
            <div className="mt-8 grid grid-cols-3 gap-px bg-white/10">
              {["North", "Relay", "South"].map((zone) => (
                <div
                  className="bg-[#0b0b0d] p-4 text-center text-xs uppercase tracking-[0.2em] text-zinc-400"
                  key={zone}
                >
                  {zone}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">
              Network command mesh
            </p>
            <h2 className="mt-4 text-4xl font-normal tracking-tight text-white sm:text-6xl">
              Coordination de flotte sans surcharge visuelle.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400">
              Les points, relais et zones critiques sont montres comme une
              interface de monitoring premium, proche des references
              infrastructure tout en restant adaptee a Zeusx.
            </p>
          </div>
        </div>
      </section>

      <section
        id="architecture"
        className="border-b border-white/10 bg-[#09090b] px-5 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.32em] text-zinc-500">
            Advanced architecture
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-normal tracking-tight text-white sm:text-6xl">
            Une architecture pensee pour l'operateur.
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {architectureCards.map((card) => (
              <div
                className="min-h-72 border border-white/10 bg-white/[0.03] p-7"
                key={card.title}
              >
                <h3 className="text-2xl font-normal text-white">
                  {card.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="security"
        className="border-b border-white/10 bg-[#070708] px-5 py-24 sm:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">
              Military-grade isolation
            </p>
            <h2 className="mt-4 text-4xl font-normal tracking-tight text-white sm:text-6xl">
              Controle, audit et separation.
            </h2>
          </div>
          <div className="space-y-3">
            {securityLayers.map((layer) => (
              <div
                className="flex items-center justify-between border border-white/10 bg-white/[0.03] p-5"
                key={layer}
              >
                <span className="text-zinc-200">{layer}</span>
                <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="models"
        className="border-b border-white/10 bg-[#09090b] px-5 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-zinc-500">
              Flagship models
            </p>
            <h2 className="mt-4 text-4xl font-normal tracking-tight text-white sm:text-6xl">
              Trois plateformes en vedette.
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {flagshipModels.map((model) => (
              <article
                className="border border-white/10 bg-[#0d0d10] p-7"
                key={model.name}
              >
                <div className="mb-8 h-40 border border-white/10 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.18),transparent_58%)]">
                  <DroneMark compact />
                </div>
                <p className="text-sm text-cyan-300">{model.role}</p>
                <h3 className="mt-3 text-3xl font-normal tracking-tight text-white">
                  {model.name}
                </h3>
                <dl className="mt-8 grid grid-cols-3 gap-px bg-white/10 text-sm">
                  <div className="bg-[#101014] p-3">
                    <dt className="text-zinc-500">Endurance</dt>
                    <dd className="mt-2 text-white">{model.range}</dd>
                  </div>
                  <div className="bg-[#101014] p-3">
                    <dt className="text-zinc-500">Signal</dt>
                    <dd className="mt-2 text-white">{model.signal}</dd>
                  </div>
                  <div className="bg-[#101014] p-3">
                    <dt className="text-zinc-500">Payload</dt>
                    <dd className="mt-2 text-white">{model.payload}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="access"
        className="border-b border-white/10 bg-[#09090b] px-5 py-24 sm:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-xs uppercase tracking-[0.32em] text-zinc-500">
              Hardware access layers
            </p>
            <h2 className="mt-4 text-4xl font-normal tracking-tight text-white sm:text-5xl">
              Choisir le niveau d'engagement.
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {accessPlans.map((plan) => (
              <div
                className="border border-white/10 bg-white/[0.03] p-7"
                key={plan.tier}
              >
                <h3 className="text-2xl font-normal text-white">{plan.tier}</h3>
                <p className="mt-6 text-4xl font-light text-cyan-200">
                  {plan.price}
                </p>
                <p className="mt-6 min-h-20 text-sm leading-7 text-zinc-400">
                  {plan.detail}
                </p>
                <a
                  className="mt-8 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm text-white"
                  href="#contact"
                >
                  Ouvrir le dossier
                </a>
              </div>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 gap-px border border-white/10 bg-white/10 lg:grid-cols-4">
            {["Procurement", "R&D Labs", "Training", "Field Ops"].map(
              (label) => (
                <div
                  className="bg-[#0d0d10] p-6 text-center text-xs uppercase tracking-[0.22em] text-zinc-400"
                  key={label}
                >
                  {label}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative bg-[#060607] px-5 py-24 sm:py-32"
      >
        <div className="absolute inset-x-0 top-0 mx-auto h-px max-w-7xl bg-white/10" />
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs uppercase tracking-[0.38em] text-cyan-300">
            Initialize secure briefing
          </p>
          <h2 className="mt-5 text-5xl font-normal tracking-tight text-white sm:text-7xl">
            Zeusx est pret pour la presentation.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-zinc-400">
            Une landing page dense, sombre et technique, avec le meme nombre de
            sections que le template AI Infrastructure.
          </p>
          <a
            className="mt-10 inline-flex rounded-full bg-cyan-200 px-7 py-4 text-sm font-medium text-black"
            href="mailto:brief@zeusx.example"
          >
            Programmer le brief
          </a>
        </div>
      </section>
    </main>
  );
}
