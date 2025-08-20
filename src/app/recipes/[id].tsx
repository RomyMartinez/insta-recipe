import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

export default function Recipe() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Recipe {id}</Text>
    </View>
  );
}