import React, { useState } from 'react'
import { View, Text, SafeAreaView, ImageBackground, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import login from '../../../../styles/components/auth/login/login.js'
import InputField from '../../reusable/inputField/InputField.jsx';
import CustomButton from '../../reusable/button/CustomButton.jsx'
import { customerUrl, ngrokBaseUrl } from '../../../../api/Api.jsx';
import { COLORS } from '../../../../constants/theme.js';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [buttonClicked, setButtonClicked] = useState(false);

  const navigation = useNavigation()

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  const handleSubmit = async(e)=>{  
    e.preventDefault();
    setButtonClicked(true)
    const URL = `${ngrokBaseUrl}/${customerUrl}/login`
    
    let customerData = {
      email,
      password,
    };

    
    if (email !== "" && password !== "") {
      try {
        await axios.post(URL, customerData)
          .then((response) => {    
          navigation.navigate("BottomTabNav")
          return response.data;
          })
      } catch (error) {
        return error
      }      
    } 
    }

    return (
      <ImageBackground source={require("../../../../assets/images/jpg/backgroundColour3.jpeg")} 
      style={login.backgroundColor}>
      <View style={login.logoContainer}>
    <Image
        source={require('../../../../assets/images/png/secondLogo.png')} 
        style={login.logo}
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
        <Text style={login.title}>Login</Text>
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

export default Login

