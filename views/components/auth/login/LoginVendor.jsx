import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import register from '../../../../styles/components/auth/register/register.js'
import InputField from '../../reusable/inputField/InputField.jsx';
import CustomButton from '../../reusable/button/CustomButton.jsx'
import loginVendor from '../../../../styles/components/auth/login/loginVendor.js';

const LoginVendor = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  const handleSubmit = async(e)=>{  
    e.preventDefault();
    const URL = "https://e895-102-89-46-66.ngrok-free.app/api/v1/vendor/login";
    let vendorData = {
      email,
      password,
    };

    
    if (email !== "" && password !== "") {
      try {
        await axios.post(URL, vendorData)
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
      style={loginVendor.backgroundColor}>
      <View style={loginVendor.logoContainer}>
    <Image
        source={require('../../../../assets/images/png/secondLogo.png')} 
        style={loginVendor.logo}
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
        <Text style={loginVendor.title}>Login</Text>
        <InputField
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={{ marginBottom: 10 }}
        />
        <InputField
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <View>
        <CustomButton 
        buttonName="Login" 
        onPress={handleSubmit} 
        style={{
            backgroundColor: buttonClicked ? COLORS.rosyBrown : COLORS.silverGray
          }} 
        />
        </View>
        <View>
          <Text onPress={() => navigateToPage("ForgotPassword")}>
            Forgot your password?
          </Text>
        </View>
      </View>
      </View>
      </ImageBackground>
  )
}

export default LoginVendor