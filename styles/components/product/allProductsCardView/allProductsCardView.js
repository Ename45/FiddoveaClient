import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";

export default StyleSheet.create({
  container: {
    width: 182,
    height: 240,
    marginEnd: 22,
    borderRadius: 12,
    backgroundColor: COLORS.tanBrown,
  },
  imageContainer: {
    flex: 1,
    width: 170,
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
    padding: 10,
  },
  nameText: {
    fontFamily: "croissantOneRegular",
    fontSize: SIZES.large,
    marginBottom: 2,
  },
  addBtn: {
    position: "absolute",
  },
});
