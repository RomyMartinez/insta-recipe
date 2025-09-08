import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, shadows } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginVertical: spacing.sm,
    ...shadows.md,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: borderRadius.md,
    backgroundColor: colors.gray100,
  },
  content: {
    paddingTop: spacing.md,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: spacing.md,
  },
  time: {
    fontSize: 12,
    color: colors.textTertiary,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
