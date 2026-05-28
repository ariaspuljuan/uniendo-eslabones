import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] bg-[var(--color-bg-soft)] text-[var(--color-muted)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex">
            <Image
              src="/images/logo_full_uniendo_eslabones.webp"
              alt="Uniendo Eslabones"
              width={559}
              height={224}
              className="h-16 w-auto"
            />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-[var(--color-muted)]">
            Una vitrina digital para conectar la cadena productiva del caucho
            natural colombiano: productos, gremios, informacion y oportunidades.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-wide text-[var(--color-text)]">
            Plataforma
          </h2>
          <nav className="mt-4 grid gap-3 text-sm">
            <Link href="/productos" className="hover:text-[var(--color-accent-strong)]">
              Productos
            </Link>
            <Link href="/gremios" className="hover:text-[var(--color-accent-strong)]">
              Gremios
            </Link>
            <Link href="/noticias" className="hover:text-[var(--color-accent-strong)]">
              Noticias
            </Link>
            <Link href="/dashboard" className="hover:text-[var(--color-accent-strong)]">
              Indicadores
            </Link>
            <Link href="/admin" className="hover:text-[var(--color-accent-strong)]">
              Admin
            </Link>
          </nav>
        </div>

        <div>
          <h2 className="text-sm font-black uppercase tracking-wide text-[var(--color-text)]">
            Contacto
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
            Colombia
            <br />
            info@uniendoeslabones.co
          </p>
        </div>
      </div>
      <div className="border-t border-[color:var(--color-border)] px-6 py-4 text-center text-xs text-[var(--color-muted)]">
        2026 Uniendo Eslabones. Todos los derechos reservados.
      </div>
    </footer>
  );
}
