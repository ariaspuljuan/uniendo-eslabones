export type ProductCategory = "agroindustria" | "asociacion" | "industria";

export type SupplierContact = {
  sellerName: string;
  role: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  website?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
};

export type Supplier = {
  id: string;
  name: string;
  description: string;
  city: string;
  logo: string;
  banner: string;
  contact: SupplierContact;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  provider: string;
  category: ProductCategory;
  isNaturalRubber: boolean;
  image: string;
  gallery: string[];
  specs: Array<{
    label: string;
    value: string;
  }>;
  applications: string[];
  supplier: Supplier;
};

export type Organization = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  type: "investigacion" | "financiero" | "gremial" | "sostenibilidad" | "educacion" | "productivo";
  category: "institucion" | "academia" | "empresa" | "gremio" | "sello";
  city: string;
  logo: string;
  banner: string;
  joinedAt: string;
  website?: string;
  phone?: string;
  email?: string;
  gallery: string[];
  focusAreas: string[];
};

export type NewsItem = {
  id: string;
  type: "noticia" | "anuncio";
  category: "sector" | "productos" | "eventos" | "convocatorias";
  title: string;
  summary: string;
  source: string;
  date: string;
  image: string;
  banner: string;
  externalUrl: string;
  featured?: boolean;
  urgent?: boolean;
  ctaLabel: string;
};
