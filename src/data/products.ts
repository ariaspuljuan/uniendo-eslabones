import type { Product, Supplier } from "@/types";

const disguantes: Supplier = {
  id: "disguantes",
  name: "Disguantes de Colombia S.A.S",
  city: "Bogotá, Colombia",
  logo: "/images/suppliers/disguantes-logo.png",
  banner: "/images/suppliers/banner-disguantes.png",
  description:
    "Empresa proveedora de soluciones de protección para actividades industriales, manufactura y manipulación de materiales. Su oferta está orientada a compradores que buscan continuidad de suministro, calidad verificable y atención comercial directa.",
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
    "Proveedor especializado en productos profesionales para trabajo continuo, protección de manos y aplicaciones industriales. Su portafolio conecta necesidades de construcción, pintura, preparación de superficies y procesos operativos.",
  contact: {
    sellerName: "Área comercial Industrias Goya",
    role: "Ventas corporativas",
    phone: "+57 301 000 0000",
    whatsapp: "+57 301 000 0000",
    email: "comercial@industriasgoya.co",
  },
};

const cauchosEcheverri: Supplier = {
  id: "cauchos-echeverri",
  name: "Cauchos Echeverri",
  city: "Medellín, Colombia",
  logo: "/images/suppliers/logo-echeverri-productos.png",
  banner: "/images/suppliers/banner-echeverri-productos.png",
  description:
    "Empresa con enfoque en soluciones derivadas del caucho para mercados industriales, deportivos y de uso cotidiano. Su propuesta combina transformación, desarrollo de producto y conocimiento técnico del material.",
  contact: {
    sellerName: "Asesor comercial Cauchos Echeverri",
    role: "Atención a empresas",
    phone: "+57 302 000 0000",
    whatsapp: "+57 302 000 0000",
    email: "ventas@cauchosecheverri.co",
  },
};

const agrosavia: Supplier = {
  id: "agrosavia",
  name: "AGROSAVIA",
  city: "Colombia",
  logo: "/images/logos_aliados/logo-agrosavia.svg",
  banner: "/images/allies/banner-aliados.svg",
  description:
    "Corporación Colombiana de Investigación Agropecuaria. Su oferta tecnológica aporta soluciones biológicas y conocimiento aplicado para fortalecer la productividad y sostenibilidad de cultivos estratégicos como el caucho natural.",
  contact: {
    sellerName: "Karen Arango",
    role: "Contacto comercial Confecaucho",
    phone: "+57 317 253 6737",
    whatsapp: "+57 317 253 6737",
    email: "karen.arango@confecaucho.com",
  },
};

export const products: Product[] = [
  {
    id: "1",
    slug: "guantes-industriales-latex-natural",
    name: "Guantes industriales de látex natural",
    shortDescription:
      "Guantes elaborados en látex natural para protección, resistencia y comodidad en actividades industriales.",
    fullDescription:
      "Guantes industriales fabricados para brindar protección en jornadas de trabajo exigentes. Son una alternativa para empresas que requieren elementos de seguridad flexibles, resistentes y cómodos para manipulación de materiales, procesos operativos y actividades de manufactura.",
    location: "Bogotá, Colombia",
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
      { label: "Material", value: "Látex natural" },
      { label: "Uso", value: "Industrial y manufactura" },
      { label: "Presentación", value: "Por pares o volumen empresarial" },
      { label: "Origen", value: "Colombia" },
    ],
    applications: [
      "Manipulación de materiales",
      "Procesos industriales",
      "Protección de manos",
      "Operaciones de manufactura",
    ],
    supplier: disguantes,
  },
  {
    id: "2",
    slug: "guantes-profesionales-latex",
    name: "Guantes profesionales de látex",
    shortDescription:
      "Guantes para pintura, construcción y preparación de superficies con protección y comodidad para uso continuo.",
    fullDescription:
      "Producto diseñado para trabajos profesionales que requieren protección, agarre y resistencia durante periodos prolongados. Es ideal para compradores que buscan disponibilidad, presentaciones comerciales claras y soporte directo del proveedor.",
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
      { label: "Material", value: "Látex" },
      { label: "Uso", value: "Construcción, pintura y acabados" },
      { label: "Tipo de compra", value: "Comercial y empresarial" },
      { label: "Ubicación", value: "Cundinamarca" },
    ],
    applications: [
      "Pintura",
      "Construcción",
      "Preparación de superficies",
      "Trabajo profesional continuo",
    ],
    supplier: goya,
  },
  {
    id: "3",
    slug: "bandas-elasticas-deportivas",
    name: "Bandas elásticas deportivas",
    shortDescription:
      "Bandas elásticas deportivas en caucho natural colombiano para entrenamiento, rehabilitación y acondicionamiento físico.",
    fullDescription:
      "Bandas elásticas pensadas para rutinas deportivas, fisioterapia y entrenamiento funcional. Permiten comunicar el potencial del caucho natural en productos de consumo, bienestar y alto movimiento comercial.",
    location: "Medellín, Colombia",
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
      { label: "Uso", value: "Deportivo y rehabilitación" },
      { label: "Resistencias", value: "Diferentes niveles" },
      { label: "Marca", value: "Rubberfit" },
    ],
    applications: [
      "Entrenamiento funcional",
      "Rehabilitación",
      "Acondicionamiento físico",
      "Movilidad y fuerza",
    ],
    supplier: cauchosEcheverri,
  },
  {
    id: "4",
    slug: "bandas-elasticas-ligas",
    name: "Bandas elásticas",
    shortDescription:
      "Ligas elásticas elaboradas con base en caucho natural para sujetar, organizar y asegurar materiales.",
    fullDescription:
      "Producto de uso cotidiano e industrial con alta rotación. Su elasticidad y resistencia lo convierten en una solución versátil para empaques, organización, procesos administrativos, comercios y aplicaciones industriales ligeras.",
    location: "Medellín, Colombia",
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
      { label: "Uso", value: "Organización y sujeción" },
      { label: "Aplicación", value: "Cotidiana e industrial" },
      { label: "Compra", value: "Por volumen" },
    ],
    applications: [
      "Empaque",
      "Organización de materiales",
      "Oficina y comercio",
      "Procesos industriales ligeros",
    ],
    supplier: cauchosEcheverri,
  },
  {
    id: "5",
    slug: "bioplaguicida-erytec",
    name: "Bioplaguicida Erytec®",
    shortDescription:
      "Bioplaguicida viral para el control del gusano cachón Erinnyis ello en cultivos de caucho natural y yuca.",
    fullDescription:
      "Bioplaguicida elaborado con base en un aislamiento de granulovirus para el control del gusano cachón Erinnyis ello en cultivos de caucho natural y de yuca. Es un producto formulado como polvo mojable con protectores de luz ultravioleta, concentración mínima de 1x109 cuerpos de inclusión por gramo (CI/g) y compatibilidad con agroquímicos. Tiene una eficacia del 80% demostrada en laboratorio, casa de malla y campo, lo que permite reducir pérdidas ocasionadas por el insecto y apoyar el aumento de la producción. Es el único bioplaguicida viral registrado en Colombia para el control del gusano cachón en caucho y yuca. Su formulación no requiere refrigeración, mantiene vida útil hasta por 12 meses a temperaturas inferiores a 28°C, presenta persistencia mínima de siete días después de la aplicación y solo afecta al insecto objetivo, sin efecto tóxico sobre insectos benéficos ni otras especies, incluido el hombre.",
    location: "Colombia",
    provider: agrosavia.name,
    category: "agroindustria",
    isNaturalRubber: true,
    image: "/images_products/erytec-producto.png",
    gallery: [
      "/images_products/erytec-producto.png",
      "/images/products/gallery-placeholder-1.svg",
      "/images/products/gallery-placeholder-2.svg",
    ],
    specs: [
      { label: "Tipo", value: "Bioplaguicida viral" },
      { label: "Objetivo", value: "Gusano cachón Erinnyis ello" },
      { label: "Cultivos", value: "Caucho natural y yuca" },
      { label: "Vida útil", value: "12 meses bajo 28°C" },
      { label: "Eficacia", value: "80% demostrada" },
      { label: "Toxicidad", value: "Categoría IV, ligeramente tóxico" },
    ],
    applications: [
      "Control biológico",
      "Cultivos de caucho natural",
      "Cultivos de yuca",
      "Manejo integrado de plagas",
      "Regiones caucheras de Colombia",
    ],
    supplier: agrosavia,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
