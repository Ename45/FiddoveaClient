import { StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../../constants/theme"

export default StyleSheet.create({
  outerContainer: {
    paddingTop: 20,
    width: SIZES.width,
    height: SIZES.height,
    flex: 1,
    // borderWidth: 3,
    // borderColor: "red",
    // borderStyle: "solid",
    alignItems: "center",
    backgroundColor: COLORS.pageBackgroundBrown,
    padding: 1/100*(SIZES.width)
  },
  topBarWrap: {
    marginHorizontal: 22,
    width: "100%",
    height: (5 / 100) * SIZES.height,
    // borderWidth: 3,
    // borderColor: "blue",
    // borderStyle: "solid",
    // paddingBottom: 10,
    position: "relative",
    marginBottom: 1/100*(SIZES.height)
  },
  appBar: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    // borderWidth: 3,
    // borderColor: "red",
    // borderStyle: "solid",
    height: (6 / 100) * SIZES.height,
  },
  location: {
    fontFamily: "poppinsRegular400",
    fontSize: (4 / 100) * SIZES.width,
    color: COLORS.black,
  },
  notificationButton: {
    alignItems: "flex-end",
    // borderWidth: 3,
    // borderColor: "red",
    // borderStyle: "solid",
    // // width: "8%",
  },
  notificationOuterContainer: {
    alignItems: "flex-end",
    // borderWidth: 3,
    // borderColor: "green",
    // borderStyle: "solid",
    width: "100%",
    position: "relative",
  },
  notificationCount: {
    position: "absolute",
    // bottom:2,
    // left: 9,

    width: "60%",
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "center",
    zIndex: 999,
  },
  notificationNumberText: {
    color: COLORS.black,
    fontFamily: "poppinsSemiBold600",
    fontSize: SIZES.mid,
  },
});