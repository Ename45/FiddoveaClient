import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.pageBackgroundBrown,
    paddingTop: (1.5 / 100) * SIZES.height,
  },
  wrapper: {
    // flex: 1,
    backgroundColor: COLORS.pageBackgroundBrown,
    // borderWidth: 3,
    // borderStyle: "solid",
    // justifyContent: "center",
    alignItems: "center",
  },
  upperRow: {
    width: SIZES.width - 20,
    // marginHorizontal: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    position: "absolute",
    backgroundColor: COLORS.white,
    borderRadius: SIZES.large,
    top: SIZES.large,
    zIndex: 999,
    gap: SIZES.width / 4,
    elevation: 10,
  },
  heading: {
    fontFamily: "poppinsBold700",
    fontSize: (3.5 / 100) * SIZES.height,
    color: COLORS.tabBarBrown,
    marginLeft: 5,
  },
});
