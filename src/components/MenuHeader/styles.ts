import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing["4xl"],
    paddingBottom: spacing.md,
    backgroundColor: colors.backgroundQuaternary,
  },
  avatar: {
    padding: spacing.sm,
    borderRadius: 24,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  name: {
    fontSize: typography.fontSize.lg,
    fontFamily: typography.fontFamily.bold,
    color: colors.gray800,
  },
  notification: {
    padding: spacing.sm,
    borderRadius: 32,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
