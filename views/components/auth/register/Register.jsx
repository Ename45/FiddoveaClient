import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import register from "../../../../styles/components/auth/register/register.js";
import InputField from "../../reusable/inputField/InputField.jsx";
import CustomButton from "../../reusable/button/CustomButton.jsx";
import { COLORS } from "../../../../constants/theme.js";
import { customerUrl, ngrokBaseUrl, registerUrl } from "../../../../api/Api.jsx";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const navigation = useNavigation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonClicked(true);

    const URL = `${ngrokBaseUrl}/${customerUrl}`

    let customerData = {
      email,
      password,
    };

    console.log("i got here")
    if (email !== "" && password !== "") {
      try {
        await axios.post(URL, customerData).then((response) => {
          console.log("got here 2")
          navigation.navigate("Login");
          return response.data;
        });
      } catch (error) {
        return error;
      }
    }
  };

  return (
    <SafeAreaView style={register.container}>
      <View style={register.container}>
        <Text style={register.title}></Text>
        <InputField
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <InputField
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <View>
          <CustomButton 
          buttonName="Register" 
          onPress={handleSubmit}          
          style={{
            backgroundColor: buttonClicked ? COLORS.rosyBrown : COLORS.silverGray
          }} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;