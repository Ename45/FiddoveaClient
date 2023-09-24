import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Splash from "./views/components/screens/splashScreens/Splash.jsx";
import Splash2 from "./views/components/screens/splashScreens/Splash2.jsx";
import GetStarted from "./views/components/onboarding/GetStarted.jsx";
import Register from "./views/components/auth/register/Register.jsx";
import RegisterVendor from "./views/components/auth/register/RegisterVendor.jsx";
import RegisterAdmin from "./views/components/auth/register/RegisterAdmin.jsx";
import Login from "./views/components/auth/login/Login.jsx";
import LoginAdmin from "./views/components/auth/login/LoginAdmin.jsx";
import LoginVendor from "./views/components/auth/login/LoginVendor.jsx";
import ForgotPassword from "./views/components/auth/forgotPassword/ForgotPassword.jsx";

const Stack = createNativeStackNavigator();

export default function Component2() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Splash2"
          component={Splash2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterVendor"
          component={RegisterVendor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterAdmin"
          component={RegisterAdmin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginAdmin"
          component={LoginAdmin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginVendor"
          component={LoginVendor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
});