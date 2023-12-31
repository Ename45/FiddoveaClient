import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pageBackgroundBrown,
    width: SIZES.width,
    height: SIZES.height,
    // paddingTop: 20,
  },
  outerWrapper: {
    paddingHorizontal: (4 / 100) * SIZES.width,
    width: "100%",
    height: "100%",
    paddingBottom: (5 / 100) * SIZES.height,
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
  inputContainer: {
    height: (12 / 100) * SIZES.height,
    marginBottom: (32 / 100) * SIZES.height,
    gap: (1 / 100) * SIZES.height,
  },
  inputContainer2: {
    height: (12 / 100) * SIZES.height,
    marginBottom: (6 / 100) * SIZES.height,
    gap: (1 / 100) * SIZES.height,
  },
  inputText: {
    marginBottom: (1 / 100) * SIZES.width,
    color: COLORS.gray3,
    fontSize: SIZES.mid,
    paddingLeft: (1 / 100) * SIZES.width,
  },
  inputField: {
    width: "100%",
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
    marginTop: (3 / 100) * SIZES.height,
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
    backgroundColor: COLORS.metallicGold,
    padding: (3 / 100) * SIZES.width,
    marginBottom: (4 / 100) * SIZES.height,
    marginTop: (4 / 100) * SIZES.height,
    width: "100%",
  },
  voucherText: {
    flex: 1,
    marginLeft: (5 / 100) * SIZES.width,
    fontFamily: "poppinsSemiBold600",
    fontSize: (3.8 / 100) * SIZES.width,
    alignItems: "center",
    justifyContent: "center",
  },
  totalAmount2: {
    fontFamily: "poppinsBold700",
    fontSize: (4 / 100) * SIZES.width,
  },
  placeOrderButton: {
    backgroundColor: COLORS.silverGray,
    padding: (2 / 100) * SIZES.width,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: (3 / 100) * SIZES.height,
  },
  placeOrderButtonText: {
    color: COLORS.black,
    fontSize: (5 / 100) * SIZES.width,
    fontFamily: "poppinsSemiBold600",
  },
  buttonStyle: {
    marginLeft: (20 / 100) * SIZES.width,
  },
});
