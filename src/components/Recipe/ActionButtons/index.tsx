import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, typography } from "@/theme";
import { styles } from "./styles";

interface ActionButtonsProps {
  onSave?: () => void;
  onShare?: () => void;
}

export default function ActionButtons({ onSave, onShare }: ActionButtonsProps) {
  return (
    <View style={styles.actionButtons}>
      <TouchableOpacity style={styles.favoriteButton} onPress={onSave}>
        <Ionicons name="heart-outline" size={20} color={colors.primary} />
        <Text style={styles.buttonText}>Save Recipe</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.shareButton} onPress={onShare}>
        <Ionicons name="share-outline" size={20} color={colors.white} />
        <Text style={[styles.buttonText, { color: colors.white }]}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}
