import type { NewsItem } from "@/types";

export const newsItems: NewsItem[] = [
  {
    id: "1",
    type: "anuncio",
    category: "productos",
    title: "Oferta destacada en productos derivados del caucho natural",
    summary:
      "Anuncio comercial para visibilizar promociones, nuevos productos o condiciones especiales de proveedores aliados del sector.",
    source: "Uniendo Eslabones",
    date: "2026-05-20",
    image: "/images/news/anuncio-productos.svg",
    banner: "/images/news/banner-anuncio-productos.svg",
    externalUrl: "/productos",
    featured: true,
    urgent: true,
    ctaLabel: "Ver productos",
  },
  {
    id: "2",
    type: "noticia",
    category: "sector",
    title: "Actualidad del caucho natural colombiano",
    summary:
      "Resumen editorial para enlazar a una noticia publicada en Confecaucho y ampliar la informacion desde la fuente oficial.",
    source: "Confecaucho",
    date: "2026-05-18",
    image: "/images/news/noticia-sector.svg",
    banner: "/images/news/banner-noticia-sector.svg",
    externalUrl: "https://confecaucho.com/",
    featured: true,
    ctaLabel: "Leer en Confecaucho",
  },
  {
    id: "3",
    type: "noticia",
    category: "eventos",
    title: "Agenda gremial y encuentros del sector cauchero",
    summary:
      "Eventos, ferias, ruedas de negocio y espacios de articulacion para productores, transformadores y compradores.",
    source: "Confecaucho",
    date: "2026-05-15",
    image: "/images/news/noticia-eventos.svg",
    banner: "/images/news/banner-noticia-eventos.svg",
    externalUrl: "https://confecaucho.com/",
    ctaLabel: "Ver agenda",
  },
  {
    id: "4",
    type: "noticia",
    category: "convocatorias",
    title: "Convocatorias y oportunidades para empresas caucheras",
    summary:
      "Espacio para enlazar programas, convocatorias, instrumentos de apoyo y oportunidades de fortalecimiento empresarial.",
    source: "Confecaucho",
    date: "2026-05-12",
    image: "/images/news/noticia-convocatoria.svg",
    banner: "/images/news/banner-noticia-convocatoria.svg",
    externalUrl: "https://confecaucho.com/",
    ctaLabel: "Revisar convocatoria",
  },
  {
    id: "5",
    type: "anuncio",
    category: "productos",
    title: "Nuevo proveedor en la vitrina de productos",
    summary:
      "Anuncio para destacar nuevos proveedores, lanzamientos de productos o mensajes comerciales relevantes para compradores.",
    source: "Uniendo Eslabones",
    date: "2026-05-10",
    image: "/images/news/anuncio-proveedor.svg",
    banner: "/images/news/banner-anuncio-proveedor.svg",
    externalUrl: "/productos",
    ctaLabel: "Explorar proveedor",
  },
];

export const latestNews = newsItems.slice(0, 4);

export const urgentAnnouncement = newsItems.find(
  (item) => item.type === "anuncio" && item.urgent,
);
