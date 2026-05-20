"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { NewsItem } from "@/types";

const filters = [
  { label: "Todo", value: "todo", icon: "✦" },
  { label: "Noticias", value: "noticia", icon: "N" },
  { label: "Anuncios", value: "anuncio", icon: "!" },
  { label: "Productos", value: "productos", icon: "$" },
  { label: "Eventos", value: "eventos", icon: "E" },
  { label: "Convocatorias", value: "convocatorias", icon: "C" },
];

type NewsBoardProps = {
  items: NewsItem[];
};

export function NewsBoard({ items }: NewsBoardProps) {
  const [activeFilter, setActiveFilter] = useState("todo");

  const filteredItems = useMemo(() => {
    if (activeFilter === "todo") {
      return items;
    }

    return items.filter(
      (item) => item.type === activeFilter || item.category === activeFilter,
    );
  }, [activeFilter, items]);

  const featured = filteredItems[0];
  const rest = filteredItems.slice(1);

  return (
    <section className="bg-[var(--color-bg)] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex gap-3 overflow-x-auto pb-3">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-black transition ${
                activeFilter === filter.value
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                  : "border-[color:var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:bg-[var(--color-accent-soft)]"
              }`}
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-xs">
                {filter.icon}
              </span>
              {filter.label}
            </button>
          ))}
        </div>

        {featured ? (
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_.85fr]">
            <article className="relative min-h-[460px] overflow-hidden rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
              <Image
                src={featured.banner}
                alt={featured.title}
                width={1600}
                height={720}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,38,.82),rgba(7,20,38,.48),rgba(7,20,38,.12))]" />
              <div className="relative flex min-h-[460px] max-w-2xl flex-col justify-end p-8 text-white">
                <span className="mb-4 w-fit rounded-full bg-[var(--color-warning)] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#13233f]">
                  {featured.type === "anuncio" ? "Anuncio destacado" : "Noticia destacada"}
                </span>
                <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-white/90">
                  {featured.summary}
                </p>
                <NewsAction item={featured} />
              </div>
            </article>

            <div className="grid gap-5">
              {rest.slice(0, 2).map((item) => (
                <NewsCompactCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-8 text-center">
            <p className="font-bold text-[var(--color-muted)]">
              No hay publicaciones para este filtro.
            </p>
          </div>
        )}

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {rest.slice(2).map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsCompactCard({ item }: { item: NewsItem }) {
  return (
    <article className="grid min-h-[220px] grid-cols-[140px_1fr] overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
      <div className="relative">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>
      <div className="flex flex-col p-5">
        <NewsBadge item={item} />
        <h3 className="mt-4 text-xl font-black text-[var(--color-text)]">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-6 text-[var(--color-muted)]">
          {item.summary}
        </p>
        <NewsAction item={item} compact />
      </div>
    </article>
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="flex min-h-[460px] flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
      <div className="relative aspect-[16/10]">
        <Image src={item.image} alt={item.title} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <NewsBadge item={item} />
        <h3 className="mt-4 text-2xl font-black text-[var(--color-text)]">
          {item.title}
        </h3>
        <p className="mt-3 flex-1 leading-7 text-[var(--color-muted)]">
          {item.summary}
        </p>
        <NewsAction item={item} />
      </div>
    </article>
  );
}

function NewsBadge({ item }: { item: NewsItem }) {
  return (
    <span
      className={`w-fit rounded-full px-3 py-1 text-xs font-black uppercase tracking-wide ${
        item.type === "anuncio"
          ? "bg-[var(--color-warning)] text-[#13233f]"
          : "bg-[var(--color-accent)] text-white"
      }`}
    >
      {item.type === "anuncio" ? "Anuncio" : item.category}
    </span>
  );
}

function NewsAction({ item, compact = false }: { item: NewsItem; compact?: boolean }) {
  const isExternal = item.externalUrl.startsWith("http");
  const className = `${
    compact ? "mt-auto pt-4 text-sm" : "mt-6 text-sm"
  } inline-flex w-fit rounded-md bg-[var(--color-accent)] px-5 py-3 font-black uppercase tracking-wide text-white transition hover:bg-[var(--color-accent-strong)]`;

  if (isExternal) {
    return (
      <a href={item.externalUrl} target="_blank" rel="noreferrer" className={className}>
        {item.ctaLabel}
      </a>
    );
  }

  return (
    <Link href={item.externalUrl} className={className}>
      {item.ctaLabel}
    </Link>
  );
}
