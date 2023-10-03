import { View, Text } from "react-native";
import React from "react";
import {
  SimpleLineIcons,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS, SIZES } from "../../../constants/theme";
import { LinearGradient } from "expo-linear-gradient";
import HomePage from "../homepage/HomePage";

import Cart from "../cart/Cart";
import MySettings from "../accounts/yourSettings/MySettings.jsx";
import Profile from "../accounts/myAccount/profile/Profile";
import Search from "../product/search/Search";
import WishList from "../product/wishlist/WishList";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarHideOnKeyBoard: true,
  tabBarStyle: {
    outerWidth: SIZES.width,
    innerWidth: SIZES.width,
    backgroundColor: COLORS.tabBarBrown,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    top: 0,
    height: (15 / 100) * SIZES.width,
  },
  // tabBarLabelStyle: {
  //   color: COLORS.burlyWoodBrown,
  //   fontSize: (3.5 / 100) * SIZES.width,
  //   fontFamily: "poppinsLight300",
  // },
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
              <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: focused ? COLORS.darkChocolateBrown : COLORS.tabBarBrown, borderRadius: focused ? 10 : 0, elevation: focused ? 5 : 0, width: focused ? 60 : 70}}>
                <SimpleLineIcons
                  name="home"
                  size={(6 / 100) * SIZES.width}
                  color={focused ? COLORS.white: COLORS.black}
                />
                <View>
                  <Text style={{color: focused ? COLORS.black : COLORS.burlyWoodBrown, fontSize: (3.5 / 100) * SIZES.width, fontFamily: focused ? "poppinsBold700" : "poppinsLight300"}}>Home</Text>
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="WishList"
        component={WishList}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: focused ? COLORS.darkChocolateBrown : COLORS.tabBarBrown, borderRadius: focused ? 10 : 0, elevation: focused ? 5 : 0, width: focused ? 60 : 70}}>
                <Ionicons
                  name="heart-outline"
                  size={(6 / 100) * SIZES.width}
                  color={focused ? COLORS.white: COLORS.black}
                />
                <View>
                  <Text style={{color: focused ? COLORS.black : COLORS.burlyWoodBrown, fontSize: (3.5 / 100) * SIZES.width, fontFamily: focused ? "poppinsBold700" : "poppinsLight300"}}>Wish List</Text>
                </View>
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
              <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: focused ? COLORS.darkChocolateBrown : COLORS.tabBarBrown, borderRadius: focused ? 10 : 0, elevation: focused ? 5 : 0, width: focused ? 60 : 70}}>
                <SimpleLineIcons
                  name="basket-loaded"
                  size={(6 / 100) * SIZES.width}
                  color={focused ? COLORS.white: COLORS.black}
                />
                <View>
                  <Text style={{color: focused ? COLORS.black : COLORS.burlyWoodBrown, fontSize: (3.5 / 100) * SIZES.width, fontFamily: focused ? "poppinsBold700" : "poppinsLight300"}}>Cart</Text>
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={MySettings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: focused ? COLORS.darkChocolateBrown : COLORS.tabBarBrown, borderRadius: focused ? 10 : 0, elevation: focused ? 5 : 0, width: focused ? 60 : 70}}>
                <SimpleLineIcons
                  name="settings"
                  size={(6 / 100) * SIZES.width}
                  color={focused ? COLORS.white: COLORS.black}
                />
                <View>
                  <Text style={{color: focused ? COLORS.black : COLORS.burlyWoodBrown, fontSize: (3.5 / 100) * SIZES.width, fontFamily: focused ? "poppinsBold700" : "poppinsLight300"}}>Settings</Text>
                </View>
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