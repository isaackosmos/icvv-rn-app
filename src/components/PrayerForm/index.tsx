import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import styles from "./styles";

interface PrayerFormProps {
  name: string;
  request: string;
  anonymous: boolean;
  loading: boolean;
  error: string;
  onNameChange: (v: string) => void;
  onRequestChange: (v: string) => void;
  onToggleAnonymous: () => void;
  onSubmit: () => void;
}

export function PrayerForm({
  name,
  request,
  anonymous,
  loading,
  error,
  onNameChange,
  onRequestChange,
  onToggleAnonymous,
  onSubmit,
}: PrayerFormProps) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.verse}>
        "Orai uns pelos outros, para que sareis."
      </Text>
      <Text style={styles.ref}>— Tiago 5:16</Text>

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity
        style={styles.checkRow}
        onPress={onToggleAnonymous}
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
          onChangeText={onNameChange}
          placeholder="Digite seu nome completo"
        />
      )}

      <Input
        label="Seu pedido"
        value={request}
        onChangeText={onRequestChange}
        placeholder="Descreva seu pedido de oração..."
        multiline
        numberOfLines={5}
        style={{ height: 120, textAlignVertical: "top" }}
      />

      <Button label="Enviar Pedido" onPress={onSubmit} loading={loading} />

      <Text style={styles.footer}>
        Seus pedidos são encaminhados diretamente para nossa equipe pastoral e
        intercessores.
      </Text>
    </ScrollView>
  );
}
