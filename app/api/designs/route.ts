import { NextResponse } from "next/server";
import { sampleDesigns } from "../../sample-data";

export async function GET() {
  return NextResponse.json(sampleDesigns);
}