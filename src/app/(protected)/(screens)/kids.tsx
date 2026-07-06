import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

import { ChildCard } from "@/components/ChildCard";
import { AddChildModal } from "@/components/AddChildModal";

import { colors } from "@/constants/colors";
import { useKids } from "@/features/protected/screens/useKids";

export default function KidsScreen() {
  const {
    children,
    rooms,
    selectedRoom,
    setSelectedRoom,
    loading,
    handleCheckin,
    handleCheckout,
    handleDelete,
    handleAddChild,
  } = useKids();
  const [showModal, setShowModal] = useState(false);

  const checkedIn = children.filter((c) => c.status === "checkin").length;

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
        data={children}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <>
            <View style={styles.stats}>
              <View style={styles.stat}>
                <Text style={styles.statNumber}>{children.length}</Text>
                <Text style={styles.statLabel}>Total</Text>
              </View>
              <View style={[styles.stat, styles.statActive]}>
                <Text style={[styles.statNumber, { color: colors.primary }]}>
                  {checkedIn}
                </Text>
                <Text style={styles.statLabel}>Check-in</Text>
              </View>
            </View>

            <Text style={styles.sectionTitle}>Sala de check-in</Text>
            <View style={styles.rooms}>
              {rooms.map((room) => (
                <TouchableOpacity
                  key={room.id}
                  style={[
                    styles.roomBtn,
                    selectedRoom === room.name && styles.roomBtnActive,
                  ]}
                  onPress={() => setSelectedRoom(room.name)}
                >
                  <Text
                    style={[
                      styles.roomText,
                      selectedRoom === room.name && styles.roomTextActive,
                    ]}
                  >
                    {room.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.listHeader}>
              <Text style={styles.sectionTitle}>Crianças</Text>
              <TouchableOpacity
                style={styles.addBtn}
                onPress={() => setShowModal(true)}
              >
                <MaterialIcons name="add" size={18} color={colors.primary} />
                <Text style={styles.addText}>Adicionar</Text>
              </TouchableOpacity>
            </View>
          </>
        }
        renderItem={({ item }) => (
          <ChildCard
            child={item}
            onCheckin={() => handleCheckin(item.id)}
            onCheckout={() => handleCheckout(item.id)}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        ListEmptyComponent={
          <Text style={styles.empty}>Nenhuma criança cadastrada.</Text>
        }
      />

      <AddChildModal
        visible={showModal}
        rooms={rooms}
        onClose={() => setShowModal(false)}
        onSave={handleAddChild}
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
  stats: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  stat: {
    flex: 1,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
  },
  statActive: {
    borderColor: "#bbf7d0",
    backgroundColor: "#f0fdf4",
  },
  statNumber: {
    fontSize: 28,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  statLabel: {
    fontSize: 11,
    color: colors.textSecondary,
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textPrimary,
    marginBottom: 10,
  },
  rooms: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 24,
  },
  roomBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  roomBtnActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  roomText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  roomTextActive: {
    color: "#fff",
  },
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  addBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  addText: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.primary,
  },
  empty: {
    textAlign: "center",
    color: colors.textSecondary,
    marginTop: 32,
  },
});
