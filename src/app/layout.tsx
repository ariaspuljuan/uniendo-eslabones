import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileTabBar } from "@/components/layout/MobileTabBar";

export const metadata: Metadata = {
  title: "Uniendo Eslabones | Caucho natural colombiano",
  description:
    "Plataforma sectorial para conectar productos, aliados, noticias e informacion del caucho natural colombiano.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const themeScript = `
    (function() {
      try {
        var storedTheme = localStorage.getItem('theme');
        var theme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        document.documentElement.dataset.theme = theme;
      } catch (error) {
        document.documentElement.dataset.theme = 'light';
      }
    })();
  `;

  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preload" as="image" href="/images/hero-slide-1.png" />
        <link
          rel="preload"
          as="image"
          href="/images/logo_full_uniendo_eslabones.webp"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-[var(--color-bg)] pb-24 text-[var(--color-text)] md:pb-0">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <MobileTabBar />
      </body>
    </html>
  );
}
