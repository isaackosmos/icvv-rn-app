import React, { useState } from "react";
import { View, Text, Modal, ScrollView, TouchableOpacity } from "react-native";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import styles from "./styles";
import { Child, Room } from "@/services/kids";

interface AddChildModalProps {
  visible: boolean;
  rooms: Room[];
  onClose: () => void;
  onSave: (data: Omit<Child, "id" | "status">) => Promise<void>;
}

export function AddChildModal({
  visible,
  rooms,
  onClose,
  onSave,
}: AddChildModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [allergies, setAllergies] = useState("");
  const [room, setRoom] = useState(rooms[0]?.name ?? "");
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    if (!name.trim() || !phone.trim()) return;
    setSaving(true);
    try {
      await onSave({
        name,
        parentName: "",
        parentPhone: phone,
        allergies,
        room,
      });
      setName("");
      setPhone("");
      setAllergies("");
      onClose();
    } finally {
      setSaving(false);
    }
  }

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Cadastrar Criança</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancel}>Cancelar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          contentContainerStyle={styles.form}
          keyboardShouldPersistTaps="handled"
        >
          <Input
            label="Nome completo"
            icon="person"
            value={name}
            onChangeText={setName}
            placeholder="Ex: Pedro Silva"
          />
          <Input
            label="Telefone"
            icon="phone"
            value={phone}
            onChangeText={setPhone}
            placeholder="(00) 00000-0000"
            keyboardType="phone-pad"
          />
          <Input
            label="Alergias"
            icon="medical-services"
            value={allergies}
            onChangeText={setAllergies}
            placeholder="Nenhuma"
          />

          <Text style={styles.label}>Sala</Text>
          <View style={styles.rooms}>
            {rooms.map((r) => (
              <TouchableOpacity
                key={r.id}
                style={[
                  styles.roomBtn,
                  room === r.name && styles.roomBtnActive,
                ]}
                onPress={() => setRoom(r.name)}
              >
                <Text
                  style={[
                    styles.roomText,
                    room === r.name && styles.roomTextActive,
                  ]}
                >
                  {r.name}
                </Text>
                {r.ageRange && <Text style={styles.roomAge}>{r.ageRange}</Text>}
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Button label="Salvar" onPress={handleSave} loading={saving} />
        </View>
      </View>
    </Modal>
  );
}
