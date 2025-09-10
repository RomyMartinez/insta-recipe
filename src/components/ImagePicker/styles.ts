import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imagePickerContainer: {
    flex: 1,
    flexDirection: "row",
    gap: spacing.md,
  },
  imagePicker: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.primary,
    borderStyle: "dashed",
    borderRadius: spacing.lg,
    backgroundColor: colors.backgroundSecondary,
    paddingVertical: spacing.xl,
  },
  imagePickerText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
    marginTop: spacing.md,
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: spacing.lg,
    marginBottom: spacing.md,
  },
  generateButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.lg,
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  generateButtonText: {
    color: colors.white,
    fontSize: typography.fontSize.lg,
    fontFamily: typography.fontFamily.medium,
  },
});
