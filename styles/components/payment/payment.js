import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

    export default StyleSheet.create({
    
  backgroundImage: {
  
    width: SIZES.width,
    height: SIZES.height,
    padding: 40,
  },
  textTiltle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'violet',  
    marginLeft: 50,
    marginTop: 40

  },

  cardImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: SIZES.width,
    height: SIZES.height,
    padding: 40,
  },

    title: {
      fontSize: 50,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    cardDetailLabel: {
      color: 'white',
      fontSize: 20,
      marginTop: 50,
      backgroundColor: 'purple',
      borderColor: 'yellow'

    },
    cardField: {
      width: '100%',
      height: 50,
      marginBottom: 20,

    },
    button: {
      backgroundColor: 'purple',
      borderRadius: 20,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 100
    },
    buttonText: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
    },
  });

  