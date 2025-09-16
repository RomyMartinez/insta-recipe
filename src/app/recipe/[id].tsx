import React, { useState } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { useLocalSearchParams } from "expo-router";
import BackStack from "@/components/BackStack";
import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "@/theme";
import { recipes } from "@/utils/data";
import { Ionicons } from "@expo/vector-icons";
import {
  HeroSection,
  RecipeInfo,
  IngredientsList,
  InstructionsList,
  ActionButtons,
} from "@/components";

export default function Recipe() {
  const { id } = useLocalSearchParams();
  const [isFavorite, setIsFavorite] = useState(() => {
    const recipe = recipes.find((recipe) => recipe.id === id);
    return recipe?.isFavorite || false;
  });

  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return (
      <View style={styles.container}>
        <BackStack title="Recipe Not Found" />
        <View style={styles.errorContainer}>
          <Ionicons name="alert-circle" size={64} color={colors.error} />
          <Text style={styles.errorText}>Recipe not found</Text>
        </View>
      </View>
    );
  }

  const handleSave = () => {
    const newFavoriteStatus = !isFavorite;
    setIsFavorite(newFavoriteStatus);
    recipe.isFavorite = newFavoriteStatus;
  };

  const handleShare = () => {
    Alert.alert("Share", "Recipe shared successfully!");
  };

  return (
    <View style={styles.container}>
      <BackStack title={recipe.title} />
      <HeroSection image={recipe.image} />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <RecipeInfo
          title={recipe.title}
          description={recipe.description}
          time={recipe.time}
        />
        <IngredientsList ingredients={recipe.ingredients} />
        <InstructionsList instructions={recipe.instructions} />
      </ScrollView>
      <ActionButtons
        isFavorite={isFavorite}
        onSave={handleSave}
        onShare={handleShare}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: spacing.md,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.xl,
  },
  errorText: {
    fontSize: typography.fontSize.lg,
    color: colors.textSecondary,
    marginTop: spacing.md,
  },
});
