export function SourceBadge({ source }: { source: string }) {
  return (
    <span className="inline-flex rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-black text-[var(--color-accent-strong)]">
      {source}
    </span>
  );
}
