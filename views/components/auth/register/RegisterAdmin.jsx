import React, { useState } from 'react'
import { View, Text, SafeAreaView, ImageBackground, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { COLORS } from '../../../../constants/theme.js';
import registerAdmin from '../../../../styles/components/auth/register/register.js'
import InputField from '../../reusable/inputField/InputField.jsx';
import CustomButton from '../../reusable/button/CustomButton.jsx'

const RegisterAdmin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  const handleSubmit = async(e)=>{  
    e.preventDefault();
    const URL = "https://e895-102-89-46-66.ngrok-free.app/api/v1/admin";
    let adminData = {
      email,
      password,
    };
    
    if (email !== "" && password !== "") {
      try {
        await axios.post(URL, adminData)
          .then((response) => {    
          navigation.navigate("LoginAdmin")
          return response.data;
          })
      } catch (error) {
        return error
      }
    } 
  }

  return (
    <ImageBackground source={require("../../../../assets/images/jpg/backgroundColour3.jpeg")} 
      style={registerAdmin.backgroundColor}>
      <View style={registerAdmin.logoContainer}>
    <Image
        source={require('../../../../assets/images/png/secondLogo.png')} 
        style={registerAdmin.logo}
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
        <Text style={registerAdmin.title}>Registration</Text>
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

        <View style={{ marginTop: 20 }}>
          <CustomButton buttonName="Register" onPress={handleSubmit} />
        </View>
      </View>
    </View>
    </ImageBackground>
  
);
};



export default RegisterAdmin;
