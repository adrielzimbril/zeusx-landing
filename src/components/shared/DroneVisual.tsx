type DroneVisualProps = {
  compact?: boolean;
  label?: string;
};

export function DroneVisual({ compact = false, label }: DroneVisualProps) {
  return (
    <div
      className={`drone-stage relative mx-auto overflow-hidden border border-white/10 bg-black/40 ${
        compact ? "h-44 w-full" : "min-h-[420px] w-full"
      }`}
      aria-label={label}
      role="img"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(34,211,238,0.24),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_34%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="drone-perspective absolute left-1/2 top-1/2 h-44 w-[28rem] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-1/2 top-1/2 h-8 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-zinc-500 bg-gradient-to-r from-zinc-950 via-zinc-700 to-zinc-950 shadow-2xl" />
        <div className="absolute left-1/2 top-1/2 h-16 w-28 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan-200/30 bg-zinc-950 shadow-[0_0_70px_rgba(34,211,238,0.35)]" />
        <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-44 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-zinc-500 to-transparent" />
        {[
          "left-0 top-0",
          "right-0 top-0",
          "bottom-0 left-0",
          "bottom-0 right-0",
        ].map((position) => (
          <div
            className={`absolute ${position} grid h-24 w-24 place-items-center rounded-full border border-zinc-700 bg-black/70 shadow-[inset_0_0_30px_rgba(255,255,255,0.06)]`}
            key={position}
          >
            <div className="rotor h-16 w-16 rounded-full border border-dashed border-cyan-200/60" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border border-white/10 bg-black/50 px-4 py-3 text-xs uppercase tracking-[0.22em] text-zinc-400 backdrop-blur">
        <span>{label ?? "Zeusx airframe"}</span>
        <span className="text-cyan-200">Active</span>
      </div>
    </div>
  );
}
