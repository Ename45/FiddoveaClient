import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";

export default StyleSheet.create({
  container: {
    width: SIZES.width * 0.43,
    height: SIZES.height * 0.35,
    marginEnd: 15,
    backgroundColor: COLORS.pageBackgroundBrown,
    marginBottom: (2 / 100) * SIZES.height,
    position: "relative",
    // borderWidth: 0.13,
    // borderStyle: "solid",
    // borderColor: COLORS.gray2,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingTop: (1.5 / 100) * SIZES.height,
    elevation: 2,
    marginHorizontal: 10,
    marginTop: 20,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "hidden",
    height: "60%",
    backgroundColor: COLORS.white,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    resizeMode: "cover",
  },
  details: {
    // paddingTop: 1,
  },
  nameText: {
    fontFamily: "poppinsSemiBold600",
    fontSize: (2.4 / 100) * SIZES.height,
    marginBottom: 2,
    color: COLORS.black,
  },
  price: {
    fontFamily: "poppinsSemiBold600",
    fontSize: (2.4 / 100) * SIZES.height,
    color: COLORS.tabBarBrown,
  },
  buttonsContainer: {
    alignItems: "center",
    paddingHorizontal: 8,
    position: "absolute",
    flexDirection: "row",
    gap: (19 / 100) * SIZES.width,
    justifyContent: "center",
    bottom: 5,
  },
  addBtn: {
    borderRadius: 50,
    backgroundColor: COLORS.lightWhite,
    padding: 3,
    elevation: (2 / 100) * SIZES.height,
  },
  addBtn2: {
    borderRadius: 50,
    backgroundColor: COLORS.lightWhite,
    padding: 3,
    elevation: (2 / 100) * SIZES.height,
  },
});
