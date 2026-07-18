import React, { useState } from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Linking } from "react-native";

import { Testimonial } from "@/services/testimonial";
import { colors } from "@/constants/colors";
import { formatRelativeDate } from "@/utils/date";
import { getInitials } from "@/utils/avatar";

import styles from "./styles";

interface TestimonialCardProps {
  testimonial: Testimonial;
  onLike: (id: string) => void;
  onAmen: (id: string) => void;
}

export function TestimonialCard({
  testimonial,
  onLike,
  onAmen,
}: TestimonialCardProps) {
  const [liked, setLiked] = useState(false);
  const [amened, setAmened] = useState(false);

  function handleLike() {
    if (liked) return;
    setLiked(true);
    onLike(testimonial.id);
  }

  function handleAmen() {
    if (amened) return;
    setAmened(true);
    onAmen(testimonial.id);
  }

  function shareWhatsApp() {
    const text = `Testemunho de ${testimonial.name}: "${testimonial.content}"`;
    Linking.openURL(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
    );
  }

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{getInitials(testimonial.name)}</Text>
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{testimonial.name}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.metaText}>
              {formatRelativeDate(testimonial.date)}
            </Text>
            <View style={styles.dot} />
            <Text style={styles.category}>{testimonial.category}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.content}>"{testimonial.content}"</Text>

      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={handleLike}
          disabled={liked}
          activeOpacity={0.7}
        >
          <MaterialIcons
            name={liked ? "favorite" : "favorite-border"}
            size={18}
            color={liked ? colors.error : colors.textSecondary}
          />
          <Text style={styles.actionText}>{testimonial.likes}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.actionBtn}
          onPress={handleAmen}
          disabled={amened}
          activeOpacity={0.7}
        >
          <MaterialIcons
            name="auto-awesome"
            size={18}
            color={amened ? colors.primary : colors.textSecondary}
          />
          <Text style={styles.actionText}>
            {testimonial.amens > 0 ? `${testimonial.amens} Amém` : "Amém"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.shareBtn}
          onPress={shareWhatsApp}
          activeOpacity={0.7}
        >
          <MaterialIcons name="share" size={18} color={colors.textSecondary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
