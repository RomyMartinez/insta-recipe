import { View } from "react-native";
import { StyleSheet } from "react-native";
import Search from "@/components/Search";
import { colors, typography, spacing } from "@/theme";
import { useState, useEffect } from "react";
import { categories, Category } from "@/types/category";
import List from "@/components/List";
import RecipeCard from "@/components/RecipeCard";
import { recipes as recipesData } from "@/utils/data";
import { Recipe } from "@/types/recipe";
import { useFocusEffect } from "expo-router";

export default function search() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category>(categories[0]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  const handleCategorySelect = (category: Category) => {
    setCategory(category);
  };

  return (
    <View style={styles.container}>
      <Search
        onSearch={handleSearch}
        onCategorySelect={handleCategorySelect}
        category={category}
        search={search}
      />

      <List
        data={recipes}
        renderItem={({ item }) => <RecipeCard data={item} />}
        emptyMessage="No recipes found"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundQuaternary,
    paddingVertical: spacing.md,
    gap: spacing.md,
    paddingTop: spacing["5xl"],
  },
});
