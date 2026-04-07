import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { colors } from "@/constants/colors";
import { QuickActions } from "@/components/QuickActions";
import { VerseCard } from "@/components/VerseCard";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <QuickActions />
      <VerseCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 32,
    backgroundColor: colors.background,
    flexGrow: 1,
  },
});
