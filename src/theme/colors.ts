export const colors = {
  // Primary colors
  primary: "#FF6B35",
  primaryLight: "#FF8A65",
  primaryDark: "#E64A19",

  // Secondary colors
  secondary: "#4ECDC4",
  secondaryLight: "#80CBC4",
  secondaryDark: "#26A69A",

  // Neutral colors
  white: "#FFFFFF",
  black: "#000000",
  gray50: "#FAFAFA",
  gray100: "#F5F5F5",
  gray200: "#EEEEEE",
  gray300: "#E0E0E0",
  gray400: "#BDBDBD",
  gray500: "#9E9E9E",
  gray600: "#757575",
  gray700: "#616161",
  gray800: "#424242",
  gray900: "#212121",

  // Status colors
  success: "#4CAF50",
  warning: "#FF9800",
  error: "#F44336",
  info: "#2196F3",

  // Background colors
  background: "#FFFFFF",
  backgroundSecondary: "#F8F9FA",
  backgroundTertiary: "#F1F3F4",
  backgroundQuaternary: "#F4F5F7",

  // Text colors
  textPrimary: "#212121",
  textSecondary: "#757575",
  textTertiary: "#9E9E9E",
  textInverse: "#FFFFFF",

  // Border colors
  border: "#E0E0E0",
  borderLight: "#F5F5F5",
  borderDark: "#BDBDBD",

  // Shadow colors
  shadow: "rgba(0, 0, 0, 0.1)",
  shadowDark: "rgba(0, 0, 0, 0.2)",

  // Gradient colors
  gradientStart: "#FF6B35",
  gradientEnd: "#4ECDC4",
} as const;

export type ColorKey = keyof typeof colors;
