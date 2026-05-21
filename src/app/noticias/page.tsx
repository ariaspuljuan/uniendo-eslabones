import Image from "next/image";
import Link from "next/link";
import { newsItems } from "@/data/news";
import { NewsBoard } from "@/components/news/NewsBoard";

export default function NoticiasPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="relative isolate overflow-hidden border-b border-[color:var(--color-border)] px-5 pb-14 pt-28 sm:pb-20 sm:pt-32">
        <Image
          src="/images/news/banner-noticias.svg"
          alt="Banner del centro de noticias del caucho natural"
          width={1920}
          height={720}
          priority
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(7,20,38,.84)_0%,rgba(7,20,38,.62)_50%,rgba(7,20,38,.24)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />

        <div className="mx-auto grid max-w-7xl gap-8 sm:px-6 lg:grid-cols-[1fr_.75fr] lg:items-end">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-warning)] drop-shadow-[0_3px_12px_rgba(0,0,0,.55)]">
              Centro de noticias
            </span>
            <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white drop-shadow-[0_10px_28px_rgba(0,0,0,.72)] sm:text-5xl md:text-7xl">
              Noticias, anuncios y oportunidades del caucho natural.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white drop-shadow-[0_6px_18px_rgba(0,0,0,.72)]">
              Un espacio mixto para conectar la actualidad del sector con
              promociones, lanzamientos y mensajes comerciales relevantes.
            </p>
          </div>

          <aside className="rounded-3xl border border-white/20 bg-white/90 p-6 shadow-[var(--shadow-card)] backdrop-blur">
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
