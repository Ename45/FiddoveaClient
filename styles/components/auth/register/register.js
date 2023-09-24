import { StyleSheet } from "react-native";
import { FONT, SIZES, COLORS } from "../../../../constants/theme.js";

export default StyleSheet.create({
  container: {
    width: SIZES.width,
    height: SIZES.height,
    backgroundColor: COLORS.darkBrown2,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: "90%",
    height: 40,
    borderColor: COLORS.gray,
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    borderRadius: 20,
  },
  buttonBackground: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    border: "1px",
    backgroundColor: COLORS.darkBrown,
  },
});
