import { Platform } from 'react-native';

export const typography = {
  // Font families
  fontFamily: {
    regular: Platform.select({
      ios: 'Poppins-Regular',
      android: 'Poppins-Regular',
      default: 'Poppins-Regular',
    }),
    medium: Platform.select({
      ios: 'Poppins-Medium',
      android: 'Poppins-Medium',
      default: 'Poppins-Medium',
    }),
    semiBold: Platform.select({
      ios: 'Poppins-SemiBold',
      android: 'Poppins-SemiBold',
      default: 'Poppins-SemiBold',
    }),
    bold: Platform.select({
      ios: 'Poppins-Bold',
      android: 'Poppins-Bold',
      default: 'Poppins-Bold',
    }),
  },
  
  // Font sizes
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
  },
  
  // Line heights
  lineHeight: {
    xs: 16,
    sm: 20,
    base: 24,
    lg: 28,
    xl: 28,
    '2xl': 32,
    '3xl': 40,
    '4xl': 44,
    '5xl': 56,
  },
  
  // Font weights
  fontWeight: {
    normal: '400' as const,
    medium: '500' as const,
    semiBold: '600' as const,
    bold: '700' as const,
  },
} as const;
