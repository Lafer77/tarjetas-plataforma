import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function GET() {
  const designs = await prisma.cardDesign.findMany();
  return NextResponse.json(designs);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, category, price, videoUrl } = body;

  if (!name || !category || !price || !videoUrl) {
    return NextResponse.json(
      { error: "Faltan datos del diseño" },
      { status: 400 }
    );
  }

  const design = await prisma.cardDesign.create({
    data: {
      name,
      category,
      price: parseFloat(price),
      videoUrl,
    },
  });

  return NextResponse.json(design);
}