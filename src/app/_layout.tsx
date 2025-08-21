import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "@/theme/color";

export default function Layout() {
  return <Tabs screenOptions={{
    headerStyle: {
      backgroundColor: colors.primary,
    },
    headerTintColor: colors.textPrimary,
    tabBarShowLabel: false,
    headerShown: false,
  }}>
    <Tabs.Screen name="index" options={{
      title: "Home",
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
    }} />
    <Tabs.Screen name="snapRecipe" options={{
      title: "SnapFood",
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="plus" color={color} size={size} />
      ),
    }} />
    <Tabs.Screen name="recipes" options={{
      title: "Recipes",
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="book-open" color={color} size={size} />
      ),
    }} />
    <Tabs.Screen name="recipe/[id]" options={{
      title: "Recipe",
      href: null,
      headerShown: false,
      tabBarStyle: {
        display: "none",
      },
    }} />
  </Tabs>;
}