import { StyleSheet } from "react-native";
import { colors, spacing, borderRadius, shadows } from "@/theme";

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
    fontSize: 18,
    fontWeight: "600",
    color: colors.textPrimary,
    marginBottom: spacing.xs,
    fontFamily: "Poppins-SemiBold",
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    fontFamily: "Poppins-Regular",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing.md,
  },
  time: {
    fontSize: 12,
    color: colors.textTertiary,
    fontFamily: "Poppins-Regular",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
});
