import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants/theme.js";

export default StyleSheet.create({
    buttonContainer: {
        width: SIZES.width - 100,
        height: SIZES.height / 11,
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        backgroundColor: COLORS.silverGray,
        marginLeft: 10,
    },

    buttonText: {
        fontSize: SIZES.large,
        color: COLORS.black,
    },
});