import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme.js";

export default StyleSheet.create({
  container: {
    marginTop: (4 / 100) * SIZES.width,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 0,
    width: SIZES.width - 20,
    height: (9 / 100) * SIZES.height,
    marginHorizontal: 12,
    // borderWidth: 3,
    // borderColor: "yellow",
    // borderStyle: "solid",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerTitle: {
    fontFamily: "poppinsMedium500",
    fontSize: (4 / 100) * SIZES.width,
    color: COLORS.primary,
    marginTop: (7 / 100) * SIZES.width,
  },
});
