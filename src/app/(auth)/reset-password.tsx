import React from "react";
import { Link } from "expo-router";

import { Text, ScrollView, StyleSheet } from "react-native";

import { Input } from "@/components/Input";
import { colors } from "@/constants/colors";
import { Button } from "@/components/Button";

import { useForgotPassword } from "@/features/auth/useResetPassword";

export default function ForgotPasswordScreen() {
  const { email, setEmail, error, success, loading, handleResetPassword } =
    useForgotPassword();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Recuperar Senha</Text>
      <Text style={styles.subtitle}>
        Enviaremos as instruções para o seu e-mail.
      </Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}
      {success ? (
        <Text style={styles.success}>
          E-mail enviado! Verifique sua caixa de entrada.
        </Text>
      ) : null}

      <Input
        label="E-mail"
        icon="mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="seu@email.com"
      />

      <Button
        label="Enviar Instruções"
        onPress={handleResetPassword}
        loading={loading}
      />

      <Link href="/login" style={styles.back}>
        Voltar para o login
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 28,
  },
  error: {
    color: colors.error,
    fontSize: 13,
    marginBottom: 12,
  },
  success: {
    color: colors.primary,
    fontSize: 13,
    marginBottom: 12,
  },
  back: {
    textAlign: "center",
    color: colors.textSecondary,
    marginTop: 24,
  },
});
