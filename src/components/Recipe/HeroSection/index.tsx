import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, typography } from "@/theme";
import { styles } from "./styles";

interface HeroSectionProps {
  image: string;
}

export default function HeroSection({ image }: HeroSectionProps) {
  return (
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} style={styles.heroImage} />
      <View style={styles.imageOverlay}></View>
    </View>
  );
}
