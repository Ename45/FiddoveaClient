import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme.js";

export default StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 0,
    borderWidth: 3,
    borderColor: "yellow",
    borderStyle: "solid",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "croissantOneRegular",
    fontSize: (5 / 100) * SIZES.width,
    color: COLORS.primary
  },
});
