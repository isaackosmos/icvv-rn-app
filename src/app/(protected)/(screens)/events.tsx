import React from "react";
import { FlatList, View, ActivityIndicator, StyleSheet } from "react-native";

import { EventCard } from "@/components/EventCard";

import { colors } from "@/constants/colors";

import { useEvents } from "@/features/protected/screens/useEvents";

export default function EventsScreen() {
  const { events, loading } = useEvents();

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={events}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <EventCard event={item} />}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: colors.background,
    flexGrow: 1,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
});
