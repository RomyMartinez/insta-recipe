import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
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
          borderTopColor: colors.borderLight,
          borderTopWidth: 1,
          height: 90,
          paddingBottom: spacing.lg,
          paddingTop: spacing.md,
          paddingHorizontal: spacing.sm,
          shadowColor: colors.shadow,
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          elevation: 8,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menu",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
                transform: [{ scale: focused ? 1.1 : 1 }],
              }}
            >
              <Ionicons
                name="restaurant"
                color={focused ? colors.primary : color}
                size={focused ? 26 : 24}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
                transform: [{ scale: focused ? 1.1 : 1 }],
              }}
            >
              <Ionicons
                name="search"
                color={focused ? colors.primary : color}
                size={focused ? 26 : 24}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Camera",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                backgroundColor: focused ? colors.primary : colors.primaryLight,
                borderRadius: 30,
                width: 60,
                height: 60,
                justifyContent: "center",
                alignItems: "center",
                shadowColor: colors.primary,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 8,
                elevation: 8,
                transform: [{ scale: focused ? 1.1 : 1 }],
              }}
            >
              <Ionicons
                name="camera"
                color={colors.white}
                size={focused ? 32 : 28}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          title: "Collection",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
                transform: [{ scale: focused ? 1.1 : 1 }],
              }}
            >
              <Ionicons
                name="bookmark"
                color={focused ? colors.primary : color}
                size={focused ? 26 : 24}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
                transform: [{ scale: focused ? 1.1 : 1 }],
              }}
            >
              <Ionicons
                name="person"
                color={focused ? colors.primary : color}
                size={focused ? 26 : 24}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
