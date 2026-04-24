import React from "react";

import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import styles from "./styles";
import { colors } from "@/constants/colors";

export function MemberCardBack() {
  return (
    <View style={styles.card}>
      <View style={styles.qrBox}>
        <MaterialIcons name="qr-code" size={160} color={colors.textPrimary} />
      </View>
      <Text style={styles.text}>
        Apresente este código para acesso a eventos e áreas restritas.
      </Text>
    </View>
  );
}
