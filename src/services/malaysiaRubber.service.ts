import { indicatorSummaryMock } from "@/data/indicatorMocks";

export async function getMalaysiaRubberReferences() {
  return indicatorSummaryMock.rubber.filter((item) =>
    ["Latex", "SMR20"].includes(item.type),
  );
}
