import React, { ReactNode } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { View, TextInput, Text, TextInputProps } from "react-native";

import styles from "./styles";
import { colors } from "@/constants/colors";

interface InputProps extends TextInputProps {
  label?: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
  rightElement?: ReactNode;
}

export function Input({ label, icon, rightElement, ...props }: InputProps) {
  return (
    <View style={styles.wrapper}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.row}>
        <MaterialIcons
              name={icon}
              size={24}
              color={colors.textSecondary}
            />
        <TextInput style={styles.input} placeholderTextColor={colors.placeholder} {...props} />
        {rightElement}
      </View>
    </View>
  );
}
