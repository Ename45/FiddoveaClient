import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pageBackgroundBrown,
    padding: (2.3 / 100) * SIZES.height,
  },
  emptyCartContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyCartText: {
    fontFamily: "poppinsBold700",
    fontSize: (2.5 / 100) * SIZES.height,
    color: COLORS.black,
  },
  // cartItem: {
  //   backgroundColor: "white",
  //   marginBottom: 16,
  //   borderRadius: 8,
  //   elevation: 3,
  //   shadowColor: "#000",
  //   shadowOffset: { width: 0, height: 5 },
  //   shadowOpacity: 0.2,
  //   shadowRadius: 4,
  //   borderWidth: 3,
  //   borderColor: 'red'
  // },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  cartItemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  cartItemPrice: {
    fontWeight: "bold",
    marginTop: 8,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  quantityButton: {
    fontSize: 24,
    paddingHorizontal: 12,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 12,
  },
  totalPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginTop: 16,
    paddingHorizontal: (1.8 / 100) * SIZES.width,
  },
  totalPriceLabel: {
    fontSize: (2.5 / 100) * SIZES.height,
    fontWeight: "bold",
  },
  totalPriceAmount: {
    fontSize: (2.5 / 100) * SIZES.height,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "brown",
    paddingVertical: (2.3 / 100) * SIZES.height,
    borderRadius: 4,
    alignSelf: "center",
    marginTop: (2.3 / 100) * SIZES.height,
    width: "80%",
  },
  checkoutButtonText: {
    color: "white",
    fontSize: (2.3 / 100) * SIZES.height,
    textAlign: "center",
  },
});
