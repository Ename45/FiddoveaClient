import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Screen } from "react-native-screens";
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
import BottomTabNav from "./views/components/navigations/BottomTabNav.jsx";
import HomePage from "./views/components/homepage/HomePage.jsx";
import Categories from "./views/components/product/categories/Categories.jsx";
import Filter from "./views/components/product/filter/Filter.jsx";
import Search from "./views/components/product/search/Search.jsx";
import Cart from "./views/components/cart/Cart.jsx";
import MySettings from "./views/components/accounts/yourSettings/MySettings.jsx";
import Profile from "./views/components/accounts/myAccount/profile/Profile.jsx";
import EditProfile from "./views/components/accounts/myAccount/profile/EditProfile.jsx";
import LiveChat from "./views/components/accounts/actions/liveChat/LiveChat.jsx";
import Notification from "./views/components/accounts/myAccount/notification/Notification.jsx";
import Logout from "./views/components/accounts/actions/logout/Logout.jsx";


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    croissantOneRegular: require("./assets/fonts/CroissantOne-Regular.ttf"),
    playFairRegular: require("./assets/fonts/PlayfairDisplay-Regular.ttf"),
    playFairMedium: require("./assets/fonts/PlayfairDisplay-Medium.ttf"),
    playFairBold: require("./assets/fonts/PlayfairDisplay-Bold.ttf"),
    poppinsRegular: require("./assets/fonts/Poppins-Regular.ttf"),
    poppinsMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    poppinsBold: require("./assets/fonts/Poppins-Bold.ttf"),
    robotoRegular: require("./assets/fonts/RobotoCondensed-Regular.ttf"),
    robotoLight: require("./assets/fonts/RobotoCondensed-Light.ttf"),
    robotoBold: require("./assets/fonts/RobotoCondensed-Bold.ttf"),
  })

  // const defaultOptions = {
  //   headerTitleStyle: {
  //     fontFamily: "playFairRegular",
  //   },
  // };



  // const onLayoutRootView = useCallback(async() => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // },[fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='BottomTabNav'></Stack.Navigator> */}
      <Stack.Navigator styles={styles.container}>
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
          options={{ 
            headerShown: false
          }}
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
          name="Filter"
          component={Filter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
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
          style={styles.textStyle}
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
          name="Notification"
          component={Notification}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Logout"
          component={Logout}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  textStyle: {
    fontFamily: "playFairRegular",
    fontSize: 20,
  },
});
