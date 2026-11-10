"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { malayoCommercialLines } from "@/data/distribuidorMalayo";

type Catalog = (typeof malayoCommercialLines)[number];
type IconName = "eye" | "download" | "mail" | "phone";

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, string> = {
    eye: "M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    download: "M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5",
    mail: "M3 5h18v14H3V5Zm0 0 9 8 9-8",
    phone: "M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z",
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}

const panel = "rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]";
const primary = "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[var(--color-accent)] px-4 py-3 text-sm font-black text-white transition hover:bg-[var(--color-accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] sm:rounded-md";
const secondary = "inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface-2)] px-4 py-3 text-sm font-black text-[var(--color-accent)] transition hover:bg-[var(--color-accent-soft)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] sm:rounded-md";

export function MalayoProductDetails() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Catalog | null>(null);

  function explore(catalog: Catalog) {
    setSelected(catalog);
    dialog.current?.showModal();
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-10 px-5 py-8 sm:gap-12 sm:px-6 sm:py-12">
      <section aria-label="Oferta de Distribuidor Malayo" className="grid gap-5">
        {malayoCommercialLines.map((line) => (
          <article key={line.id} className={`${panel} grid gap-6 p-4 sm:p-6 md:grid-cols-[.8fr_1.2fr] md:items-center md:gap-8`}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-white">
              <Image src={line.image} alt={line.imageAlt} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-contain" />
            </div>
            <div className="border-l-4 border-[color:var(--color-highlight)] pl-5 sm:pl-7">
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">{line.title}</h2>
              {line.company ? <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">{line.company}</p> : null}
              <p className="mt-4 text-base leading-7 text-[var(--color-muted)] sm:text-lg">{line.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section aria-labelledby="malayo-catalogs">
        <h2 id="malayo-catalogs" className="text-3xl font-black tracking-tight sm:text-4xl">Catálogos</h2>
        <div className="mt-3 h-1 w-20 bg-[var(--color-highlight)]" />
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {malayoCommercialLines.map((catalog) => (
            <article key={catalog.id} className={`${panel} flex min-w-0 flex-col p-5 sm:p-6`}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                <Image src={catalog.cover} alt={`Portada del catálogo ${catalog.title}`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain" />
              </div>
              <p className="mt-5 text-xs font-black uppercase tracking-wide text-[var(--color-muted)]">PDF · {catalog.pages} páginas</p>
              <h3 className="mt-2 text-xl font-black sm:text-2xl">{catalog.title}</h3>
              <div className="mt-auto grid gap-3 pt-5 sm:grid-cols-2">
                <button type="button" onClick={() => explore(catalog)} aria-haspopup="dialog" aria-label={`Explorar PDF de ${catalog.title}`} className={primary}><Icon name="eye" />Explorar PDF</button>
                <a href={catalog.pdf} download={catalog.downloadName} aria-label={`Descargar catálogo de ${catalog.title}`} className={secondary}><Icon name="download" />Descargar</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="malayo-contacts" className="pb-4">
        <h2 id="malayo-contacts" className="text-3xl font-black tracking-tight sm:text-4xl">Contacto por línea comercial</h2>
        <div className="mt-3 h-1 w-20 bg-[var(--color-highlight)]" />
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {malayoCommercialLines.map((line) => (
            <article key={line.id} className={`${panel} flex min-w-0 flex-col p-5 sm:p-6`}>
              <h3 className="text-xl font-black sm:text-2xl">{line.title}</h3>
              <p className="mt-4 break-all text-sm text-[var(--color-muted)]">{line.email}</p>
              <p className="mt-2 text-sm font-bold text-[var(--color-muted)]">{line.phone}</p>
              <div className="mt-auto grid gap-3 pt-5 sm:grid-cols-2">
                <a href={`mailto:${line.email}`} aria-label={`Enviar correo a ${line.title}`} className={primary}><Icon name="mail" />Correo</a>
                <a href={`tel:${line.telephone}`} aria-label={`Llamar a ${line.title}`} className={primary}><Icon name="phone" />Llamar</a>
              </div>
            </article>
          ))}
        </div>
        <a href="https://distrimalayo.com" target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-11 items-center break-all font-bold text-[var(--color-accent)] underline underline-offset-4">Visitar distrimalayo.com</a>
      </section>

      <dialog ref={dialog} onClose={() => setSelected(null)} aria-labelledby="malayo-pdf-title" className="fixed inset-0 m-auto max-h-[92dvh] w-[calc(100%-2rem)] max-w-6xl overflow-y-auto rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-0 text-[var(--color-text)] shadow-2xl backdrop:bg-[#071426]/80">
        <div className="flex items-start justify-between gap-4 p-4 sm:p-5">
          <h2 id="malayo-pdf-title" className="text-lg font-black sm:text-2xl">{selected?.title}</h2>
          <button type="button" onClick={() => dialog.current?.close()} className={secondary} aria-label="Cerrar visor PDF">Cerrar ×</button>
        </div>
        {selected ? (
          <>
            <iframe key={selected.id} src={selected.pdf} title={`Catálogo PDF: ${selected.title}`} className="h-[65dvh] w-full border-0 bg-white" />
            <div className="flex flex-wrap gap-3 p-4 sm:p-5">
              <a href={selected.pdf} target="_blank" rel="noreferrer" className={secondary}>Abrir PDF en otra pestaña</a>
              <a href={selected.pdf} download={selected.downloadName} className={primary}><Icon name="download" />Descargar PDF</a>
            </div>
          </>
        ) : null}
      </dialog>
    </div>
  );
}
