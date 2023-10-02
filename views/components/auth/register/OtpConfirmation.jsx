import React, { useRef, useState } from "react";
import { View, Text, SafeAreaView, styles, Image, ImageBackground} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useRoute } from "@react-navigation/native";
import otp from "../../../../styles/components/auth/register/otp.js";
import InputField from "../../reusable/inputField/InputField.jsx";
import CustomButton from "../../reusable/button/CustomButton.jsx";
import { COLORS } from "../../../../constants/theme.js";
import { customerUrl, ngrokBaseUrl } from "../../../../api/Api.jsx";


const OtpConfirmation = () => {

  const [codeOne, setCodeOne] = useState("")
  const [codeTwo, setCodeTwo] = useState("")
  const [codeThree, setCodeThree] = useState("")
  const [codeFour, setCodeFour] = useState("")
  const [codeFive, setCodeFive] = useState("")
    // const [buttonClicked, setButtonClicked] = useState(false);
  const [error, setError] = useState(null);
  const [inputError, setInputError] = useState("");
  const [networkError, setNetworkError] = useState("");

  const route = useRoute();
  const {email} = route.params;

   const navigation = useNavigation()


  const codeOneRef = useRef(null);
  const codeTwoRef = useRef(null);
  const codeThreeRef = useRef(null);
  const codeFourRef = useRef(null);
  const codeFiveRef = useRef(null);

  const focusNextInput = (nextInputRef) => {
    if (nextInputRef.current) {
      nextInputRef.current.focus();
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp = codeOne + codeTwo + codeThree + codeFour + codeFive

    if (codeOne !== "" && codeTwo !== "" && codeThree!== "" && codeFour !== "" && codeFive !== "") {
      setInputError("");
      try {
        const response = await axios.post(`${ngrokBaseUrl}/${customerUrl}/verifyotp/${email}`, {otp});
        console.log(response)
        if (response.status === 201) {
          console.log("This is response,data", response.data);
          navigation.navigate("HomePage");
        }
      } catch (error) {
        setError(error.response.data);
      }
    } else {
      setInputError("Incomplete otp");
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
        <Text style={otp.title}>Enter OTP</Text>
        <View style={{flexDirection: "row", gap: 10 }}>
        <InputField
          onChangeText={(text) => {
            setCodeOne(text);
            if (text.length === 1) {
                  focusNextInput(codeTwoRef);
                }
          }}
          value={codeOne}
          style={{ width: 50, marginTop: 70, textAlign: "center"  }}
        />
        <InputField
          onChangeText={(text) => {
            setCodeTwo(text);
            if (text.length === 1) {
                  focusNextInput(codeThreeRef);
                }
          }}
        value={codeTwo}
        style={{ width: 50, marginTop: 70, textAlign: "center"  }}
        />
         <InputField
          onChangeText={(text) => {
            setCodeThree(text);
            if (text.length === 1) {
                  focusNextInput(codeFourRef);
                }
          }}
        value={codeThree}
        style={{ width: 50, marginTop: 70, textAlign: "center"  }}
        />
         <InputField
          onChangeText={(text) => {
            setCodeFour(text);
            if (text.length === 1) {
                  focusNextInput(codeFiveRef);
                }
          }}
        value={codeFour}
        style={{ width: 50, marginTop: 70, textAlign: "center"  }}
        />
         <InputField
          onChangeText={(text) => setCodeFive(text)}
        value={codeFive}
        style={{ width: 50, marginTop: 70, textAlign: "center"  }}
        />
        </View>

        <View>
            {error && <Text style={{ color: "red" }}>{error.data}</Text>}
            {inputError !== "" && (
              <Text style={{ color: "red" }}>{inputError}</Text>
            )}
          </View>

        <View style={{ marginTop: 45 }}>
          <CustomButton 
          buttonName="Verify OTP" 
          onPress={handleSubmit} 
          // style={{ backgroundColor: buttonClicked ? COLORS.gray3 : COLORS.silverGray}}
          />
        </View>
      </View>
    </View>
    </ImageBackground>
  )
}

export default OtpConfirmation;