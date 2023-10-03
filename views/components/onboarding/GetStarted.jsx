import {Image, ImageBackground, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import getStarted from '../../../styles/components/onboarding/getStarted'
import CustomButton from '../reusable/button/CustomButton.jsx';
import { StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/theme';

const GetStarted = () => {

  const navigation = useNavigation()

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };


  return (
      <ImageBackground source={require("../../../assets/images/jpg/backgroundColour3.jpeg")}
      style={getStarted.backgroundImage}>
      <View style={getStarted.getStartedContainer}>
        {/*<Text style={getStarted.welcomeMessage}> Connecting You With Skilled Artisan*/}
        {/*One Step At a Time </Text>*/}
        <View style={[getStarted.buttonContainer,
          getStarted.shadowBox]}>
          <CustomButton
          buttonName="Register As A Vendor"
          onPress={() => navigateToPage("RegisterVendor")}
          />
          <CustomButton
          buttonName="Get Started"
          onPress={() => navigateToPage("BottomTabNav")}
          style={getStarted.button}
          />
        </View>
      </View>
    </ImageBackground>
  )
}




// export const getStarted = StyleSheet.create({
//   // ... your existing styles
//
//
// });


export default GetStarted