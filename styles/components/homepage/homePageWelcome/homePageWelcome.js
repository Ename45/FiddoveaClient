import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";


export default StyleSheet.create({
  outerContainer: {
    width: SIZES.width
  },
  welcomeText: (color) => ({
    fontWeight: "bold",
    fontSize: SIZES.xxLarge-5,
    margin: (1/100*(SIZES.height)),
    color: color,
  })
})