import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import register from "../../../../styles/components/auth/register/register.js";
import InputField from "../../reusable/inputField/InputField.jsx";
import CustomButton from "../../reusable/button/CustomButton.jsx";
import { COLORS, SIZES } from "../../../../constants/theme.js";
import { customerUrl, baseUrl } from "../../../../api/Api.jsx";
import { Pressable } from "react-native";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [error, setError] = useState(null);
  const [inputError, setInputError] = useState("");
  const [networkError, setNetworkError] = useState("");

  const navigation = useNavigation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setButtonClicked(true);

    const URL = `${baseUrl}/${customerUrl}`;

    let customerData = {
      email,
      password,
    };

    if (email !== "" && password !== "") {
      setInputError("");
      try {
        const response = await axios.post(URL, customerData);
        if (response.status === 201) {
          navigation.navigate("Login");
        }
      } catch (error) {
        if (error.response && error.response.data) {
          setError(error.response.data);
        } else {
          setError("An error occurred.");
        }
      }
    } else {
      setInputError("All fields are required");
    }
  };

  return (
    <ImageBackground
      source={require("../../../../assets/images/jpg/topImageOnboarding.jpg")}
      style={register.backgroundColor}
    >
      <View style={register.logoContainer}>
        <Image
          source={require("../../../../assets/images/png/secondLogo.png")}
          style={register.logo}
        />
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
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
          <Text style={register.title}>Registration</Text>
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

          {/* <View>
            {error && <Text style={{ color: "red" }}>{error}</Text>}
            {inputError !== "" && (
              <Text style={{ color: "red" }}>{inputError}</Text>
            )}
          </View> */}
          <View>
            {error && (
              <Text style={{ color: "red" }}>
                {error.response ? error.response.data : "An error occurred."}
              </Text>
            )}
            {inputError !== "" && (
              <Text style={{ color: "red" }}>{inputError}</Text>
            )}
          </View>

          <View style={{ marginTop: 20 }}>
            <CustomButton
              buttonName="Register"
              onPress={handleSubmit}
              style={{
                backgroundColor: buttonClicked
                  ? COLORS.gray3
                  : COLORS.silverGray,
              }}
            />
          </View>
          <View style={{ marginTop: 50, fontSize: (3 / 100) * SIZES.height }}>
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text
                style={{ marginTop: 50, fontSize: (2 / 100) * SIZES.height }}
              >
                Already have an account? Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Register;
