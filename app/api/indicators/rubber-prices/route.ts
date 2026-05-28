import { NextResponse } from "next/server";
import { getRubberPriceList } from "@/controllers/indicators.controller";

export async function GET() {
  const prices = await getRubberPriceList();
  return NextResponse.json(prices);
}
