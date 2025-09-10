import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

interface InstructionsListProps {
  instructions: string[];
}

export default function InstructionsList({
  instructions,
}: InstructionsListProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Instructions</Text>
      <View style={styles.instructionsList}>
        {instructions.map((instruction, index) => (
          <View key={index} style={styles.instructionItem}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
            <Text style={styles.instructionText}>{instruction}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
