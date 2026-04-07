import React from "react";
import { useRouter } from "expo-router";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { colors } from "@/constants/colors";

const ACTIONS = [
  { label: "Oração", icon: "favorite-border", path: "/prayer" },
  { label: "Bíblia", icon: "menu-book", path: "/bible" },
  { label: "ID Digital", icon: "badge", path: "/member-card" },
  { label: "Ao Vivo", icon: "tv", path: "/live" },
  { label: "Eventos", icon: "event", path: "/events" },
  { label: "Testemunhos", icon: "chat-bubble-outline", path: "/testimonials" },
  { label: "Kids", icon: "shield", path: "/kids" },
  { label: "Clube ICVV", icon: "star-border", path: "/club" },
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
