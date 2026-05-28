import { NextResponse } from "next/server";
import { getTrm } from "@/controllers/indicators.controller";

export async function GET() {
  const trm = await getTrm();
  return NextResponse.json(trm);
}
