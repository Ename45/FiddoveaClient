// import { useNavigation } from '@react-navigation/native';
// import { ImageBackground } from "react-native";
// import paymentPage from "../../../styles/components/payment/paymentPage";
// import { View, Text } from "react-native";
// import CustomButton from "../reusable/button/CustomButton";

// const PaymentPage = () => {
//     const navigation = useNavigation()

//     const navigateTo = (pageName) => {

//         navigation.navigate(pageName);
//     }

//     return(
//         <ImageBackground source={require("../../../assets/images/jpg/backgroundColour1.jpeg")}
//         style={paymentPage.backGround}>
//         <View style={paymentPage.container}>
//             <Text style={paymentPage.textStyle}>Payment Method</Text>
//             <View style={paymentPage.buttonContainer}>
//                 <CustomButton
//                 style={paymentPage.buttonStyle}
//                 buttonName="Pay Now"
//                 onPress={() => navigateTo("Payment")}
//                 />
//                 <CustomButton
//                 style={paymentPage.buttonStyle}
//                 buttonName="Pay on delivery"
//                 onPress={() => navigateTo("Payment")}
//                 />
//             </View>

//         </View>

//         </ImageBackground>


//     )
// }

// export default PaymentPage;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import paymentPage from '../../../styles/components/payment/paymentPage';
import { useNavigation } from '@react-navigation/native';

const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState('');

  
    const navigation = useNavigation()
    const navigateTo = (pageName) => {
        navigation.navigate(pageName)


  };

  return (
    <ImageBackground source={require('../../../assets/images/jpg/welcomeScreen.jpg')} 
    style={paymentPage.backgroundImage}>
        
    <View style={paymentPage.container}>
      <Text style={paymentPage.title}>Select Payment Method</Text>

      <TouchableOpacity
        style={[
          paymentPage.optionButton,
          selectedOption === 'Pay Now' && paymentPage.selectedOption,
        ]}
        onPress={() => navigateTo('Payment')}
      >
        <Text style={paymentPage.optionText}>Pay Now</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          paymentPage.optionButton,
          selectedOption === 'Pay on Delivery' && paymentPage.selectedOption,
        ]}
        onPress={() => handleOptionChange('Pay on Delivery')}
      >
        <Text style={paymentPage.optionText}>Pay on Delivery</Text>
      </TouchableOpacity>

      <Text style={paymentPage.selectedText}>Selected Option: {selectedOption}</Text>
    </View>
    </ImageBackground>
  );
};


export default PaymentPage;
