import React from "react";

import { View, Text, Image } from "react-native";

import styles from "./styles";
import { env } from "@/constants/env";

interface CardFrontProps {
  name: string;
  role: string;
  since: string;
  memberId: string;
  photo?: string;
}

export function MemberCardFront({
  name,
  role,
  since,
  memberId,
  photo,
}: CardFrontProps) {
  return (
    <View style={styles.card}>
      <View style={styles.statusRow}>
        <View style={styles.dot} />
        <Text style={styles.status}>Ativo</Text>
      </View>

      <View style={styles.center}>
        <Image
          source={{ uri: photo || env.fallbackAvatar }}
          style={styles.photo}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>

      <View style={styles.footer}>
        <View>
          <Text style={styles.footerLabel}>Membro desde</Text>
          <Text style={styles.footerValue}>{since}</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={styles.footerLabel}>ID</Text>
          <Text style={styles.footerValue}>{memberId}</Text>
        </View>
      </View>
    </View>
  );
}
