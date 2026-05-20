"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { NewsItem } from "@/types";

type AnnouncementModalProps = {
  announcement?: NewsItem;
};

export function AnnouncementModal({ announcement }: AnnouncementModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!announcement) {
      return;
    }

    const dismissedId = window.sessionStorage.getItem("dismissedAnnouncement");

    if (dismissedId !== announcement.id) {
      const timer = window.setTimeout(() => setIsOpen(true), 900);
      return () => window.clearTimeout(timer);
    }
  }, [announcement]);

  if (!announcement || !isOpen) {
    return null;
  }

  const activeAnnouncement = announcement;

  function closeModal() {
    window.sessionStorage.setItem("dismissedAnnouncement", activeAnnouncement.id);
    setIsOpen(false);
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-[#071426]/70 px-4 py-6 backdrop-blur-sm">
      <section className="relative grid max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl bg-[var(--color-surface)] shadow-2xl md:grid-cols-[.95fr_1.05fr]">
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-black text-[#13233f] shadow-lg"
          aria-label="Cerrar anuncio"
        >
          ×
        </button>

        <div className="relative min-h-[280px]">
          <Image
            src={activeAnnouncement.banner}
            alt={activeAnnouncement.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(7,20,38,.48))]" />
        </div>

        <div className="p-8">
          <span className="rounded-full bg-[var(--color-warning)] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#13233f]">
            Anuncio importante
          </span>
          <h2 className="mt-6 text-3xl font-black tracking-tight text-[var(--color-text)] md:text-4xl">
            {activeAnnouncement.title}
          </h2>
          <p className="mt-4 leading-7 text-[var(--color-muted)]">
            {activeAnnouncement.summary}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={activeAnnouncement.externalUrl}
              onClick={closeModal}
              className="rounded-md bg-[var(--color-accent)] px-5 py-3 text-sm font-black uppercase tracking-wide text-white"
            >
              {activeAnnouncement.ctaLabel}
            </Link>
            <button
              type="button"
              onClick={closeModal}
              className="rounded-md border border-[color:var(--color-border)] px-5 py-3 text-sm font-black uppercase tracking-wide text-[var(--color-text)]"
            >
              Ver despues
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
