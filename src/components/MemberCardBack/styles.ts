import { StyleSheet } from "react-native";

import { colors } from "@/constants/colors";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 420,
    backgroundColor: colors.background,
    borderRadius: 24,
    padding: 28,
    alignItems: "center",
    justifyContent: "center",
    gap: 24,
    borderWidth: 1,
    borderColor: colors.border,
  },
  qrBox: {
    backgroundColor: colors.surface,
    padding: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
    maxWidth: 220,
  },
});

export default styles;
