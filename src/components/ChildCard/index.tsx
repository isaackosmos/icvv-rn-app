import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { Child } from "@/services/kids";

import styles from "./styles";
import { colors } from "@/constants/colors";

interface ChildCardProps {
  child: Child;
  onCheckin: () => void;
  onCheckout: () => void;
  onDelete: () => void;
}

export function ChildCard({
  child,
  onCheckin,
  onCheckout,
  onDelete,
}: ChildCardProps) {
  const isCheckedIn = child.status === "checkin";

  return (
    <View style={[styles.card, isCheckedIn && styles.cardActive]}>
      <View style={styles.info}>
        <View style={[styles.avatar, isCheckedIn && styles.avatarActive]}>
          <Text
            style={[styles.avatarText, isCheckedIn && styles.avatarTextActive]}
          >
            {child.name.charAt(0)}
          </Text>
        </View>
        <View>
          <Text style={styles.name}>{child.name}</Text>
          <Text style={styles.detail}>{child.parentPhone}</Text>
          {isCheckedIn && <Text style={styles.room}>{child.room}</Text>}
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={onDelete} style={styles.iconBtn}>
          <MaterialIcons
            name="delete-outline"
            size={20}
            color={colors.textSecondary}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.btn,
            isCheckedIn ? styles.btnCheckout : styles.btnCheckin,
          ]}
          onPress={isCheckedIn ? onCheckout : onCheckin}
          activeOpacity={0.7}
        >
          <Text style={styles.btnText}>
            {isCheckedIn ? "Check-out" : "Check-in"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
