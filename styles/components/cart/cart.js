import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pageBackgroundBrown,
    marginTop: 5/100*(SIZES.height),
    paddingBottom: 5/100*(SIZES.height)
  },
  totalPriceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  totalPriceLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  totalPriceAmount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  checkoutButton: {
    backgroundColor: "brown",
    paddingVertical: 16,
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 16,
    width: "80%",
  },
  checkoutButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
