import { Category } from "./category";

export type Recipe = {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  category: Category;
  isFavorite: boolean;
  image: string;
  time: string;
};
