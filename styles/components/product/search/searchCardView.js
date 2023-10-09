import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";

export default StyleSheet.create({
  scrollContainer: {
    width: SIZES.width - 40,
    height: SIZES.height,
  },
  productImage: {
    width: (20 / 100) * SIZES.width,
    height: (11 / 100) * SIZES.height,
    borderRadius: 8,
    marginRight: (6 / 100) * SIZES.width,
    resizeMode: "contain",
  },
  searchItem: {
    backgroundColor: "white",
    marginBottom: (16 / 100) * SIZES.height,
    borderRadius: 8,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "flex-start",
    flex: 1,
    alignItems: "center",
  },
  buttonsContainer: {
    alignItems: "center",
  },
  addBtn: {
    borderRadius: 50,
    backgroundColor: COLORS.pageBackgroundBrown,
    padding: (0.6 / 100) * SIZES.height,
    elevation: (2 / 100) * SIZES.height,
  },
  detailContainer: {
    flexDirection: "row",
    gap: (15 / 100) * SIZES.width,
  },
  cartItemPrice: {
    fontFamily: "poppinsSemiBold600",
    marginTop: (1 / 100) * SIZES.height,
  },
});
