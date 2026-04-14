import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import { env } from "@/constants/env";
import { Member } from "@/services/members";

interface ProfileHeaderProps {
  member: Member;
  onEditPress: () => void;
}

export function ProfileHeader({ member, onEditPress }: ProfileHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image
          source={{ uri: member.photo || env.fallbackAvatar }}
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
