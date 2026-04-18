import { StyleSheet } from "react-native";

import { colors } from "@/constants/colors";

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 16,
    backgroundColor: colors.background,
    flexGrow: 1,
  },
  verse: {
    fontSize: 15,
    fontStyle: "italic",
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 22,
  },
  ref: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.primary,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  error: { color: colors.error, fontSize: 13 },
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 14,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkLabel: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.textPrimary,
  },
  footer: {
    fontSize: 11,
    color: colors.textSecondary,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    lineHeight: 16,
  },
});

export default styles;
