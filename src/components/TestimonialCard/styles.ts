import { StyleSheet } from "react-native";

import { colors } from "@/constants/colors";

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    gap: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "700",
  },
  headerInfo: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginTop: 2,
  },
  metaText: {
    fontSize: 11,
    color: colors.textSecondary,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: colors.placeholder,
  },
  category: {
    fontSize: 11,
    fontWeight: "600",
    color: colors.primary,
  },
  content: {
    fontSize: 15,
    color: colors.textPrimary,
    lineHeight: 22,
    fontStyle: "italic",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  actionText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.textSecondary,
  },
  shareBtn: {
    marginLeft: "auto",
    padding: 4,
  },
});

export default styles;
