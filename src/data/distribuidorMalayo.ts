import type { Product, Supplier } from "@/types";

const assets = "/images/suppliers/distribuidor-malayo";

const supplier: Supplier = {
  id: "distribuidor-malayo",
  name: "Distribuidor Malayo S.A.S.",
  description:
    "Importación, exportación y comercialización de herramientas, insumos y equipos para la agroindustria.",
  city: "Cali, Colombia",
  logo: `${assets}/logo.png`,
  banner: `${assets}/banner.webp`,
  contact: {
    sellerName: "Equipo comercial Distribuidor Malayo",
    role: "Herramientas agrícolas",
    phone: "+57 315 451 4844",
    email: "distrimalayo@distrimalayo.com",
    website: "https://distrimalayo.com",
  },
};

export const distribuidorMalayoProduct: Product = {
  id: "12",
  slug: "herramientas-soluciones-agroindustriales-distribuidor-malayo",
  name: "Herramientas y soluciones agroindustriales",
  shortDescription: supplier.description,
  fullDescription:
    "Herramientas agrícolas para cosecha y poda de palma, y equipos, maquinaria y repuestos industriales para plantas de beneficio de palma.",
  location: supplier.city,
  provider: supplier.name,
  category: "agroindustria",
  isNaturalRubber: false,
  image: `${assets}/equipos.webp`,
  gallery: [`${assets}/herramientas.webp`, `${assets}/equipos.webp`],
  specs: [],
  applications: ["Cosecha y poda de palma", "Plantas de beneficio de palma"],
  supplier,
};

// Contactos y recursos de las dos líneas, según los PDF entregados por el proveedor.
export const malayoCommercialLines = [
  {
    id: "herramientas",
    title: "Herramientas agrícolas",
    description:
      "Cuchillos, palines, varas telescópicas y accesorios para cosecha y poda de palma.",
    image: `${assets}/herramientas.webp`,
    imageAlt: "Cuchillos malayos para cosecha y poda, tomados del catálogo de herramientas",
    cover: `${assets}/portada-herramientas.webp`,
    pdf: "/catalogos/distribuidor-malayo/herramientas-agricolas.pdf",
    downloadName: "Distribuidor-Malayo-Herramientas-agricolas.pdf",
    pages: 2,
    email: "distrimalayo@distrimalayo.com",
    phone: "+57 315 451 4844",
    telephone: "+573154514844",
  },
  {
    id: "repuestos",
    title: "Equipos y repuestos industriales",
    company: "Agro Industrial Center, una compañía del Grupo Distribuidor Malayo.",
    description:
      "Equipos, maquinaria y repuestos para plantas de beneficio de palma.",
    image: `${assets}/equipos.webp`,
    imageAlt: "Equipos y maquinaria de Agro Industrial Center, tomados del catálogo industrial",
    cover: `${assets}/portada-repuestos.webp`,
    pdf: "/catalogos/distribuidor-malayo/equipos-y-repuestos.pdf",
    downloadName: "Distribuidor-Malayo-Equipos-y-repuestos.pdf",
    pages: 13,
    email: "repuestosplanta@distrimalayo.com",
    phone: "+57 317 437 3163",
    telephone: "+573174373163",
  },
];
