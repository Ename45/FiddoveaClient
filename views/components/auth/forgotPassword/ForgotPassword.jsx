import React, { useState } from 'react'
import { View, Text, SafeAreaView, ImageBackground, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import InputField from '../../reusable/inputField/InputField.jsx';
import CustomButton from '../../reusable/button/CustomButton.jsx'
import forgotPassword from '../../../../styles/components/auth/forgotPassword/forgotPassword.js';
import { COLORS } from '../../../../constants/theme.js';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const navigation = useNavigation()

  const handleSubmit = async(e)=>{  
    e.preventDefault();
    const URL = "https://e895-102-89-46-66.ngrok-free.app/api/v1/customer/forgotPassword";

    let data = {
      email,
    };

    
    if (email !== "" && password !== "") {
      try {
        await axios.post(URL, data)
          .then((response) => {    
          navigation.navigate("")
          return response.data;
          })
      } catch (error) {
        return error
      }      
    } 
    
  }

    return (
      <ImageBackground source={require("../../../../assets/images/jpg/backgroundColour3.jpeg")} 
      style={forgotPassword.backgroundColor}>
      <View style={forgotPassword.logoContainer}>
    <Image
        source={require('../../../../assets/images/png/secondLogo.png')} 
        style={forgotPassword.logo}
      />
    </View>

    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.pageBackgroundBrown,
          borderRadius: 20,
          padding: 20,
        }}
      >
        <Text style={forgotPassword.title}>Registration</Text>
        <InputField
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={{ marginBottom: 10 }}
        />
        <View>
          <CustomButton buttonName="Verify Email" onPress={handleSubmit} />
        </View>        
      </View>
      </View>
      </ImageBackground>
  )
}

export default ForgotPassword