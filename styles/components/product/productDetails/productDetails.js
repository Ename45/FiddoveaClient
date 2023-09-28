import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pageBackgroundBrown
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 14,
    width: SIZES.width-44,
    zIndex: 999
  }
});
