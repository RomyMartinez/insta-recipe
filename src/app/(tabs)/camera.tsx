import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "../../components";
import { colors, spacing, typography } from "../../theme";

export default function CameraScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<"front" | "back">("back");
  const [isCapturing, setIsCapturing] = useState(false);
  const cameraRef = useRef<CameraView>(null);

  // Permission is handled by useCameraPermissions hook

  const handleCapture = async () => {
    if (cameraRef.current) {
      setIsCapturing(true);
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 0.8,
          base64: true,
        });

        // TODO: Send photo to OpenAI API for recipe generation
        Alert.alert("Success", "Photo captured! Generating recipe...");

        // Simulate API call
        setTimeout(() => {
          setIsCapturing(false);
          // TODO: Navigate to recipe creation screen with generated recipe
        }, 2000);
      } catch (error) {
        setIsCapturing(false);
        Alert.alert("Error", "Failed to capture photo");
      }
    }
  };

  const toggleCameraType = () => {
    setFacing((current) => (current === "back" ? "front" : "back"));
  };

  if (!permission) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.black} />
        <Text style={styles.message}>Requesting camera permission...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.black} />
        <Text style={styles.message}>No access to camera</Text>
        <Button
          title="Grant Permission"
          onPress={requestPermission}
          style={styles.permissionButton}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.overlay}>
          <View style={styles.topControls}>
            <TouchableOpacity
              style={styles.flipButton}
              onPress={toggleCameraType}
            >
              <Ionicons name="camera-reverse" size={24} color={colors.white} />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomControls}>
            <View style={styles.instructions}>
              <Text style={styles.instructionText}>
                Point your camera at food to generate a recipe
              </Text>
            </View>

            <TouchableOpacity
              style={[
                styles.captureButton,
                isCapturing && styles.captureButtonDisabled,
              ]}
              onPress={handleCapture}
              disabled={isCapturing}
            >
              <Ionicons name="camera" size={32} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  topControls: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingTop: spacing.xl,
    paddingHorizontal: spacing.lg,
  },
  flipButton: {
    backgroundColor: "rgba(0,0,0,0.5)",
    borderRadius: 25,
    padding: spacing.sm,
  },
  bottomControls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: spacing["3xl"],
    paddingHorizontal: spacing.lg,
  },
  instructions: {
    flex: 1,
    alignItems: "center",
  },
  instructionText: {
    color: colors.white,
    fontSize: typography.fontSize.base,
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: 20,
  },
  captureButton: {
    backgroundColor: colors.primary,
    borderRadius: 40,
    padding: spacing.lg,
    marginLeft: spacing.lg,
  },
  captureButtonDisabled: {
    backgroundColor: colors.gray500,
  },
  message: {
    fontSize: typography.fontSize.lg,
    color: colors.textPrimary,
    textAlign: "center",
    marginBottom: spacing.lg,
  },
  permissionButton: {
    marginTop: spacing.md,
  },
});
