import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../../../constants/theme";


export default StyleSheet.create({
    container: {
        flex: 1,

    },
    backgroundColor: {
        resizeMode: 'cover',
        height: "100%",
        // flex: 1


    },
    title: {
        fontSize: SIZES.xLarge,
        fontWeight: 'bold',
        marginBottom: 50,
        color: COLORS.darkBrown,
        marginLeft: 80,
        height: 5
    },
    Image: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
});