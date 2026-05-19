import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Gremios", href: "/gremios" },
  { label: "Noticias", href: "/noticias" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_88%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex min-h-24 max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo_full_uniendo_eslabones.webp"
            alt="Uniendo Eslabones"
            width={300}
            height={120}
            priority
            className="h-16 w-auto"
          />
        </Link>

        <nav className="order-3 flex w-full gap-5 overflow-x-auto text-nowrap md:order-none md:w-auto md:overflow-visible">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-bold text-[var(--color-muted)] transition hover:text-[var(--color-text)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/productos"
            className="rounded-md bg-[var(--color-accent)] px-4 py-3 text-sm font-black text-white shadow-lg shadow-emerald-950/20 transition hover:bg-[var(--color-accent-strong)]"
          >
            Explorar
          </Link>
        </div>
      </div>
    </header>
  );
}
