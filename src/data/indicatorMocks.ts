import type {
  IndicatorHistoryPoint,
  IndicatorSummary,
} from "@/types/indicators";

export const indicatorSummaryMock: IndicatorSummary = {
  updatedAt: "2026-05-26T08:30:00-05:00",
  trm: {
    value: 3900,
    currency: "COP",
    variationPercent: 0.18,
    source: "Banco de la República / Datos Abiertos Colombia",
    updatedAt: "2026-05-26",
  },
  rubber: [
    {
      type: "TSR20",
      priceUSDPerKg: 2.22,
      variationPercent: 1.12,
      market: "Singapur",
      source: "SGX / Investing",
      updatedAt: "2026-05-26",
      available: true,
    },
    {
      type: "Latex",
      priceUSDPerKg: 2.3,
      variationPercent: 0.74,
      market: "Malasia",
      source: "ANRPC / Malaysian Rubber Board",
      updatedAt: "2026-05-26",
      available: true,
    },
    {
      type: "SMR20",
      priceUSDPerKg: 2.18,
      variationPercent: -0.21,
      market: "Malasia",
      source: "Malaysian Rubber Exchange",
      updatedAt: "2026-05-26",
      available: true,
    },
    {
      type: "STR20",
      priceUSDPerKg: 2.2,
      variationPercent: 0.36,
      market: "Tailandia / Asia",
      source: "ANRPC referencia regional",
      updatedAt: "2026-05-26",
      available: true,
    },
    {
      type: "Caucho seco",
      priceUSDPerKg: 2.05,
      variationPercent: 0.09,
      market: "Referencia estimada Colombia",
      source: "Modelo interno referencial",
      updatedAt: "2026-05-26",
      available: true,
    },
  ],
};

export const indicatorHistoryMock: IndicatorHistoryPoint[] = [
  { date: "May 20", trm: 3865, tsr20: 2.12, latex: 2.2, smr20: 2.1, str20: 2.11 },
  { date: "May 21", trm: 3874, tsr20: 2.15, latex: 2.22, smr20: 2.12, str20: 2.14 },
  { date: "May 22", trm: 3882, tsr20: 2.16, latex: 2.25, smr20: 2.13, str20: 2.15 },
  { date: "May 23", trm: 3890, tsr20: 2.18, latex: 2.27, smr20: 2.15, str20: 2.17 },
  { date: "May 24", trm: 3886, tsr20: 2.17, latex: 2.26, smr20: 2.14, str20: 2.16 },
  { date: "May 25", trm: 3893, tsr20: 2.19, latex: 2.28, smr20: 2.16, str20: 2.18 },
  { date: "May 26", trm: 3900, tsr20: 2.22, latex: 2.3, smr20: 2.18, str20: 2.2 },
];
