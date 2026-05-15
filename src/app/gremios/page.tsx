const allies = [
  {
    name: "Asociaciones productoras",
    text: "Organizaciones que agrupan productores, transformadores y liderazgos regionales.",
  },
  {
    name: "Instituciones tecnicas",
    text: "Entidades que apoyan transferencia de conocimiento, asistencia tecnica y calidad.",
  },
  {
    name: "Industria transformadora",
    text: "Empresas que convierten materia prima en soluciones para mercados finales.",
  },
];

export default function GremiosPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="page-hero-gradient border-b border-[color:var(--color-border)] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <span className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
            Red sectorial
          </span>
          <h1 className="mt-4 max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Gremios y aliados para conectar capacidades.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            Esta seccion queda preparada para mostrar perfiles, regiones,
            servicios, contactos y proyectos de los actores clave.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-3">
          {allies.map((ally) => (
            <article
              key={ally.name}
              className="min-h-[260px] rounded-xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-7 shadow-[var(--shadow-card)]"
            >
              <span className="text-sm font-black uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
                Aliado
              </span>
              <h2 className="mt-5 text-2xl font-black text-[var(--color-text)]">
                {ally.name}
              </h2>
              <p className="mt-4 leading-7 text-[var(--color-muted)]">
                {ally.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
