import React, { useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import register from "../../../../styles/components/auth/register/register.js";
import InputField from "../../reusable/inputField/InputField.jsx";
import CustomButton from "../../reusable/button/CustomButton.jsx";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = "https://e895-102-89-46-66.ngrok-free.app/api/v1/customer";

    let customerData = {
      email,
      password,
    };

    if (email !== "" && password !== "") {
      try {
        await axios.post(URL, customerData).then((response) => {
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
          <CustomButton buttonName="Register" onPress={handleSubmit} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;
