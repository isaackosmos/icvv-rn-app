import React from "react";
import { useRouter } from "expo-router";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { colors } from "@/constants/colors";

import styles from "./styles";
import { NewsItem } from "@/services/news";

interface NewsCardProps {
  item: NewsItem;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80";

export function NewsCard({ item }: NewsCardProps) {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => router.push(`/news/${item.id}`)}
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: item.image || FALLBACK_IMAGE }}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.dateRow}>
          <MaterialIcons name="event" size={12} color={colors.primary} />
          <Text style={styles.date}>{item.date}</Text>
        </View>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        {item.excerpt && (
          <Text style={styles.excerpt} numberOfLines={2}>
            {item.excerpt}
          </Text>
        )}
        <View style={styles.readMore}>
          <Text style={styles.readMoreText}>Ler mais</Text>
          <MaterialIcons
            name="arrow-forward"
            size={14}
            color={colors.primary}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
