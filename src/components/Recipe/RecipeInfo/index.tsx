import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, typography } from "@/theme";
import { styles } from "./styles";

interface RecipeInfoProps {
  title: string;
  description: string;
  time: string;
}

export default function RecipeInfo({
  title,
  description,
  time,
}: RecipeInfoProps) {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.timeContainer}>
          <Ionicons name="time-outline" size={20} color={colors.primary} />
          <Text style={styles.timeText}>{time}</Text>
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}
