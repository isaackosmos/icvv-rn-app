import React from "react";
import { Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

import { Link } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

import { Input } from "@/components/Input";
import { colors } from "@/constants/colors";
import { Button } from "@/components/Button";

import { useLogin } from "@/features/auth/useLogin";

export default function LoginScreen() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    setShowPassword,
    error,
    loading,
    handleLogin,
  } = useLogin();

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Bem-vindo de volta</Text>
      <Text style={styles.subtitle}>Entre na sua conta ICVV</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

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

      <Link href="/reset-password" style={styles.forgot}>
        Esqueceu sua senha?
      </Link>

      <Button label="Entrar" onPress={handleLogin} loading={loading} />

      <Text style={styles.footer}>
        Não tem uma conta?{" "}
        <Link href="/register" style={styles.link}>
          Cadastre-se
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
  forgot: {
    fontSize: 13,
    color: colors.primary,
    fontWeight: "600",
    alignSelf: "flex-end",
    marginBottom: 20,
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
