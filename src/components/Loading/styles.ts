import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    paddingHorizontal: spacing.md,
  },
  text: {
    marginTop: 16,
    textAlign: "center",
    fontSize: typography.fontSize.lg,
    color: colors.textSecondary,
    fontFamily: typography.fontFamily.medium,
  },
});
