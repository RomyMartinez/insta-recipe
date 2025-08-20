import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Layout() {
  return <Tabs>
    <Tabs.Screen name="recipes/index" options={{
      title: "Recipes",
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="book-open" color={color} size={size} />
      ),
      headerShown: false,
    }}
     />
     <Tabs.Screen name="index" options={{
      title: "Home",
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
      headerShown: false,
    }}
     />
     <Tabs.Screen name="recipes/[id]" options={{
      href: null,
      headerShown: false,
    }}
     />
  </Tabs>;
}