import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

export default StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: SIZES.width,
    height: SIZES.height / 2,
    padding: 40,
    backgroundColor: "#fcf6f1",
  },

  buttonContainer: {
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    color: COLORS.white,
    fontFamily: "poppinsMedium500",
  },
  button: {
    backgroundColor: COLORS.tabBarBrown,
    elevation: 7,
    color: COLORS.white,
    fontFamily: "poppinsMedium500",
  },
  getStartedContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  welcomeMessage: {
    fontFamily: "poppinsMedium500",
    fontSize: (2.7 / 100) * SIZES.height,
    color: COLORS.white,
  },
  Image: {
    aspectRatio: 1,
    resizeMode: "contain",
    borderRadius: 100,
    marginTop: (15 / 100) * SIZES.height,
  },
});
