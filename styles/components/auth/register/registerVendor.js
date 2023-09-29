import { StyleSheet } from "react-native";
import { FONT, SIZES } from "../../../../constants/theme";


export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,

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
        color: 'red',
        // color: COLORS.darkBrown,
        marginLeft: 90,
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
        borderRadius: 50,
        marginLeft: 120,
    },
    inputFieldWithImage: {
        flexDirection: 'row', // Arrange the image and input field horizontally
        alignItems: 'center', // Center items vertically
        justifyContent: 'center', // Center items horizontally
        marginBottom: 10,
    },
    inputImage: {
        width: 24, // Adjust the width of the image as needed
        height: 24, // Adjust the height of the image as needed
        marginRight: 10, // Add spacing between the image and input field
    },
});