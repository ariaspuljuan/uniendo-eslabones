import { indicatorHistoryMock, indicatorSummaryMock } from "@/data/indicatorMocks";
import type { RubberType } from "@/types/indicators";

export async function getRubberPrices() {
  return indicatorSummaryMock.rubber;
}

export async function getRubberPriceByType(type: RubberType) {
  return indicatorSummaryMock.rubber.find((item) => item.type === type);
}

export async function getRubberHistory() {
  return indicatorHistoryMock.map((point) => ({
    date: point.date,
    tsr20: point.tsr20,
    latex: point.latex,
    smr20: point.smr20,
    str20: point.str20,
  }));
}
