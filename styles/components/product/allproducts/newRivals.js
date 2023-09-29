import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.pageBackgroundBrown,
  },
  wrapper: {
    // flex: 1,
    backgroundColor: COLORS.pageBackgroundBrown,
  },
  upperRow: {
    width: SIZES.width - 50,
    marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    backgroundColor: COLORS.tabBarBrown,
    borderRadius: SIZES.large,
    top: SIZES.large,
    zIndex: 999,
  },
  heading: {
    fontFamily: "poppinsBold",
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
    marginLeft: 5,
  },
});
