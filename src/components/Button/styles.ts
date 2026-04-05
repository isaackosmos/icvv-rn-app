import { StyleSheet } from "react-native";

import { colors } from "@/constants/colors";

const styles = StyleSheet.create({
  base: {
    height: 50,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: { backgroundColor: colors.primary },
  outline: { borderWidth: 1, borderColor: colors.primary },
  label: { fontSize: 16, fontWeight: "600" },
  primaryLabel: { color: colors.background },
  outlineLabel: { color: colors.primary },
});

export default styles;
