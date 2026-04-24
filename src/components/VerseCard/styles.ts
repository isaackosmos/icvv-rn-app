import { StyleSheet } from "react-native";

import { colors } from "@/constants/colors";

const styles = StyleSheet.create({
  card: {
    height: 140,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    padding: 20,
    justifyContent: "space-between",
  },
  verse: {
    fontSize: 13,
    fontStyle: "italic",
    color: colors.textSecondary,
    lineHeight: 20,
    flex: 1,
  },
  ref: {
    fontSize: 11,
    fontWeight: "700",
    color: colors.primary,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginTop: 8,
  },
});

export default styles;
