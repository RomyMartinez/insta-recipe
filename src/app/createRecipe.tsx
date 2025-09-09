import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Loading } from "@/components/Loading";
import { imageUtils } from "@/utils/imageUtils";
import { OpenAIService, GeneratedRecipe } from "@/services/openai";
import { colors, spacing, typography } from "@/theme";
import { Ionicons } from "@expo/vector-icons";

export default function CreateRecipe() {
  const { imageUri } = useLocalSearchParams<{ imageUri?: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedRecipe, setGeneratedRecipe] =
    useState<GeneratedRecipe | null>(null);

  // Set image from camera if provided
  useEffect(() => {
    if (imageUri) {
      setSelectedImage(imageUri);
    }
  }, [imageUri]);

  const handleImagePicker = async () => {
    try {
      const result = await imageUtils.showImagePickerOptions();

      if (result && !result.canceled && result.assets && result.assets[0]) {
        const imageUri = result.assets[0].uri;
        setSelectedImage(imageUri);
      }
    } catch (error) {
      Alert.alert("Error", "Failed to pick image");
      console.error("Image picker error:", error);
    }
  };

  const handleCameraCapture = () => {
    router.push("/(tabs)/camera");
  };

  const generateRecipe = async () => {
    if (!selectedImage) {
      Alert.alert("Error", "Please select an image first");
      return;
    }

    setIsLoading(true);

    try {
      // Convert image to base64
      const response = await fetch(selectedImage);
      const blob = await response.blob();
      const base64 = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          resolve(base64String.split(",")[1]); // Remove data:image/jpeg;base64, prefix
        };
        reader.readAsDataURL(blob);
      });

      const recipe = await OpenAIService.generateRecipeFromImage(base64);
      setGeneratedRecipe(recipe);

      Alert.alert("Success!", "Recipe generated successfully!", [
        {
          text: "View Recipe",
          onPress: () => {
            // Navigate to recipe detail screen with generated recipe
            router.push({
              pathname: "/recipe/[id]",
              params: {
                id: "generated",
                recipe: JSON.stringify(recipe),
              },
            });
          },
        },
        { text: "OK" },
      ]);
    } catch (error) {
      console.error("Recipe generation error:", error);
      Alert.alert(
        "Error",
        error instanceof Error ? error.message : "Failed to generate recipe"
      );
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedImage(null);
    setGeneratedRecipe(null);
  };

  if (isLoading) {
    return (
      <Loading
        text="Analyzing your image and generating recipe..."
        size="large"
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
        </TouchableOpacity>
        <Text style={styles.title}>Create Recipe</Text>
        <View style={styles.placeholder} />
      </View>

      <View style={styles.content}>
        {!selectedImage ? (
          <View style={styles.imagePickerContainer}>
            <TouchableOpacity
              style={styles.imagePicker}
              onPress={handleImagePicker}
            >
              <Ionicons name="images" size={48} color={colors.primary} />
              <Text style={styles.imagePickerText}>Choose from Gallery</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.imagePicker}
              onPress={handleCameraCapture}
            >
              <Ionicons name="camera" size={48} color={colors.primary} />
              <Text style={styles.imagePickerText}>Take a Photo</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.imageContainer}>
            <Image source={{ uri: selectedImage }} style={styles.image} />
          </View>
        )}

        {selectedImage && !generatedRecipe && (
          <TouchableOpacity
            style={styles.generateButton}
            onPress={generateRecipe}
          >
            <Ionicons name="sparkles" size={20} color={colors.white} />
            <Text style={styles.generateButtonText}>Generate Recipe</Text>
          </TouchableOpacity>
        )}

        {generatedRecipe && (
          <View style={styles.recipePreview}>
            <Text style={styles.recipeTitle}>{generatedRecipe.title}</Text>
            <Text style={styles.recipeDescription}>
              {generatedRecipe.description}
            </Text>
            <View style={styles.recipeMeta}>
              <Text style={styles.recipeMetaText}>
                ⏱️ {generatedRecipe.time}
              </Text>
              <Text style={styles.recipeMetaText}>
                👥 {generatedRecipe.servings} servings
              </Text>
              <Text style={styles.recipeMetaText}>
                📊 {generatedRecipe.difficulty}
              </Text>
            </View>
            <TouchableOpacity style={styles.resetButton} onPress={resetForm}>
              <Ionicons name="refresh" size={16} color={colors.primary} />
              <Text style={styles.resetButtonText}>Generate Another</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.lg,
    paddingTop: spacing["4xl"],
    paddingBottom: spacing.md,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  backButton: {
    padding: spacing.sm,
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    padding: spacing.lg,
  },
  imagePickerContainer: {
    flex: 1,
    flexDirection: "row",
    gap: spacing.md,
  },
  imagePicker: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: colors.primary,
    borderStyle: "dashed",
    borderRadius: spacing.lg,
    backgroundColor: colors.backgroundSecondary,
    paddingVertical: spacing.xl,
  },
  imagePickerText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.medium,
    color: colors.textPrimary,
    marginTop: spacing.md,
    textAlign: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: spacing.lg,
    marginBottom: spacing.md,
  },
  changeImageContainer: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  changeImageButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: spacing.lg,
    gap: spacing.xs,
  },
  changeImageText: {
    color: colors.white,
    fontWeight: typography.fontWeight.medium,
  },
  generateButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: spacing.lg,
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  generateButtonText: {
    color: colors.white,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
  },
  recipePreview: {
    backgroundColor: colors.white,
    padding: spacing.lg,
    borderRadius: spacing.lg,
    borderWidth: 1,
    borderColor: colors.borderLight,
  },
  recipeTitle: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  recipeDescription: {
    fontSize: typography.fontSize.lg,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  recipeMeta: {
    flexDirection: "row",
    gap: spacing.md,
    marginBottom: spacing.md,
  },
  recipeMetaText: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
  },
  resetButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: spacing.md,
    borderWidth: 1,
    borderColor: colors.primary,
    gap: spacing.xs,
  },
  resetButtonText: {
    color: colors.primary,
    fontWeight: typography.fontWeight.medium,
  },
});
