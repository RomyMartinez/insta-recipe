import { Recipe } from "@/types/recipe";
import { Card } from "../Card";
import { router } from "expo-router";

type RecipeCardProps = {
  data: Recipe;
};

export default function RecipeCard({ data }: RecipeCardProps) {
  return (
    <Card
      title={data.title}
      description={data.description}
      image={data.image}
      time={data.time}
      rating={data.rating}
      onPress={() => {
        router.push(`/recipe/${data.id}`);
      }}
    />
  );
}
