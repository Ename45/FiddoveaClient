import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pageBackgroundBrown,
    // marginTop: 20,
  },
  upperRow: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: 14,
    width: SIZES.width - 44,
    zIndex: 999,
    // justifyContent: "space-between"
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    marginTop: -18,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleRow: {
    marginHorizontal: 20,
    // paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 44,
    top: 20,
  },
  title: {
    fontFamily: "poppinsRegular400",
    fontSize: SIZES.large,
  },
  priceWrapper: {
    backgroundColor: COLORS.gray2,
    borderRadius: SIZES.medium,
    elevation: 10
  },
  productPrice: {
    paddingHorizontal: 10,
    fontFamily: "poppinsBold700",
    fontSize: SIZES.large,
  },
  ratingRow: {
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width - 10,
    top: 5,
  },
  rating: {
    // top: SIZES.large,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: SIZES.large,
  },
  descriptionWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },
  description: {
    fontFamily: "poppinsMedium500",
    fontSize: SIZES.large - 2,
  },
  descriptionStyle: {
    fontFamily: "poppinsRegular400",
    fontSize: SIZES.small,
    textAlign: "justify",
    marginBottom: SIZES.small,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLORS.burlyWoodBrown,
    padding: 5,
    borderRadius: SIZES.large,
    marginHorizontal: 12,
  },
  cartRow: {
    paddingBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: SIZES.width,
  },
  cartButton: {
    width: SIZES.width * 0.7,
    backgroundColor: COLORS.gray,
    padding: SIZES.small / 2,
    borderRadius: SIZES.large,
    marginLeft: 12,
  },
  cartTitle: {
    marginLeft: SIZES.small,
    fontFamily: "poppinsBold700",
    fontSize: SIZES.medium,
    color: COLORS.lightWhite,
  },
  addToCart: {
    width: 37,
    height: 37,
    borderRadius: 50,
    margin: SIZES.small,
    backgroundColor: COLORS.gray,
    alignItems: "center",
    justifyContent: "center",
  },
});
