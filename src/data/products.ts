import type { Product, Supplier } from "@/types";

const disguantes: Supplier = {
  id: "disguantes",
  name: "Disguantes de Colombia S.A.S",
  city: "Bogota, Colombia",
  logo: "/images/suppliers/disguantes-logo.png",
  banner: "/images/suppliers/banner-disguantes.png",
  description:
    "Empresa proveedora de soluciones de proteccion para actividades industriales, manufactura y manipulacion de materiales. Su oferta esta orientada a compradores que buscan continuidad de suministro, calidad verificable y atencion comercial directa.",
  contact: {
    sellerName: "Equipo comercial Disguantes",
    role: "Asesor comercial",
    phone: "+57 300 000 0000",
    whatsapp: "+57 300 000 0000",
    email: "ventas@disguantes.co",
    website: "https://www.disguantes.co",
  },
};

const goya: Supplier = {
  id: "industrias-goya",
  name: "Industrias Goya S.A.S",
  city: "Funza, Cundinamarca, Colombia",
  logo: "/images/suppliers/logo-productos-goya.png",
  banner: "/images/suppliers/banner-goya-productos.png",
  description:
    "Proveedor especializado en productos profesionales para trabajo continuo, proteccion de manos y aplicaciones industriales. Su portafolio conecta necesidades de construccion, pintura, preparacion de superficies y procesos operativos.",
  contact: {
    sellerName: "Area comercial Industrias Goya",
    role: "Ventas corporativas",
    phone: "+57 301 000 0000",
    whatsapp: "+57 301 000 0000",
    email: "comercial@industriasgoya.co",
  },
};

const cauchosEcheverri: Supplier = {
  id: "cauchos-echeverri",
  name: "Cauchos Echeverri",
  city: "Medellin, Colombia",
  logo: "/images/suppliers/logo-echeverri-productos.png",
  banner: "/images/suppliers/banner-echeverri-productos.png",
  description:
    "Empresa con enfoque en soluciones derivadas del caucho para mercados industriales, deportivos y de uso cotidiano. Su propuesta combina transformacion, desarrollo de producto y conocimiento tecnico del material.",
  contact: {
    sellerName: "Asesor comercial Cauchos Echeverri",
    role: "Atencion a empresas",
    phone: "+57 302 000 0000",
    whatsapp: "+57 302 000 0000",
    email: "ventas@cauchosecheverri.co",
  },
};

export const products: Product[] = [
  {
    id: "1",
    slug: "guantes-industriales-latex-natural",
    name: "Guantes industriales de latex natural",
    shortDescription:
      "Guantes elaborados en latex natural para proteccion, resistencia y comodidad en actividades industriales.",
    fullDescription:
      "Guantes industriales fabricados para brindar proteccion en jornadas de trabajo exigentes. Son una alternativa para empresas que requieren elementos de seguridad flexibles, resistentes y comodos para manipulacion de materiales, procesos operativos y actividades de manufactura.",
    location: "Bogota, Colombia",
    provider: disguantes.name,
    category: "industria",
    isNaturalRubber: true,
    image: "/images_products/guantes-disguantes.png",
    gallery: [
      "/images_products/guantes-disguantes.png",
      "/images/products/gallery-placeholder-1.svg",
      "/images/products/gallery-placeholder-2.svg",
    ],
    specs: [
      { label: "Material", value: "Latex natural" },
      { label: "Uso", value: "Industrial y manufactura" },
      { label: "Presentacion", value: "Por pares o volumen empresarial" },
      { label: "Origen", value: "Colombia" },
    ],
    applications: [
      "Manipulacion de materiales",
      "Procesos industriales",
      "Proteccion de manos",
      "Operaciones de manufactura",
    ],
    supplier: disguantes,
  },
  {
    id: "2",
    slug: "guantes-profesionales-latex",
    name: "Guantes profesionales de latex",
    shortDescription:
      "Guantes para pintura, construccion y preparacion de superficies con proteccion y comodidad para uso continuo.",
    fullDescription:
      "Producto disenado para trabajos profesionales que requieren proteccion, agarre y resistencia durante periodos prolongados. Es ideal para compradores que buscan disponibilidad, presentaciones comerciales claras y soporte directo del proveedor.",
    location: "Funza, Cundinamarca, Colombia",
    provider: goya.name,
    category: "industria",
    isNaturalRubber: true,
    image: "/images_products/guantes-goya.png",
    gallery: [
      "/images_products/guantes-goya.png",
      "/images/products/gallery-placeholder-1.svg",
      "/images/products/gallery-placeholder-3.svg",
    ],
    specs: [
      { label: "Material", value: "Latex" },
      { label: "Uso", value: "Construccion, pintura y acabados" },
      { label: "Tipo de compra", value: "Comercial y empresarial" },
      { label: "Ubicacion", value: "Cundinamarca" },
    ],
    applications: [
      "Pintura",
      "Construccion",
      "Preparacion de superficies",
      "Trabajo profesional continuo",
    ],
    supplier: goya,
  },
  {
    id: "3",
    slug: "bandas-elasticas-deportivas",
    name: "Bandas elasticas deportivas",
    shortDescription:
      "Bandas elasticas deportivas en caucho natural colombiano para entrenamiento, rehabilitacion y acondicionamiento fisico.",
    fullDescription:
      "Bandas elasticas pensadas para rutinas deportivas, fisioterapia y entrenamiento funcional. Permiten comunicar el potencial del caucho natural en productos de consumo, bienestar y alto movimiento comercial.",
    location: "Medellin, Colombia",
    provider: "Cauchos Echeverri - Rubberfit",
    category: "industria",
    isNaturalRubber: true,
    image: "/images_products/bandas-rubber-fit.png",
    gallery: [
      "/images_products/bandas-rubber-fit.png",
      "/images/products/gallery-placeholder-2.svg",
      "/images/products/gallery-placeholder-3.svg",
    ],
    specs: [
      { label: "Material", value: "Caucho natural" },
      { label: "Uso", value: "Deportivo y rehabilitacion" },
      { label: "Resistencias", value: "Diferentes niveles" },
      { label: "Marca", value: "Rubberfit" },
    ],
    applications: [
      "Entrenamiento funcional",
      "Rehabilitacion",
      "Acondicionamiento fisico",
      "Movilidad y fuerza",
    ],
    supplier: cauchosEcheverri,
  },
  {
    id: "4",
    slug: "bandas-elasticas-ligas",
    name: "Bandas elasticas",
    shortDescription:
      "Ligas elasticas elaboradas con base en caucho natural para sujetar, organizar y asegurar materiales.",
    fullDescription:
      "Producto de uso cotidiano e industrial con alta rotacion. Su elasticidad y resistencia lo convierten en una solucion versatil para empaques, organizacion, procesos administrativos, comercios y aplicaciones industriales ligeras.",
    location: "Medellin, Colombia",
    provider: cauchosEcheverri.name,
    category: "industria",
    isNaturalRubber: true,
    image: "/images_products/ligas-cauchos-echeverri.png",
    gallery: [
      "/images_products/ligas-cauchos-echeverri.png",
      "/images/products/gallery-placeholder-1.svg",
      "/images/products/gallery-placeholder-2.svg",
    ],
    specs: [
      { label: "Material", value: "Caucho natural" },
      { label: "Uso", value: "Organizacion y sujecion" },
      { label: "Aplicacion", value: "Cotidiana e industrial" },
      { label: "Compra", value: "Por volumen" },
    ],
    applications: [
      "Empaque",
      "Organizacion de materiales",
      "Oficina y comercio",
      "Procesos industriales ligeros",
    ],
    supplier: cauchosEcheverri,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
