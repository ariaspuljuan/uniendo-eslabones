"use client";

import { useMemo, useState } from "react";
import type {
  CalculatorResult,
  IndicatorSummary,
  RubberType,
} from "@/types/indicators";

const currencyCOP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

type PriceCalculatorProps = {
  summary: IndicatorSummary;
};

export function PriceCalculator({ summary }: PriceCalculatorProps) {
  const [quantity, setQuantity] = useState("1");
  const [unit, setUnit] = useState<"kg" | "ton">("ton");
  const [rubberType, setRubberType] = useState<RubberType>("TSR20");
  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState("");

  const selected = useMemo(
    () => summary.rubber.find((item) => item.type === rubberType),
    [rubberType, summary.rubber],
  );

  async function calculate() {
    setIsCalculating(true);
    setError("");

    try {
      const response = await fetch("/api/indicators/calculator", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          quantity: Number(quantity),
          unit,
          rubberType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message ?? "No fue posible calcular.");
      }

      setResult(data as CalculatorResult);
    } catch (calculateError) {
      setError(
        calculateError instanceof Error
          ? calculateError.message
          : "No fue posible calcular.",
      );
    } finally {
      setIsCalculating(false);
    }
  }

  return (
    <article className="rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Conversor
          </p>
          <h2 className="mt-2 text-2xl font-black">Precio internacional a COP</h2>
        </div>
        <div className="rounded-2xl bg-[var(--color-surface-2)] px-3 py-2 text-right">
          <p className="text-[10px] font-black uppercase text-[var(--color-muted)]">
            TRM
          </p>
          <p className="text-sm font-black">{currencyCOP.format(summary.trm.value)}</p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto]">
        <label className="grid gap-2 text-sm font-bold text-[var(--color-muted)]">
          Cantidad
          <input
            value={quantity}
            onChange={(event) => setQuantity(event.target.value)}
            inputMode="decimal"
            className="min-h-12 rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-bg)] px-4 text-lg font-black text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
          />
        </label>
        <label className="grid gap-2 text-sm font-bold text-[var(--color-muted)]">
          Unidad
          <select
            value={unit}
            onChange={(event) => setUnit(event.target.value as "kg" | "ton")}
            className="min-h-12 rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-bg)] px-4 font-black text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
          >
            <option value="kg">Kg</option>
            <option value="ton">Toneladas</option>
          </select>
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-bold text-[var(--color-muted)]">
        Tipo de caucho
        <select
          value={rubberType}
          onChange={(event) => setRubberType(event.target.value as RubberType)}
          className="min-h-12 rounded-2xl border border-[color:var(--color-border)] bg-[var(--color-bg)] px-4 font-black text-[var(--color-text)] outline-none focus:border-[var(--color-accent)]"
        >
          {summary.rubber.map((item) => (
            <option key={item.type} value={item.type}>
              {item.type} - USD {item.priceUSDPerKg.toFixed(2)}/kg
            </option>
          ))}
        </select>
      </label>

      <button
        type="button"
        onClick={calculate}
        disabled={isCalculating}
        className="mt-5 min-h-12 w-full rounded-2xl bg-[var(--color-accent)] px-5 text-sm font-black text-white shadow-lg shadow-blue-950/20 transition hover:bg-[var(--color-accent-strong)] disabled:opacity-60"
      >
        {isCalculating ? "Calculando..." : "Calcular referencia"}
      </button>

      {error ? (
        <p className="mt-4 rounded-2xl bg-rose-100 p-3 text-sm font-bold text-rose-700">
          {error}
        </p>
      ) : null}

      <div className="mt-5 rounded-3xl bg-[var(--color-surface-2)] p-4">
        <p className="text-xs font-black uppercase tracking-wide text-[var(--color-muted)]">
          Resultado estimado
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <Metric
            label="COP / kg"
            value={currencyCOP.format(
              result?.priceCOPPerKg ??
                (selected?.priceUSDPerKg ?? 0) * summary.trm.value,
            )}
          />
          <Metric
            label="COP / ton"
            value={currencyCOP.format(
              result?.priceCOPPerTon ??
                (selected?.priceUSDPerKg ?? 0) * summary.trm.value * 1000,
            )}
          />
          <Metric
            label="Total"
            value={currencyCOP.format(result?.valueTotalCOP ?? 0)}
          />
        </div>
        <p className="mt-4 text-xs leading-5 text-[var(--color-muted)]">
          Este cálculo es referencial y no reemplaza acuerdos comerciales,
          costos logísticos, calidad, humedad, transporte ni condiciones
          contractuales.
        </p>
      </div>
    </article>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-black uppercase text-[var(--color-muted)]">
        {label}
      </p>
      <p className="mt-1 text-lg font-black">{value}</p>
    </div>
  );
}
