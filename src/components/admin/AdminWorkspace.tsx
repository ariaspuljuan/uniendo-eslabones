"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  adminFields,
  adminModuleDescriptions,
  adminModuleLabels,
} from "@/data/adminModules";
import type { AdminField, AdminModuleKey, AdminRecord } from "@/types/admin";

const storageKey = "uniendo-eslabones-admin-records-v1";
const modules: AdminModuleKey[] = ["productos", "aliados", "noticias"];

type FormState = Record<string, string | boolean>;
type RecordsState = Record<AdminModuleKey, AdminRecord[]>;

const emptyRecords: RecordsState = {
  productos: [],
  aliados: [],
  noticias: [],
};

function createId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function buildInitialForm(module: AdminModuleKey): FormState {
  return adminFields[module].reduce<FormState>((accumulator, field) => {
    accumulator[field.name] = field.type === "checkbox" ? false : "";
    return accumulator;
  }, {});
}

export function AdminWorkspace() {
  const [activeModule, setActiveModule] = useState<AdminModuleKey>("productos");
  const hasLoadedRecords = useRef(false);
  const [records, setRecords] = useState<RecordsState>(emptyRecords);
  const [forms, setForms] = useState<Record<AdminModuleKey, FormState>>({
    productos: buildInitialForm("productos"),
    aliados: buildInitialForm("aliados"),
    noticias: buildInitialForm("noticias"),
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const stored = window.localStorage.getItem(storageKey);

        if (stored) {
          setRecords(JSON.parse(stored) as RecordsState);
        }
      } finally {
        hasLoadedRecords.current = true;
      }
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hasLoadedRecords.current) {
      return;
    }

    window.localStorage.setItem(storageKey, JSON.stringify(records));
  }, [records]);

  const currentFields = adminFields[activeModule];
  const currentForm = forms[activeModule];
  const currentRecords = records[activeModule];

  const preview = useMemo(
    () =>
      JSON.stringify(
        {
          module: activeModule,
          data: normalizeData(currentForm),
        },
        null,
        2,
      ),
    [activeModule, currentForm],
  );

  function updateField(field: AdminField, value: string | boolean) {
    setForms((previous) => ({
      ...previous,
      [activeModule]: {
        ...previous[activeModule],
        [field.name]: value,
      },
    }));
  }

  function saveRecord(status: AdminRecord["status"]) {
    const missing = currentFields.find((field) => {
      const value = currentForm[field.name];
      return field.required && (!value || value === "");
    });

    if (missing) {
      setMessage(`Falta completar: ${missing.label}`);
      return;
    }

    const data = normalizeData(currentForm);
    const nameLike =
      String(data.name || data.title || data.provider || "registro") || "registro";

    if (!data.slug) {
      data.slug = slugify(nameLike);
    }

    const record: AdminRecord = {
      id: createId(),
      module: activeModule,
      status,
      createdAt: new Date().toISOString(),
      data,
    };

    setRecords((previous) => ({
      ...previous,
      [activeModule]: [record, ...previous[activeModule]],
    }));
    setForms((previous) => ({
      ...previous,
      [activeModule]: buildInitialForm(activeModule),
    }));
    setMessage(`${adminModuleLabels[activeModule]} guardado como ${status}.`);
  }

  function removeRecord(id: string) {
    setRecords((previous) => ({
      ...previous,
      [activeModule]: previous[activeModule].filter((record) => record.id !== id),
    }));
  }

  function exportJson() {
    const payload = JSON.stringify(currentRecords, null, 2);
    const blob = new Blob([payload], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `uniendo-${activeModule}.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  async function copyPreview() {
    try {
      await navigator.clipboard.writeText(preview);
      setMessage("JSON copiado al portapapeles.");
    } catch {
      setMessage("No fue posible copiar. Puedes seleccionar el JSON manualmente.");
    }
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    window.location.href = "/gestion-ue/login";
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[280px_1fr]">
      <aside className="rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-4 shadow-[var(--shadow-card)] xl:sticky xl:top-28 xl:self-start">
        <div className="flex items-center justify-between gap-3 px-2">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Módulos
          </p>
          <button
            type="button"
            onClick={logout}
            className="rounded-full bg-rose-100 px-3 py-1 text-xs font-black text-rose-700"
          >
            Salir
          </button>
        </div>
        <div className="mt-4 grid gap-2">
          {modules.map((module) => (
            <button
              key={module}
              type="button"
              onClick={() => {
                setActiveModule(module);
                setMessage("");
              }}
              className={`rounded-2xl px-4 py-4 text-left transition ${
                activeModule === module
                  ? "bg-[var(--color-accent)] text-white shadow-lg shadow-blue-950/20"
                  : "bg-[var(--color-surface-2)] text-[var(--color-text)] hover:bg-[var(--color-accent-soft)]"
              }`}
            >
              <span className="block text-sm font-black">
                {adminModuleLabels[module]}
              </span>
              <span className="mt-1 block text-xs opacity-80">
                {records[module].length} registros locales
              </span>
            </button>
          ))}
        </div>
      </aside>

      <section className="grid gap-6">
        <div className="rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Cargue de datos
              </p>
              <h2 className="mt-2 text-3xl font-black">
                {adminModuleLabels[activeModule]}
              </h2>
              <p className="mt-2 max-w-2xl leading-7 text-[var(--color-muted)]">
                {adminModuleDescriptions[activeModule]}
              </p>
            </div>
            <div className="rounded-2xl bg-[var(--color-surface-2)] px-4 py-3 text-sm font-bold text-[var(--color-muted)]">
              Guardado local en navegador
            </div>
          </div>

          {message ? (
            <p className="mt-5 rounded-2xl bg-[var(--color-accent-soft)] p-3 text-sm font-black text-[var(--color-accent-strong)]">
              {message}
            </p>
          ) : null}

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {currentFields.map((field) => (
              <AdminInput
                key={field.name}
                field={field}
                value={currentForm[field.name]}
                onChange={(value) => updateField(field, value)}
              />
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => saveRecord("listo")}
              className="min-h-12 rounded-2xl bg-[var(--color-accent)] px-5 text-sm font-black text-white shadow-lg shadow-blue-950/20 transition hover:bg-[var(--color-accent-strong)]"
            >
              Guardar registro
            </button>
            <button
              type="button"
              onClick={() => saveRecord("borrador")}
              className="min-h-12 rounded-2xl border border-[color:var(--color-border)] px-5 text-sm font-black text-[var(--color-text)] transition hover:bg-[var(--color-surface-2)]"
            >
              Guardar borrador
            </button>
            <button
              type="button"
              onClick={copyPreview}
              className="min-h-12 rounded-2xl border border-[color:var(--color-border)] px-5 text-sm font-black text-[var(--color-text)] transition hover:bg-[var(--color-surface-2)]"
            >
              Copiar JSON
            </button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
          <article className="rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-black">Vista JSON</h3>
              <button
                type="button"
                onClick={exportJson}
                className="rounded-2xl bg-[var(--color-warning)] px-4 py-2 text-xs font-black text-[#13233f]"
              >
                Exportar módulo
              </button>
            </div>
            <pre className="mt-4 max-h-[420px] overflow-auto rounded-2xl bg-[#071426] p-4 text-xs leading-6 text-white">
              {preview}
            </pre>
          </article>

          <article className="rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
            <h3 className="text-2xl font-black">Registros cargados</h3>
            <div className="mt-4 grid gap-3">
              {currentRecords.length === 0 ? (
                <p className="rounded-2xl bg-[var(--color-surface-2)] p-4 text-sm font-bold text-[var(--color-muted)]">
                  Aún no hay registros en este módulo.
                </p>
              ) : (
                currentRecords.map((record) => (
                  <div
                    key={record.id}
                    className="rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-bg)] p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-lg font-black">
                          {String(record.data.name || record.data.title || "Sin nombre")}
                        </p>
                        <p className="mt-1 text-xs font-bold uppercase text-[var(--color-muted)]">
                          {record.status} · {new Date(record.createdAt).toLocaleDateString("es-CO")}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeRecord(record.id)}
                        className="rounded-full bg-rose-100 px-3 py-1 text-xs font-black text-rose-700"
                      >
                        Quitar
                      </button>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-[var(--color-muted)]">
                      {String(record.data.description || record.data.summary || record.data.shortDescription || "Sin descripción")}
                    </p>
                  </div>
                ))
              )}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

function AdminInput({
  field,
  value,
  onChange,
}: {
  field: AdminField;
  value: string | boolean;
  onChange: (value: string | boolean) => void;
}) {
  const baseClass =
    "min-h-12 rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-bg)] px-4 text-sm font-bold text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)]";

  if (field.type === "checkbox") {
    return (
      <label className="flex min-h-12 items-center gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-bg)] px-4 text-sm font-black text-[var(--color-text)]">
        <input
          type="checkbox"
          checked={Boolean(value)}
          onChange={(event) => onChange(event.target.checked)}
          className="h-5 w-5 accent-[var(--color-accent)]"
        />
        {field.label}
      </label>
    );
  }

  return (
    <label className={field.type === "textarea" ? "grid gap-2 md:col-span-2" : "grid gap-2"}>
      <span className="text-sm font-black text-[var(--color-muted)]">
        {field.label}
        {field.required ? " *" : ""}
      </span>
      {field.type === "textarea" ? (
        <textarea
          value={String(value)}
          onChange={(event) => onChange(event.target.value)}
          placeholder={field.placeholder}
          rows={4}
          className={`${baseClass} resize-y py-3`}
        />
      ) : field.type === "select" ? (
        <select
          value={String(value)}
          onChange={(event) => onChange(event.target.value)}
          className={baseClass}
        >
          <option value="">Seleccionar</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={field.type}
          value={String(value)}
          onChange={(event) => onChange(event.target.value)}
          placeholder={field.placeholder}
          className={baseClass}
        />
      )}
    </label>
  );
}

function normalizeData(form: FormState) {
  const listFields = new Set(["gallery", "focusAreas"]);

  return Object.fromEntries(
    Object.entries(form).map(([key, value]) => {
      if (typeof value === "string") {
        if (listFields.has(key)) {
          return [
            key,
            value
              .split(/\r?\n/)
              .map((item) => item.trim())
              .filter(Boolean),
          ];
        }

        return [key, value.trim()];
      }

      return [key, value];
    }),
  ) as Record<string, string | boolean | string[]>;
}
