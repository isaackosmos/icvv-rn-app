import React from "react";
import { FlatList, View, Text, ActivityIndicator, StyleSheet } from "react-native";

import { CouponCard } from "@/components/CouponCard";
import { CouponDetailModal } from "@/components/CouponDetailModal";
import { VoucherModal } from "@/components/VoucherModal";
import { Input } from "@/components/Input";

import { colors } from "@/constants/colors";

import { useClub } from "@/features/protected/screens/useClub";

export default function ClubScreen() {
  const {
    coupons,
    loading,
    search,
    setSearch,
    selectedCoupon,
    selectCoupon,
    closeDetail,
    voucher,
    generateVoucher,
    closeVoucher,
    user,
  } = useClub();

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
        data={coupons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CouponCard coupon={item} onPress={() => selectCoupon(item)} />
        )}
        ListHeaderComponent={
          <Input
            icon="search"
            placeholder="Buscar por empresa ou categoria..."
            value={search}
            onChangeText={setSearch}
          />
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Nenhum cupom disponível no momento.
          </Text>
        }
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        contentContainerStyle={styles.container}
      />

      <CouponDetailModal
        visible={!!selectedCoupon && !voucher}
        coupon={selectedCoupon}
        onClose={closeDetail}
        onGenerate={generateVoucher}
      />

      <VoucherModal
        visible={!!voucher}
        voucher={voucher}
        user={user}
        onClose={closeVoucher}
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
  emptyText: {
    textAlign: "center",
    color: colors.textSecondary,
    marginTop: 40,
  },
});
