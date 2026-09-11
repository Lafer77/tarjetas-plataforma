import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function GET() {
  const designs = await prisma.cardDesign.findMany();
  return NextResponse.json(designs);
}