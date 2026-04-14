import React from "react";

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { Input } from "@/components/Input";
import { colors } from "@/constants/colors";
import { Button } from "@/components/Button";

import { usePrayer } from "@/features/protected/home/userPrayer";

export default function PrayerScreen() {
  const {
    name,
    setName,
    request,
    setRequest,
    anonymous,
    setAnonymous,
    loading,
    submitted,
    error,
    handleSubmit,
    reset,
  } = usePrayer();

  if (submitted) {
    return (
      <View style={styles.centered}>
        <View style={styles.successCard}>
          <View style={styles.successIcon}>
            <MaterialIcons
              name="check-circle"
              size={40}
              color={colors.primary}
            />
          </View>
          <Text style={styles.successTitle}>Pedido Recebido</Text>
          <Text style={styles.successText}>
            Estaremos orando por você. Creia que Deus já está agindo em sua
            causa.
          </Text>
          <Button
            label="Enviar outro pedido"
            onPress={reset}
            variant="outline"
          />
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.verse}>
        "Orai uns pelos outros, para que sareis."
      </Text>
      <Text style={styles.verseRef}>— Tiago 5:16</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity
        style={styles.checkRow}
        onPress={() => setAnonymous(!anonymous)}
        activeOpacity={0.7}
      >
        <View style={[styles.checkbox, anonymous && styles.checkboxActive]}>
          {anonymous && <MaterialIcons name="check" size={14} color="#fff" />}
        </View>
        <Text style={styles.checkLabel}>Quero fazer um pedido anônimo</Text>
      </TouchableOpacity>

      {!anonymous && (
        <Input
          label="Seu nome"
          icon="person"
          value={name}
          onChangeText={setName}
          placeholder="Digite seu nome completo"
        />
      )}

      <Input
        label="Seu pedido"
        icon="favorite-border"
        value={request}
        onChangeText={setRequest}
        placeholder="Descreva seu pedido de oração..."
        multiline
        numberOfLines={5}
        style={{ height: 120, textAlignVertical: "top" }}
      />

      <Button label="Enviar Pedido" onPress={handleSubmit} loading={loading} />

      <Text style={styles.footer}>
        Seus pedidos são encaminhados diretamente para nossa equipe pastoral e
        intercessores.
      </Text>
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
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: colors.background,
  },
  verse: {
    fontSize: 15,
    fontStyle: "italic",
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
  },
  verseRef: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.primary,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  error: {
    color: colors.error,
    fontSize: 13,
  },
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.textPrimary,
  },
  footer: {
    fontSize: 11,
    color: colors.textSecondary,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    lineHeight: 16,
  },
  successCard: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 20,
    padding: 32,
    alignItems: "center",
    gap: 16,
  },
  successIcon: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#d1fae5",
    alignItems: "center",
    justifyContent: "center",
  },
  successTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  successText: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
  },
});
