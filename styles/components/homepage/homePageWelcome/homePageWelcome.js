import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";


export default StyleSheet.create({
  outerContainer: {
    width: SIZES.width,
    marginBottom: 10,
    // borderWidth: 3,
    // borderColor: "red",
    // borderStyle: "solid",
    height: (10 / 100) * SIZES.height,
    marginHorizontal: 8,
    marginBottom: -(0.3/ 100) * SIZES.height,
    position: "relative",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 3
    
  },
  welcomeText: (color, top) => ({
    fontFamily: "poppinsBold700",
    fontSize: (6 / 100) * SIZES.width,
    marginTop: top,
    color: color,
    // marginHorizontal: 8,
    // lineHeight: 36,
    // borderWidth: 3,
    // borderStyle: "solid",
    // position: "absolute",
    width: "99%",
    height: "50%"
  }),
  searchOuterContainer: {
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    color: COLORS.gray3,
    borderRadius: 10,
    marginVertical: 12,

    // marginHorizontal: -12,
    width: SIZES.width - 5,
    marginLeft: (2 / 100) * SIZES.width,
    height: (8 / 100) * SIZES.height,
    // borderWidth: 3,
    // borderColor: "red",
    // borderStyle: "solid",
  },
  // searchIcon: {
  //   marginHorizontal: 6,
  //   color: COLORS.darkChocolateBrown,
  //   position: "absolute",
  //   top: (2 / 100) * SIZES.height,
  //   // marginTop: -10,
  // },
  searchWrapper: {
    // position: "relative",
    // flex: 1,
    backgroundColor: COLORS.gainsBoroGray,
    // marginRight: 10,
    borderRadius: 20,
    height: (7 / 100) * SIZES.height,
    width: SIZES.width - 20,
    // flexDirection: "row",
    // borderWidth: 3,
    // borderColor: "green",
    // borderStyle: "solid",
  },
  searchInput: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // position: "absolute",
    // width: SIZES.width - 40,
    // height: (8 / 100) * SIZES.height,
    // paddingHorizontal: (10 / 100) * SIZES.width,
    // fontSize: (2.4 / 100) * SIZES.height,
    fontFamily: "poppinsLight300",
    fontSize: (4 / 100) * SIZES.width,
    // borderWidth: 0,
  },
  searchBtn: {
    // marginHorizontal: (9 / 100) * SIZES.width - 20,
    // color: COLORS.darkChocolateBrown,
    // position: "absolute",
    // top: (1.5 / 100) * SIZES.height,
    // left: (77 / 100) * SIZES.width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 12,
  },
});



