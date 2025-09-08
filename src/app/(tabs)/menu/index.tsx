import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl } from 'react-native';
import { Card } from '../../../components';
import { colors, spacing, typography } from '../../../theme';

interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  time: string;
  rating: number;
}

export default function MenuScreen() {
  const [recipes, setRecipes] = useState<Recipe[]>([
    {
      id: '1',
      title: 'Spaghetti Carbonara',
      description: 'Classic Italian pasta with eggs, cheese, and pancetta',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400',
      time: '20 min',
      rating: 4.8,
    },
    {
      id: '2',
      title: 'Chicken Tikka Masala',
      description: 'Creamy Indian curry with tender chicken pieces',
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d4d0?w=400',
      time: '45 min',
      rating: 4.6,
    },
    {
      id: '3',
      title: 'Beef Tacos',
      description: 'Mexican street-style tacos with seasoned beef',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400',
      time: '30 min',
      rating: 4.7,
    },
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = () => {
    setRefreshing(true);
    // TODO: Fetch new recipes from API
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const handleRecipePress = (recipe: Recipe) => {
    // TODO: Navigate to recipe detail
    console.log('Recipe pressed:', recipe.title);
  };

  const renderRecipe = ({ item }: { item: Recipe }) => (
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
      <View style={styles.header}>
        <Text style={styles.title}>Discover Recipes</Text>
        <Text style={styles.subtitle}>Find your next favorite dish</Text>
      </View>

      <FlatList
        data={recipes}
        renderItem={renderRecipe}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />
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
    paddingTop: spacing.xl,
    paddingBottom: spacing.md,
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
    paddingBottom: spacing.xl,
  },
});
