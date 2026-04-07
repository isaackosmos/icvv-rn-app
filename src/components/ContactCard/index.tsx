import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { View, Text, TouchableOpacity, Linking } from "react-native";

import styles from "./styles";
import { colors } from "@/constants/colors";

interface ContactCardProps {
  name: string;
  value: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  iconColor: string;
  iconBg: string;
  url: string;
}

export function ContactCard({
  name,
  value,
  icon,
  iconColor,
  iconBg,
  url,
}: ContactCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => Linking.openURL(url)}
      activeOpacity={0.7}
    >
      <View style={[styles.icon, { backgroundColor: iconBg }]}>
        <MaterialIcons name={icon} size={22} color={iconColor} />
      </View>
      <View style={styles.text}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
      <MaterialIcons name="chevron-right" size={20} color={colors.border} />
    </TouchableOpacity>
  );
}
