import type { Product } from "@/src/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Lámina de caucho natural industrial",
    shortDescription: "Lámina resistente para aplicaciones industriales y protección de superficies.",
    location: "Antioquia, Colombia",
    provider: "Cauchos Echeverri S.A.S",
    category: "industria",
    isNaturalRubber: true,
    image: "/images/producto-demo.jpg",
  },
  {
    id: "2",
    name: "Pisos industriales de caucho reciclado",
    shortDescription: "Superficie sostenible para zonas industriales, deportivas y comerciales.",
    location: "Valle del Cauca, Colombia",
    provider: "EcoRubber Colombia S.A.S",
    category: "agroindustria",
    isNaturalRubber: false,
    image: "/images/producto-demo.jpg",
  },
];
