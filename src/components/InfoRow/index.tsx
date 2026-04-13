import React from "react";

import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";
import { colors } from "@/constants/colors";

interface InfoRowProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  value: string;
}

export function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.iconBox}>
        <MaterialIcons name={icon} size={18} color={colors.primary} />
      </View>
      <View>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
}
