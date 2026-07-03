import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

import { Event } from "@/services/events";
import { colors } from "@/constants/colors";

import styles from "./styles";

interface EventCardProps {
  event: Event;
}

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=800&q=80";

export function EventCard({ event }: EventCardProps) {
  function openMaps() {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(event.address)}`;
    Linking.openURL(url);
  }

  function shareWhatsApp() {
    const text = `*${event.title}*\n\n📅 ${event.date} às ${event.time}\n📍 ${event.location}\n🏠 ${event.address}`;
    Linking.openURL(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,
    );
  }

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: event.image || FALLBACK_IMAGE }}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.category}>{event.category}</Text>
        <Text style={styles.title}>{event.title}</Text>
        {event.description && (
          <Text style={styles.description} numberOfLines={2}>
            {event.description}
          </Text>
        )}

        <View style={styles.infoRow}>
          <MaterialIcons name="event" size={14} color={colors.primary} />
          <Text style={styles.infoText}>
            {event.date} às {event.time}
          </Text>
        </View>
        <View style={styles.infoRow}>
          <MaterialIcons name="place" size={14} color={colors.primary} />
          <Text style={styles.infoText}>{event.location}</Text>
        </View>
        {event.price && (
          <View style={styles.infoRow}>
            <MaterialIcons name="sell" size={14} color={colors.primary} />
            <Text style={styles.infoText}>{event.price}</Text>
          </View>
        )}

        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.btnPrimary}
            onPress={openMaps}
            activeOpacity={0.7}
          >
            <MaterialIcons name="map" size={16} color="#fff" />
            <Text style={styles.btnPrimaryText}>Como chegar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnSecondary}
            onPress={shareWhatsApp}
            activeOpacity={0.7}
          >
            <MaterialIcons name="share" size={18} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
