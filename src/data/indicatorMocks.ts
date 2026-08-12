import type {
  IndicatorHistoryPoint,
  IndicatorSummary,
} from "@/types/indicators";

export const indicatorSummaryMock: IndicatorSummary = {
  updatedAt: "2026-08-12T08:00:00-05:00",
  trm: {
    value: 3121.07,
    currency: "COP",
    variationPercent: -0.14,
    source: "Banco de la República / Datos Abiertos Colombia",
    updatedAt: "2026-08-12",
  },
  rubber: [
    {
      type: "TSR20",
      priceUSDPerKg: 2.21,
      variationPercent: 1.28,
      market: "Singapur",
      source: "RTAS / SGX SICOM",
      updatedAt: "2026-08-12",
      available: true,
    },
    {
      type: "Latex",
      priceUSDPerKg: 1.69,
      variationPercent: 0,
      market: "Tailandia",
      source: "Thai Latex Association",
      updatedAt: "2026-08-12",
      available: true,
    },
    {
      type: "SMR20",
      priceUSDPerKg: 2.29,
      variationPercent: 2.04,
      market: "Malasia",
      source: "Malaysian Rubber Board vía RTAS",
      updatedAt: "2026-08-12",
      available: true,
    },
    {
      type: "STR20",
      priceUSDPerKg: 2.39,
      variationPercent: 0,
      market: "Tailandia",
      source: "IRCo Physical Spot Prices TIM",
      updatedAt: "2026-07-17",
      available: true,
    },
    {
      type: "Caucho seco",
      priceUSDPerKg: 2.06,
      variationPercent: 2.49,
      market: "Referencia estimada Colombia",
      source: "Modelo interno referencial basado en TSR20, látex y SMR20",
      updatedAt: "2026-08-12",
      available: true,
    },
  ],
};

export const indicatorHistoryMock: IndicatorHistoryPoint[] = [
  { date: "1 ago", trm: 3144.14, tsr20: 2.18, latex: 1.7, smr20: 2.24, str20: 2.39 },
  { date: "4 ago", trm: 3230.44, tsr20: 2.19, latex: 1.7, smr20: 2.25, str20: 2.39 },
  { date: "5 ago", trm: 3204.51, tsr20: 2.19, latex: 1.7, smr20: 2.26, str20: 2.39 },
  { date: "6 ago", trm: 3179.4, tsr20: 2.2, latex: 1.7, smr20: 2.27, str20: 2.39 },
  { date: "7 ago", trm: 3157.43, tsr20: 2.2, latex: 1.7, smr20: 2.27, str20: 2.39 },
  { date: "11 ago", trm: 3125.47, tsr20: 2.21, latex: 1.685, smr20: 2.29, str20: 2.39 },
  { date: "12 ago", trm: 3121.07, tsr20: 2.21, latex: 1.685, smr20: 2.29, str20: 2.39 },
];
