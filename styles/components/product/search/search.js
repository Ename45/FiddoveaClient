import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";

export default StyleSheet.create({
  mainContainer: {
    paddingTop: 20,
    width: SIZES.width,
    height: SIZES.height,
    flex: 1,
    // borderWidth: 3,
    // borderColor: "red",
    // borderStyle: "solid",
    alignItems: "center",
    backgroundColor: COLORS.pageBackgroundBrown,
  },
  searchOuterContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: COLORS.gray3,
    borderRadius: 10,
    marginVertical: 12,
    // marginHorizontal: 12,
    width: SIZES.width,
  },
  searchIcon: {
    marginHorizontal: 6,
    color: COLORS.darkChocolateBrown,
    position: "absolute",
    top: (2 / 100) * SIZES.height,
    // marginTop: -10,
  },
  searchWrapper: {
    position: "relative",
    // flex: 1,
    backgroundColor: COLORS.gainsBoroGray,
    // marginRight: 10,
    borderRadius: 10,
    // height: (8 / 100) * SIZES.height,
    flexDirection: "row",
  },
  searchInput: {
    // position: "absolute",
    width: SIZES.width - 40,
    height: (8 / 100) * SIZES.height,
    paddingHorizontal: (10 / 100) * SIZES.width,
    fontSize: (2.4 / 100) * SIZES.height,
    fontFamily: "poppinsMedium",
    borderWidth: 0,
  },
  searchBtn: {
    marginHorizontal: (9 / 100) * SIZES.width - 20,
    color: COLORS.darkChocolateBrown,
    position: "absolute",
    top: (1.5 / 100) * SIZES.height,
    left: (77 / 100) * SIZES.width,
  },
});
