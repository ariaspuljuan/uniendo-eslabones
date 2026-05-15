import Image from "next/image";
import Link from "next/link";

const items = [
  {
    title: "Productos destacados",
    text: "Explora referencias listas para conectar proveedores, industrias y compradores.",
    href: "/productos",
    label: "Catalogo",
  },
  {
    title: "Mapa de aliados",
    text: "Agrupa gremios, asociaciones y actores clave de la cadena productiva.",
    href: "/gremios",
    label: "Red sectorial",
  },
  {
    title: "Radar de noticias",
    text: "Publica avances, convocatorias, eventos y contenidos de valor para el sector.",
    href: "/noticias",
    label: "Actualidad",
  },
];

export function QuickAccess() {
  return (
    <section className="bg-[var(--color-bg)] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
              Accesos rapidos
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text)] md:text-5xl">
              Entra directo a lo importante
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[var(--color-muted)]">
            Una portada pensada como plataforma: cada bloque debe llevar a una
            accion clara y a contenido que pueda crecer.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative min-h-[330px] overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]"
            >
              <Image
                src="/images/producto-demo.svg"
                alt=""
                width={560}
                height={320}
                className="absolute inset-0 h-full w-full object-cover opacity-45 transition duration-500 group-hover:scale-105 group-hover:opacity-65"
              />
              <div className="image-card-overlay absolute inset-0" />
              <div className="relative flex h-full min-h-[330px] flex-col justify-end p-6">
                <span className="mb-3 w-fit rounded-full bg-[var(--color-warning)] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#13233f]">
                  {item.label}
                </span>
                <h3 className="text-2xl font-black text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-200">
                  {item.text}
                </p>
                <span className="mt-5 text-sm font-black uppercase tracking-wide text-white">
                  Abrir seccion -&gt;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
