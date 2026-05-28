import { indicatorSummaryMock } from "@/data/indicatorMocks";

export async function getTsr20Reference() {
  return indicatorSummaryMock.rubber.find((item) => item.type === "TSR20");
}
