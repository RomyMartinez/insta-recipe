import { useState } from 'react';
import { Alert } from 'react-native';
import { generateRecipeFromImage } from '@/services/openai';
import { Recipe } from '@/types/recipe';

export interface UseRecipeGeneratorReturn {
  isGenerating: boolean;
  generatedRecipe: Recipe | null;
  error: string | null;
  generateRecipe: (imageUri: string) => Promise<void>;
  resetRecipe: () => void;
}

export function useRecipeGenerator(): UseRecipeGeneratorReturn {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedRecipe, setGeneratedRecipe] = useState<Recipe | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateRecipe = async (imageUri: string) => {
    if (!imageUri) {
      Alert.alert('Error', 'Please select an image first');
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      const recipe = await generateRecipeFromImage(imageUri);
      setGeneratedRecipe(recipe);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to generate recipe';
      setError(errorMessage);
      Alert.alert('Error', errorMessage);
      console.error('Recipe generation error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  const resetRecipe = () => {
    setGeneratedRecipe(null);
    setError(null);
  };

  return {
    isGenerating,
    generatedRecipe,
    error,
    generateRecipe,
    resetRecipe,
  };
}