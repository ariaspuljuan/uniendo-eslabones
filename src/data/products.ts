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
    phone: "+57 311 841 4911",
    whatsapp: "+57 311 841 4911",
    email: "ventas@disguantes.co",
    website: "https://disguantesdecolombia.com/",
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
    phone: "+57 311 729 8619",
    whatsapp: "+57 311 729 8619",
    email: "comercial@industriasgoya.co",
    website: "https://industriasgoya.com/",
  },
};

const rubberfit: Supplier = {
  id: "rubberfit",
  name: "Rubberfit",
  city: "Medellín, Colombia",
  logo: "/images/suppliers/logo-echeverri-productos.png",
  banner: "/images/suppliers/banner-echeverri-productos.png",
  description:
    "Marca enfocada en bandas elásticas deportivas elaboradas con caucho natural para entrenamiento, rehabilitación y acondicionamiento físico.",
  contact: {
    sellerName: "Área comercial Rubberfit",
    role: "Atención comercial",
    phone: "+57 305 236 6112",
    whatsapp: "+57 305 236 6112",
    website: "https://rubberfit.co/",
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
    phone: "+57 316 831 2209",
    whatsapp: "+57 316 831 2209",
    website: "https://cauchosecheverri.com/",
  },
};

const agrosavia: Supplier = {
  id: "agrosavia",
  name: "Agrosavia",
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

const eslatex: Supplier = {
  id: "eslatex",
  name: "ESLATEX",
  city: "Colombia",
  logo: "/images/suppliers/logo-eslatex.svg",
  banner: "/images/suppliers/banner-eslatex-products.png",
  description:
    "Proveedor de látex natural centrifugado y asesoría técnica para productores del campo vinculados a la cadena del caucho natural.",
  contact: {
    sellerName: "Área comercial ESLATEX",
    role: "Atención a productores",
    phone: "+57 321 569 3694",
    whatsapp: "+57 321 569 3694",
  },
};

const emprocaucho: Supplier = {
  id: "emprocaucho-sas",
  name: "Emprocaucho SAS",
  city: "Colombia",
  logo: "/images/suppliers/logo-img-emprocaucho.png",
  banner: "/images/suppliers/banner-emprocaucho-producto.png",
  description:
    "Proveedor colombiano de caucho natural técnicamente especificado, con enfoque en trazabilidad, calidad y suministro para aplicaciones industriales.",
  contact: {
    sellerName: "Equipo comercial Emprocaucho SAS",
    role: "Atención comercial",
    phone: "+57 313 261 8946",
    whatsapp: "+57 313 261 8946",
    email: "emprocauchosas@gmail.com",
  },
};

const sltc: Supplier = {
  id: "sltc",
  name: "Sociedad Latinoamericana de Tecnología del Caucho (SLTC)",
  city: "Latinoamérica",
  logo: "/images/suppliers/logo-producto-sltc.png",
  banner: "/images/suppliers/banner-producto-sltc.png",
  description:
    "Organización sin ánimo de lucro dedicada a fortalecer el desarrollo técnico y sostenible de la industria del caucho en Latinoamérica mediante capacitación, divulgación técnica, networking y cooperación entre empresas, academia e instituciones.",
  contact: {
    sellerName: "Ing. Lucian Jiménez",
    role: "Gerencia SLTC",
    phone: "+57 319 595 0573",
    whatsapp: "+57 319 595 0573",
    email: "gerencia@sltcaucho.org",
    website: "http://www.sltcaucho.org",
  },
};

const valex: Supplier = {
  id: "valex-group-llc",
  name: "VALEX Group LLC",
  city: "América",
  logo: "/images/suppliers/logo-valex.png",
  banner: "/images/suppliers/banner-productos-valex.png",
  description:
    "VALEX Group LLC es una empresa especializada en la distribución de materias primas para la industria del caucho y látex en América. Conecta productores de Latinoamérica, África y Asia con fabricantes en Estados Unidos, Canadá y América Latina, ofreciendo soluciones confiables, soporte técnico y una cadena de suministro eficiente.",
  contact: {
    sellerName: "Claudia Guacaneme",
    role: "Contacto comercial VALEX Group LLC",
    phone: "+57 320 849 7838",
    whatsapp: "+57 320 849 7838",
    email: "claudia@valexgroup.com",
    website: "https://www.valexgroup.com",
    instagram: "https://www.instagram.com/valexgroupllc",
    linkedin: "https://www.linkedin.com/company/valex-group-llc/",
    youtube: "http://www.youtube.com/@valexgroupllc",
  },
};

const sellaseg: Supplier = {
  id: "asellaseg-ingenieria",
  name: "A'sellaseg Ingeniería S.A.S.",
  city: "Medellín, Colombia",
  logo: "/images/suppliers/logo_sellaseg.png",
  banner: "/images/suppliers/banner_sellaseg.png",
  description:
    "Empresa productora y comercializadora de repuestos técnicos para la industria en general. Desde 1994 fabrica piezas especiales bajo muestra o planos en caucho, plástico y acero, con cobertura nacional, personal competente y tecnología orientada a la calidad y la mejora continua.",
  contact: {
    sellerName: "José Alejandro García Zapata",
    role: "Contacto comercial",
    website: "https://www.asellaseg.com",
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
    provider: rubberfit.name,
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
    supplier: rubberfit,
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
  {
    id: "6",
    slug: "latex-natural-centrifugado",
    name: "Látex natural centrifugado",
    shortDescription:
      "Látex natural centrifugado alto amonio, bajo amonio y libre de TMTD con asesoría técnica para productores.",
    fullDescription:
      "La empresa ofrece látex natural centrifugado alto amonio, látex natural bajo amonio y látex natural centrifugado libre de TMTD. Además, brinda asesoría técnica a productores del campo vinculados a la cadena del caucho natural.",
    location: "Colombia",
    provider: eslatex.name,
    category: "agroindustria",
    isNaturalRubber: true,
    image: "/images_products/eslatex-img-producto.png",
    gallery: [
      "/images_products/eslatex-img-producto.png",
      "/images/products/gallery-placeholder-2.svg",
      "/images/products/gallery-placeholder-3.svg",
    ],
    specs: [
      { label: "Referencia", value: "Alto amonio" },
      { label: "Referencia", value: "Bajo amonio" },
      { label: "Referencia", value: "Libre de TMTD" },
      { label: "Servicio", value: "Asesoría técnica" },
    ],
    applications: [
      "Transformación industrial",
      "Materia prima natural",
      "Asesoría a productores",
      "Cadena del caucho natural",
    ],
    supplier: eslatex,
  },
  {
    id: "7",
    slug: "tsr10",
    name: "TSR10",
    shortDescription:
      "Caucho natural técnicamente especificado para neumáticos, autopartes, calzado y productos industriales.",
    fullDescription:
      "TSR 10 (Technically Specified Rubber 10) es un caucho natural técnicamente especificado, procesado bajo estándares internacionales para garantizar calidad, pureza y consistencia. Es ampliamente utilizado en neumáticos, autopartes, calzado y productos industriales, destacándose por su bajo contenido de impurezas, trazabilidad y origen colombiano.",
    location: "Colombia",
    provider: emprocaucho.name,
    category: "agroindustria",
    isNaturalRubber: true,
    image: "/images_products/tsr10-img-producto.png",
    gallery: [
      "/images_products/tsr10-img-producto.png",
      "/images/products/gallery-placeholder-1.svg",
      "/images/products/gallery-placeholder-2.svg",
    ],
    specs: [
      { label: "Referencia", value: "TSR 10" },
      { label: "Tipo", value: "Caucho natural técnicamente especificado" },
      { label: "Origen", value: "Colombia" },
      { label: "Uso", value: "Industrial" },
    ],
    applications: [
      "Neumáticos",
      "Autopartes",
      "Calzado",
      "Productos industriales",
      "Procesos de transformación del caucho",
    ],
    supplier: emprocaucho,
  },
  {
    id: "8",
    slug: "servicio-sltc",
    name: "Sociedad Latinoamericana de Tecnología del Caucho (SLTC)",
    shortDescription:
      "Formación, capacitación y networking para la industria del caucho en Latinoamérica.",
    fullDescription:
      "Organización sin ánimo de lucro dedicada a fortalecer el desarrollo técnico y sostenible de la industria del caucho en Latinoamérica mediante capacitación, divulgación técnica, networking y cooperación entre empresas, academia e instituciones.",
    location: "Latinoamérica",
    provider: sltc.name,
    category: "asociacion",
    isNaturalRubber: true,
    image: "/images_products/sltc-img-producto.png",
    gallery: [
      "/images_products/sltc-img-producto.png",
      "/images/products/gallery-placeholder-1.svg",
      "/images/products/gallery-placeholder-3.svg",
    ],
    specs: [
      { label: "Etiqueta", value: "Formación, Capacitación y Networking" },
      { label: "Revista", value: "Revista técnica SLTCAUCHO" },
      { label: "Comunidad", value: "@sltcaucho" },
      { label: "Afiliación", value: "Gratuita" },
    ],
    applications: [
      "Revista técnica SLTCAUCHO",
      "Cursos y webinars",
      "Jornadas técnicas y simposios",
      "Networking sectorial",
      "Afiliación gratuita",
    ],
    supplier: sltc,
  },
  {
    id: "9",
    slug: "materias-primas-valex-group",
    name: "Materias primas para caucho y látex",
    shortDescription:
      "Distribución de materias primas para fabricantes de caucho y látex en Estados Unidos, Canadá y América Latina.",
    fullDescription:
      "VALEX Group LLC conecta productores de Latinoamérica, África y Asia con fabricantes en Estados Unidos, Canadá y América Latina. Su operación está enfocada en la distribución de materias primas para la industria del caucho y látex, ofreciendo soluciones confiables, soporte técnico y una cadena de suministro eficiente para compradores industriales.",
    location: "América",
    provider: valex.name,
    category: "industria",
    isNaturalRubber: true,
    image: "/images_products/img-producto-valex.png",
    gallery: [
      "/images_products/img-producto-valex.png",
      "/images/products/gallery-placeholder-1.svg",
      "/images/products/gallery-placeholder-2.svg",
    ],
    specs: [
      { label: "Empresa", value: "Comercializadora internacional" },
      { label: "Cobertura", value: "Estados Unidos, Canadá y América Latina" },
      { label: "Origen", value: "Latinoamérica, África y Asia" },
      { label: "Soporte", value: "Técnico y comercial" },
    ],
    applications: [
      "Materias primas para caucho",
      "Materias primas para látex",
      "Fabricantes industriales",
      "Comercio internacional",
      "Cadena de suministro",
    ],
    supplier: valex,
  },
  {
    id: "10",
    slug: "sellos-empaques-repuestos-tecnicos-asellaseg",
    name: "Sellos, empaques y repuestos técnicos",
    shortDescription:
      "Piezas especiales y soluciones de sellamiento fabricadas en caucho, plástico y acero para diferentes sectores industriales.",
    fullDescription:
      "A'sellaseg Ingeniería S.A.S. es una empresa productora y comercializadora de repuestos técnicos para la industria alimenticia, de bebidas, lácteos, automotriz, transporte, química, farmacéutica, textil, metalmecánica, plástica, eléctrica y papelera, entre otras. Fundada en diciembre de 1994 en Medellín, fabrica piezas especiales bajo muestra o planos en diversos materiales, como caucho, plástico y acero. Cuenta con cobertura nacional, personal competente y tecnología para desarrollar productos de sellamiento de fluidos, empaques y repuestos técnicos, bajo un compromiso permanente con el servicio, la calidad y la mejora continua.",
    location: "Medellín, Colombia",
    provider: sellaseg.name,
    category: "industria",
    isNaturalRubber: false,
    image: "/images_products/sellaseg_1_producto.png",
    gallery: [
      "/images_products/sellaseg_1_producto.png",
      "/images_products/sellaseg_2_producto.png",
      "/images_products/sellaseg_3_producto.png",
      "/images_products/sellaseg_4_producto.png",
    ],
    specs: [
      { label: "Experiencia", value: "Desde 1994" },
      { label: "Materiales", value: "Caucho, plástico y acero" },
      { label: "Fabricación", value: "Bajo muestra o planos" },
      { label: "Cobertura", value: "Nacional" },
    ],
    applications: [
      "Sellamiento de fluidos",
      "Empaques industriales",
      "Repuestos técnicos",
      "Piezas especiales en caucho y plástico",
      "Soluciones para procesos industriales",
    ],
    supplier: sellaseg,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
