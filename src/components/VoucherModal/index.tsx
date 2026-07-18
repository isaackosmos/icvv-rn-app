import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";
import * as Clipboard from "expo-clipboard";

import { Coupon } from "@/services/club";
import { colors } from "@/constants/colors";

import styles from "./styles";

interface VoucherUser {
  name?: string;
  email: string;
}

interface VoucherModalProps {
  visible: boolean;
  voucher: { coupon: Coupon; code: string } | null;
  user: VoucherUser;
  onClose: () => void;
}

export function VoucherModal({
  visible,
  voucher,
  user,
  onClose,
}: VoucherModalProps) {
  if (!voucher) return null;

  const { coupon, code } = voucher;

  const qrValue = JSON.stringify({
    couponId: coupon.id,
    company: coupon.companyName,
    userName: user.name || "Membro ICVV",
    userEmail: user.email,
    timestamp: new Date().toISOString(),
  });

  function copyCode() {
    Clipboard.setStringAsync(code);
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
          <View style={styles.statusRow}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Voucher Ativo</Text>
          </View>
          <TouchableOpacity onPress={onClose}>
            <MaterialIcons name="close" size={22} color={colors.textSecondary} />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.beneficiary}>
            <Text style={styles.beneficiaryLabel}>Beneficiário</Text>
            <Text style={styles.beneficiaryName}>
              {user.name || "Membro ICVV"}
            </Text>
            <Text style={styles.beneficiaryEmail}>{user.email}</Text>
          </View>

          <View style={styles.qrBox}>
            <QRCode value={qrValue} size={180} />
          </View>

          <TouchableOpacity style={styles.codeBox} onPress={copyCode}>
            <View>
              <Text style={styles.codeLabel}>Código do Voucher</Text>
              <Text style={styles.codeValue}>{code}</Text>
            </View>
            <MaterialIcons
              name="content-copy"
              size={18}
              color={colors.primary}
            />
          </TouchableOpacity>

          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>{coupon.companyName}</Text>
            <Text style={styles.companyDetail}>
              Apresente este QR Code no estabelecimento para validar seu
              desconto de{" "}
              <Text style={styles.companyDiscount}>{coupon.discount}</Text>.
            </Text>
          </View>

          <View style={styles.verifiedRow}>
            <MaterialIcons
              name="check-circle"
              size={16}
              color={colors.primary}
            />
            <Text style={styles.verifiedText}>Membro Verificado</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
}
