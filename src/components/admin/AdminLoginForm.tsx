"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

export function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("adminUE");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "No fue posible ingresar.");
      }

      router.replace(searchParams.get("next") || "/gestion-ue");
      router.refresh();
    } catch (loginError) {
      setError(
        loginError instanceof Error
          ? loginError.message
          : "No fue posible ingresar.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-md rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-card)]"
    >
      <div className="mb-6">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Acceso privado
        </p>
        <h1 className="mt-3 text-3xl font-black">Ingreso administrador</h1>
        <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
          Usa las credenciales autorizadas para cargar productos, aliados y
          noticias.
        </p>
      </div>

      <label className="grid gap-2 text-sm font-black text-[var(--color-muted)]">
        Usuario
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          autoComplete="username"
          className="min-h-12 rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-bg)] px-4 text-base font-bold text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
        />
      </label>

      <label className="mt-4 grid gap-2 text-sm font-black text-[var(--color-muted)]">
        Contraseña
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
          className="min-h-12 rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-bg)] px-4 text-base font-bold text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
        />
      </label>

      {error ? (
        <p className="mt-4 rounded-2xl bg-rose-100 p-3 text-sm font-black text-rose-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isLoading}
        className="mt-6 min-h-12 w-full rounded-2xl bg-[var(--color-accent)] px-5 text-sm font-black text-white shadow-lg shadow-blue-950/20 transition hover:bg-[var(--color-accent-strong)] disabled:opacity-60"
      >
        {isLoading ? "Ingresando..." : "Ingresar al panel"}
      </button>
    </form>
  );
}
