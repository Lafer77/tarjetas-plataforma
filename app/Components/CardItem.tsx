import { CardDesign, categoryLabels } from "../types";

interface CardItemProps {
  design: CardDesign;
}

export default function CardItem({ design }: CardItemProps) {
  const thumbnailUrl = design.videoUrl.replace(/\.[^/.]+$/, ".jpg");

  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, overflow: "hidden", width: 220 }}>
      <video
        src={design.videoUrl}
        poster={thumbnailUrl}
        muted
        loop
        autoPlay
        playsInline
        style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }}
      />
      <div style={{ padding: 12 }}>
        <h3 style={{ margin: "0 0 4px 0" }}>{design.name}</h3>
        <p style={{ margin: "0 0 4px 0", color: "#666" }}>
          {categoryLabels[design.category]}
        </p>
        <p style={{ margin: 0, fontWeight: "bold" }}>${design.price}</p>
      </div>
    </div>
  );
}