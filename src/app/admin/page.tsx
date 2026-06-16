import { AdminWorkspace } from "@/components/admin/AdminWorkspace";

export const metadata = {
  title: "Administrador | Uniendo Eslabones",
  description:
    "Módulo de cargue de datos para productos, aliados y noticias de Uniendo Eslabones.",
};

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-soft)] text-[var(--color-text)]">
      <section className="px-5 pb-10 pt-28 sm:pt-32">
        <div className="mx-auto max-w-7xl sm:px-6">
          <span className="inline-flex rounded-full bg-[var(--color-warning)] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#13233f]">
            Panel interno
          </span>
          <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl">
            Administrador de contenido
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--color-muted)]">
            Carga productos, aliados y noticias con una estructura lista para
            conectar después a autenticación, base de datos y publicación real.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-6">
        <AdminWorkspace />
      </section>
    </main>
  );
}
