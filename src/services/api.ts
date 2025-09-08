import axios from 'axios';

const API_BASE_URL = 'https://api.openai.com/v1';

// TODO: Add your OpenAI API key here
const OPENAI_API_KEY = 'your-openai-api-key-here';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  },
});

export interface Recipe {
  id: string;
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  image?: string;
  tags: string[];
}

export interface GeneratedRecipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
}

export const recipeService = {
  async generateRecipeFromImage(imageBase64: string): Promise<GeneratedRecipe> {
    try {
      const response = await apiClient.post('/chat/completions', {
        model: 'gpt-4-vision-preview',
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Analyze this food image and generate a detailed recipe. Include title, description, ingredients list, step-by-step instructions, prep time, cook time, servings, difficulty level, and relevant tags. Return the response in JSON format.',
              },
              {
                type: 'image_url',
                image_url: {
                  url: `data:image/jpeg;base64,${imageBase64}`,
                },
              },
            ],
          },
        ],
        max_tokens: 2000,
      });

      const content = response.data.choices[0].message.content;
      return JSON.parse(content);
    } catch (error) {
      console.error('Error generating recipe from image:', error);
      throw new Error('Failed to generate recipe from image');
    }
  },

  async generateRecipeFromText(description: string): Promise<GeneratedRecipe> {
    try {
      const response = await apiClient.post('/chat/completions', {
        model: 'gpt-4',
        messages: [
          {
            role: 'user',
            content: `Generate a detailed recipe based on this description: "${description}". Include title, description, ingredients list, step-by-step instructions, prep time, cook time, servings, difficulty level, and relevant tags. Return the response in JSON format.`,
          },
        ],
        max_tokens: 2000,
      });

      const content = response.data.choices[0].message.content;
      return JSON.parse(content);
    } catch (error) {
      console.error('Error generating recipe from text:', error);
      throw new Error('Failed to generate recipe from text');
    }
  },

  async saveRecipe(recipe: GeneratedRecipe): Promise<Recipe> {
    try {
      // TODO: Implement actual save to your backend
      const savedRecipe: Recipe = {
        id: Date.now().toString(),
        ...recipe,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400',
      };
      
      return savedRecipe;
    } catch (error) {
      console.error('Error saving recipe:', error);
      throw new Error('Failed to save recipe');
    }
  },

  async getRecipes(): Promise<Recipe[]> {
    try {
      // TODO: Implement actual fetch from your backend
      return [];
    } catch (error) {
      console.error('Error fetching recipes:', error);
      throw new Error('Failed to fetch recipes');
    }
  },

  async updateRecipe(id: string, recipe: Partial<Recipe>): Promise<Recipe> {
    try {
      // TODO: Implement actual update in your backend
      throw new Error('Not implemented yet');
    } catch (error) {
      console.error('Error updating recipe:', error);
      throw new Error('Failed to update recipe');
    }
  },

  async deleteRecipe(id: string): Promise<void> {
    try {
      // TODO: Implement actual delete in your backend
      throw new Error('Not implemented yet');
    } catch (error) {
      console.error('Error deleting recipe:', error);
      throw new Error('Failed to delete recipe');
    }
  },
};
