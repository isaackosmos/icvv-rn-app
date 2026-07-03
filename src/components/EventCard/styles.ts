import { StyleSheet } from "react-native";

import { colors } from "@/constants/colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 180,
  },
  content: {
    padding: 16,
    gap: 8,
  },
  category: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  description: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  infoText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  actions: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },
  btnPrimary: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    backgroundColor: colors.primary,
    borderRadius: 12,
    height: 42,
  },
  btnPrimaryText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  btnSecondary: {
    width: 42,
    height: 42,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
