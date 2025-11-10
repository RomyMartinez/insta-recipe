import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import Constants from 'expo-constants';
import { Recipe } from '@/types/recipe';
import { categories } from '@/types/category';

// Get API key from environment variables
const OPENAI_API_KEY = Constants.expoConfig?.extra?.EXPO_PUBLIC_OPENAI_API_KEY || process.env.EXPO_PUBLIC_OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';

interface OpenAIMessage {
  role: 'system' | 'user' | 'assistant';
  content: string | Array<{
    type: 'text' | 'image_url';
    text?: string;
    image_url?: {
      url: string;
    };
  }>;
}

interface OpenAIResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

interface RecipeResponse {
  title: string;
  description: string;
  category: string;
  time: string;
  ingredients: string[];
  instructions: string[];
}

/**
 * Convert image URI to base64 format
 */
async function imageToBase64(imageUri: string): Promise<string> {
  try {
    const base64 = await FileSystem.readAsStringAsync(imageUri, {
      encoding: 'base64',
    });
    return `data:image/jpeg;base64,${base64}`;
  } catch (error) {
    console.error('Error converting image to base64:', error);
    throw new Error('Failed to process image');
  }
}

/**
 * Generate a recipe from an image using OpenAI GPT-4 Vision
 */
export async function generateRecipeFromImage(imageUri: string): Promise<Recipe> {
  if (!OPENAI_API_KEY) {
    throw new Error('OpenAI API key not configured. Please add EXPO_PUBLIC_OPENAI_API_KEY to your .env file');
  }

  try {
    // Convert image to base64
    const base64Image = await imageToBase64(imageUri);

    // Prepare the messages for GPT-4 Vision
    const messages: OpenAIMessage[] = [
      {
        role: 'system',
        content: 'You are a professional chef and recipe creator. Analyze food images and provide detailed, accurate recipes in JSON format. Be creative but realistic with your recipes.'
      },
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: `Analyze this food image and generate a complete recipe. Return ONLY a valid JSON object with this exact structure:
{
  "title": "Recipe name",
  "description": "Brief description (1-2 sentences)",
  "category": "One of: Italian, Asian, Mexican, Brazilian, American, Dessert, Vegetarian, or Other",
  "time": "Estimated cooking time (e.g., '30 min', '1 hour')",
  "ingredients": ["ingredient 1", "ingredient 2", ...],
  "instructions": ["step 1", "step 2", ...]
}

Make sure the recipe is detailed, accurate, and matches the food in the image.`
          },
          {
            type: 'image_url',
            image_url: {
              url: base64Image
            }
          }
        ]
      }
    ];

    // Call OpenAI API
    const response = await axios.post<OpenAIResponse>(
      OPENAI_API_URL,
      {
        model: 'gpt-4o',
        messages,
        max_tokens: 1500,
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
        },
        timeout: 30000, // 30 seconds timeout
      }
    );

    // Parse the response
    const content = response.data.choices[0]?.message?.content;
    if (!content) {
      throw new Error('No response from OpenAI');
    }

    // Extract JSON from response (in case there's extra text)
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('Invalid response format from OpenAI');
    }

    const recipeData: RecipeResponse = JSON.parse(jsonMatch[0]);

    // Validate required fields
    if (!recipeData.title || !recipeData.ingredients || !recipeData.instructions) {
      throw new Error('Incomplete recipe data received');
    }

    // Find matching category or default to first category
    const matchedCategory = categories.find(
      cat => cat.name.toLowerCase() === recipeData.category.toLowerCase()
    ) || categories[0];

    // Create Recipe object
    const recipe: Recipe = {
      id: Date.now().toString(), // Generate unique ID
      title: recipeData.title,
      description: recipeData.description || 'A delicious recipe',
      ingredients: recipeData.ingredients,
      instructions: recipeData.instructions,
      category: matchedCategory,
      time: recipeData.time || '30 min',
      image: imageUri, // Use the captured image
      isFavorite: false,
    };

    return recipe;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 401) {
        throw new Error('Invalid API key. Please check your OpenAI API key.');
      } else if (error.response?.status === 429) {
        throw new Error('API rate limit exceeded. Please try again later.');
      } else if (error.code === 'ECONNABORTED') {
        throw new Error('Request timeout. Please check your internet connection.');
      }
      throw new Error(`API Error: ${error.response?.data?.error?.message || error.message}`);
    }

    if (error instanceof Error) {
      throw error;
    }

    throw new Error('Failed to generate recipe. Please try again.');
  }
}

/**
 * Validate OpenAI API key format
 */
export function validateApiKey(apiKey: string): boolean {
  return apiKey.startsWith('sk-') && apiKey.length > 20;
}
