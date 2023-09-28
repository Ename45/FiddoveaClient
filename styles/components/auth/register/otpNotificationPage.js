import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";

export default StyleSheet.create({
    container : {
        
        width: SIZES.width,
        height: SIZES.height,
        // marginBottom: 300
    },
    backgroundColor: {
        resizeMode: 'cover',
        height: "100%"
    },
    
    title: {
        fontSize: 50,
        fontWeight: "bold",
        color: COLORS.white,
        marginLeft: 50
    },
    input: {
        justifyContent: "space-between",  
        width: '20%',
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.darkGray,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 18,
        marginBottom: 100
    },
    button: {
        marginTop: -200,
        // marginLeft: 20,
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        width: 400,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: "bold"
    }
})