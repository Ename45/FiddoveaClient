import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pageBackgroundBrown,
    width: SIZES.width,
    height: SIZES.height,
    paddingTop: 20,
  },
  outerWrapper: {
    paddingHorizontal: (4 / 100) * SIZES.width,
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    // alignItems: "center",
    marginBottom: (1 / 100) * SIZES.height,
    gap: (10 / 100) * SIZES.width,
  },
  headerBackIcon: {
    backgroundColor: COLORS.tabBarBrown,
    borderRadius: 50,
    height: (3.5 / 100) * SIZES.height,
  },
  header: {
    fontSize: (3.2 / 100) * SIZES.height,
    fontFamily: "poppinsSemiBold600",
  },
  section: {
    marginBottom: (2 / 100) * SIZES.height,
    width: "100%",
  },
  deliveryContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: (2 / 100) * SIZES.width,
    marginBottom: (2 / 100) * SIZES.height,
    elevation: 5,
    width: "100%",
  },
  deliveryInnerContent: {
    flexDirection: "row",
    alignItems: "center",
    // gap: (2 / 100) * SIZES.width,
    justifyContent: "space-between",
    width: "90%",
  },
  deliveryContainerText: {
    flex: 1,
    marginLeft: (2 / 100) * SIZES.width,
    fontFamily: "poppinsSemiBold600",
  },
  deliveryMainText: {
    marginLeft: (2 / 100) * SIZES.width,
    fontFamily: "poppinsRegular400",
    fontSize: (3.7 / 100) * SIZES.width,
  },
  sectionTitle: {
    fontSize: (4 / 100) * SIZES.width,
    fontFamily: "poppinsSemiBold600",
    marginBottom: (1 / 100) * SIZES.height,
  },
  productItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.white,
    padding: (2.5 / 100) * SIZES.width,
    marginBottom: (1 / 100) * SIZES.height,
    elevation: 1,
    width: "100%",
  },
  productItemText: {
    fontFamily: "poppinsRegular400",
    fontSize: (3.2 / 100) * SIZES.width,
  },
  calcs: {
    marginTop: (5 / 100) * SIZES.height,
  },
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: (1 / 100) * SIZES.height,
  },
  totalLabel: {
    fontFamily: "poppinsSemiBold600",
    fontSize: (3.8 / 100) * SIZES.width,
  },
  totalAmount: {
    fontFamily: "poppinsMedium500",
    fontSize: (3.8 / 100) * SIZES.width,
  },
  voucher: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.gold,
    padding: (1 / 100) * SIZES.width,
    marginBottom: (1 / 100) * SIZES.height,
  },
  voucherText: {
    flex: 1,
    marginLeft: (2 / 100) * SIZES.width,
  },
  placeOrderButton: {
    backgroundColor: COLORS.tabBarBrown,
    padding: (2 / 100) * SIZES.width,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  placeOrderButtonText: {
    color: COLORS.white,
    fontSize: (5 / 100) * SIZES.width,
    fontFamily: "poppinsSemiBold600",
  },
  // container: {
  //   flex: 1,
  //   padding: 16,
  // },
  // innerContainer: {
  //   flexDirection: "row",
  //   gap: 40
  // },
  // headerBackIcon: {
  //   backgroundColor: COLORS.tabBarBrown,
  //   borderRadius: 50,
  //   height: 3.5/100*(SIZES.height)
  // },
  // header: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   marginBottom: 16,
  //   textAlign: "center",
  // },
  // section: {
  //   marginBottom: 16,
  // },
  // sectionTitle: {
  //   fontSize: 18,
  //   fontWeight: "bold",
  //   marginBottom: 8,
  // },
  // productItem: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   marginBottom: 8,
  // },
  // totalPrice: {
  //   marginTop: 16,
  //   alignItems: "flex-end",
  // },
});
