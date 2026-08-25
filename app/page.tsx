"use client";

import { useState } from "react";
import CardItem from "./Components/CardItem";
import { sampleDesigns } from "./sample-data";
import { Category, categoryLabels, filterByCategory } from "./types";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");

  const visibleDesigns =
    selectedCategory === "all"
      ? sampleDesigns
      : filterByCategory(sampleDesigns, selectedCategory);

  return (
    <main style={{ padding: 24 }}>
      <h1>Catálogo de Tarjetas</h1>

      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <button
          onClick={() => setSelectedCategory("all")}
          style={{ fontWeight: selectedCategory === "all" ? "bold" : "normal" }}
        >
          Todas
        </button>
        {Object.entries(categoryLabels).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key as Category)}
            style={{ fontWeight: selectedCategory === key ? "bold" : "normal" }}
          >
            {label}
          </button>
        ))}
      </div>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {visibleDesigns.map((design) => (
          <CardItem key={design.id} design={design} />
        ))}
      </div>
    </main>
  );
}