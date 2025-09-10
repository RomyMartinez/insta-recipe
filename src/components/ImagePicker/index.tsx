import { View, Text } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native";
import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

export type ImagePickerProps = {
  selectedImage: string;
  handleImagePicker: () => void;
  handleCameraCapture: () => void;
  generateRecipe: () => void;
};

export const ImagePicker = ({
  selectedImage,
  handleImagePicker,
  handleCameraCapture,
  generateRecipe,
}: ImagePickerProps) => {
  return (
    <View style={styles.container}>
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

      {selectedImage && (
        <TouchableOpacity
          style={styles.generateButton}
          onPress={generateRecipe}
        >
          <Ionicons name="sparkles" size={20} color={colors.white} />
          <Text style={styles.generateButtonText}>Generate Recipe</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
