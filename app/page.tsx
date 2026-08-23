import CardItem from "./Components/CardItem";
import { sampleDesigns } from "./sample-data";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Catálogo de Tarjetas</h1>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {sampleDesigns.map((design) => (
          <CardItem key={design.id} design={design} />
        ))}
      </div>
    </main>
  );
}