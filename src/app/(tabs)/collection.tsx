import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import { colors, spacing, typography } from "@/theme";
import List from "@/components/List";
import RecipeCard from "@/components/RecipeCard";
import { Recipe } from "@/types/recipe";
import Collection from "@/components/Collection";
import { categories, type Category } from "@/types/category";

export default function CollectionScreen() {
  const [category, setCategory] = useState<Category>(categories[0]);
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>([
    {
      id: "1",
      title: "My Custom Pasta",
      description: "A delicious pasta recipe I created",
      image:
        "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400",
      time: "25 min",
    },
    {
      id: "2",
      title: "Favorite Pizza",
      description: "The best homemade pizza recipe",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
      time: "40 min",
    },
  ]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <Collection category={category} onCategorySelect={setCategory} />

      <List
        data={savedRecipes}
        renderItem={({ item }) => <RecipeCard data={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
