"use client";

type DashboardFiltersProps = {
  active: string;
  onChange: (value: string) => void;
};

const filters = ["7 días", "30 días", "Mensual"];

export function DashboardFilters({ active, onChange }: DashboardFiltersProps) {
  return (
    <div className="inline-grid grid-cols-3 rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-1 shadow-sm">
      {filters.map((filter) => (
        <button
          key={filter}
          type="button"
          onClick={() => onChange(filter)}
          className={`rounded-xl px-3 py-2 text-xs font-black transition ${
            active === filter
              ? "bg-[var(--color-accent)] text-white"
              : "text-[var(--color-muted)] hover:text-[var(--color-text)]"
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
