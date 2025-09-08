import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { colors } from '../../theme';

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
          height: 60,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="menu"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="collection"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bookmark" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
