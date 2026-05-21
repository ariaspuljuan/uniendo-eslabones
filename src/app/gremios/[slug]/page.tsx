import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getOrganizationBySlug, organizations } from "@/data/organizations";

type AllyDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getAllyTime(joinedAt: string) {
  const start = new Date(`${joinedAt}T00:00:00`);
  const now = new Date();
  const diffDays = Math.max(
    1,
    Math.floor((now.getTime() - start.getTime()) / 86400000),
  );

  if (diffDays >= 365) {
    const years = Math.floor(diffDays / 365);
    return `${years} ${years === 1 ? "año" : "años"}`;
  }

  if (diffDays >= 30) {
    const months = Math.floor(diffDays / 30);
    return `${months} ${months === 1 ? "mes" : "meses"}`;
  }

  return `${diffDays} días`;
}

export function generateStaticParams() {
  return organizations.map((organization) => ({
    slug: organization.slug,
  }));
}

export async function generateMetadata({ params }: AllyDetailPageProps) {
  const { slug } = await params;
  const organization = getOrganizationBySlug(slug);

  return {
    title: organization
      ? `${organization.name} | Aliados Uniendo Eslabones`
      : "Aliado no encontrado",
    description: organization?.description,
  };
}

export default async function AllyDetailPage({ params }: AllyDetailPageProps) {
  const { slug } = await params;
  const ally = getOrganizationBySlug(slug);

  if (!ally) {
    notFound();
  }

  return (
    <main className="bg-[var(--color-bg-soft)] text-[var(--color-text)]">
      <section className="relative isolate overflow-hidden border-b border-[color:var(--color-border)] px-5 pb-12 pt-28 sm:pt-32">
        <Image
          src={ally.banner}
          alt={`Banner de ${ally.name}`}
          width={1920}
          height={720}
          priority
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(7,20,38,.86)_0%,rgba(7,20,38,.56)_52%,rgba(7,20,38,.2)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-t from-[var(--color-bg-soft)] to-transparent" />

        <div className="mx-auto max-w-7xl sm:px-6">
          <Link
            href="/gremios"
            className="mb-8 inline-flex rounded-full bg-white/90 px-4 py-2 text-sm font-black text-[var(--color-accent)] shadow-lg"
          >
            &lt;- Volver a aliados
          </Link>

          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-warning)]">
                Perfil de aliado
              </span>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white drop-shadow-[0_10px_28px_rgba(0,0,0,.72)] sm:text-5xl md:text-7xl">
                {ally.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-white">
                {ally.description}
              </p>
            </div>

            <div className="w-fit rounded-3xl border border-white/20 bg-white/95 p-5 text-[#13233f] shadow-[var(--shadow-card)]">
              <Image
                src={ally.logo}
                alt={`Logo de ${ally.name}`}
                width={160}
                height={160}
                className="h-24 w-24 rounded-2xl object-contain"
              />
              <p className="mt-4 text-xs font-black uppercase tracking-wide text-[var(--color-muted)]">
                Como aliado
              </p>
              <p className="text-2xl font-black text-[var(--color-accent)]">
                {getAllyTime(ally.joinedAt)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-6 lg:grid-cols-[.9fr_1.1fr]">
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <article className="rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-black">Información clave</h2>
            <div className="mt-5 grid gap-3">
              <Info label="Ciudad / alcance" value={ally.city} />
              <Info label="Categoría" value={ally.category} />
              <Info label="Tipo de aliado" value={ally.type} />
              <Info label="Fecha de vinculación" value={ally.joinedAt} />
            </div>
          </article>

          <article className="rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-black">Contacto</h2>
            <div className="mt-5 space-y-3 text-sm text-[var(--color-muted)]">
              {ally.website ? (
                <p>
                  <strong>Sitio web:</strong>{" "}
                  <a
                    href={ally.website}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-[var(--color-accent)]"
                  >
                    Visitar sitio
                  </a>
                </p>
              ) : null}
              {ally.email ? (
                <p>
                  <strong>Correo:</strong> {ally.email}
                </p>
              ) : null}
              {ally.phone ? (
                <p>
                  <strong>Teléfono:</strong> {ally.phone}
                </p>
              ) : null}
              {!ally.website && !ally.email && !ally.phone ? (
                <p>Contacto pendiente por registrar.</p>
              ) : null}
            </div>
          </article>
        </aside>

        <div className="space-y-6">
          <article className="rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
            <h2 className="text-3xl font-black">Descripción del aliado</h2>
            <p className="mt-4 text-lg leading-8 text-[var(--color-muted)]">
              {ally.longDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {ally.focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-bold text-[var(--color-accent-strong)]"
                >
                  {area}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
            <h2 className="text-3xl font-black">Columna visual</h2>
            <p className="mt-3 leading-7 text-[var(--color-muted)]">
              Espacio para imágenes institucionales, proyectos, eventos,
              laboratorios, territorios o piezas gráficas del aliado.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {ally.gallery.map((image, index) => (
                <div
                  key={image}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--color-surface-2)]"
                >
                  <Image
                    src={image}
                    alt={`${ally.name} imagen ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-[var(--color-surface-2)] p-4">
      <p className="text-xs font-black uppercase tracking-wide text-[var(--color-accent)]">
        {label}
      </p>
      <p className="mt-1 font-bold capitalize">{value}</p>
    </div>
  );
}
