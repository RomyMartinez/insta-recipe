import { colors, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    gap: spacing["3xl"],
    paddingHorizontal: spacing.lg,
  },
  title: {
    alignSelf: "center",
    fontSize: typography.fontSize["3xl"],
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
  },
  contentContainer: {
    gap: spacing.md,
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
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
  },
  searchContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: colors.primary,
    borderRadius: spacing.lg,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    gap: spacing.xs,
  },
  searchInput: {
    flex: 1,
  },
  activeCategoryItem: {
    borderColor: colors.primary,
    backgroundColor: colors.primary,
  },
  activeCategoryText: {
    color: colors.white,
  },
});
