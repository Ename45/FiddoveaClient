import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../../../constants/theme.js";

export default StyleSheet.create({
  inputContainer: {
    // marginBottom: 20,
  },

  input: {
    width: "90%",
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 12,
    padding: 10,
    fontSize: SIZES.medium,
  },
});
