import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

import { InfoRow } from "@/components/InfoRow";
import { ProfileHeader } from "@/components/ProfileHeader";
import { EditProfileModal } from "@/components/EditProfileModal";

import { colors } from "@/constants/colors";
import { useMembers } from "@/features/protected/useMembers";

export default function MembersScreen() {
  const {
    member,
    loading,
    form,
    setForm,
    saving,
    isEditing,
    setIsEditing,
    handleSave,
  } = useMembers();

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator color={colors.primary} size="large" />
      </View>
    );
  }

  if (!member) {
    return (
      <View style={styles.centered}>
        <Text style={styles.empty}>Perfil não encontrado.</Text>
      </View>
    );
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <ProfileHeader member={member} onEditPress={() => setIsEditing(true)} />

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Informações de Contato</Text>
          <InfoRow icon="phone" label="Telefone" value={member.phone ?? "—"} />
          <InfoRow
            icon="place"
            label="Endereço"
            value={member.address ?? "—"}
          />
          <InfoRow
            icon="event"
            label="Nascimento"
            value={member.birthDate ?? "—"}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Vida na Igreja</Text>
          <InfoRow
            icon="water-drop"
            label="Batismo"
            value={member.baptismDate ?? "—"}
          />
          <InfoRow
            icon="groups"
            label="Ministério"
            value={member.ministry ?? "—"}
          />
          <InfoRow
            icon="diversity-3"
            label="Pequeno Grupo"
            value={member.smallGroup ?? "—"}
          />
          <InfoRow
            icon="stars"
            label="Membro desde"
            value={member.memberSince ?? "—"}
          />
        </View>
      </ScrollView>

      <EditProfileModal
        visible={isEditing}
        form={form}
        saving={saving}
        onClose={() => setIsEditing(false)}
        onSave={handleSave}
        onChange={setForm}
      />
    </>
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
    backgroundColor: colors.background,
  },
  empty: {
    color: colors.textSecondary,
    fontSize: 14,
  },
  card: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 16,
    gap: 4,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.textSecondary,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 8,
  },
});
