import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";

export default StyleSheet.create({
  mainContainer: {
    width: SIZES.width,
    // height: SIZES.height,
    alignItems: "center",
  },
  productImage: {
    width: (20 / 100) * SIZES.width,
    height: (11 / 100) * SIZES.height,
    borderRadius: 8,
    marginRight: (6 / 100) * SIZES.width,
    resizeMode: "contain",
  },
  searchItem: {
    backgroundColor: COLORS.white,
    marginBottom: (1.8 / 100) * SIZES.height,
    borderRadius: 8,
    elevation: 5,
    flexDirection: "row",
    // justifyContent: "space-between", 
    alignItems: "center",
    width: "95%",
  },
  buttonsContainer: {
    alignItems: "center",
  },
  // addBtn: {
  //   borderRadius: 50,
  //   backgroundColor: COLORS.pageBackgroundBrown,
  //   padding: (0.6 / 100) * SIZES.height,
  //   elevation: (2 / 100) * SIZES.height,
  // },
  detailContainer: {
    flexDirection: "row",
    gap: (15 / 100) * SIZES.width,
    justifyContent: "space-between",
    width: "72%",
  },
  cartItemPrice: {
    fontFamily: "poppinsSemiBold600",
    marginTop: (1 / 100) * SIZES.height,
  },
});
