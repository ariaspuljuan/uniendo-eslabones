import { indicatorHistoryMock, indicatorSummaryMock } from "@/data/indicatorMocks";

type DatosAbiertosTrmRow = {
  valor?: string | number;
  vigenciadesde?: string;
  vigenciahasta?: string;
};

const trmApiUrl = "https://www.datos.gov.co/resource/ceyp-9c7c.json";
const trmSource = "Datos Abiertos Colombia / Superintendencia Financiera";
const trmRevalidateSeconds = 60 * 60 * 6;

function parseTrmValue(value: DatosAbiertosTrmRow["valor"]) {
  const parsed = Number(String(value ?? "").replace(",", "."));

  if (!Number.isFinite(parsed) || parsed <= 0) {
    throw new Error("Valor TRM inválido.");
  }

  return parsed;
}

function getIsoDate(value?: string) {
  return value ? value.slice(0, 10) : new Date().toISOString().slice(0, 10);
}

function formatShortDate(value?: string) {
  const isoDate = getIsoDate(value);
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return new Intl.DateTimeFormat("es-CO", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(date);
}

async function fetchTrmRows(limit: number) {
  const params = new URLSearchParams({
    $select: "valor,vigenciadesde,vigenciahasta",
    $order: "vigenciadesde DESC",
    $limit: String(limit),
  });
  const response = await fetch(`${trmApiUrl}?${params.toString()}`, {
    headers: { Accept: "application/json" },
    next: { revalidate: trmRevalidateSeconds },
  });

  if (!response.ok) {
    throw new Error("No fue posible consultar la TRM.");
  }

  return (await response.json()) as DatosAbiertosTrmRow[];
}

export async function getTrmIndicator() {
  try {
    const [latest, previous] = await fetchTrmRows(2);
    const latestValue = parseTrmValue(latest?.valor);
    const previousValue = previous ? parseTrmValue(previous.valor) : latestValue;
    const variationPercent =
      previousValue > 0 ? ((latestValue - previousValue) / previousValue) * 100 : 0;

    return {
      value: latestValue,
      currency: "COP" as const,
      variationPercent,
      source: trmSource,
      updatedAt: getIsoDate(latest?.vigenciadesde ?? latest?.vigenciahasta),
    };
  } catch {
    return {
      ...indicatorSummaryMock.trm,
      source: `${indicatorSummaryMock.trm.source} (respaldo local)`,
    };
  }
}

export async function getTrmHistory() {
  try {
    const rows = await fetchTrmRows(7);

    return rows
      .reverse()
      .map((row) => ({
        date: formatShortDate(row.vigenciadesde ?? row.vigenciahasta),
        value: parseTrmValue(row.valor),
      }));
  } catch {
    return indicatorHistoryMock.map((point) => ({
      date: point.date,
      value: point.trm,
    }));
  }
}
