import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

export default StyleSheet.create({
  overlayContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  getStartedContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: SIZES.width,
    height: SIZES.height,
    padding: 40,
  },

  buttonContainer: {
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
});