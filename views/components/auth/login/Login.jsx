import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import login from '../../../../styles/components/auth/login/login.js'
import register from '../../../../styles/components/auth/register/register.js'
import InputField from '../../reusable/inputField/InputField.jsx';
import CustomButton from '../../reusable/button/CustomButton.jsx'


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation()

  const navigateToPage = (pageName) => {
    navigation.navigate(pageName);
  };

  const handleSubmit = async(e)=>{  
    e.preventDefault();
    const URL = "https://e895-102-89-46-66.ngrok-free.app/api/v1/customer/login";
    let customerData = {
      email,
      password,
    };

    
    if (email !== "" && password !== "") {
      try {
        await axios.post(URL, customerData)
          .then((response) => {    
          navigation.navigate("HomePage")
          return response.data;
          })
      } catch (error) {
        return error
      }      
    } 
    }

    return (
    <SafeAreaView>
      <View style={register.container}>
        <Text style={register.title}></Text>
        <InputField
          placeholder="Email"
          keyboardType='email-address'
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <InputField
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <View>
        <CustomButton buttonName="Login" onPress={handleSubmit} />
        </View>
        <View>
          <Text onPress={() => navigateToPage("ForgotPassword")}>
            Forgot your password?
          </Text>
        </View>
      </View>
      </SafeAreaView>
  )
}

export default Login