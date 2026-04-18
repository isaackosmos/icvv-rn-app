import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { View, Text, ScrollView, StyleSheet } from "react-native";

import { ContactCard } from "@/components/ContactCard";

import { colors } from "@/constants/colors";
import { contacts } from "@/constants/contacts";

export default function SupportScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.banner}>
        <View style={styles.bannerIcon}>
          <MaterialIcons name="headset-mic" size={32} color="#60a5fa" />
        </View>
        <Text style={styles.bannerTitle}>Como podemos ajudar?</Text>
        <Text style={styles.bannerText}>
          Seja para um pedido de oração, dúvida sobre eventos ou apenas para
          conversar, nossa equipe está à disposição.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Canais de Contato</Text>

      {contacts.map((contact) => (
        <ContactCard key={contact.name} {...contact} />
      ))}

      <View style={styles.hours}>
        <Text style={styles.hoursTitle}>Horário de Atendimento</Text>
        <Text style={styles.hoursText}>Segunda a Sexta: 13:30h às 17h</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16,
    backgroundColor: colors.background,
    flexGrow: 1,
  },
  banner: {
    backgroundColor: "#0f2044",
    borderRadius: 16,
    padding: 24,
    gap: 12,
  },
  bannerIcon: {
    width: 52,
    height: 52,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fff",
  },
  bannerText: {
    fontSize: 13,
    color: "rgba(255,255,255,0.75)",
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
    marginTop: 8,
  },
  hours: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    gap: 6,
    marginTop: 8,
  },
  hoursTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  hoursText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
});
