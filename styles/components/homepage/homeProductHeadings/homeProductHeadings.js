import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme.js";

export default StyleSheet.create({
  container: {
    marginTop: SIZES.width/14,
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 0,
    width: SIZES.width - 20,
    height: (5 / 100) * SIZES.height,
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
    fontFamily: "poppinsRegular400",
    fontSize: (5 / 100) * SIZES.width,
    color: COLORS.primary,
  },
});
