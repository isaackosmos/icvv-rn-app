import React from "react";
import { Link } from "expo-router";

import { MaterialIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

import { Input } from "@/components/Input";
import { colors } from "@/constants/colors";
import { Button } from "@/components/Button";

import { useRegister } from "@/features/auth/useRegister";

export default function RegisterScreen() {
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    error,
    loading,
    handleRegister,
  } = useRegister();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Criar conta</Text>
      <Text style={styles.subtitle}>Junte-se à família ICVV</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <Input
        label="Nome completo"
        icon="person"
        value={name}
        onChangeText={setName}
        placeholder="Seu nome"
      />

      <Input
        label="E-mail"
        icon="mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="seu@email.com"
      />

      <Input
        label="Senha"
        icon="lock"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={!showPassword}
        placeholder="••••••••"
        rightElement={
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <MaterialIcons
              name={showPassword ? "visibility" : "visibility-off"}
              size={18}
              color={colors.placeholder}
            />
          </TouchableOpacity>
        }
      />

      <Input
        label="Confirmar senha"
        icon="lock"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={!showConfirmPassword}
        placeholder="••••••••"
        rightElement={
          <TouchableOpacity
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <MaterialIcons
              name={showConfirmPassword ? "visibility" : "visibility-off"}
              size={18}
              color={colors.placeholder}
            />
          </TouchableOpacity>
        }
      />

      <Button label="Criar Conta" onPress={handleRegister} loading={loading} />

      <Text style={styles.footer}>
        Já tem uma conta?{" "}
        <Link href="/login" style={styles.link}>
          Entre aqui
        </Link>
      </Text>
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
  footer: {
    textAlign: "center",
    color: colors.textSecondary,
    marginTop: 24,
  },
  link: {
    color: colors.primary,
    fontWeight: "600",
  },
});
