import type { NewsItem } from "@/types";

export const newsItems: NewsItem[] = [
  {
    id: "1",
    type: "anuncio",
    category: "productos",
    title: "Guantes industriales de látex natural",
    summary:
      "Guantes industriales fabricados para brindar protección en jornadas de trabajo exigentes. Son una alternativa para empresas que requieren elementos de seguridad flexibles, resistentes y cómodos para manipulación de materiales, procesos operativos y actividades de manufactura.",
    source: "Uniendo Eslabones",
    date: "2026-05-11",
    image: "/images_products/guantes-disguantes.png",
    banner: "/images/news/img-banner-alerta-guantes.png",
    externalUrl: "/productos",
    featured: true,
    urgent: true,
    ctaLabel: "Ver productos",
  },
  {
    id: "2",
    type: "noticia",
    category: "sector",
    title: "Cenicaucho en Mesas Sectoriales Sena",
    summary:
      "Las Mesas Sectoriales son el espacio natural de concertación con el sector productivo, gubernamental y académico para desarrollar la gestión del talento humano por competencias, generando conocimiento transferible a la formación profesional.",
    source: "Confecaucho",
    date: "2024-03-11",
    image: "/images/news/img-noticia-sena.png",
    banner: "/images/news/img-noticia-sena.png",
    externalUrl: "https://confecaucho.com/2024/03/11/cenicaucho-en-mesas-sectoriales-sen/",
    featured: true,
    ctaLabel: "Leer en Confecaucho",
  },
  {
    id: "3",
    type: "noticia",
    category: "sector",
    title: "Hevea Manager transforma datos en decisiones rentables",
    summary:
      "La Confederación Cauchera Colombiana (CCC) lanzó oficialmente su herramienta digital pionera. Diseñada por expertos, Hevea Manager promete revolucionar la gestión en las plantaciones de caucho natural, permitiendo un seguimiento agronómico de precisión y sistematizando la información productiva para optimizar la rentabilidad.",
    source: "Confecaucho",
    date: "2026-04-28",
    image: "/images/news/img-noticia-havea.png",
    banner: "/images/news/img-noticia-havea.png",
    externalUrl: "https://confecaucho.com/2026/04/28/hevea-manager-transforma-datos-en-decisiones-rentables/",
    ctaLabel: "Leer en Confecaucho",
  },
  {
    id: "4",
    type: "noticia",
    category: "sector",
    title: "El látex de la esperanza y el nudo de la burocracia",
    summary:
      "Desde 2019, nuestro gremio ejecuta un Plan Estratégico diseñado para la excelencia. Hemos demostrado que la unidad no es un concepto abstracto, sino una cifra de crecimiento: incremento en exportaciones, alianzas internacionales y reconocimiento continental a la calidad de nuestra cadena productiva.",
    source: "Confecaucho",
    date: "2026-04-28",
    image: "/images/news/img-noticia-latex.png",
    banner: "/images/news/img-noticia-latex.png",
    externalUrl: "https://confecaucho.com/2026/05/12/el-latex-de-la-esperanza-y-el-nudo-de-la-burocracia/",
    ctaLabel: "Leer en Confecaucho",
  },
  {
    id: "5",
    type: "anuncio",
    category: "sector",
    title: "Revista Digital Uniendo Eslabones edición No. 10",
    summary:
      "La Confederación Cauchera Colombiana (CCC) lanzó oficialmente una nueva edición de su revista digital. Este contenido fortalece la difusión sectorial, la visibilidad de actores y la circulación de información estratégica para la cadena del caucho natural.",
    source: "Uniendo Eslabones",
    date: "2026-05-20",
    image: "/images/news/img-noticia-edicion10.png",
    banner: "/images/news/img-banner-noticia-edicion10.png",
    externalUrl: "https://confecaucho.com/2026/04/20/ya-puedes-nuestra-edicion-no-10-de-la-revista-digital-uniendo-eslabones/",
    ctaLabel: "Leer revista",
  },
];

export const latestNews = newsItems.slice(0, 4);

export const urgentAnnouncement = newsItems.find(
  (item) => item.type === "anuncio" && item.urgent,
);
