import React from 'react';
import { View, Text, Image, TouchableOpacity, ViewStyle } from 'react-native';
import { styles } from './styles';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  time?: string;
  rating?: number;
  onPress?: () => void;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  time,
  rating,
  onPress,
  style,
}) => {
  const CardContent = (
    <View style={[styles.container, style]}>
      {image && (
        <Image source={{ uri: image }} style={styles.image} resizeMode="cover" />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
        <View style={styles.footer}>
          {time && <Text style={styles.time}>{time}</Text>}
          {rating && (
            <View style={styles.rating}>
              <Text style={styles.time}>⭐ {rating}</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );

  if (onPress) {
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        {CardContent}
      </TouchableOpacity>
    );
  }

  return CardContent;
};
