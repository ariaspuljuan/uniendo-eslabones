import Image from "next/image";
import Link from "next/link";
import { latestNews } from "@/data/news";

export function LatestNews() {
  return (
    <section className="bg-[var(--color-bg-soft)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
              Últimas publicaciones
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text)] sm:text-4xl md:text-5xl">
              Noticias y anuncios que mueven el sector
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/noticias"
              className="rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-black uppercase tracking-wide text-white"
            >
              Ver noticias
            </Link>
            <Link
              href="https://confecaucho.com/"
              target="_blank"
              className="rounded-md border border-[color:var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-black uppercase tracking-wide text-[var(--color-text)]"
            >
              Confecaucho
            </Link>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {latestNews.map((item) => {
            const isExternal = item.externalUrl.startsWith("http");
            const cardClass =
              "group flex min-h-[390px] flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:shadow-xl sm:min-h-[430px]";
            const content = (
              <>
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide ${
                      item.type === "anuncio"
                        ? "bg-[var(--color-warning)] text-[#13233f]"
                        : "bg-[var(--color-accent)] text-white"
                    }`}
                  >
                    {item.type}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-black uppercase tracking-wide text-[var(--color-highlight)]">
                    {item.source} · {item.date}
                  </p>
                  <h3 className="mt-3 text-xl font-black text-[var(--color-text)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 line-clamp-4 flex-1 text-sm leading-6 text-[var(--color-muted)]">
                    {item.summary}
                  </p>
                  <span className="mt-5 text-sm font-black uppercase tracking-wide text-[var(--color-accent)]">
                    {item.ctaLabel} -&gt;
                  </span>
                </div>
              </>
            );

            if (isExternal) {
              return (
                <a
                  key={item.id}
                  href={item.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cardClass}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link key={item.id} href={item.externalUrl} className={cardClass}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
