export type AdminModuleKey = "productos" | "aliados" | "noticias";

export type AdminField = {
  name: string;
  label: string;
  type: "text" | "textarea" | "select" | "date" | "url" | "email" | "tel" | "checkbox";
  required?: boolean;
  placeholder?: string;
  options?: string[];
};

export type AdminRecord = {
  id: string;
  module: AdminModuleKey;
  status: "borrador" | "listo";
  createdAt: string;
  data: Record<string, string | boolean | string[]>;
};
