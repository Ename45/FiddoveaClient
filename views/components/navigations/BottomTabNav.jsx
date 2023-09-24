import { View, Text } from "react-native";
import React from "react";
import {
  SimpleLineIcons,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SIZES } from "../../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import HomePage from "../homepage/HomePage";
import Categories from "../categories/Categories";
import Cart from "../cart/Cart";
import MySettings from "../accounts/yourSettings/MySettings.jsx";
import Profile from "../accounts/profile/Profile";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: true,
  headerShown: false,
  tabBarHideOnKeyBoard: true,
  tabBarStyle: {
    backgroundColor: "#3C2113",
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    top: 0,
    height: SIZES.height/12,
  },
  tabBarLabelStyle: {
    color: COLORS.burlyWoodBrown,
    fontSize: SIZES.mid,
  },
};

const BottomTabNav = () => {
  return (    
    <Tab.Navigator screenOptions={screenOptions} >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <SimpleLineIcons
                  name="home"
                  size={24}
                  color={focused ? COLORS.black : COLORS.white}
                />
                {/* <View>
                  <Text>Home</Text>
                </View> */}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Categories"
        component={Categories}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <SimpleLineIcons
                  name="eye"
                  size={24}
                  color={focused ? COLORS.black : COLORS.white}
                />
                {/* <View>
                  <Text>Categories</Text>
                </View> */}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <SimpleLineIcons
                  name="basket-loaded"
                  size={24}
                  color={focused ? COLORS.black : COLORS.white}
                />
                {/* <View>
                  <Text>Cart</Text>
                </View> */}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={MySettings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <SimpleLineIcons
                  name="settings"
                  size={24}
                  color={focused ? COLORS.black : COLORS.white}
                />
                {/* <View>
                  <Text>Settings</Text>
                </View> */}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <SimpleLineIcons
                  name="user"
                  size={24}
                  color={focused ? COLORS.black : COLORS.white}
                />
                {/* <View>
                  <Text>Account</Text>
                </View> */}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
