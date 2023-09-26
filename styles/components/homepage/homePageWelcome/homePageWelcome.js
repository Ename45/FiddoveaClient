import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";


export default StyleSheet.create({
  outerContainer: {
    width: SIZES.width,
  },
  welcomeText: (color, top) => ({
    fontWeight: "bold",
    fontSize: (7 / 100) * SIZES.width,
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
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.darkChocolateBrown,
  },
  searchWrapper: {
    // position: "relative",
    flex: 1,
    backgroundColor: COLORS.gainsBoroGray,
    marginRight: 10,
    borderRadius: 10,
    height: (8 / 100) * SIZES.height,
  },
  searchInput: {
    // position: "absolute",
    width: "100%",
    height: (8 / 100) * SIZES.height,
    paddingHorizontal: 10,
    fontSize: (3 / 100) * SIZES.height,
  },
  searchBtn: {
    width: 50,
    backgroundColor: COLORS.primary,
    height: "100%"
  }
});