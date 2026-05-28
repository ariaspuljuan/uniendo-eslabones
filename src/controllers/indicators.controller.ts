import { indicatorHistoryMock, indicatorSummaryMock } from "@/data/indicatorMocks";
import { getRubberPriceByType, getRubberPrices } from "@/services/rubberPrices.service";
import { getTrmIndicator } from "@/services/trm.service";
import type { CalculatorInput, CalculatorResult } from "@/types/indicators";

const calculatorNote =
  "Este cálculo es referencial y no reemplaza acuerdos comerciales, costos logísticos, calidad, humedad, transporte ni condiciones contractuales.";

export async function getIndicatorsSummary() {
  const [trm, rubber] = await Promise.all([getTrmIndicator(), getRubberPrices()]);

  return {
    ...indicatorSummaryMock,
    trm,
    rubber,
  };
}

export async function getTrm() {
  return getTrmIndicator();
}

export async function getRubberPriceList() {
  return getRubberPrices();
}

export async function getIndicatorsHistory() {
  return indicatorHistoryMock;
}

export async function calculateIndicatorPrice(
  input: CalculatorInput,
): Promise<CalculatorResult> {
  const quantity = Number(input.quantity);
  const quantityKg = input.unit === "ton" ? quantity * 1000 : quantity;
  const [trm, rubber] = await Promise.all([
    getTrmIndicator(),
    getRubberPriceByType(input.rubberType),
  ]);

  if (!Number.isFinite(quantity) || quantity <= 0) {
    throw new Error("La cantidad debe ser mayor que cero.");
  }

  if (!rubber || !rubber.available) {
    throw new Error("Dato no disponible para el tipo de caucho seleccionado.");
  }

  const priceCOPPerKg = rubber.priceUSDPerKg * trm.value;

  return {
    rubberType: input.rubberType,
    quantityKg,
    trm: trm.value,
    priceUSDPerKg: rubber.priceUSDPerKg,
    priceCOPPerKg,
    priceCOPPerTon: priceCOPPerKg * 1000,
    valueTotalCOP: quantityKg * priceCOPPerKg,
    updatedAt: indicatorSummaryMock.updatedAt,
    note: calculatorNote,
  };
}
