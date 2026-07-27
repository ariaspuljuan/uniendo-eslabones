import { NextResponse } from "next/server";
import { getIndicatorsSummary } from "@/controllers/indicators.controller";

export const revalidate = 21600;

export async function GET() {
  const summary = await getIndicatorsSummary();
  return NextResponse.json(summary);
}
