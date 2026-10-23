import type {
  IndicatorHistoryPoint,
  IndicatorSummary,
} from "@/types/indicators";

export const indicatorSummaryMock: IndicatorSummary = {
  updatedAt: "2026-10-23",
  trm: {
    value: 3185.01,
    currency: "COP",
    variationPercent: -0.2024,
    source: "Datos Abiertos Colombia / Superintendencia Financiera",
    updatedAt: "2026-10-23",
  },
  rubber: [
    {
      type: "TSR20",
      priceUSDPerKg: 2.543,
      variationPercent: -0.6641,
      market: "Singapur",
      source: "RTAS / SGX SICOM, futuro noviembre 2026 (cierre 22 oct)",
      updatedAt: "2026-10-23",
      available: true,
    },
    {
      type: "Latex",
      priceUSDPerKg: 1.92,
      variationPercent: 0,
      market: "Tailandia",
      source: "Thai Latex Association",
      updatedAt: "2026-10-23",
      available: true,
    },
    {
      type: "SMR20",
      priceUSDPerKg: 2.6015,
      variationPercent: 0.6383,
      market: "Malasia",
      source: "Malaysian Rubber Board vía RTAS",
      updatedAt: "2026-10-23",
      available: true,
    },
    {
      type: "STR20",
      priceUSDPerKg: 2.6789,
      market: "Tailandia",
      source: "IRCo Physical Spot Prices TIM",
      updatedAt: "2026-10-20",
      available: true,
    },
    {
      type: "Caucho seco",
      priceUSDPerKg: 2.06,
      market: "Referencia estimada Colombia",
      source: "Estimación histórica sin metodología documentada; no disponible para cálculo",
      updatedAt: "2026-08-12",
      available: false,
    },
  ],
};

// Fechas de publicación de las referencias; TSR20 corresponde al cierre previo.
// STR20 solo tiene una observación verificada: no se interpola ni se arrastra.
export const indicatorHistoryMock: IndicatorHistoryPoint[] = [
  { date: "15 oct 2026", trm: 3197.65, tsr20: 2.586, latex: 1.95, smr20: 2.5645, str20: null },
  { date: "16 oct 2026", trm: 3170.46, tsr20: 2.547, latex: 1.95, smr20: 2.579, str20: null },
  { date: "19 oct 2026", trm: 3174.67, tsr20: 2.564, latex: 1.92, smr20: 2.5895, str20: null },
  { date: "20 oct 2026", trm: 3156.32, tsr20: 2.562, latex: 1.915, smr20: 2.6155, str20: 2.6789 },
  { date: "21 oct 2026", trm: 3163.76, tsr20: 2.581, latex: 1.92, smr20: 2.591, str20: null },
  { date: "22 oct 2026", trm: 3191.47, tsr20: 2.56, latex: 1.92, smr20: 2.585, str20: null },
  { date: "23 oct 2026", trm: 3185.01, tsr20: 2.543, latex: 1.92, smr20: 2.6015, str20: null },
];
