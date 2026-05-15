const stages = [
  "Cultivo",
  "Latex",
  "Transformacion",
  "Producto final",
  "Mercado",
];

const highlights = [
  {
    title: "Para productores",
    text: "Visibilidad para asociaciones, oferta productiva y capacidades regionales.",
  },
  {
    title: "Para compradores",
    text: "Una ruta clara para encontrar productos, proveedores y usos del caucho.",
  },
  {
    title: "Para gremios",
    text: "Un espacio para articular informacion, noticias y oportunidades sectoriales.",
  },
];

export function ImpactSection() {
  return (
    <section className="bg-[var(--color-bg-soft)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
              Ecosistema
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-[var(--color-text)] md:text-6xl">
              Todo el recorrido del caucho en una sola plataforma.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
              La pagina queda preparada para crecer como hub sectorial:
              directorio, catalogo, noticias y contenido estrategico.
            </p>
          </div>

          <div className="rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
            <div className="grid gap-3">
              {stages.map((stage, index) => (
                <div
                  key={stage}
                  className="flex items-center justify-between rounded-xl bg-[var(--color-surface-2)] px-5 py-4"
                >
                  <span className="text-sm font-black uppercase tracking-wide text-[var(--color-highlight)]">
                    0{index + 1}
                  </span>
                  <strong className="text-right text-lg font-black text-[var(--color-text)]">
                    {stage}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]"
            >
              <h3 className="text-xl font-black text-[var(--color-text)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
