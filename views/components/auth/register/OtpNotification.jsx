import React, { useRef, useState } from 'react';
import { View, Text, Button, SafeAreaView, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

import otpNotificationPage from '../../../../styles/components/auth/register/otpNotificationPage.js';



const OtpNotification = () => {

    const [otp, setOTP] = useState(['', '', '', '']);
    const inputOtp = [useRef(null),useRef(null),useRef(null),useRef(null)];
  
    const handleOTPChange = (text, index) => {
      if(text.length === 1 && index < 3){
        inputOtp[index + 1].current.focus();
      }
      const newOtp = [...otp];
      newOtp[index] = text;
      setOTP(newOtp);
    };
  
    const handleVerifyOTP = () => {
      const otpValue = otp.join('');
      console.log('Verifying OTP', otpValue)

    };
    return (
      <ImageBackground
      source={require('../../../../assets/images/jpg/backgroundColour3.jpeg')}
      style={otpNotificationPage.backgroundColor}
      >
        
      <SafeAreaView style={otpNotificationPage.container}>
          <View style={otpNotificationPage.container}>
              <Text style={otpNotificationPage.title}>Enter OTP</Text>
              <View style={otpNotificationPage.input}>
                  {otp.map((digit, index) => (
                      <TextInput
                          key={index}
                          style={otpNotificationPage.input} 
                          onChangeText={(text) => handleOTPChange(text, index)}
                          value={digit}
                          maxLength={1}
                          keyboardType="numeric"
                      />
                  ))}
              </View>

              <TouchableOpacity style={otpNotificationPage.button} onPress={handleVerifyOTP}>
                  <Text style={otpNotificationPage.buttonText}>Verify OTP</Text>
              </TouchableOpacity>
          </View>
      </SafeAreaView>

      </ImageBackground>
      
  );
}
  
  
  export default OtpNotification;
  
