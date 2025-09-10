import { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Loading } from "@/components/Loading";
import { imageUtils } from "@/utils/imageUtils";
import { OpenAIService, GeneratedRecipe } from "@/services/openai";
import { colors, spacing } from "@/theme";
import BackStack from "@/components/BackStack";
import { ImagePicker } from "@/components/ImagePicker";

export default function CreateRecipe() {
  const { imageUri } = useLocalSearchParams<{ imageUri?: string }>();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedRecipe, setGeneratedRecipe] =
    useState<GeneratedRecipe | null>(null);

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
      <View style={styles.content}>
        <BackStack title="Create Recipe" />
        {!generatedRecipe && (
          <ImagePicker
            selectedImage={selectedImage}
            handleImagePicker={handleImagePicker}
            handleCameraCapture={handleCameraCapture}
            generateRecipe={generateRecipe}
          />
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
  content: {
    flex: 1,
    padding: spacing.lg,
  },
});
