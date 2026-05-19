import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Guantes industriales de látex natural",
    shortDescription:
      "Guantes elaborados en látex natural diseñados para brindar protección, resistencia y comodidad en actividades industriales, de manufactura y manipulación de materiales.",
    location: "Bogotá, Colombia",
    provider: "Disguantes de Colombia S.A.S",
    category: "industria",
    isNaturalRubber: true,
    image: "/images_products/guantes-disguantes.png",
  },
  {
    id: "2",
    name: "Guantes profesionales de látex",
    shortDescription:
      "Guantes fabricados para aplicaciones profesionales relacionadas con pintura, construcción y preparación de superficies, ofreciendo protección, comodidad y resistencia para uso continuo.",
    location: "Funza,Cundinamarca,Colombia",
    provider: "Industrias Goya S.A.S",
    category: "industria",
    isNaturalRubber: true,
    image: "/images_products/guantes-goya.png",
  },
  {
    id: "3",
    name: "Bandas elásticas deportivas",
    shortDescription:
      "Bandas elásticas deportivas fabricadas en caucho natural colombiano, ideales para entrenamiento, rehabilitación y acondicionamiento físico, con diferentes niveles de resistencia.",
    location: "Medellín, Colombia",
    provider: "Cauchos Echeverri - Ruberfit",
    category: "industria",
    isNaturalRubber: true,
    image: "/images_products/bandas-ruber-fit.png",
  },
  {
    id: "4",
    name: "Bandas Elasticas",
    shortDescription:
      "Ligas elásticas fabricadas en caucho natural colombiano, diseñadas para ofrecer resistencia, flexibilidad y durabilidad en aplicaciones de oficina, industria, comercio y organización de productos.",
    location: "Medellín, Colombia",
    provider: "Cauchos Echeverri",
    category: "industria",
    isNaturalRubber: true,
    image: "/images_products/ligas-cauchos-echeverri.png",
  },
];
