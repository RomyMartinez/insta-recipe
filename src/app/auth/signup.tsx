import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, StatusBar } from "react-native";
import { router } from "expo-router";
import { Button, Input } from "@/components";
import { colors, spacing, typography } from "@/theme";

export default function SignUpScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    setLoading(true);
    // TODO: Implement actual signup logic
    setTimeout(() => {
      setLoading(false);
      router.replace("/(tabs)/menu");
    }, 1000);
  };

  const handleLogin = () => {
    router.push("/auth/login");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Join us and start cooking!</Text>
      </View>

      <View style={styles.form}>
        <Input
          label="Full Name"
          value={name}
          onChangeText={setName}
          placeholder="Enter your full name"
        />

        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="Enter your email"
        />

        <Input
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="Create a password"
        />

        <Input
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          placeholder="Confirm your password"
        />

        <Button
          title="Sign Up"
          onPress={handleSignUp}
          loading={loading}
          style={styles.signUpButton}
        />

        <Button
          title="Already have an account? Sign In"
          onPress={handleLogin}
          variant="ghost"
          style={styles.loginButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    justifyContent: "center",
  },
  header: {
    alignItems: "center",
    marginTop: spacing["3xl"],
    marginBottom: spacing["4xl"],
  },
  title: {
    fontSize: typography.fontSize["4xl"],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSize.lg,
    color: colors.textSecondary,
  },
  form: {
    width: "100%",
  },
  signUpButton: {
    marginTop: spacing.lg,
  },
  loginButton: {
    marginTop: spacing.md,
  },
});
