import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native';
import { Card } from '../../components';
import { colors, spacing, typography } from '../../theme';

interface SavedRecipe {
  id: string;
  title: string;
  description: string;
  image: string;
  time: string;
  rating: number;
  isFavorite: boolean;
}

export default function CollectionScreen() {
  const [savedRecipes, setSavedRecipes] = useState<SavedRecipe[]>([
    {
      id: '1',
      title: 'My Custom Pasta',
      description: 'A delicious pasta recipe I created',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400',
      time: '25 min',
      rating: 4.9,
      isFavorite: true,
    },
    {
      id: '2',
      title: 'Favorite Pizza',
      description: 'The best homemade pizza recipe',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
      time: '40 min',
      rating: 4.8,
      isFavorite: true,
    },
  ]);

  const handleRecipePress = (recipe: SavedRecipe) => {
    // TODO: Navigate to recipe detail
    console.log('Saved recipe pressed:', recipe.title);
  };

  const renderRecipe = ({ item }: { item: SavedRecipe }) => (
    <Card
      title={item.title}
      description={item.description}
      image={item.image}
      time={item.time}
      rating={item.rating}
      onPress={() => handleRecipePress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.header}>
        <Text style={styles.title}>My Collection</Text>
        <Text style={styles.subtitle}>Your saved recipes and favorites</Text>
      </View>

      {savedRecipes.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyTitle}>No saved recipes yet</Text>
          <Text style={styles.emptySubtitle}>
            Start saving recipes you love or create your own!
          </Text>
        </View>
      ) : (
        <FlatList
          data={savedRecipes}
          renderItem={renderRecipe}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing['3xl'],
    paddingBottom: spacing.md,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.fontSize.lg,
    color: colors.textSecondary,
  },
  list: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing['3xl'],
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingTop: spacing['3xl'],
  },
  emptyTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  emptySubtitle: {
    fontSize: typography.fontSize.base,
    color: colors.textSecondary,
    textAlign: 'center',
  },
});
