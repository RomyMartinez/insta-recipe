import { colors } from "@/theme/colors";
import { typography } from "@/theme/typography";
import { spacing, borderRadius, shadows } from "@/theme/spacing";

export { colors, typography, spacing, borderRadius, shadows };

export const theme = {
  colors: colors,
  typography: typography,
  spacing: spacing,
  borderRadius: borderRadius,
  shadows: shadows,
} as const;
