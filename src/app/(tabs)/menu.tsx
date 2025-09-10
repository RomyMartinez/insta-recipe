import { useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import List from "@/components/List";
import { colors, spacing, typography } from "@/theme";
import MenuHeader from "@/components/MenuHeader";
import RecipeCard from "@/components/RecipeCard";
import { Recipe } from "@/types/recipe";
import { recipes as recipesData } from "@/utils/data";
import { useFocusEffect } from "expo-router";

export default function MenuScreen() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useFocusEffect(() => {
    setRecipes(recipesData);
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <MenuHeader />
      <Text style={styles.title}>What's cooking today?</Text>
      <List
        data={recipes}
        containerStyle={{ paddingHorizontal: spacing.lg }}
        renderItem={({ item }) => <RecipeCard data={item} />}
        keyExtractor={(item) => item.id}
        emptyMessage="No recipes found"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray100,
    paddingVertical: spacing.md,
  },

  title: {
    fontSize: typography.fontSize["2xl"],
    fontFamily: typography.fontFamily.medium,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
});
