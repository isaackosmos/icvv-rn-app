import { StyleSheet } from "react-native";

import { colors } from "@/constants/colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0f2044",
    borderRadius: 16,
    padding: 24,
    gap: 8,
  },
  verse: {
    fontSize: 14,
    fontStyle: "italic",
    color: "rgba(255,255,255,0.8)",
    lineHeight: 22,
  },
  ref: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.primary,
    letterSpacing: 1,
  },
});

export default styles;
