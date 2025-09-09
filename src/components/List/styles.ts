import { colors, typography, spacing } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing["3xl"],
    flexGrow: 1,
  },
  title: {
    fontSize: typography.fontSize["3xl"],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
  empty: {
    fontSize: typography.fontSize.lg,
    textAlign: "center",
    fontWeight: typography.fontWeight.normal,
    color: colors.textSecondary,
  },
});
