import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import register from '../../../../styles/components/auth/register/register.js'
import InputField from '../../reusable/inputField/InputField.jsx';
import CustomButton from '../../reusable/button/CustomButton.jsx'

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
    <SafeAreaView>
      <View style={register.container}>
        <Text style={register.title}>Registration</Text>
        <InputField
          placeholder="Email"
          keyboardType='email-address'
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <View>
          <CustomButton buttonName="Verify Email" onPress={handleSubmit} />
        </View>        
      </View>
      </SafeAreaView>
  )
}

export default ForgotPassword