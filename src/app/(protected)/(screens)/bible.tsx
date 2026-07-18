import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { colors } from "@/constants/colors";
import { BIBLE_VERSES } from "@/constants/verses";
import { getVerseOfTheDay } from "@/utils/verse";

export default function BibleScreen() {
  const verse = getVerseOfTheDay(BIBLE_VERSES);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <MaterialIcons name="menu-book" size={20} color={colors.primary} />
          <Text style={styles.cardLabel}>Versículo do Dia</Text>
        </View>
        <Text style={styles.verse}>"{verse.text}"</Text>
        <Text style={styles.ref}>{verse.ref}</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.iconBox}>
          <MaterialIcons name="auto-stories" size={24} color={colors.primary} />
        </View>
        <Text style={styles.comingSoonTitle}>Leitura Completa da Bíblia</Text>
        <Text style={styles.comingSoonText}>
          Em breve você poderá ler a Bíblia completa direto pelo app.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: colors.background,
    flexGrow: 1,
    gap: 16,
  },
  card: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 20,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
  },
  cardLabel: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  verse: {
    fontSize: 15,
    fontStyle: "italic",
    color: colors.textSecondary,
    lineHeight: 22,
  },
  ref: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 10,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  comingSoonTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 6,
  },
  comingSoonText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
  },
});
