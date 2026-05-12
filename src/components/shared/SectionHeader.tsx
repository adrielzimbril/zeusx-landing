type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={`relative border-b border-white/10 pb-8 ${
        centered
          ? "mx-auto max-w-3xl text-center"
          : "grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
      }`}
    >
      <div>
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.34em] text-cyan-300">
          {eyebrow}
        </p>
        <h2 className="max-w-4xl text-4xl font-normal leading-[0.95] tracking-tight text-white sm:text-6xl">
          {title}
        </h2>
      </div>
      {body ? (
        <p
          className={`text-sm leading-7 text-zinc-400 ${
            centered ? "mx-auto mt-5 max-w-2xl" : "max-w-xl lg:justify-self-end"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
