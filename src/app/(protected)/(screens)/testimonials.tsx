import React from "react";
import { FlatList, View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { TestimonialCard } from "@/components/TestimonialCard";
import { AddTestimonialModal } from "@/components/AddTestimonialModal";

import { colors } from "@/constants/colors";

import { useTestimonials } from "@/features/protected/screens/useTestimonials";

export default function TestimonialsScreen() {
  const {
    testimonials,
    loading,
    isAdding,
    setIsAdding,
    showSuccess,
    handleAddTestimonial,
    handleLike,
    handleAmen,
  } = useTestimonials();

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  return (
    <>
      <FlatList
        data={testimonials}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TestimonialCard
            testimonial={item}
            onLike={handleLike}
            onAmen={handleAmen}
          />
        )}
        ListHeaderComponent={
          <View style={styles.headerSection}>
            {showSuccess && (
              <View style={styles.successBanner}>
                <MaterialIcons
                  name="check-circle"
                  size={22}
                  color={colors.primary}
                />
                <View style={styles.successTextWrap}>
                  <Text style={styles.successTitle}>Testemunho enviado!</Text>
                  <Text style={styles.successSubtitle}>
                    Sua vitória foi enviada para aprovação e em breve estará
                    no mural.
                  </Text>
                </View>
              </View>
            )}

            <TouchableOpacity
              style={styles.addButton}
              onPress={() => setIsAdding(true)}
              activeOpacity={0.8}
            >
              <MaterialIcons name="add" size={20} color="#fff" />
              <Text style={styles.addButtonText}>
                Compartilhar minha Vitória
              </Text>
            </TouchableOpacity>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyState}>
            <MaterialIcons
              name="format-quote"
              size={40}
              color={colors.border}
            />
            <Text style={styles.emptyText}>
              Seja o primeiro a contar sua vitória!
            </Text>
          </View>
        }
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        contentContainerStyle={styles.container}
      />

      <AddTestimonialModal
        visible={isAdding}
        onClose={() => setIsAdding(false)}
        onSave={handleAddTestimonial}
      />
    </>
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
  headerSection: {
    gap: 16,
    marginBottom: 24,
  },
  successBanner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 16,
  },
  successTextWrap: {
    flex: 1,
  },
  successTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  successSubtitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: colors.primary,
    borderRadius: 14,
    height: 52,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
  emptyState: {
    alignItems: "center",
    paddingVertical: 40,
    gap: 12,
  },
  emptyText: {
    textAlign: "center",
    color: colors.textSecondary,
    fontStyle: "italic",
  },
});
