import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing } from "@/theme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray500,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          height: 70,
          paddingBottom: spacing.md,
          paddingTop: spacing.sm,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="restaurant" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          title: "Collection",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bookmark" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera" color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}
