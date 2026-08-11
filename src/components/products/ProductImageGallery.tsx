"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProductImageGalleryProps = {
  images: string[];
  productName: string;
};

export function ProductImageGallery({
  images,
  productName,
}: ProductImageGalleryProps) {
  const gallery = images.length > 0 ? images : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const activeImage = gallery[activeIndex];

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isViewerOpen) {
        return;
      }

      if (event.key === "Escape") {
        setIsViewerOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isViewerOpen]);

  function goToPrevious() {
    setActiveIndex((current) =>
      current === 0 ? gallery.length - 1 : current - 1,
    );
  }

  function goToNext() {
    setActiveIndex((current) =>
      current === gallery.length - 1 ? 0 : current + 1,
    );
  }

  if (!activeImage) {
    return null;
  }

  return (
    <div className="rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-3 shadow-[var(--shadow-card)] sm:p-5">
      <div className="relative overflow-hidden rounded-2xl bg-[var(--color-surface-2)]">
        <button
          type="button"
          onClick={() => setIsViewerOpen(true)}
          className="group relative block aspect-square w-full"
          aria-label={`Ver ${productName} en detalle`}
        >
          <Image
            src={activeImage}
            alt={`${productName} imagen principal`}
            width={900}
            height={900}
            priority
            className="h-full w-full object-contain p-3 transition duration-300 group-hover:scale-[1.02] sm:p-6"
          />
          <span className="absolute bottom-4 right-4 rounded-full bg-[#071426]/80 px-4 py-2 text-xs font-black uppercase tracking-wide text-white backdrop-blur">
            Ampliar
          </span>
        </button>

        {gallery.length > 1 ? (
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3">
            <button
              type="button"
              onClick={goToPrevious}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-2xl font-black text-[#13233f] shadow-lg transition hover:bg-[var(--color-warning)]"
              aria-label="Imagen anterior"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={goToNext}
              className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-2xl font-black text-[#13233f] shadow-lg transition hover:bg-[var(--color-warning)]"
              aria-label="Imagen siguiente"
            >
              ›
            </button>
          </div>
        ) : null}
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <p className="text-xs font-black uppercase tracking-wide text-[var(--color-muted)]">
          Imagen {activeIndex + 1} de {gallery.length}
        </p>
        {gallery.length > 1 ? (
          <div className="flex gap-1.5">
            {gallery.map((image, index) => (
              <button
                key={`dot-${image}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-8 bg-[var(--color-accent)]"
                    : "w-2.5 bg-[var(--color-border)]"
                }`}
                aria-label={`Seleccionar imagen ${index + 1}`}
              />
            ))}
          </div>
        ) : null}
      </div>

      {gallery.length > 1 ? (
        <div
          className={`mt-4 grid gap-2 sm:gap-3 ${
            gallery.length === 4 ? "grid-cols-4" : "grid-cols-3"
          }`}
        >
          {gallery.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative aspect-square overflow-hidden rounded-xl border bg-[var(--color-surface-2)] transition ${
                activeIndex === index
                  ? "border-[var(--color-accent)] shadow-[0_0_0_3px_var(--color-accent-soft)]"
                  : "border-[color:var(--color-border)] hover:border-[var(--color-accent)]"
              }`}
              aria-label={`Ver imagen ${index + 1} de ${productName}`}
            >
              <Image
                src={image}
                alt={`${productName} imagen ${index + 1}`}
                width={240}
                height={240}
                className="h-full w-full object-contain p-3"
              />
            </button>
          ))}
        </div>
      ) : null}

      {isViewerOpen ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-[#071426]/85 px-4 py-6 backdrop-blur-sm">
          <div className="relative h-full max-h-[88vh] w-full max-w-6xl rounded-3xl bg-[var(--color-surface)] p-4 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsViewerOpen(false)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-black text-[#13233f] shadow-lg"
              aria-label="Cerrar visor"
            >
              ×
            </button>
            <Image
              src={activeImage}
              alt={`${productName} imagen ampliada`}
              fill
              sizes="100vw"
              className="object-contain p-5 sm:p-10"
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
