import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

const categories = ["Todos", "Natural", "Industrial", "Asociaciones"];

export default function ProductosPage() {
  return (
    <main className="bg-[var(--color-bg)] text-[var(--color-text)]">
      <section className="relative isolate overflow-hidden border-b border-[color:var(--color-border)] px-5 pb-14 pt-28 sm:pb-20 sm:pt-32">
        <Image
          src="/images/products/banner_productos_page.png"
          alt="Banner del catálogo sectorial de productos de caucho"
          width={1920}
          height={720}
          priority
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(7,20,38,.82)_0%,rgba(7,20,38,.58)_48%,rgba(7,20,38,.22)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />

        <div className="mx-auto max-w-7xl sm:px-6">
          <span className="text-sm font-black uppercase tracking-[0.22em] text-[var(--color-warning)] drop-shadow-[0_3px_12px_rgba(0,0,0,.55)]">
            Catálogo sectorial
          </span>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-white drop-shadow-[0_10px_28px_rgba(0,0,0,.72)] sm:text-5xl md:text-7xl">
            Productos que mueven la cadena del caucho.
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white drop-shadow-[0_6px_18px_rgba(0,0,0,.72)]">
            Una vitrina visual para presentar referencias, proveedores,
            ubicación y capacidades productivas del sector.
          </p>

          <div className="mt-9 flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <span
                key={category}
                className="shrink-0 rounded-full border border-white/25 bg-white/90 px-5 py-2 text-sm font-black text-[#13233f] shadow-lg backdrop-blur"
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
