import { SourceBadge } from "@/components/dashboard/SourceBadge";

type IndicatorCardProps = {
  label: string;
  value: string;
  meta: string;
  source: string;
  variation?: number;
  accent?: "blue" | "green" | "yellow";
};

const accents = {
  blue: "from-[#3365bb] to-[#73a7ff]",
  green: "from-[#5dc511] to-[#a7e95f]",
  yellow: "from-[#ffb500] to-[#ffe08a]",
};

export function IndicatorCard({
  label,
  value,
  meta,
  source,
  variation,
  accent = "blue",
}: IndicatorCardProps) {
  const isPositive = variation === undefined || variation >= 0;

  return (
    <article className="relative overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
      <div
        className={`absolute right-0 top-0 h-24 w-24 rounded-bl-[56px] bg-gradient-to-br ${accents[accent]} opacity-20`}
      />
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--color-muted)]">
            {label}
          </p>
          {variation !== undefined ? (
            <span
              className={`rounded-full px-2.5 py-1 text-xs font-black ${
                isPositive
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-rose-100 text-rose-700"
              }`}
            >
              {isPositive ? "+" : ""}
              {variation.toFixed(2)}%
            </span>
          ) : null}
        </div>
        <strong className="mt-4 block text-3xl font-black tracking-tight text-[var(--color-text)]">
          {value}
        </strong>
        <p className="mt-2 text-sm font-bold text-[var(--color-muted)]">{meta}</p>
        <div className="mt-5">
          <SourceBadge source={source} />
        </div>
      </div>
    </article>
  );
}
