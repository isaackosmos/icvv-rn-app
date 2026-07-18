import { StyleSheet } from "react-native";

import { colors } from "@/constants/colors";

const styles = StyleSheet.create({
  card: {
    width: "100%",
    height: 420,
    backgroundColor: colors.background,
    borderRadius: 24,
    padding: 28,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.border,
  },
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  status: {
    fontSize: 12,
    fontWeight: "600",
    color: colors.primary,
    letterSpacing: 1,
  },
  center: {
    alignItems: "center",
    gap: 10,
  },
  photo: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: colors.border,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  photoText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },
  name: {
    fontSize: 22,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  role: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.textSecondary,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingTop: 20,
  },
  footerLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: colors.textSecondary,
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  footerValue: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textPrimary,
  },
});

export default styles;
