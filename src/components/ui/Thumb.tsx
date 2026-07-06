// A styled placeholder used in place of project screenshots. Swap for
// <Image> once you add real images under /public/projects.
export function Thumb({
  accent,
  label,
  className = "",
}: {
  accent: string;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative grid place-items-center overflow-hidden rounded-xl border border-line ${className}`}
      style={{
        background: `radial-gradient(120% 120% at 20% 10%, ${accent}33, transparent 60%), var(--surface)`,
      }}
    >
      <span
        className="font-display text-2xl font-bold opacity-80"
        style={{ color: accent }}
      >
        {label}
      </span>
      <div className="pointer-events-none absolute inset-0 opacity-[0.4] mix-blend-overlay" />
    </div>
  );
}
