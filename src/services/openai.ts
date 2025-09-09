export interface GeneratedRecipe {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  time: string;
  difficulty: "Easy" | "Medium" | "Hard";
  servings: number;
  tags: string[];
}

export class OpenAIService {
  private static readonly API_URL =
    "https://api.openai.com/v1/chat/completions";
  private static readonly API_KEY = process.env.EXPO_PUBLIC_OPENAI_API_KEY;

  static async generateRecipeFromImage(
    imageBase64: string
  ): Promise<GeneratedRecipe> {
    if (!this.API_KEY) {
      throw new Error(
        "OpenAI API key not found. Please set EXPO_PUBLIC_OPENAI_API_KEY in your environment variables."
      );
    }

    const response = await fetch(this.API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4-vision-preview",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "text",
                text: `Analyze this food image and generate a detailed recipe. Return the response in the following JSON format:
                {
                  "title": "Recipe title",
                  "description": "Brief description of the dish",
                  "ingredients": ["ingredient1", "ingredient2", ...],
                  "instructions": ["step1", "step2", ...],
                  "time": "prep + cook time (e.g., '30 min')",
                  "difficulty": "Easy|Medium|Hard",
                  "servings": number,
                  "tags": ["tag1", "tag2", ...]
                }`,
              },
              {
                type: "image_url",
                image_url: {
                  url: `data:image/jpeg;base64,${imageBase64}`,
                },
              },
            ],
          },
        ],
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(
        `OpenAI API error: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content;

    if (!content) {
      throw new Error("No content received from OpenAI");
    }

    try {
      // Extract JSON from the response (in case there's extra text)
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      const jsonString = jsonMatch ? jsonMatch[0] : content;

      return JSON.parse(jsonString) as GeneratedRecipe;
    } catch (error) {
      throw new Error("Failed to parse OpenAI response as JSON");
    }
  }
}
