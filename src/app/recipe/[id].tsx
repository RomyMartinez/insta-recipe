import { Link, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Recipe() {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View style={styles.container}>
      <Text>Recipe {id}</Text>
      <Link href="/recipes">Back</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});