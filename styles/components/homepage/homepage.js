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
  },
  topBarWrap: {
    marginHorizontal: 22,
    width: "100%",
    // borderWidth: 3,
    // borderColor: "blue",
    // borderStyle: "solid",
    position: "relative",
  },
  appBar: {
    paddingHorizontal: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  location: {
    fontWeight: "bold",
    fontSize: SIZES.medium,
    color: COLORS.gray3,
  },
  notificationButton: {
    alignItems: "flex-end",
    // borderWidth: 3,
    // borderColor: "red",
    // borderStyle: "solid",
    // // width: "8%",
  },
  cartOuterContainer: {
    alignItems: "flex-end",
    // borderWidth: 3,
    // borderColor: "green",
    // borderStyle: "solid",
    width: "100%",
    position: "relative",
  },
  cartCount: {
    position: "absolute",
    bottom: 12,
    left: 9,

    width: "80%",
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "red",
    justifyContent: "center",
    zIndex: 999,
  },
  cartNumberText: {
    color: "green",
    fontWeight: "600",
    fontSize: SIZES.small,
  },
});