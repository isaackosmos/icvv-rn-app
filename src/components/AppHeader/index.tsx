import React from "react";
import { useRouter } from "expo-router";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import styles from "./styles";
import { colors } from "@/constants/colors";
import { useAuth } from "@/context/AuthContext";

interface AppHeaderProps {
  title: string;
  showBack?: boolean;
  onMenuPress?: () => void;
}

export function AppHeader({ title, showBack, onMenuPress }: AppHeaderProps) {
  const insets = useSafeAreaInsets();

  const router = useRouter();
  const { user, logout } = useAuth();

  async function handleLogout() {
    await logout();
    router.replace("/(auth)/login");
  }

  return (
    <View style={[styles.header, { paddingTop: insets.top }]}>
      <View style={styles.left}>
        {showBack ? (
          <TouchableOpacity
            style={styles.iconBtn}
            onPress={() => router.back()}
          >
            <MaterialIcons
              name="chevron-left"
              size={20}
              color={colors.textSecondary}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.iconBtn} onPress={onMenuPress}>
            <MaterialIcons name="menu" size={20} color={colors.textSecondary} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>

      {user && (
        <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
          <MaterialIcons name="logout" size={20} color={colors.error} />
        </TouchableOpacity>
      )}
    </View>
  );
}
