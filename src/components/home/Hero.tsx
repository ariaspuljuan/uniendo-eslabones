import Link from "next/link";
import { HeroCarousel } from "@/components/home/HeroCarousel";

const metrics = [
  ["4", "lineas de producto"],
  ["3", "rutas de informacion"],
  ["24/7", "vitrina sectorial"],
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-bg)]">
      <HeroCarousel />
      <div className="hero-overlay absolute inset-0 -z-20" />
      <div className="hero-bottom-fade absolute inset-x-0 bottom-0 -z-20 h-44" />

      <div className="pointer-events-none absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-[var(--color-warning)]/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-28 right-28 -z-10 h-52 w-52 rounded-full bg-[var(--color-highlight)]/25 blur-3xl" />

      <div className="mx-auto flex min-h-[820px] max-w-7xl items-center px-6 py-20">
        <div className="max-w-4xl">
          <div className="mb-6 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
            <span className="rounded-full bg-[var(--color-accent-soft)] px-4 py-2 backdrop-blur">
              Plataforma sectorial
            </span>
            <span className="rounded-full bg-[var(--color-warning)] px-4 py-2 text-[#13233f]">
              Industria + naturaleza
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.96] tracking-tight text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.62)] sm:text-6xl lg:text-7xl">
            Uniendo cada eslabón de la cadena del{" "}
            <span className="text-[var(--color-highlight)]">
              caucho natural
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white drop-shadow-[0_5px_16px_rgba(0,0,0,0.62)] sm:text-xl">
            Una plataforma viva para conectar productos, gremios, noticias,
            regiones y oportunidades en un solo flujo de informacion sectorial.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/productos"
              className="rounded-md bg-[var(--color-accent)] px-7 py-4 text-sm font-black uppercase tracking-wide text-white shadow-xl transition hover:bg-[var(--color-accent-strong)]"
            >
              Explorar cadena productiva
            </Link>
          </div>

          <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {metrics.map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-[color:var(--color-border)] bg-[var(--color-surface)]/85 p-5 shadow-[var(--shadow-card)] backdrop-blur"
              >
                <strong className="block text-3xl font-black text-[var(--color-accent)]">
                  {value}
                </strong>
                <span className="mt-1 block text-sm font-bold text-[var(--color-muted)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
