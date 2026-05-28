"use client";

import type { IndicatorHistoryPoint } from "@/types/indicators";

type SeriesKey = "trm" | "tsr20" | "latex" | "smr20" | "str20";

type RubberChartProps = {
  title: string;
  history: IndicatorHistoryPoint[];
  series: Array<{
    key: SeriesKey;
    label: string;
    color: string;
  }>;
};

function buildPath(values: number[], width: number, height: number) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const step = width / Math.max(values.length - 1, 1);

  return values
    .map((value, index) => {
      const x = index * step;
      const y = height - ((value - min) / range) * height;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

export function RubberChart({ title, history, series }: RubberChartProps) {
  const width = 720;
  const height = 260;

  return (
    <article className="rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
        <div>
          <h2 className="text-2xl font-black">{title}</h2>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Tendencia con datos mock listos para reemplazo por API.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {series.map((item) => (
            <span
              key={item.key}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-bold text-[var(--color-muted)]"
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              {item.label}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl bg-[linear-gradient(180deg,var(--color-surface-2),transparent)] p-3">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          role="img"
          aria-label={title}
          className="h-64 w-full"
          preserveAspectRatio="none"
        >
          {[0, 1, 2, 3].map((line) => (
            <line
              key={line}
              x1="0"
              x2={width}
              y1={(height / 4) * line}
              y2={(height / 4) * line}
              stroke="currentColor"
              className="text-[var(--color-border)]"
              strokeWidth="1"
            />
          ))}
          {series.map((item) => (
            <path
              key={item.key}
              d={buildPath(
                history.map((point) => point[item.key]),
                width,
                height,
              )}
              fill="none"
              stroke={item.color}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="5"
            />
          ))}
        </svg>
      </div>
    </article>
  );
}
