import React from "react";

import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/constants/colors";
import { Button } from "@/components/Button";

import styles from "./styles";

interface PrayerSuccessProps {
  onReset: () => void;
}

export function PrayerSuccess({ onReset }: PrayerSuccessProps) {
  return (
    <View style={styles.centered}>
      <View style={styles.card}>
        <View style={styles.iconBox}>
          <MaterialIcons name="check-circle" size={40} color={colors.primary} />
        </View>
        <Text style={styles.title}>Pedido Recebido</Text>
        <Text style={styles.text}>
          Estaremos orando por você. Creia que Deus já está agindo em sua causa.
        </Text>
        <Button
          label="Enviar outro pedido"
          onPress={onReset}
          variant="outline"
        />
      </View>
    </View>
  );
}
