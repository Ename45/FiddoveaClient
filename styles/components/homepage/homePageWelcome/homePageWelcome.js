import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";


export default StyleSheet.create({
  outerContainer: {
    width: SIZES.width,
  },
  welcomeText: (color, top) => ({
    fontFamily: "croissantOneRegular",
    fontSize: (6 / 100) * SIZES.width,
    marginTop: top,
    color: color,
    marginHorizontal: 12,
  }),
  searchOuterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.gray3,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal: 12,
    width: SIZES.width,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.darkChocolateBrown,
    position: "absolute",
    top: (2/100*("100%"))
    // marginTop: 10,
  },
  searchWrapper: {
    position: "relative",
    flex: 1,
    backgroundColor: COLORS.gainsBoroGray,
    // marginRight: 10,
    borderRadius: 10,
    // height: (8 / 100) * SIZES.height,
    flexDirection: "row"
  },
  searchInput: {
    // position: "absolute",
    width: SIZES.width,
    height: (8 / 100) * SIZES.height,
    // paddingHorizontal: 2,
    fontSize: (2 / 100) * SIZES.height,
    fontFamily: "croissantOneRegular",
    borderWidth: 0
  },
  searchBtn: {
    width: 50,
    borderRadius: 10,
    height: "50%",
    alignItems: "center",
  },
});