import CardItem from "../../components/CardItem";
import { prisma } from "../../lib/prisma";
import { Category, categoryLabels } from "../../types";

interface PageProps {
  params: Promise<{ category: Category }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const designs = await prisma.cardDesign.findMany({ where: { category } });

  return (
    <main style={{ padding: 24 }}>
      <h1>{categoryLabels[category]}</h1>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {designs.map((design) => (
          <CardItem key={design.id} design={design} />
        ))}
      </div>
    </main>
  );
}