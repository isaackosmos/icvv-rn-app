import { StyleSheet } from "react-native";

import { colors } from "@/constants/colors";

const styles = StyleSheet.create({
  wrapper: { gap: 8, marginBottom: 16 },
  label: { fontSize: 14, fontWeight: "500", color: colors.textPrimary },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
  },
  input: { flex: 1, height: 48, fontSize: 15, color: colors.textPrimary },
});

export default styles;