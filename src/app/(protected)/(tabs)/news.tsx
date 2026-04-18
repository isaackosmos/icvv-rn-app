import React from "react";

import {
  FlatList,
  Text,
  ActivityIndicator,
  StyleSheet,
  View,
} from "react-native";

import { NewsCard } from "@/components/NewsCard";

import { colors } from "@/constants/colors";
import { useNews } from "@/features/protected/useNews";

export default function NewsScreen() {
  const { news, loading, loadingMore, hasMore, loadMore } = useNews();

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={news}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <NewsCard item={item} />}
      contentContainerStyle={styles.container}
      ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      onEndReached={loadMore}
      onEndReachedThreshold={0.3}
      ListFooterComponent={
        loadingMore ? (
          <ActivityIndicator color={colors.primary} style={{ marginTop: 16 }} />
        ) : !hasMore && news.length > 0 ? (
          <Text style={styles.end}>Você chegou ao fim das notícias.</Text>
        ) : null
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: colors.background,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  end: {
    textAlign: "center",
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 24,
    marginBottom: 8,
  },
});
