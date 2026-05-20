import Link from "next/link";
import { newsItems } from "@/data/news";
import { NewsBoard } from "@/components/news/NewsBoard";

export default function NoticiasPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="page-hero-gradient border-b border-[color:var(--color-border)] py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1fr_.75fr] lg:items-end">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
              Centro de noticias
            </span>
            <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
              Noticias, anuncios y oportunidades del caucho natural.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              Un espacio mixto para conectar la actualidad del sector con
              promociones, lanzamientos y mensajes comerciales relevantes.
            </p>
          </div>

          <aside className="rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-warning)] text-2xl font-black text-[#13233f]">
                N
              </span>
              <div>
                <h2 className="text-xl font-black">Fuente aliada</h2>
                <p className="text-sm text-[var(--color-muted)]">
                  Amplia las noticias oficiales en Confecaucho.
                </p>
              </div>
            </div>
            <Link
              href="https://confecaucho.com/"
              target="_blank"
              className="mt-6 inline-flex rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-black uppercase tracking-wide text-white"
            >
              Ir a Confecaucho
            </Link>
          </aside>
        </div>
      </section>

      <NewsBoard items={newsItems} />
    </main>
  );
}
