"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Category, categoryLabels } from "../../types";

export default function NuevoDisenoPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [category, setCategory] = useState<Category>("birthday");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!file) {
      setError("Elegí un archivo de video");
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (!uploadRes.ok) throw new Error("Error al subir el video");
      const uploadData = await uploadRes.json();

      const designRes = await fetch("/api/designs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          category,
          price,
          videoUrl: uploadData.videoUrl,
        }),
      });
      if (!designRes.ok) throw new Error("Error al guardar el diseño");

      router.push("/admin");
    } catch (err) {
      setError("Algo salió mal. Intentá de nuevo.");
    } finally {
      setUploading(false);
    }
  }

  return (
    <main style={{ padding: 24, maxWidth: 480 }}>
      <h1>Subir nuevo diseño</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label>Nombre</label>
          <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Categoría</label>
          <br />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
          >
            {Object.entries(categoryLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Precio</label>
          <br />
          <input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Video (MP4)</label>
          <br />
          <input
            type="file"
            accept="video/mp4"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            required
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" disabled={uploading}>
          {uploading ? "Subiendo..." : "Guardar diseño"}
        </button>
      </form>
    </main>
  );
}