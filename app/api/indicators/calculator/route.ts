import { NextResponse } from "next/server";
import { calculateIndicatorPrice } from "@/controllers/indicators.controller";
import type { CalculatorInput } from "@/types/indicators";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as CalculatorInput;
    const result = await calculateIndicatorPrice(body);
    return NextResponse.json(result);
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "No fue posible calcular.";

    return NextResponse.json({ message }, { status: 400 });
  }
}
