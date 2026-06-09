import Image from "next/image";
import Link from "next/link";
import { organizations } from "@/data/organizations";

const typeLabels = {
  investigacion: "Investigación",
  financiero: "Financiero",
  gremial: "Gremial",
  sostenibilidad: "Sostenibilidad",
  educacion: "Educación",
  productivo: "Productivo",
};

export default function GremiosPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="relative isolate overflow-hidden border-b border-[color:var(--color-border)] px-5 pb-14 pt-28 sm:pb-20 sm:pt-32">
        <Image
          src="/images/allies/banner_aliados_page.png"
          alt="Banner de aliados de Uniendo Eslabones"
          width={1920}
          height={720}
          priority
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(7,20,38,.86)_0%,rgba(7,20,38,.58)_52%,rgba(7,20,38,.22)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />

        <div className="mx-auto max-w-7xl sm:px-6">
          <span className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-warning)] drop-shadow-[0_3px_12px_rgba(0,0,0,.55)]">
            Red de aliados
          </span>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white drop-shadow-[0_10px_28px_rgba(0,0,0,.72)] sm:text-5xl md:text-7xl">
            Aliados que conectan conocimiento, financiación y territorio.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white drop-shadow-[0_6px_18px_rgba(0,0,0,.72)]">
            Un mapa compacto del ecosistema que impulsa el caucho natural:
            gremios, academia, financiación, sostenibilidad y aliados
            productivos.
          </p>

          <div className="mt-9 grid max-w-3xl grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white/90 p-4 text-[#13233f] shadow-lg">
              <strong className="block text-3xl font-black">
                {organizations.length}
              </strong>
              <span className="text-xs font-bold uppercase">Aliados</span>
            </div>
            <div className="rounded-2xl bg-white/90 p-4 text-[#13233f] shadow-lg">
              <strong className="block text-3xl font-black">6</strong>
              <span className="text-xs font-bold uppercase">Tipos</span>
            </div>
            <div className="rounded-2xl bg-white/90 p-4 text-[#13233f] shadow-lg">
              <strong className="block text-3xl font-black">360</strong>
              <span className="text-xs font-bold uppercase">Visión</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
                Directorio compacto
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                Explora aliados sin perder contexto
              </h2>
            </div>
            <p className="max-w-xl leading-7 text-[var(--color-muted)]">
              Cada fila resume lo esencial. Al entrar al perfil puedes ampliar
              descripción, focos, imágenes y datos de contacto.
            </p>
          </div>

          <div className="grid gap-4">
            {organizations.map((ally) => (
              <Link
                key={ally.id}
                href={`/gremios/${ally.slug}`}
                className="group grid gap-4 rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:shadow-xl md:grid-cols-[92px_1fr_auto]"
              >
                <div className="flex items-center gap-4 md:block">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-[var(--color-surface-2)]">
                    <Image
                      src={ally.logo}
                      alt={`Logo de ${ally.name}`}
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                  <div className="md:hidden">
                    <h3 className="text-xl font-black">{ally.name}</h3>
                    <p className="text-xs font-black uppercase tracking-wide text-[var(--color-highlight)]">
                      {typeLabels[ally.type]}
                    </p>
                  </div>
                </div>

                <div className="min-w-0">
                  <div className="hidden items-center gap-3 md:flex">
                    <h3 className="text-2xl font-black">{ally.name}</h3>
                    <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-black uppercase text-[var(--color-accent-strong)]">
                      {typeLabels[ally.type]}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 leading-7 text-[var(--color-muted)]">
                    {ally.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {ally.focusAreas.slice(0, 3).map((area) => (
                      <span
                        key={area}
                        className="rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-bold text-[var(--color-muted)]"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end border-t border-[color:var(--color-border)] pt-4 md:border-t-0 md:pt-0">
                  <span className="rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-black text-white">
                    Ver perfil
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
