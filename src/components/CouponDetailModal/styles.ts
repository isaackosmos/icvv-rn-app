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
    alignItems: "flex-start",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerInfo: {
    flexDirection: "row",
    gap: 12,
    flex: 1,
  },
  logo: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: colors.surface,
  },
  companyName: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  categoryTag: {
    alignSelf: "flex-start",
    backgroundColor: colors.surface,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginTop: 6,
  },
  categoryTagText: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.primary,
    textTransform: "uppercase",
  },
  cancel: {
    fontSize: 15,
    color: colors.textSecondary,
  },
  content: {
    padding: 24,
    gap: 20,
  },
  discountBox: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    padding: 16,
    gap: 4,
  },
  discountBoxHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  discountBoxLabel: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.primary,
    textTransform: "uppercase",
  },
  discountValue: {
    fontSize: 26,
    fontWeight: "800",
    color: colors.primary,
  },
  discountDescription: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  termsSection: {
    gap: 6,
  },
  termsHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  termsTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  termsText: {
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  footer: {
    padding: 24,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
});

export default styles;
