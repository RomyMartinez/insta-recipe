import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    ...shadows.sm,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  secondary: {
    backgroundColor: colors.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  disabled: {
    backgroundColor: colors.gray300,
    opacity: 0.6,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
    fontFamily: 'Poppins-SemiBold',
  },
  textOutline: {
    color: colors.primary,
  },
  textGhost: {
    color: colors.textPrimary,
  },
  textDisabled: {
    color: colors.gray500,
  },
  icon: {
    marginRight: spacing.sm,
  },
  loading: {
    marginRight: spacing.sm,
  },
});
