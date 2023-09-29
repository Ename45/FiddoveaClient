import React, { useState } from "react";
import { View, Text, SafeAreaView, styles, Image, ImageBackground} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import otp from "../../../../styles/components/auth/register/otp.js";
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
          navigation.navigate("Verify OTP");
          return response.data;
        });
      } catch (error) {
        return error;
      }
    }
  };

  return (
    <ImageBackground source={require("../../../../assets/images/jpg/backgroundColour3.jpeg")} 
      style={otp.backgroundColor}>
      <View style={otp.logoContainer}>
    <Image
        source={require('../../../../assets/images/png/secondLogo.png')} 
        style={otp.logo}
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
        <Text style={otp.title}>Enter OPT</Text>
        <View style={{flexDirection: "row", gap: 10}}>
        <InputField
        //   onChangeText={(text) => setEmail(text)}
        //   value={email}
          style={{ width: 50, marginTop: 70 }}
        />
        <InputField
        //   onChangeText={(text) => setPassword(text)}
        style={{ width: 50, marginTop: 70 }}
        />
         <InputField
        //   onChangeText={(text) => setPassword(text)}
        style={{ width: 50, marginTop: 70 }}
        />
         <InputField
        //   onChangeText={(text) => setPassword(text)}
        style={{ width: 50, marginTop: 70 }}
        />
        </View>

        <View style={{ marginTop: 45 }}>
          <CustomButton buttonName="Verify OTP" onPress={handleSubmit} />
        </View>
      </View>
    </View>
    </ImageBackground>
  
);
};



export default Register;