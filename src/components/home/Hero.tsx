import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[var(--color-bg)]">
      <Image
        src="/images/hero-demo.svg"
        alt="Cadena productiva del caucho natural colombiano"
        width={1600}
        height={900}
        priority
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
      />
      <div className="hero-overlay absolute inset-0 -z-10" />
      <div className="hero-bottom-fade absolute inset-x-0 bottom-0 -z-10 h-44" />

      <div className="mx-auto flex min-h-[760px] max-w-7xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <div className="mb-6 flex flex-wrap gap-3 text-xs font-black uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
            <span className="rounded-full bg-[var(--color-accent-soft)] px-4 py-2 backdrop-blur">
              Plataforma sectorial
            </span>
            <span className="rounded-full bg-[var(--color-accent-soft)] px-4 py-2 backdrop-blur">
              Caucho natural colombiano
            </span>
          </div>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
            La vitrina digital de la cadena del caucho.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
            Productos, gremios, noticias y oportunidades organizadas en una
            experiencia moderna para visibilizar el potencial del sector.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/productos"
              className="rounded-md bg-[var(--color-accent)] px-6 py-4 text-sm font-black uppercase tracking-wide text-white shadow-xl transition hover:bg-[var(--color-accent-strong)]"
            >
              Ver productos
            </Link>
            <Link
              href="/gremios"
              className="rounded-md border border-[color:var(--color-border)] bg-[var(--color-surface)] px-6 py-4 text-sm font-black uppercase tracking-wide text-[var(--color-text)] shadow-sm transition hover:bg-[var(--color-accent-soft)]"
            >
              Explorar aliados
            </Link>
          </div>

          <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              ["4", "lineas de producto"],
              ["3", "frentes sectoriales"],
              ["24/7", "vitrina disponible"],
            ].map(([value, label]) => (
              <div key={label} className="border-l border-[var(--color-warning)] pl-4">
                <strong className="block text-3xl font-black text-[var(--color-text)]">
                  {value}
                </strong>
                <span className="text-sm text-[var(--color-muted)]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
