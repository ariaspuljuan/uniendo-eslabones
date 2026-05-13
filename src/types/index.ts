export type ProductCategory = "agroindustria" | "asociacion" | "industria";

export type Product = {
  id: string;
  name: string;
  shortDescription: string;
  location: string;
  provider: string;
  category: ProductCategory;
  isNaturalRubber: boolean;
  image: string;
};

export type Organization = {
  id: string;
  name: string;
  description: string;
  type: string;
  category: ProductCategory;
  city: string;
  logo: string;
};

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  source: string;
  date: string;
  image: string;
  externalUrl: string;
  featured?: boolean;
};