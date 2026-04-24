import React from "react";

import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

import { MemberCardBack } from "@/components/MemberCardBack";
import { MemberCardFront } from "@/components/MemberCardFront";

import { colors } from "@/constants/colors";
import { useMemberCard } from "@/features/protected/screens/useMemberCard";

export default function MemberCardScreen() {
  const { flipped, flip, user } = useMemberCard();

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Identificação oficial de membro ICVV</Text>

      <TouchableOpacity
        onPress={flip}
        activeOpacity={0.9}
        style={{ width: "100%" }}
      >
        {flipped ? (
          <MemberCardBack />
        ) : (
          <MemberCardFront
            name={user?.name ?? "Membro ICVV"}
            role="Membro Comungante"
            since="—"
            memberId="ICVV-0000"
            photo={user?.photo}
          />
        )}
      </TouchableOpacity>

      <Text style={styles.hint}>Toque no cartão para virar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 24,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textSecondary,
  },
  hint: {
    fontSize: 11,
    color: colors.placeholder,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
