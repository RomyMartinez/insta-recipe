import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.sm,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    backgroundColor: colors.white,
  },
  inputContainerFocused: {
    borderColor: colors.primary,
    borderWidth: 2,
  },
  inputContainerError: {
    borderColor: colors.error,
  },
  input: {
    fontSize: 16,
    color: colors.textPrimary,
    padding: 0,
  },
  errorText: {
    fontSize: 12,
    color: colors.error,
    marginTop: spacing.xs,
  },
  helperText: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
});
