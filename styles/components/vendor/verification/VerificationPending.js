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
        backgroundColor: '#F5DEB3',
        padding: 16,
    },
    message: {
        fontSize: 18,
        textAlign: 'center',
    },
    messageContainer: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white', // Set background color to white
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 8,
    },

});
