import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export function FeaturedProducts() {
  return (
    <section className="bg-[var(--color-bg)] py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-[var(--color-accent-strong)]">
              Catálogo
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[var(--color-text)] sm:text-4xl md:text-5xl">
              Productos en vitrina
            </h2>
          </div>
          <Link
            href="/productos"
            className="w-fit rounded-md border border-[color:var(--color-border)] bg-[var(--color-surface)] px-5 py-3 text-sm font-black uppercase tracking-wide text-[var(--color-text)] transition hover:bg-[var(--color-accent-soft)]"
          >
            Ver todo
          </Link>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/productos/${product.slug}`}
              className="group flex h-full min-h-[500px] flex-col overflow-hidden rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-1 hover:shadow-xl lg:min-h-[560px]"
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
                <span className="absolute left-4 top-4 rounded-full bg-[rgba(10,17,16,.78)] px-3 py-1 text-xs font-black uppercase text-white backdrop-blur">
                  {product.isNaturalRubber ? "Natural" : "Reciclado"}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-black text-[var(--color-text)]">
                  {product.name}
                </h3>
                <p className="mt-2 line-clamp-4 flex-1 text-sm leading-6 text-[var(--color-muted)]">
                  {product.shortDescription}
                </p>
                <p className="mt-4 text-sm font-bold text-[var(--color-highlight)]">
                  {product.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
