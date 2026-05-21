import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

const categories = ["Todos", "Natural", "Industrial", "Asociaciones"];

export default function ProductosPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="page-hero-gradient border-b border-[color:var(--color-border)] px-5 py-24 sm:py-20">
        <div className="mx-auto max-w-7xl sm:px-6">
          <span className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
            Catalogo sectorial
          </span>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl md:text-7xl">
            Productos que mueven la cadena del caucho.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            Una vitrina visual para presentar referencias, proveedores,
            ubicacion y capacidades productivas del sector.
          </p>

          <div className="mt-9 flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <span
                key={category}
                className="rounded-full border border-[color:var(--color-border)] bg-[var(--color-surface)] px-5 py-2 text-sm font-bold text-[var(--color-text)]"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/productos/${product.slug}`}
              className="group flex h-full min-h-[520px] flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] transition hover:-translate-y-1 lg:min-h-[620px]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={560}
                  height={700}
                  className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <div className="image-card-overlay absolute inset-0" />
                <span className="absolute left-4 top-4 rounded-full bg-[var(--color-warning)] px-3 py-1 text-xs font-black uppercase text-[#13233f]">
                  {product.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-xs font-black uppercase tracking-wide text-[var(--color-highlight)]">
                  {product.provider}
                </p>
                <h2 className="mt-2 text-xl font-black text-[var(--color-text)]">
                  {product.name}
                </h2>
                <p className="mt-3 line-clamp-5 flex-1 text-sm leading-6 text-[var(--color-muted)]">
                  {product.shortDescription}
                </p>
                <div className="mt-5 border-t border-[color:var(--color-border)] pt-4">
                  <p className="text-sm font-bold text-[var(--color-text)]">
                    {product.location}
                  </p>
                  <span className="mt-3 inline-flex text-sm font-black text-[var(--color-accent)]">
                    Ver detalle -&gt;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
