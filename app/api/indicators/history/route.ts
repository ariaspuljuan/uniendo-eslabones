import { NextResponse } from "next/server";
import { getIndicatorsHistory } from "@/controllers/indicators.controller";

export async function GET() {
  const history = await getIndicatorsHistory();
  return NextResponse.json(history);
}
