import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../../../constants/theme.js";

export default StyleSheet.create({
  inputContainer: {
    // marginBottom: 20,
  },

  input: {
    width: "90%",
    height: 40,
    borderColor: COLORS.gray,
    borderWidth: 1,
    paddingLeft: 8,
    borderRadius: 10,
  },
});
