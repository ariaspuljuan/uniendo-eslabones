import { indicatorHistoryMock, indicatorSummaryMock } from "@/data/indicatorMocks";

export async function getTrmIndicator() {
  return indicatorSummaryMock.trm;
}

export async function getTrmHistory() {
  return indicatorHistoryMock.map((point) => ({
    date: point.date,
    value: point.trm,
  }));
}
