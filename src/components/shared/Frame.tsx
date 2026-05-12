type FrameProps = {
  children: React.ReactNode;
  className?: string;
};

export function Frame({ children, className = "" }: FrameProps) {
  return (
    <div
      className={`framed-panel relative border border-white/10 ${className}`}
    >
      <span className="corner corner-tl" />
      <span className="corner corner-tr" />
      <span className="corner corner-bl" />
      <span className="corner corner-br" />
      {children}
    </div>
  );
}
