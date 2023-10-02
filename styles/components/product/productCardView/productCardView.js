import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";

export default StyleSheet.create({
  container: {
    width: SIZES.width * 0.6,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.pageBackgroundBrown,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 10
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    borderRadius: 20,
    overflow: "hidden",
    
  },
  image: {
    width: "100%",
    height: "100%",
  },
  details: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    padding: 2/100*(SIZES.width),
    // padding: SIZES.xxxSmall,
    position: "absolute",
    // bottom: SIZES.padding,
    left: 0,
    bottom: 20,
    flexDirection: "row",
    width: "50%",
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  nameText: {
    fontFamily: "poppinsMedium500",
    fontSize: 4.5/100*(SIZES.width),
    lineHeight: 36,
    color: COLORS.white,
    flex: 1,
  },
});
