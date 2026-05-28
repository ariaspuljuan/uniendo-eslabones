export type RubberType = "TSR20" | "Latex" | "SMR20" | "STR20" | "Caucho seco";

export type TrmIndicator = {
  value: number;
  currency: "COP";
  variationPercent: number;
  source: string;
  updatedAt: string;
};

export type RubberIndicator = {
  type: RubberType;
  priceUSDPerKg: number;
  variationPercent: number;
  market: string;
  source: string;
  updatedAt: string;
  available: boolean;
};

export type IndicatorSummary = {
  trm: TrmIndicator;
  rubber: RubberIndicator[];
  updatedAt: string;
};

export type IndicatorHistoryPoint = {
  date: string;
  trm: number;
  tsr20: number;
  latex: number;
  smr20: number;
  str20: number;
};

export type CalculatorInput = {
  quantity: number;
  unit: "kg" | "ton";
  rubberType: RubberType;
};

export type CalculatorResult = {
  rubberType: RubberType;
  quantityKg: number;
  trm: number;
  priceUSDPerKg: number;
  priceCOPPerKg: number;
  priceCOPPerTon: number;
  valueTotalCOP: number;
  updatedAt: string;
  note: string;
};
