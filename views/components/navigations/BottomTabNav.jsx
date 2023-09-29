import { View, Text } from "react-native";
import React from "react";
import {
  SimpleLineIcons,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SIZES } from "../../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import HomePage from "../homepage/HomePage";

import Cart from "../cart/Cart";
import MySettings from "../accounts/yourSettings/MySettings.jsx";
import Profile from "../accounts/myAccount/profile/Profile";
import Search from "../product/search/Search";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: true,
  headerShown: false,
  tabBarHideOnKeyBoard: true,
  tabBarStyle: {
    outerWidth: SIZES.width,
    innerWidth: SIZES.width,
    backgroundColor: COLORS.tabBarBrown,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    top: 0,
    height: SIZES.height/12,
  },
  tabBarLabelStyle: {
    color: COLORS.burlyWoodBrown,
    fontSize: SIZES.mid,
    fontFamily: "playFairRegular"
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
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Feather
                  name="search"
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
      
    </Tab.Navigator>
  );
};

export default BottomTabNav;


// <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarIcon: ({ focused }) => {
//             return (
//               <View>
//                 <SimpleLineIcons
//                   name="user"
//                   size={24}
//                   color={focused ? COLORS.black : COLORS.white}
//                 />
//                 {/* <View>
//                   <Text>Account</Text>
//                 </View> */}
//               </View>
//             );
//           },
//         }}
//       />