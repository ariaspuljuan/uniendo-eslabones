import type { AdminField, AdminModuleKey } from "@/types/admin";

export const adminModuleLabels: Record<AdminModuleKey, string> = {
  productos: "Productos",
  aliados: "Aliados / gremios",
  noticias: "Noticias",
};

export const adminModuleDescriptions: Record<AdminModuleKey, string> = {
  productos:
    "Carga productos con proveedor, imagenes, descripcion comercial y datos base para el catalogo.",
  aliados:
    "Registra aliados con logo, descripcion, contacto opcional y fecha de vinculacion.",
  noticias:
    "Crea noticias o anuncios con imagen destacada, categoria, fecha y enlace externo.",
};

export const adminFields: Record<AdminModuleKey, AdminField[]> = {
  productos: [
    { name: "name", label: "Nombre del producto", type: "text", required: true },
    { name: "slug", label: "Slug URL", type: "text", placeholder: "se genera si lo dejas vacio" },
    {
      name: "category",
      label: "Categoria",
      type: "select",
      required: true,
      options: ["agroindustria", "asociacion", "industria"],
    },
    { name: "provider", label: "Empresa proveedora", type: "text", required: true },
    { name: "location", label: "Ubicacion", type: "text", required: true },
    { name: "shortDescription", label: "Descripcion corta", type: "textarea", required: true },
    { name: "fullDescription", label: "Descripcion completa", type: "textarea" },
    { name: "image", label: "Imagen principal", type: "text", placeholder: "/images/products/producto.webp" },
    { name: "gallery", label: "Galeria", type: "textarea", placeholder: "Una ruta por linea" },
    { name: "sellerName", label: "Contacto vendedor", type: "text" },
    { name: "phone", label: "Telefono", type: "tel" },
    { name: "email", label: "Correo", type: "email" },
    { name: "isNaturalRubber", label: "Caucho natural", type: "checkbox" },
  ],
  aliados: [
    { name: "name", label: "Nombre del aliado", type: "text", required: true },
    { name: "shortName", label: "Nombre corto", type: "text" },
    { name: "slug", label: "Slug URL", type: "text", placeholder: "se genera si lo dejas vacio" },
    {
      name: "type",
      label: "Tipo de aliado",
      type: "select",
      required: true,
      options: ["investigacion", "financiero", "gremial", "sostenibilidad", "educacion", "productivo"],
    },
    {
      name: "category",
      label: "Categoria",
      type: "select",
      required: true,
      options: ["institucion", "academia", "empresa", "gremio", "sello"],
    },
    { name: "description", label: "Descripcion corta", type: "textarea", required: true },
    { name: "longDescription", label: "Descripcion completa", type: "textarea" },
    { name: "city", label: "Ciudad / alcance", type: "text", required: true },
    { name: "logo", label: "Logo", type: "text", placeholder: "/images/logos_aliados/logo.svg" },
    { name: "banner", label: "Banner", type: "text", placeholder: "/images/allies/banner.webp" },
    { name: "joinedAt", label: "Fecha de vinculacion", type: "date", required: true },
    { name: "website", label: "Sitio web", type: "url" },
    { name: "phone", label: "Telefono", type: "tel" },
    { name: "email", label: "Correo", type: "email" },
    { name: "focusAreas", label: "Focos", type: "textarea", placeholder: "Uno por linea" },
  ],
  noticias: [
    { name: "title", label: "Titulo", type: "text", required: true },
    { name: "slug", label: "Slug interno", type: "text", placeholder: "se genera si lo dejas vacio" },
    {
      name: "type",
      label: "Tipo",
      type: "select",
      required: true,
      options: ["noticia", "anuncio"],
    },
    {
      name: "category",
      label: "Categoria",
      type: "select",
      required: true,
      options: ["sector", "productos", "eventos", "convocatorias"],
    },
    { name: "summary", label: "Resumen", type: "textarea", required: true },
    { name: "source", label: "Fuente", type: "text", required: true },
    { name: "date", label: "Fecha", type: "date", required: true },
    { name: "image", label: "Imagen destacada", type: "text", placeholder: "/images/news/noticia.webp" },
    { name: "banner", label: "Banner", type: "text", placeholder: "/images/news/banner.webp" },
    { name: "externalUrl", label: "Link externo", type: "url", required: true },
    { name: "ctaLabel", label: "Texto del boton", type: "text", placeholder: "Leer noticia" },
    { name: "featured", label: "Destacada", type: "checkbox" },
    { name: "urgent", label: "Mostrar como alerta", type: "checkbox" },
  ],
};
