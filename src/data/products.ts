import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Lamina natural para uso industrial",
    shortDescription:
      "Material flexible y resistente para proteccion de superficies, sellos y procesos de manufactura.",
    location: "Antioquia, Colombia",
    provider: "Cauchos Echeverri S.A.S",
    category: "industria",
    isNaturalRubber: true,
    image: "/images/producto-demo.svg",
  },
  {
    id: "2",
    name: "Pisos tecnicos en caucho reciclado",
    shortDescription:
      "Soluciones de alto trafico para zonas industriales, deportivas, comerciales y educativas.",
    location: "Valle del Cauca, Colombia",
    provider: "EcoRubber Colombia S.A.S",
    category: "agroindustria",
    isNaturalRubber: false,
    image: "/images/producto-demo.svg",
  },
  {
    id: "3",
    name: "Granulado para transformacion",
    shortDescription:
      "Materia prima lista para mezclas, moldes y desarrollo de nuevos productos derivados del caucho.",
    location: "Meta, Colombia",
    provider: "Red Cauchera del Llano",
    category: "industria",
    isNaturalRubber: true,
    image: "/images/producto-demo.svg",
  },
  {
    id: "4",
    name: "Insumos para productores caucheros",
    shortDescription:
      "Herramientas, laminas, recipientes y elementos para mejorar la recoleccion y beneficio del latex.",
    location: "Caqueta, Colombia",
    provider: "Asociacion Productiva Amazorinoquia",
    category: "asociacion",
    isNaturalRubber: true,
    image: "/images/producto-demo.svg",
  },
];
