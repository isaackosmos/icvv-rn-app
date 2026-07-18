import React from "react";

import { MaterialIcons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { colors } from "@/constants/colors";

import { env } from "@/constants/env";
import { Coupon } from "@/services/club";

import styles from "./styles";

interface CouponCardProps {
  coupon: Coupon;
  onPress: () => void;
}

export function CouponCard({ coupon, onPress }: CouponCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: coupon.logo || env.fallbackLogo }}
        style={styles.logo}
      />
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.category}>{coupon.category}</Text>
          <Text style={styles.discount}>{coupon.discount}</Text>
        </View>
        <Text style={styles.companyName}>{coupon.companyName}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {coupon.description}
        </Text>
      </View>
      <MaterialIcons
        name="chevron-right"
        size={22}
        color={colors.placeholder}
      />
    </TouchableOpacity>
  );
}