export type Category =
  | "birthday"
  | "wedding"
  | "anniversary"
  | "romantic"
  | "special_date";

export interface CardDesign {
  id: string;
  name: string;
  category: Category;
  price: number;
  videoUrl: string;
}

export function filterByCategory(
  designs: CardDesign[],
  category: Category
): CardDesign[] {
  return designs.filter((d) => d.category === category);
}

export const categoryLabels: Record<Category, string> = {
  birthday: "Cumpleaños",
  wedding: "Casamiento",
  anniversary: "Aniversario",
  romantic: "Románticas",
  "special_date": "Fechas especiales",
};