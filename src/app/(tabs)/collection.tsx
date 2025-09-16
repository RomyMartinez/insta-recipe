import React, { useState, useCallback } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { colors } from "@/theme";
import List from "@/components/List";
import RecipeCard from "@/components/RecipeCard";
import { useFocusEffect } from "expo-router";
import { Recipe } from "@/types/recipe";
import Collection from "@/components/Collection";
import { categories, type Category } from "@/types/category";
import { recipes } from "@/utils/data";

export default function CollectionScreen() {
  const [category, setCategory] = useState<Category>(categories[0]);
  const [savedRecipes, setSavedRecipes] = useState<Recipe[]>(
    recipes.filter((recipe) => recipe.isFavorite)
  );

  const updateSavedRecipes = useCallback(() => {
    setSavedRecipes(recipes.filter((recipe) => recipe.isFavorite));
  }, []);

  useFocusEffect(updateSavedRecipes);

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
