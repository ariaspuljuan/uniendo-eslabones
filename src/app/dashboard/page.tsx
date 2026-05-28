import { DashboardClient } from "@/components/dashboard/DashboardClient";

export const metadata = {
  title: "Dashboard de Indicadores del Caucho Natural | Uniendo Eslabones",
  description:
    "Bitácora de precios, mercado y referencias estratégicas para la cadena del caucho colombiano.",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-soft)] text-[var(--color-text)]">
      <section className="relative isolate overflow-hidden px-5 pb-12 pt-28 sm:pt-32">
        <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_16%_12%,rgba(93,197,17,.22),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(51,101,187,.22),transparent_28%),linear-gradient(135deg,var(--color-bg),var(--color-bg-soft))]" />
        <div className="absolute inset-x-0 bottom-0 -z-20 h-28 bg-gradient-to-t from-[var(--color-bg-soft)] to-transparent" />

        <div className="mx-auto max-w-7xl sm:px-6">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-[var(--color-warning)] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#13233f]">
              Inteligencia sectorial
            </span>
            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
              Dashboard de Indicadores del Caucho Natural
            </h1>
            <p className="mt-5 max-w-3xl text-lg font-medium leading-8 text-[var(--color-muted)]">
              Bitácora de precios, mercado y referencias estratégicas para la
              cadena del caucho colombiano.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <HeroPill label="TRM" value="USD/COP" />
            <HeroPill label="Referencias" value="TSR20, Látex, SMR20" />
            <HeroPill label="Uso" value="Decisiones comerciales" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6">
        <DashboardClient />
      </section>
    </main>
  );
}

function HeroPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-3xl border border-[color:var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_86%,transparent)] p-4 shadow-[var(--shadow-card)] backdrop-blur-xl">
      <p className="text-xs font-black uppercase tracking-wide text-[var(--color-accent)]">
        {label}
      </p>
      <p className="mt-1 font-black">{value}</p>
    </div>
  );
}
