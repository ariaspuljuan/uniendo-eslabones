import { NextResponse } from "next/server";
import { getIndicatorsSummary } from "@/controllers/indicators.controller";

export async function GET() {
  const summary = await getIndicatorsSummary();
  return NextResponse.json(summary);
}
