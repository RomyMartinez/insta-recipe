import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function Recipes() {
  return (
    <View>
      <Text>Recipes</Text>
      <Link href="/recipes/1">Recipe 1</Link>
    </View>
  );
} 