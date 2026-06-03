import Link from "next/link";

const items = [
  {
    title: "Oferta productiva",
    text: "Productos, proveedores, regiones y capacidades listas para ser consultadas por compradores y aliados.",
    href: "/productos",
    label: "Catálogo",
    color: "bg-[var(--color-accent)]",
    icon: (
      <path d="M4 8h16v10H4V8Zm3-4h10l3 4H4l3-4Zm2 8h6M9 15h4" />
    ),
  },
  {
    title: "Red de aliados",
    text: "Gremios, asociaciones, instituciones y transformadores conectados en un mapa sectorial.",
    href: "/gremios",
    label: "Red",
    color: "bg-[var(--color-highlight)]",
    icon: (
      <path d="M12 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-7 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm14 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-9-4-3 5m7-5 3 5M8 17h8" />
    ),
  },
  {
    title: "Radar de información",
    text: "Noticias, convocatorias, tendencias y eventos para mantener activo el flujo de conocimiento.",
    href: "/noticias",
    label: "Noticias",
    color: "bg-[var(--color-warning)]",
    icon: <path d="M5 5h14v14H5V5Zm3 4h8M8 12h8M8 15h5" />,
  },
];

export function QuickAccess() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-bg)] py-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-[var(--color-warning)]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[var(--color-highlight)]/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
              Flujo de información
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text)] md:text-5xl">
              Más conexión entre actores.
            </h2>
          </div>
          <p className="text-base leading-7 text-[var(--color-muted)]">
            El home funciona como tablero inicial: dirige al usuario hacia
            productos, aliados y noticias sin perder energía visual ni claridad.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} text-white shadow-lg`}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    {item.icon}
                  </svg>
                </span>
                <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-black uppercase tracking-wide text-[var(--color-accent-strong)]">
                  {item.label}
                </span>
              </div>

              <h3 className="mt-8 text-2xl font-black text-[var(--color-text)]">
                {item.title}
              </h3>
              <p className="mt-4 min-h-[96px] text-sm leading-6 text-[var(--color-muted)]">
                {item.text}
              </p>
              <span className="mt-6 inline-flex font-black text-[var(--color-accent)]">
                Abrir sección -&gt;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
