import {Image, ImageBackground, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import getStarted from '../../../styles/components/onboarding/getStarted'
import CustomButton from '../reusable/button/CustomButton.jsx';
import { COLORS } from '../../../constants/theme';

const GetStarted = () => {

  const navigation = useNavigation()

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };


  return (
      <ImageBackground source={require("../../../assets/images/jpg/backgroundColour3.jpeg")} 
      style={getStarted.backgroundImage}>
    {/* <Image
      source={require("../../../assets/images/jpg/welcomeScreen.jpg")}
      style={{
        width: "55%",
        height: "25%",
        borderRadius: 60,
        transform: [{ rotate: '15deg' }],
        backgroundColor: COLORS.black,
      }}
    />
    <Image
      source={require("../../../assets/images/png/welcomeScreen.png")}
      style={{
        width: "55%",
        height: "25%",
        borderRadius: 60,
        transform: [{ rotate: '-15deg' }],
        backgroundColor: COLORS.black,
      }}
    /> */}
      <View style={getStarted.getStartedContainer}>
        <View style={[getStarted.buttonContainer, 
          getStarted.shadowBox]}>
          <CustomButton 
          buttonName="Register as a Vendor" 
          onPress={() => navigateToPage("RegisterVendor")}
          />
          <CustomButton 
          buttonName="Get Started" 
          onPress={() => navigateToPage("HomePage")} 
          style={getStarted.button} 
          />
        </View>
      </View>
    </ImageBackground>
  )
}

export default GetStarted