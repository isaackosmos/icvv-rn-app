import { StyleSheet } from "react-native";

import { colors } from "@/constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    backgroundColor: colors.surface,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#10b981",
  },
  headerText: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  messages: {
    padding: 12,
    gap: 12,
    flexGrow: 1,
  },
  message: {
    gap: 2,
  },
  userName: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.primary,
  },
  messageText: {
    fontSize: 13,
    color: colors.textPrimary,
    backgroundColor: colors.surface,
    padding: 8,
    borderRadius: 10,
    alignSelf: "flex-start",
  },
  empty: {
    textAlign: "center",
    color: colors.textSecondary,
    fontSize: 13,
    marginTop: 24,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: colors.surface,
    borderRadius: 20,
    paddingHorizontal: 14,
    fontSize: 13,
    color: colors.textPrimary,
  },
  sendBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  loginHint: {
    textAlign: "center",
    fontSize: 12,
    color: colors.textSecondary,
    padding: 16,
  },
});

export default styles;
