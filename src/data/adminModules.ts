import type { AdminField, AdminModuleKey } from "@/types/admin";

export const adminModuleLabels: Record<AdminModuleKey, string> = {
  productos: "Productos",
  aliados: "Aliados / gremios",
  noticias: "Noticias",
};

export const adminModuleDescriptions: Record<AdminModuleKey, string> = {
  productos:
    "Carga productos con proveedor, imágenes, descripción comercial y datos base para el catálogo.",
  aliados:
    "Registra aliados con logo, descripción, contacto opcional y fecha de vinculación.",
  noticias:
    "Crea noticias o anuncios con imagen destacada, categoría, fecha y enlace externo.",
};

export const adminFields: Record<AdminModuleKey, AdminField[]> = {
  productos: [
    { name: "name", label: "Nombre del producto", type: "text", required: true },
    { name: "slug", label: "Slug URL", type: "text", placeholder: "se genera si lo dejas vacío" },
    {
      name: "category",
      label: "Categoría",
      type: "select",
      required: true,
      options: ["agroindustria", "asociación", "industria"],
    },
    { name: "provider", label: "Empresa proveedora", type: "text", required: true },
    { name: "location", label: "Ubicación", type: "text", required: true },
    { name: "shortDescription", label: "Descripción corta", type: "textarea", required: true },
    { name: "fullDescription", label: "Descripción completa", type: "textarea" },
    { name: "image", label: "Imagen principal", type: "text", placeholder: "/images/products/producto.webp" },
    { name: "gallery", label: "Galería", type: "textarea", placeholder: "Una ruta por línea" },
    { name: "sellerName", label: "Contacto vendedor", type: "text" },
    { name: "phone", label: "Teléfono", type: "tel" },
    { name: "email", label: "Correo", type: "email" },
    { name: "isNaturalRubber", label: "Caucho natural", type: "checkbox" },
  ],
  aliados: [
    { name: "name", label: "Nombre del aliado", type: "text", required: true },
    { name: "shortName", label: "Nombre corto", type: "text" },
    { name: "slug", label: "Slug URL", type: "text", placeholder: "se genera si lo dejas vacío" },
    {
      name: "type",
      label: "Tipo de aliado",
      type: "select",
      required: true,
      options: ["investigación", "financiero", "gremial", "sostenibilidad", "educación", "productivo"],
    },
    {
      name: "category",
      label: "Categoría",
      type: "select",
      required: true,
      options: ["institución", "academia", "empresa", "gremio", "sello"],
    },
    { name: "description", label: "Descripción corta", type: "textarea", required: true },
    { name: "longDescription", label: "Descripción completa", type: "textarea" },
    { name: "city", label: "Ciudad / alcance", type: "text", required: true },
    { name: "logo", label: "Logo", type: "text", placeholder: "/images/logos_aliados/logo.svg" },
    { name: "banner", label: "Banner", type: "text", placeholder: "/images/allies/banner.webp" },
    { name: "joinedAt", label: "Fecha de vinculación", type: "date", required: true },
    { name: "website", label: "Sitio web", type: "url" },
    { name: "phone", label: "Teléfono", type: "tel" },
    { name: "email", label: "Correo", type: "email" },
    { name: "focusAreas", label: "Focos", type: "textarea", placeholder: "Uno por línea" },
  ],
  noticias: [
    { name: "title", label: "Título", type: "text", required: true },
    { name: "slug", label: "Slug interno", type: "text", placeholder: "se genera si lo dejas vacío" },
    {
      name: "type",
      label: "Tipo",
      type: "select",
      required: true,
      options: ["noticia", "anuncio"],
    },
    {
      name: "category",
      label: "Categoría",
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
    { name: "ctaLabel", label: "Texto del botón", type: "text", placeholder: "Leer noticia" },
    { name: "featured", label: "Destacada", type: "checkbox" },
    { name: "urgent", label: "Mostrar como alerta", type: "checkbox" },
  ],
};
