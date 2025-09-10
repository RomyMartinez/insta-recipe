import { StyleSheet } from "react-native";
import { colors, spacing, borderRadius, shadows, typography } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    padding: spacing.lg,
    marginVertical: spacing.sm,
    marginHorizontal: spacing.xs,
    ...shadows.md,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: borderRadius.lg,
    backgroundColor: colors.gray100,
  },
  content: {
    paddingTop: spacing.md,
  },
  title: {
    fontSize: typography.fontSize.lg,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
    fontFamily: typography.fontFamily.semiBold,
  },
  description: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    lineHeight: 20,
    fontFamily: typography.fontFamily.regular,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing.md,
  },
  time: {
    fontSize: typography.fontSize.sm,
    color: colors.textTertiary,
    fontFamily: typography.fontFamily.regular,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
});
