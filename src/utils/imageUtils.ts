import * as ImagePicker from 'expo-image-picker';

export const imageUtils = {
  async requestCameraPermission(): Promise<boolean> {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    return status === 'granted';
  },

  async requestMediaLibraryPermission(): Promise<boolean> {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    return status === 'granted';
  },

  async pickImageFromCamera(): Promise<ImagePicker.ImagePickerResult | null> {
    const hasPermission = await this.requestCameraPermission();
    
    if (!hasPermission) {
      throw new Error('Camera permission not granted');
    }

    return await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
      base64: true,
    });
  },

  async pickImageFromLibrary(): Promise<ImagePicker.ImagePickerResult | null> {
    const hasPermission = await this.requestMediaLibraryPermission();
    
    if (!hasPermission) {
      throw new Error('Media library permission not granted');
    }

    return await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.8,
      base64: true,
    });
  },

  async showImagePickerOptions(): Promise<ImagePicker.ImagePickerResult | null> {
    // This would typically show an action sheet with options
    // For now, we'll default to camera
    return await this.pickImageFromCamera();
  },
};
