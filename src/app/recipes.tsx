import { Link } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Recipes() {
  return (
    <View style={styles.container}>
      <Text>Recipes</Text>
      <Link href="/recipe/1">Recipe 1</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});