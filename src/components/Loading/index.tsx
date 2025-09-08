import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from './styles';

interface LoadingProps {
  text?: string;
  size?: 'small' | 'large';
}

export const Loading: React.FC<LoadingProps> = ({
  text = 'Loading...',
  size = 'large',
}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color="#FF6B35" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
