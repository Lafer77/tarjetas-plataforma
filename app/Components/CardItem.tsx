import { CardDesign, categoryLabels } from "../types";

interface CardItemProps {
  design: CardDesign;
}

export default function CardItem({ design }: CardItemProps) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12 }}>
      <h3>{design.name}</h3>
      <p>{categoryLabels[design.category]}</p>
      <p>${design.price}</p>
    </div>
  );
}