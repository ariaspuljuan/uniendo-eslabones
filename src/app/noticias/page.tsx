const news = [
  {
    title: "Convocatorias y oportunidades",
    tag: "Sector",
    text: "Espacio para publicar programas, recursos y anuncios relevantes para productores y empresas.",
  },
  {
    title: "Innovacion en caucho natural",
    tag: "Industria",
    text: "Historias sobre nuevos usos, procesos, productos y tecnologias de transformacion.",
  },
  {
    title: "Eventos y agenda gremial",
    tag: "Agenda",
    text: "Calendario editorial para encuentros, ferias, ruedas de negocio y actividades regionales.",
  },
];

export default function NoticiasPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="page-hero-gradient border-b border-[color:var(--color-border)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
            Actualidad
          </span>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Noticias para mantener vivo el ecosistema.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            Un espacio editorial para novedades, eventos, convocatorias e
            historias que impulsen la conversacion del sector.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {news.map((item) => (
            <article
              key={item.title}
              className="flex min-h-[310px] flex-col rounded-xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-card)]"
            >
              <span className="w-fit rounded-full bg-[var(--color-warning)] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#13233f]">
                {item.tag}
              </span>
              <h2 className="mt-6 text-2xl font-black text-[var(--color-text)]">
                {item.title}
              </h2>
              <p className="mt-4 flex-1 leading-7 text-[var(--color-muted)]">
                {item.text}
              </p>
              <span className="mt-6 text-sm font-black uppercase tracking-wide text-[var(--color-accent-strong)]">
                Proximamente
              </span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
