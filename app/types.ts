export type Category =
  | "Happy Birthday"
  | "Wedding"
  | "Aniversary"
  | "Romantic"
  | "Special";

export interface Design {
  id: string;
  name: string;
  category: Category;
  price: number;
  videoUrl: string;
}

export function filterPerCategory(
  designs: Design[],
  category: Category
): Design[] {
  return designs.filter((d) => d.category === category);
}