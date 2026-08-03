import type {
  IndicatorHistoryPoint,
  IndicatorSummary,
} from "@/types/indicators";

export const indicatorSummaryMock: IndicatorSummary = {
  updatedAt: "2026-08-03T08:00:00-05:00",
  trm: {
    value: 3144.14,
    currency: "COP",
    variationPercent: 0.37,
    source: "Banco de la República / Datos Abiertos Colombia",
    updatedAt: "2026-08-03",
  },
  rubber: [
    {
      type: "TSR20",
      priceUSDPerKg: 2.18,
      variationPercent: -0.32,
      market: "Singapur",
      source: "RTAS / SGX SICOM",
      updatedAt: "2026-07-28",
      available: true,
    },
    {
      type: "Latex",
      priceUSDPerKg: 1.72,
      variationPercent: 0.29,
      market: "Tailandia",
      source: "Thai Latex Association",
      updatedAt: "2026-07-29",
      available: true,
    },
    {
      type: "SMR20",
      priceUSDPerKg: 2.24,
      variationPercent: 0.86,
      market: "Malasia",
      source: "Malaysian Rubber Board vía RTAS",
      updatedAt: "2026-07-28",
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
      priceUSDPerKg: 2.01,
      variationPercent: -1.95,
      market: "Referencia estimada Colombia",
      source: "Modelo interno referencial",
      updatedAt: "2026-08-03",
      available: true,
    },
  ],
};

export const indicatorHistoryMock: IndicatorHistoryPoint[] = [
  { date: "24 jul", trm: 3219.31, tsr20: 2.18, latex: 1.715, smr20: 2.2205, str20: 2.39 },
  { date: "25 jul", trm: 3210.56, tsr20: 2.18, latex: 1.715, smr20: 2.2205, str20: 2.39 },
  { date: "28 jul", trm: 3205.8, tsr20: 2.18, latex: 1.72, smr20: 2.2395, str20: 2.39 },
  { date: "29 jul", trm: 3205.87, tsr20: 2.18, latex: 1.72, smr20: 2.2395, str20: 2.39 },
  { date: "30 jul", trm: 3206.18, tsr20: 2.18, latex: 1.72, smr20: 2.2395, str20: 2.39 },
  { date: "31 jul", trm: 3132.42, tsr20: 2.18, latex: 1.72, smr20: 2.2395, str20: 2.39 },
  { date: "1 ago", trm: 3144.14, tsr20: 2.18, latex: 1.72, smr20: 2.2395, str20: 2.39 },
];
