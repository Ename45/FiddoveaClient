import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {
//     Ionicons,

//     FontAwesome,
//     SimpleLineIcons,
// } from '@expo/vector-icons';
// import {Tabs} from "expo-router";
import {
    SimpleLineIcons,
    MaterialCommunityIcons,
    Ionicons, FontAwesome,
} from "@expo/vector-icons";
import {COLORS, SIZES} from "../../../../constants/theme";
import ViewOrder from "../order/ViewOrder";
import HomePage from "../../homepage/HomePage";
import VendorProfile from "../profile/VendorProfile";
import Product from "../product/Product";
import Wallet from "../wallet/Wallet";
import VendorHomePage from "../vendorhomepage/VendorHomePage";

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
};

const VendorDashboard = ({ navigation }) => {
        return (
            <Tab.Navigator screenOptions={screenOptions}>
                
                <Tab.Screen
           name="VendorHomePage"
           component={VendorHomePage}
           options={{
             tabBarIcon: ({ focused }) => {
               return (
                 <View
                   style={{
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: focused
                       ? COLORS.darkChocolateBrown
                       : COLORS.tabBarBrown,
                     borderRadius: focused ? 10 : 0,
                     elevation: focused ? 5 : 0,
                     width: focused ? 60 : 70,
                   }}
                 >
                   <SimpleLineIcons
                     name="home"
                     size={(6 / 100) * SIZES.width}
                     color={focused ? COLORS.white : COLORS.black}
                   />
                   <View>
                     <Text
                       style={{
                         color: focused ? COLORS.black : COLORS.burlyWoodBrown,
                         fontSize: (3.5 / 100) * SIZES.width,
                         fontFamily: focused
                           ? "poppinsBold700"
                           : "poppinsLight300",
                       }}
                     >
                       Home
                     </Text>
                   </View>
                 </View>
               );
             },
           }}
         />
                <Tab.Screen
           name="ViewOrder"
           component={ViewOrder}
           options={{
             tabBarIcon: ({ focused }) => {
               return (
                 <View
                   style={{
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: focused
                       ? COLORS.darkChocolateBrown
                       : COLORS.tabBarBrown,
                     borderRadius: focused ? 10 : 0,
                     elevation: focused ? 5 : 0,
                     width: focused ? 60 : 70,
                   }}
                 >
                   < MaterialCommunityIcons
                     name="clipboard-check"
                     size={(6 / 100) * SIZES.width}
                     color={focused ? COLORS.white : COLORS.black}
                   />
                   <View>
                     <Text
                       style={{
                         color: focused ? COLORS.black : COLORS.burlyWoodBrown,
                         fontSize: (3.5 / 100) * SIZES.width,
                         fontFamily: focused
                           ? "poppinsBold700"
                           : "poppinsLight300",
                       }}
                     >
                       Order
                     </Text>
                   </View>
                 </View>
               );
             },
           }}
         />
         <Tab.Screen
           name="Product"
           component={Product}
           options={{
             tabBarIcon: ({ focused }) => {
               return (
                 <View
                   style={{
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: focused
                       ? COLORS.darkChocolateBrown
                       : COLORS.tabBarBrown,
                     borderRadius: focused ? 10 : 0,
                     elevation: focused ? 5 : 0,
                     width: focused ? 60 : 70,
                   }}
                 >
                     <FontAwesome
                         name="shopping-bag"
                         size={(6 / 100) * SIZES.width}
                         color={focused ? COLORS.white : COLORS.black}
                   />
                   <View>
                     <Text
                       style={{
                         color: focused ? COLORS.black : COLORS.burlyWoodBrown,
                         fontSize: (3.5 / 100) * SIZES.width,
                         fontFamily: focused
                           ? "poppinsBold700"
                           : "poppinsLight300",
                       }}
                     >
                       Product
                     </Text>
                   </View>
                 </View>
               );
             },
           }}
         />
         <Tab.Screen
           name="Wallet"
           component={Wallet}
           options={{
             tabBarIcon: ({ focused }) => {
               return (
                 <View
                   style={{
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: focused
                       ? COLORS.darkChocolateBrown
                       : COLORS.tabBarBrown,
                     borderRadius: focused ? 10 : 0,
                     elevation: focused ? 5 : 0,
                     width: focused ? 60 : 70,
                   }}
                 >
                   < MaterialCommunityIcons
                     name="cash"
                     size={(6 / 100) * SIZES.width}
                     color={focused ? COLORS.white : COLORS.black}
                   />
                   <View>
                     <Text
                       style={{
                         color: focused ? COLORS.black : COLORS.burlyWoodBrown,
                         fontSize: (3.5 / 100) * SIZES.width,
                         fontFamily: focused
                           ? "poppinsBold700"
                           : "poppinsLight300",
                       }}
                     >
                       Wallet
                     </Text>
                   </View>
                 </View>
               );
             },
           }}
         />
         <Tab.Screen
           name="VendorProfile"
           component={VendorProfile}
           options={{
             tabBarIcon: ({ focused }) => {
               return (
                 <View
                   style={{
                     flexDirection: "column",
                     justifyContent: "center",
                     alignItems: "center",
                     backgroundColor: focused
                       ? COLORS.darkChocolateBrown
                       : COLORS.tabBarBrown,
                     borderRadius: focused ? 10 : 0,
                     elevation: focused ? 5 : 0,
                     width: focused ? 60 : 70,
                   }}
                 >
                     <Ionicons name="person"
                     size={(6 / 100) * SIZES.width}
                     color={focused ? COLORS.white : COLORS.black}
                   />
                   <View>
                     <Text
                       style={{
                         color: focused ? COLORS.black : COLORS.burlyWoodBrown,
                         fontSize: (3.5 / 100) * SIZES.width,
                         fontFamily: focused
                           ? "poppinsBold700"
                           : "poppinsLight300",
                       }}
                     >
                       Profile
                     </Text>
                   </View>
                 </View>
               );
             },
           }}
         />
       </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-end',
    },
    iconBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#3a1204',
        paddingVertical: 10,
    },
    menuItem: {
        alignItems: 'center',
        padding: 15,
        borderRadius: 15,
    },
    brownBackground: {
        backgroundColor: '#b06f55', 
    },
});

export default VendorDashboard;
