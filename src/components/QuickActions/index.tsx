import React from "react";
import { useRouter } from "expo-router";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { colors } from "@/constants/colors";

const ACTIONS = [
  {
    label: "Oração",
    icon: "favorite-border",
    path: "/(protected)/(screens)/prayer",
  },
  { label: "Bíblia", icon: "menu-book", path: "/(protected)/(screens)/bible" },
  {
    label: "ID Digital",
    icon: "badge",
    path: "/(protected)/(screens)/member-card",
  },
  { label: "Ao Vivo", icon: "tv", path: "/(protected)/(tabs)/live" },
  { label: "Eventos", icon: "event", path: "/(protected)/(screens)/events" },
  {
    label: "Testemunhos",
    icon: "chat-bubble-outline",
    path: "/(protected)/(screens)/testimonials",
  },
  { label: "Kids", icon: "shield", path: "/(protected)/(screens)/kids" },
  {
    label: "Clube ICVV",
    icon: "star-border",
    path: "/(protected)/(screens)/club",
  },
] as const;

export function QuickActions() {
  const router = useRouter();

  return (
    <View>
      <Text style={styles.sectionTitle}>Acesso Rápido</Text>
      <View style={styles.grid}>
        {ACTIONS.map((action) => (
          <TouchableOpacity
            key={action.label}
            style={styles.item}
            onPress={() => router.push(action.path)}
            activeOpacity={0.7}
          >
            <View style={styles.iconBox}>
              <MaterialIcons
                name={action.icon}
                size={24}
                color={colors.primary}
              />
            </View>
            <Text style={styles.label}>{action.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
