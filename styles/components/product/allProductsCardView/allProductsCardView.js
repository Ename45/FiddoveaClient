import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";

export default StyleSheet.create({
    container: {
    width: SIZES.width / 2.3,
    height: 240,
    marginEnd: 22,
    borderRadius: 12,
    backgroundColor: COLORS.tanBrown,
    marginBottom: (2 / 100) * SIZES.height,
    position: "relative"
  },
  imageContainer: {
    flex: 1,
    width: (40 / 100) * SIZES.width,
    marginLeft: 10 / 2,
    marginTop: 10 / 2,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: COLORS.gray3,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    padding: 3,
  },
  nameText: {
    fontFamily: "poppinsMedium",
    fontSize: (2.4 / 100) * SIZES.height,
    marginBottom: 2,
  },
  price: {
    fontFamily: "poppinsBold",
    fontSize: (2.4 / 100) * SIZES.height,
    // color: COLORS.gray3
  },
  addBtn: {
    position: "absolute",
    bottom: 193,
    left: 4
  },
  addBtn2: {
    position: "absolute",
    bottom: 1,
    left: 118
  }
});
