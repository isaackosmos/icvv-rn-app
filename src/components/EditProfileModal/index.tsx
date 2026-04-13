import React from "react";

import { View, Text, Modal, ScrollView, TouchableOpacity } from "react-native";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import styles from "./styles";

interface EditForm {
  name: string;
  phone: string;
  address: string;
  birthDate: string;
  ministry: string;
  smallGroup: string;
}

interface EditProfileModalProps {
  visible: boolean;
  form: EditForm;
  saving: boolean;
  onClose: () => void;
  onSave: () => void;
  onChange: (form: EditForm) => void;
}

export function EditProfileModal({
  visible,
  form,
  saving,
  onClose,
  onSave,
  onChange,
}: EditProfileModalProps) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Editar Perfil</Text>
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
            value={form.name}
            onChangeText={(v) => onChange({ ...form, name: v })}
            placeholder="Seu nome"
          />
          <Input
            label="Telefone"
            icon="phone"
            value={form.phone}
            onChangeText={(v) => onChange({ ...form, phone: v })}
            placeholder="(00) 00000-0000"
          />
          <Input
            label="Endereço"
            icon="place"
            value={form.address}
            onChangeText={(v) => onChange({ ...form, address: v })}
            placeholder="Rua, Número, Bairro"
          />
          <Input
            label="Nascimento"
            icon="event"
            value={form.birthDate}
            onChangeText={(v) => onChange({ ...form, birthDate: v })}
            placeholder="DD/MM/AAAA"
          />
          <Input
            label="Ministério"
            icon="groups"
            value={form.ministry}
            onChangeText={(v) => onChange({ ...form, ministry: v })}
            placeholder="Ex: Louvor"
          />
          <Input
            label="Pequeno Grupo"
            icon="diversity-3"
            value={form.smallGroup}
            onChangeText={(v) => onChange({ ...form, smallGroup: v })}
            placeholder="Nome da Célula"
          />
        </ScrollView>

        <View style={styles.footer}>
          <Button label="Salvar Alterações" onPress={onSave} loading={saving} />
        </View>
      </View>
    </Modal>
  );
}
