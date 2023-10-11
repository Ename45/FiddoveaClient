import {Image, ImageBackground, View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import getStarted from '../../../styles/components/onboarding/getStarted'
import CustomButton from '../reusable/button/CustomButton.jsx';
import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../../constants/theme';
import { Pressable } from 'react-native';

const GetStarted = () => {

  const navigation = useNavigation()

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };


  return (
      <ImageBackground source={require("../../../assets/images/jpg/topImageOnboarding.jpg")}
      style={getStarted.backgroundImage}>
        <View>
        <Text style={getStarted.welcomeMessage}> Connecting You With Skilled Artisans
        One Step At a Time </Text>
      <Image
        source={require("../../../assets/images/jpg/secondOnboarding.jpg")}
        style={getStarted.Image}
      />
    </View>
      <View style={getStarted.getStartedContainer}>
        <View style={getStarted.buttonContainer}>
          <Pressable 
          style={getStarted.button}
          onPress={() => navigateToPage("Login")}
          >
            <Text style={getStarted.buttonText}>
              Get Started
            </Text>
          </Pressable>
        </View>
        <View style={{marginTop: 50, fontSize: 3/100*(SIZES.height)}}>
            <Pressable
            onPress={() => navigateToPage("RegisterVendor")}
            >
              <Text style={{marginTop: 20, fontSize: 2/100*(SIZES.height)}}>
                Are you a vendor? Register here
              </Text>
            </Pressable>
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