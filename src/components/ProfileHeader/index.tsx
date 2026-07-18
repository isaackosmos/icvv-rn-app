import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./styles";
import { Member } from "@/services/members";
import { getInitials } from "@/utils/avatar";

interface ProfileHeaderProps {
  member: Member;
  onEditPress: () => void;
}

export function ProfileHeader({ member, onEditPress }: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{getInitials(member.name)}</Text>
        </View>
        <TouchableOpacity style={styles.editBtn} onPress={onEditPress}>
          <MaterialIcons name="edit" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{member.name}</Text>
      <Text style={styles.role}>{member.role ?? "Membro"}</Text>
      <Text style={styles.email}>{member.email}</Text>
    </View>
  );
}
