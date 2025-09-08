import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Button, Input } from '../../../components';
import { colors, spacing, typography } from '../../../theme';

export default function ProfileScreen() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    recipesCreated: 12,
    recipesSaved: 28,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(user.name);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Logout', 
          style: 'destructive',
          onPress: () => {
            // TODO: Implement logout logic
            console.log('User logged out');
          }
        },
      ]
    );
  };

  const handleSaveProfile = () => {
    setUser(prev => ({ ...prev, name: editedName }));
    setIsEditing(false);
    Alert.alert('Success', 'Profile updated successfully');
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setEditedName(user.name);
    setIsEditing(false);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.background} />
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={40} color={colors.white} />
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{user.recipesCreated}</Text>
          <Text style={styles.statLabel}>Recipes Created</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{user.recipesSaved}</Text>
          <Text style={styles.statLabel}>Recipes Saved</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Settings</Text>
        
        {isEditing ? (
          <View style={styles.editForm}>
            <Input
              label="Full Name"
              value={editedName}
              onChangeText={setEditedName}
              placeholder="Enter your name"
            />
            <View style={styles.editButtons}>
              <Button
                title="Save"
                onPress={handleSaveProfile}
                style={styles.saveButton}
              />
              <Button
                title="Cancel"
                onPress={handleCancelEdit}
                variant="outline"
                style={styles.cancelButton}
              />
            </View>
          </View>
        ) : (
          <Button
            title="Edit Profile"
            onPress={handleEditProfile}
            variant="outline"
            style={styles.editButton}
          />
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        
        <Button
          title="Change Password"
          onPress={() => Alert.alert('Coming Soon', 'Password change feature coming soon')}
          variant="ghost"
          style={styles.accountButton}
        />
        
        <Button
          title="Privacy Settings"
          onPress={() => Alert.alert('Coming Soon', 'Privacy settings coming soon')}
          variant="ghost"
          style={styles.accountButton}
        />
        
        <Button
          title="Logout"
          onPress={handleLogout}
          variant="outline"
          style={styles.logoutButton}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    alignItems: 'center',
    paddingTop: spacing['4xl'],
    paddingBottom: spacing.xl,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  name: {
    fontSize: typography.fontSize['2xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  email: {
    fontSize: typography.fontSize.base,
    color: colors.textSecondary,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: spacing.xl,
    marginHorizontal: spacing.lg,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: spacing.lg,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: typography.fontSize['3xl'],
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
  },
  statLabel: {
    fontSize: typography.fontSize.sm,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.semiBold,
    color: colors.textPrimary,
    marginBottom: spacing.md,
  },
  editForm: {
    backgroundColor: colors.white,
    padding: spacing.md,
    borderRadius: 12,
  },
  editButtons: {
    flexDirection: 'row',
    marginTop: spacing.md,
  },
  saveButton: {
    flex: 1,
    marginRight: spacing.sm,
  },
  cancelButton: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  editButton: {
    backgroundColor: colors.white,
  },
  accountButton: {
    backgroundColor: colors.white,
    marginBottom: spacing.sm,
  },
  logoutButton: {
    backgroundColor: colors.white,
    borderColor: colors.error,
  },
});
