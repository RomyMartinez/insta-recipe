import { StyleSheet } from "react-native";
import { colors } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: colors.textSecondary,
    fontFamily: "Poppins-Regular",
  },
});
