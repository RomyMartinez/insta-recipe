import { colors } from './colors';
import { typography } from './typography';
import { spacing, borderRadius, shadows } from './spacing';

export { colors, typography, spacing, borderRadius, shadows };

export const theme = {
  colors: colors,
  typography: typography,
  spacing: spacing,
  borderRadius: borderRadius,
  shadows: shadows,
} as const;
