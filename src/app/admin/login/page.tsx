import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin/AdminLoginForm";

export const metadata = {
  title: "Ingreso administrador | Uniendo Eslabones",
  description: "Acceso privado al panel administrador de Uniendo Eslabones.",
};

export default function AdminLoginPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[var(--color-bg-soft)] px-5 py-28 text-[var(--color-text)]">
      <Suspense fallback={null}>
        <AdminLoginForm />
      </Suspense>
    </main>
  );
}
