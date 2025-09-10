import React from "react";
import { View, Text } from "react-native";
import { colors, spacing, typography } from "@/theme";
import { styles } from "./styles";

interface IngredientsListProps {
  ingredients: string[];
}

export default function IngredientsList({ ingredients }: IngredientsListProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Ingredients</Text>
      <View style={styles.ingredientsList}>
        {ingredients.map((ingredient, index) => (
          <View key={index} style={styles.ingredientItem}>
            <View style={styles.ingredientBullet} />
            <Text style={styles.ingredientText}>{ingredient}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
