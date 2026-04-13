import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";

import { Member } from "@/services/members";

const FALLBACK_AVATAR =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80";

interface ProfileHeaderProps {
  member: Member;
  onEditPress: () => void;
}

export function ProfileHeader({ member, onEditPress }: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image
          source={{ uri: member.photo || FALLBACK_AVATAR }}
          style={styles.avatar}
        />
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
