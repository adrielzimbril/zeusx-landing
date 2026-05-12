import { SectionHeader } from "@/components/shared/SectionHeader";
import { TacticalFrame } from "@/components/shared/TacticalFrame";

const layers = [
  {
    title: "Hardware-backed fleet keys",
    id: "SEC-KEYS-01",
    status: "ENCRYPTED",
  },
  {
    title: "Immutable mission event ledger",
    id: "SEC-LDGR-02",
    status: "VERIFIED",
  },
  { title: "Role-based crew access", id: "SEC-AUTH-03", status: "ACTIVE" },
];

export function Security() {
  return (
    <section id="security" className="section-block bg-[#070708] relative">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Military-grade isolation"
          title="Control, separation, and audit at every layer."
          body="Enterprise-ready security infrastructure designed for sovereign defense applications, ensuring data integrity and operational secrecy."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <TacticalFrame
            className="lg:col-span-4 bg-[#0d0d12] p-8 flex flex-col justify-between group"
            intensity={25}
          >
            <div>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Global Security Status
              </p>
              <div className="mt-12 relative">
                <div className="text-8xl font-thin tracking-tighter text-white group-hover:text-emerald-400 transition-colors">
                  4/4
                </div>
                <div className="absolute -right-4 top-0 w-px h-full bg-white/5" />
              </div>
              <p className="mt-6 text-sm leading-relaxed text-zinc-400 font-light">
                Core protection layers synchronized across all command nodes and
                active airframes.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest">
                  System Nominal
                </span>
              </div>
            </div>
          </TacticalFrame>

          <div className="lg:col-span-8 grid gap-4">
            {layers.map((layer) => (
              <TacticalFrame
                className="group flex items-center justify-between bg-[#0d0d12] p-6 hover:bg-[#111118] transition-all border border-transparent hover:border-white/5"
                key={layer.id}
                intensity={10}
              >
                <div className="flex gap-8 items-center">
                  <span className="font-mono text-[10px] text-zinc-600 w-24">
                    {layer.id}
                  </span>
                  <p className="text-lg text-zinc-100 font-light group-hover:text-white transition-colors">
                    {layer.title}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:block w-32 h-1 bg-white/5 overflow-hidden">
                    <div className="h-full w-full bg-emerald-500/20" />
                  </div>
                  <span className="min-w-[80px] text-center rounded-sm border border-emerald-300/20 bg-emerald-300/5 px-3 py-1 text-[10px] font-mono text-emerald-300 uppercase tracking-wider">
                    {layer.status}
                  </span>
                </div>
              </TacticalFrame>
            ))}

            <div className="mt-4 p-4 border border-dashed border-white/10 flex justify-between items-center opacity-50">
              <p className="text-[10px] font-mono text-white uppercase">
                End-to-End Encryption: AES-256-GCM
              </p>
              <p className="text-[10px] font-mono text-zinc-100 uppercase">
                Handshake: RSA-4096
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
