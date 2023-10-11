import React, { useState } from 'react'
import { View, Text, SafeAreaView, ImageBackground, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import login from '../../../../styles/components/auth/login/login.js'
import InputField from '../../reusable/inputField/InputField.jsx';
import CustomButton from '../../reusable/button/CustomButton.jsx'
import { customerUrl, baseUrl } from '../../../../api/Api.jsx';
import { COLORS, SIZES } from '../../../../constants/theme.js';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [buttonClicked, setButtonClicked] = useState(false);
    const [error, setError] = useState(null);
  const [inputError, setInputError] = useState("");
  const [networkError, setNetworkError] = useState("");
  

  const navigation = useNavigation()

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  const handleSubmit = async(e)=>{  
    e.preventDefault();
    setButtonClicked(true)
    const URL = `${baseUrl}/${customerUrl}/login`
    
    let customerData = {
      email,
      password,
    };

    if (email !== "" && password !== "") {
      setInputError("");
      try {
        const response = await axios.post(URL, customerData);
        console.log("This is the login response", response.data)
        if (response.status === 200) {
          // console.log("This is response,data", response.data.message);
          const token = response.data.jwtToken;
          // console.log("token Storage==>{}", token);
          await AsyncStorage.setItem("jwtToken", token);
          navigation.navigate("BottomTabNav",);
        }
      } catch (error) {
        if (error.response && error.response.data) {
          setError(error.response.data);
        } else {
          setError('An error occurred.');
        }
      }
    } else {
      setInputError("All fields are required");
    }
    }

    return (
      <ImageBackground 
      source={require("../../../../assets/images/jpg/topImageOnboarding.jpg")} 
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
            {error && <Text style={{ color: "red" }}>{error}</Text>}
            {inputError !== "" && (
              <Text style={{ color: "red" }}>{inputError}</Text>
            )}
          </View>

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
      <View style={{marginTop: 50, fontSize: 3/100*(SIZES.height)}}>
            <Pressable
            onPress={()=>navigation.navigate("Register")}
            >
              <Text style={{marginTop: 50, fontSize: 2/100*(SIZES.height)}}>
                Create an account
              </Text>
            </Pressable>
          </View>
      </View>
      </View>
      </ImageBackground>
  )
}

export default Login

