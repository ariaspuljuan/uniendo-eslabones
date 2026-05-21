import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Producto no encontrado | Uniendo Eslabones",
    };
  }

  return {
    title: `${product.name} | ${product.provider}`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const supplier = product.supplier;

  return (
    <main className="bg-[var(--color-bg-soft)] text-[var(--color-text)]">
      <section className="relative overflow-hidden border-b border-[color:var(--color-border)] bg-[var(--color-bg)]">
        <Image
          src={supplier.banner}
          alt={`Banner de ${supplier.name}`}
          width={1600}
          height={420}
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--color-bg)_0%,rgba(255,255,255,.78)_48%,transparent_100%)] dark:bg-[linear-gradient(90deg,var(--color-bg)_0%,rgba(7,20,38,.78)_48%,transparent_100%)]" />

        <div className="relative mx-auto flex min-h-[420px] max-w-7xl flex-col justify-end px-5 pb-10 pt-28 sm:min-h-[360px] sm:px-6 sm:pb-12 sm:pt-32">
          <Link
            href="/productos"
            className="mb-8 w-fit rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-black text-[var(--color-accent)]"
          >
            &lt;- Volver al catalogo
          </Link>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                Detalle de producto
              </span>
              <h1 className="mt-3 max-w-4xl text-3xl font-black tracking-tight sm:text-4xl md:text-6xl">
                {product.name}
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                {product.shortDescription}
              </p>
            </div>

            <div className="flex w-fit items-center gap-4 rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)]">
              <Image
                src={supplier.logo}
                alt={`Logo de ${supplier.name}`}
                width={120}
                height={120}
                className="h-20 w-20 rounded-xl object-contain"
              />
              <div>
                <p className="text-xs font-black uppercase tracking-wide text-[var(--color-highlight)]">
                  Proveedor
                </p>
                <p className="max-w-[220px] text-lg font-black">
                  {supplier.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-6 sm:px-6 sm:py-10 lg:grid-cols-[1.15fr_.85fr]">
        <div className="rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[var(--shadow-card)] sm:p-5">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-[var(--color-surface-2)]">
            <Image
              src={product.gallery[0] ?? product.image}
              alt={product.name}
              width={900}
              height={900}
              className="h-full w-full object-contain p-3 sm:p-6"
            />
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
            {product.gallery.map((image, index) => (
              <div
                key={image}
                className="relative aspect-square overflow-hidden rounded-xl border border-[color:var(--color-border)] bg-[var(--color-surface-2)]"
              >
                <Image
                  src={image}
                  alt={`${product.name} imagen ${index + 1}`}
                  width={240}
                  height={240}
                  className="h-full w-full object-contain p-3"
                />
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
          <section className="rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
            <span className="rounded-full bg-[var(--color-warning)] px-3 py-1 text-xs font-black uppercase text-[#13233f]">
              {product.isNaturalRubber ? "Caucho natural" : "Derivado"}
            </span>
            <h2 className="mt-5 text-3xl font-black">{product.name}</h2>
            <p className="mt-4 leading-7 text-[var(--color-muted)]">
              {product.fullDescription}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="rounded-xl bg-[var(--color-surface-2)] p-4"
                >
                  <p className="text-xs font-black uppercase tracking-wide text-[var(--color-accent)]">
                    {spec.label}
                  </p>
                  <p className="mt-1 font-bold">{spec.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
            <h2 className="text-2xl font-black">Contacto comercial</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              Habla directamente con el proveedor para disponibilidad,
              cantidades, fichas tecnicas o negociacion.
            </p>

            <div className="mt-5 space-y-3 text-sm">
              <p>
                <strong>Vendedor:</strong> {supplier.contact.sellerName}
              </p>
              <p>
                <strong>Cargo:</strong> {supplier.contact.role}
              </p>
              <p>
                <strong>Telefono:</strong> {supplier.contact.phone}
              </p>
              <p>
                <strong>Correo:</strong> {supplier.contact.email}
              </p>
            </div>

            <div className="mt-6 grid gap-3">
              <a
                href={`https://wa.me/${supplier.contact.whatsapp.replace(/\D/g, "")}`}
                className="rounded-2xl bg-[var(--color-highlight)] px-5 py-4 text-center text-sm font-black uppercase text-white shadow-lg sm:rounded-md sm:py-3"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:${supplier.contact.email}`}
                className="rounded-2xl bg-[var(--color-accent)] px-5 py-4 text-center text-sm font-black uppercase text-white shadow-lg sm:rounded-md sm:py-3"
              >
                Enviar correo
              </a>
            </div>
          </section>
        </aside>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-16 sm:px-6 lg:grid-cols-[.85fr_1.15fr]">
        <article className="rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-2xl font-black">Aplicaciones principales</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {product.applications.map((application) => (
              <span
                key={application}
                className="rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-bold text-[var(--color-accent-strong)]"
              >
                {application}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]">
          <h2 className="text-2xl font-black">Empresa proveedora</h2>
          <p className="mt-4 leading-7 text-[var(--color-muted)]">
            {supplier.description}
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-[var(--color-surface-2)] p-4">
              <p className="text-xs font-black uppercase tracking-wide text-[var(--color-accent)]">
                Ubicacion
              </p>
              <p className="mt-1 font-bold">{supplier.city}</p>
            </div>
            <div className="rounded-xl bg-[var(--color-surface-2)] p-4">
              <p className="text-xs font-black uppercase tracking-wide text-[var(--color-accent)]">
                Proveedor
              </p>
              <p className="mt-1 font-bold">{supplier.name}</p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
