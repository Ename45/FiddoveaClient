import React, { useState } from "react";
import { View, Text, SafeAreaView, styles, Image, ImageBackground} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

import otp from "../../../../styles/components/auth/register/otp.js";
import InputField from "../../reusable/inputField/InputField.jsx";
import CustomButton from "../../reusable/button/CustomButton.jsx";
import { COLORS } from "../../../../constants/theme.js";
import { customerUrl, ngrokBaseUrl, registerUrl } from "../../../../api/Api.jsx";


const OtpConfirmation = () => {

  const [codeOne, setCodeOne] = useState("")
  const [codeTwo, setCodeTwo] = useState("")
  const [codeThree, setCodeThree] = useState("")
  const [codeFour, setCodeFour] = useState("")
  const [codeFive, setCodeFive] = useState("")


  const { email } = useParams();

   const navigation = useNavigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = codeOne + codeTwo + codeThree + codeFour + codeFive
    
    try {
      const response = await axios.post(`${ngrokBaseUrl}/api/v1/customer/verifyotp`, {otp});

      if (response.status === 200) {
        console.log(response.data);
      }

      navigate('/Login');

    } catch (error) {
      setError(error.response);
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
          onChangeText={(text) => setCodeOne(text)}
          value={codeOne}
          style={{ width: 50, marginTop: 70 }}
        />
        <InputField
          onChangeText={(text) => setCodeTwo(text)}
        value={codeTwo}
        style={{ width: 50, marginTop: 70 }}
        />
         <InputField
          onChangeText={(text) => setCodeThree(text)}
        value={codeThree}
        style={{ width: 50, marginTop: 70 }}
        />
         <InputField
          onChangeText={(text) => setCodeFour(text)}
        value={codeFour}
        style={{ width: 50, marginTop: 70 }}
        />
         <InputField
          onChangeText={(text) => setCodeFive(text)}
        value={codeFive}
        style={{ width: 50, marginTop: 70 }}
        />
        </View>

        <View style={{ marginTop: 45 }}>
          <CustomButton buttonName="Verify OTP" onPress={handleSubmit} />
        </View>
      </View>
    </View>
    </ImageBackground>
  )
}

export default OtpConfirmation