import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing["5xl"],
    paddingBottom: spacing.md,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    alignSelf: "center",
    fontSize: typography.fontSize["3xl"],
    fontFamily: typography.fontFamily.medium,
    color: colors.textPrimary,
    marginBottom: spacing.lg,
  },
  subtitle: {
    fontSize: typography.fontSize.lg,
    color: colors.textSecondary,
  },
  categoryContainer: {
    gap: spacing.sm,
  },
  categoryItem: {
    borderWidth: 1,
    borderColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: spacing.lg,
  },
  categoryText: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fontFamily.medium,
    color: colors.textPrimary,
  },
  activeCategoryItem: {
    backgroundColor: colors.primary,
  },
  activeCategoryText: {
    color: colors.white,
  },
});
