import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Image, Modal, ScrollView, TouchableOpacity } from "react-native";

import { Coupon } from "@/services/club";
import { colors } from "@/constants/colors";
import { env } from "@/constants/env";

import { Button } from "@/components/Button";

import styles from "./styles";

interface CouponDetailModalProps {
  visible: boolean;
  coupon: Coupon | null;
  onClose: () => void;
  onGenerate: () => void;
}

export function CouponDetailModal({
  visible,
  coupon,
  onClose,
  onGenerate,
}: CouponDetailModalProps) {
  if (!coupon) return null;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerInfo}>
            <Image
              source={{ uri: coupon.logo || env.fallbackLogo }}
              style={styles.logo}
            />
            <View>
              <Text style={styles.companyName}>{coupon.companyName}</Text>
              <View style={styles.categoryTag}>
                <Text style={styles.categoryTagText}>{coupon.category}</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancel}>Fechar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.discountBox}>
            <View style={styles.discountBoxHeader}>
              <MaterialIcons
                name="local-offer"
                size={20}
                color={colors.primary}
              />
              <Text style={styles.discountBoxLabel}>Oferta Exclusiva</Text>
            </View>
            <Text style={styles.discountValue}>{coupon.discount}</Text>
            <Text style={styles.discountDescription}>
              {coupon.description}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <MaterialIcons name="event" size={18} color={colors.primary} />
            <Text style={styles.infoText}>
              Válido até{" "}
              {new Date(coupon.expiryDate).toLocaleDateString("pt-BR")}
            </Text>
          </View>

          {coupon.terms && (
            <View style={styles.termsSection}>
              <View style={styles.termsHeader}>
                <MaterialIcons name="info" size={16} color={colors.textPrimary} />
                <Text style={styles.termsTitle}>Regras e Condições</Text>
              </View>
              <Text style={styles.termsText}>{coupon.terms}</Text>
            </View>
          )}
        </ScrollView>

        <View style={styles.footer}>
          <Button label="Gerar Voucher de Desconto" onPress={onGenerate} />
        </View>
      </View>
    </Modal>
  );
}
