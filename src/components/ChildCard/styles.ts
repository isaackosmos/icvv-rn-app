import { StyleSheet } from "react-native";

import { colors } from "@/constants/colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  cardActive: {
    backgroundColor: "#f0fdf4",
    borderColor: "#bbf7d0",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarActive: {
    backgroundColor: "#dcfce7",
  },
  avatarText: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textSecondary,
  },
  avatarTextActive: {
    color: "#16a34a",
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  detail: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  room: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.primary,
    marginTop: 2,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    flex: 1,
    height: 38,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btnCheckin: {
    backgroundColor: colors.primary,
  },
  btnCheckout: {
    backgroundColor: "#f59e0b",
  },
  btnText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "700",
  },
});

export default styles;
