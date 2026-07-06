import { StyleSheet } from "react-native";

import { colors } from "@/constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  cancel: {
    fontSize: 15,
    color: colors.textSecondary,
  },
  form: {
    padding: 24,
    gap: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.textPrimary,
    marginBottom: 8,
  },
  rooms: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  roomBtn: {
    paddingHorizontal: 16,
    paddingVertical: 10,
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
  roomAge: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 2,
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});

export default styles;
