const stages = [
  {
    title: "Cultivo",
    text: "Origen productivo, territorios y calidad del látex.",
  },
  {
    title: "Beneficio",
    text: "Procesos, buenas prácticas y trazabilidad.",
  },
  {
    title: "Transformación",
    text: "Industria, prototipos y productos terminados.",
  },
  {
    title: "Mercado",
    text: "Compradores, oportunidades y circulación comercial.",
  },
];

const highlights = [
  ["Productores", "Visibilidad territorial y oferta organizada."],
  ["Compradores", "Búsqueda rápida por producto, región y proveedor."],
  ["Gremios", "Información sectorial lista para actualizarse."],
];

export function ImpactSection() {
  return (
    <section className="bg-[var(--color-bg-soft)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
              Cadena viva
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[var(--color-text)] md:text-6xl">
              Una lectura rápida del ecosistema
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
              El usuario entiende en segundos dónde está el valor: origen,
              transformación, aliados, noticias y mercado.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {stages.map((stage, index) => (
              <article
                key={stage.title}
                className="relative overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="absolute -right-5 -top-6 text-8xl font-black text-[var(--color-accent-soft)]">
                  {index + 1}
                </span>
                <div className="relative">
                  <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--color-warning)] text-lg font-black text-[#13233f]">
                    {index + 1}
                  </span>
                  <h3 className="text-xl font-black text-[var(--color-text)]">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                    {stage.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {highlights.map(([title, text]) => (
            <article
              key={title}
              className="rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <h3 className="text-xl font-black text-[var(--color-text)]">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
