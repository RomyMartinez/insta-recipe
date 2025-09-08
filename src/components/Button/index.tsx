import React from 'react';
import { TouchableOpacity, Text, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { styles } from './styles';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  disabled = false,
  loading = false,
  icon,
  style,
  textStyle,
}) => {
  const getButtonStyle = () => {
    const baseStyle: any[] = [styles.container];
    
    if (disabled) {
      baseStyle.push(styles.disabled);
    } else {
      baseStyle.push(styles[variant]);
    }
    
    if (style) {
      baseStyle.push(style);
    }
    
    return baseStyle;
  };

  const getTextStyle = () => {
    const baseStyle: any[] = [styles.text];
    
    if (disabled) {
      baseStyle.push(styles.textDisabled);
    } else if (variant === 'outline') {
      baseStyle.push(styles.textOutline);
    } else if (variant === 'ghost') {
      baseStyle.push(styles.textGhost);
    }
    
    if (textStyle) {
      baseStyle.push(textStyle);
    }
    
    return baseStyle;
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading && (
        <ActivityIndicator
          size="small"
          color={variant === 'outline' || variant === 'ghost' ? '#FF6B35' : '#FFFFFF'}
          style={styles.loading}
        />
      )}
      {icon && !loading && <>{icon}</>}
      <Text style={getTextStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};
