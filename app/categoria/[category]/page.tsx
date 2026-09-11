import CardItem from "../../components/CardItem";
import { sampleDesigns } from "../../sample-data";
import { Category, categoryLabels, filterByCategory } from "../../types";

interface PageProps {
  params: Promise<{ category: Category }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const designs = filterByCategory(sampleDesigns, category);

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