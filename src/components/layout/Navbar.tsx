"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/productos" },
  { label: "Aliados", href: "/gremios" },
  { label: "Noticias", href: "/noticias" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 40);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-[color:var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_92%,transparent)] shadow-lg shadow-blue-950/10 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
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
              className={`text-sm font-bold transition ${
                isScrolled
                  ? "text-[var(--color-muted)] hover:text-[var(--color-text)]"
                  : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)] hover:text-[var(--color-warning)]"
              }`}
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
