import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNav from "./views/components/navigations/BottomTabNav.jsx";
import HomePage from "./views/components/homepage/HomePage.jsx";
import Categories from "./views/components/categories/Categories.jsx";
import Cart from "./views/components/cart/Cart.jsx";
import MySettings from "./views/components/accounts/yourSettings/MySettings.jsx";
import Profile from "./views/components/accounts/profile/Profile.jsx";
import EditProfile from "./views/components/accounts/profile/EditProfile.jsx";
import LiveChat from "./views/components/accounts/liveChat/LiveChat.jsx";
import Payment from './views/components/payment/Payment.jsx';

const Stack = createNativeStackNavigator();

export default function Component1() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabNav">
        <Stack.Screen
          name="BottomTabNav"
          component={BottomTabNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MySettings"
          component={MySettings}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LiveChat"
          component={LiveChat}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{headerShown: false}}
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