import { StyleSheet } from "react-native";
import { SIZES } from "../../../constants/theme";

export default StyleSheet.create({

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    width: SIZES.width,
    height: SIZES.height,
    padding: 40,
    },

    title: {
      fontSize: 25,
      fontWeight: 'bold',
      marginBottom: 50,
      color: 'yellow',
    },
    optionButton: {
      borderWidth: 2,
      borderColor: 'yellow',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      backgroundColor: 'red'
    },
    selectedOption: {
      backgroundColor: 'lightblue',
    },
    optionText: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    selectedText: {
      fontSize: 18,
      marginTop: 20,
      color: 'cyan'
    },
  });