const blocks = [
  {
    title: "Dólar y precio local",
    text: "Cuando la TRM sube, una referencia internacional estable puede traducirse en mayor valor COP por kilo. El productor debe mirar ambas variables juntas.",
  },
  {
    title: "Mercado internacional",
    text: "El caucho colombiano compite con referencias asiáticas. Cambios en TSR20, látex o SMR20 ayudan a anticipar negociaciones locales.",
  },
  {
    title: "Asia como referencia",
    text: "Malasia, Singapur y otros mercados regionales funcionan como termómetro global para precios, futuros y señales de demanda.",
  },
  {
    title: "Uso comercial",
    text: "Estos datos sirven para preparar conversaciones, revisar tendencias y construir rangos de referencia antes de cerrar acuerdos.",
  },
];

export function MarketSummary() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {blocks.map((block) => (
        <article
          key={block.title}
          className="rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]"
        >
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-accent-soft)] text-[var(--color-accent-strong)]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M4 19V5m0 14h16M8 16l3-4 3 2 4-7" />
            </svg>
          </div>
          <h3 className="text-lg font-black">{block.title}</h3>
          <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
            {block.text}
          </p>
        </article>
      ))}
    </section>
  );
}
