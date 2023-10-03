// verificationStyles.js
import { FONT, SIZES, COLORS } from "../../../../constants/theme.js";
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        width: SIZES.width,
        height: SIZES.height,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.darkBrown2,
        padding: 16,
    },
    message: {
        fontSize: 18,
        textAlign: 'center',
    },
});
