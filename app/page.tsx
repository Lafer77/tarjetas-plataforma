import { prisma } from "./lib/prisma";
import CatalogClient from "./components/CatalogClient";
import { CardDesign } from "./types";

export default async function Home() {
  const rows = await prisma.cardDesign.findMany();

  const designs: CardDesign[] = rows.map((row) => ({
    id: row.id,
    name: row.name,
    category: row.category,
    price: row.price,
    videoUrl: row.videoUrl,
  }));

  return <CatalogClient designs={designs} />;
}