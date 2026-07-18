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
  statusRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.primary,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.textSecondary,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    gap: 20,
  },
  beneficiary: {
    alignItems: "center",
    gap: 2,
  },
  beneficiaryLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.textSecondary,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  beneficiaryName: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  beneficiaryEmail: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  qrBox: {
    padding: 20,
    backgroundColor: colors.background,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  codeBox: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderStyle: "dashed",
    padding: 16,
  },
  codeLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: colors.textSecondary,
    textTransform: "uppercase",
    marginBottom: 4,
  },
  codeValue: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  companyInfo: {
    alignItems: "center",
    gap: 4,
  },
  companyName: {
    fontSize: 15,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  companyDetail: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 18,
  },
  companyDiscount: {
    color: colors.primary,
    fontWeight: "700",
  },
  verifiedRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    width: "100%",
    justifyContent: "center",
  },
  verifiedText: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});

export default styles;
