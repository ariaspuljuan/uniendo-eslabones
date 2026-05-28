"use client";

import { useEffect, useState } from "react";
import { DashboardFilters } from "@/components/dashboard/DashboardFilters";
import { IndicatorCard } from "@/components/dashboard/IndicatorCard";
import { MarketSummary } from "@/components/dashboard/MarketSummary";
import { PriceCalculator } from "@/components/dashboard/PriceCalculator";
import { RubberChart } from "@/components/dashboard/RubberChart";
import type {
  IndicatorHistoryPoint,
  IndicatorSummary,
  RubberIndicator,
} from "@/types/indicators";

const currencyCOP = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export function DashboardClient() {
  const [summary, setSummary] = useState<IndicatorSummary | null>(null);
  const [history, setHistory] = useState<IndicatorHistoryPoint[]>([]);
  const [filter, setFilter] = useState("7 dias");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadDashboard() {
      try {
        const [summaryResponse, historyResponse] = await Promise.all([
          fetch("/api/indicators/summary"),
          fetch("/api/indicators/history"),
        ]);

        if (!summaryResponse.ok || !historyResponse.ok) {
          throw new Error("Una fuente no respondió correctamente.");
        }

        setSummary((await summaryResponse.json()) as IndicatorSummary);
        setHistory((await historyResponse.json()) as IndicatorHistoryPoint[]);
      } catch (loadError) {
        setError(
          loadError instanceof Error
            ? loadError.message
            : "No fue posible cargar indicadores.",
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (error || !summary) {
    return (
      <div className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-800">
        <h2 className="text-2xl font-black">Fuente no disponible</h2>
        <p className="mt-2 font-medium">
          {error || "No fue posible cargar los indicadores."}
        </p>
      </div>
    );
  }

  const rubberByType = (type: RubberIndicator["type"]) =>
    summary.rubber.find((item) => item.type === type);

  const tsr20 = rubberByType("TSR20");
  const latex = rubberByType("Latex");
  const smr20 = rubberByType("SMR20");
  const str20 = rubberByType("STR20");

  return (
    <div className="grid gap-8">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        <IndicatorCard
          label="TRM actual USD/COP"
          value={currencyCOP.format(summary.trm.value)}
          meta={`Actualizado ${summary.trm.updatedAt}`}
          source={summary.trm.source}
          variation={summary.trm.variationPercent}
          accent="blue"
        />
        <RubberKpi indicator={tsr20} accent="green" />
        <RubberKpi indicator={latex} accent="yellow" />
        <RubberKpi indicator={smr20} accent="blue" />
        <RubberKpi indicator={str20} accent="green" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[.9fr_1.1fr]">
        <PriceCalculator summary={summary} />
        <div className="grid gap-6">
          <div className="flex flex-col justify-between gap-4 rounded-3xl border border-[color:var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-card)] sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Tendencia
              </p>
              <h2 className="mt-2 text-2xl font-black">Mercado semanal</h2>
            </div>
            <DashboardFilters active={filter} onChange={setFilter} />
          </div>
          <RubberChart
            title={`Comparación TRM vs caucho - ${filter}`}
            history={history}
            series={[
              { key: "tsr20", label: "TSR20", color: "#3365bb" },
              { key: "latex", label: "Latex", color: "#5dc511" },
              { key: "smr20", label: "SMR20", color: "#ffb500" },
              { key: "str20", label: "STR20", color: "#0f766e" },
            ]}
          />
        </div>
      </section>

      <RubberChart
        title="Evolución TRM"
        history={history}
        series={[{ key: "trm", label: "USD/COP", color: "#3365bb" }]}
      />

      <MarketSummary />
    </div>
  );
}

function RubberKpi({
  indicator,
  accent,
}: {
  indicator?: RubberIndicator;
  accent: "blue" | "green" | "yellow";
}) {
  if (!indicator) {
    return (
      <IndicatorCard
        label="Dato no disponible"
        value="N/D"
        meta="Pendiente de fuente"
        source="Sin fuente"
        accent={accent}
      />
    );
  }

  return (
    <IndicatorCard
      label={`${indicator.type} internacional`}
      value={`${usd.format(indicator.priceUSDPerKg)} / kg`}
      meta={`${indicator.market} - ${indicator.updatedAt}`}
      source={indicator.source}
      variation={indicator.variationPercent}
      accent={accent}
    />
  );
}

function DashboardSkeleton() {
  return (
    <div className="grid gap-6">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-48 animate-pulse rounded-3xl bg-[var(--color-surface-2)]"
          />
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <div className="h-96 animate-pulse rounded-3xl bg-[var(--color-surface-2)]" />
        <div className="h-96 animate-pulse rounded-3xl bg-[var(--color-surface-2)]" />
      </div>
    </div>
  );
}
