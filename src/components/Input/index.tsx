import React, { useState } from 'react';
import { View, Text, TextInput, TextInputProps, ViewStyle } from 'react-native';
import { styles } from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  helperText?: string;
  containerStyle?: ViewStyle;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  containerStyle,
  onFocus,
  onBlur,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const getInputContainerStyle = () => {
    const baseStyle = [styles.inputContainer];
    
    if (isFocused) {
      baseStyle.push(styles.inputContainerFocused);
    }
    
    if (error) {
      baseStyle.push(styles.inputContainerError);
    }
    
    return baseStyle;
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={getInputContainerStyle()}>
        <TextInput
          style={styles.input}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor="#9E9E9E"
          {...props}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
      {helperText && !error && <Text style={styles.helperText}>{helperText}</Text>}
    </View>
  );
};
