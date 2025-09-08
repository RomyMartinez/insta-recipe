import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { router } from 'expo-router';
import { Button, Input } from '../../components';
import { colors, spacing, typography } from '../../theme';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setLoading(true);
    // TODO: Implement actual login logic
    setTimeout(() => {
      setLoading(false);
      router.replace('/(tabs)/menu');
    }, 1000);
  };

  const handleSignUp = () => {
    router.push('/auth/signup');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
      </View>

      <View style={styles.form}>
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
          placeholder="Enter your password"
        />

        <Button
          title="Sign In"
          onPress={handleLogin}
          loading={loading}
          style={styles.loginButton}
        />

        <Button
          title="Don't have an account? Sign Up"
          onPress={handleSignUp}
          variant="ghost"
          style={styles.signUpButton}
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
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: spacing['4xl'],
  },
  title: {
    fontSize: typography.fontSize['4xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSize.lg,
    color: colors.textSecondary,
  },
  form: {
    width: '100%',
  },
  loginButton: {
    marginTop: spacing.lg,
  },
  signUpButton: {
    marginTop: spacing.md,
  },
});
