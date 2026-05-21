"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  {
    label: "Inicio",
    href: "/",
    icon: (
      <path d="M4 11.5 12 5l8 6.5V20h-5v-5H9v5H4v-8.5Z" />
    ),
  },
  {
    label: "Productos",
    href: "/productos",
    icon: <path d="M4 7h16v13H4V7Zm3-3h10l3 3H4l3-3Zm2 8h6" />,
  },
  {
    label: "Aliados",
    href: "/gremios",
    icon: (
      <path d="M12 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM5 14a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm14 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-9-4-3 5m7-5 3 5M8 17h8" />
    ),
  },
  {
    label: "Noticias",
    href: "/noticias",
    icon: <path d="M5 5h14v14H5V5Zm3 4h8M8 12h8M8 15h5" />,
  },
];

export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[color:var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_94%,transparent)] px-3 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-2 shadow-[0_-18px_40px_rgba(19,35,63,0.12)] backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-4 gap-2">
        {tabs.map((tab) => {
          const isActive =
            tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex min-h-14 flex-col items-center justify-center rounded-2xl text-[11px] font-black transition ${
                isActive
                  ? "bg-[var(--color-accent)] text-white shadow-lg shadow-blue-950/20"
                  : "text-[var(--color-muted)]"
              }`}
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="mb-1 h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                {tab.icon}
              </svg>
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
