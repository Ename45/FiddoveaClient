import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Screen } from "react-native-screens";
import Splash from "./views/components/screens/splashScreens/Splash.jsx";
import Splash2 from "./views/components/screens/splashScreens/Splash2.jsx";
import GetStarted from "./views/components/onboarding/GetStarted.jsx";
import Register from "./views/components/auth/register/Register.jsx";
import OtpConfirmation from "./views/components/auth/register/OtpConfirmation.jsx";
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
import ProductList from "./views/components/product/allProducts/ProductList.jsx";
import ProductDetails from "./views/components/product/productDetails/ProductDetails.jsx";
import Cake from './views/components/product/categories/cake/Cake.jsx'
import Cupcake from './views/components/product/categories/cupcake/Cupcake.jsx'
import Doughnut from './views/components/product/categories/doughnut/Doughnut.jsx'
import Chocolate from './views/components/product/categories/chocolate/Chocolate.jsx'
import Candy from './views/components/product/categories/candy/Candy.jsx'
import Brownie from './views/components/product/categories/brownie/Brownie.jsx'
import Cookie from './views/components/product/categories/cookie/Cookie.jsx'
import Dessert from './views/components/product/categories/dessert/Dessert.jsx'
import Roll from './views/components/product/categories/roll/Roll.jsx'
import Popcorn from './views/components/product/categories/popcorn/Popcorn.jsx'
import Bread from './views/components/product/categories/bread/Bread.jsx'
import Drink from './views/components/product/categories/drink/Drink.jsx'
import WishList from "./views/components/product/wishlist/WishList.jsx";
import NewRivals from "./views/components/product/allProducts/NewRivals.jsx";
import VerificationPendingScreen from "./views/components/vendor/verification/VerificationPendingScreen";
import VendorDashboard from "./views/components/vendor/dashboard/DashBoardScreen";
import VendorProfile from "./views/components/vendor/profile/VendorProfile";
import ViewOrder from "./views/components/vendor/order/ViewOrder";



const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({    
    poppinsThin100: require("./assets/fonts/Poppins-Thin.ttf"),
    poppinsExtraLight200: require("./assets/fonts/Poppins-ExtraLight.ttf"),
    poppinsLight300: require("./assets/fonts/Poppins-Light.ttf"),
    poppinsRegular400: require("./assets/fonts/Poppins-Regular.ttf"),
    poppinsMedium500: require("./assets/fonts/Poppins-Medium.ttf"),
    poppinsSemiBold600: require("./assets/fonts/Poppins-SemiBold.ttf"),
    poppinsBold700: require("./assets/fonts/Poppins-Bold.ttf"),
    poppinsExtraBold800: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    poppinsBlack900: require("./assets/fonts/Poppins-Black.ttf"),
  })


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
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OtpConfirmation"
          component={OtpConfirmation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterVendor"
          component={RegisterVendor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"VerificationPendingScreen"}
          component={VerificationPendingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={"VendorDashboard"}
          component={VendorDashboard}
          options={{ headerShown: false }}
        />
         <Stack.Screen
          name={"VendorProfile"}
          component={VendorProfile}
          options={{ headerShown: false }}
         />
        <Stack.Screen
            name={"ViewOrder"}
            component={ViewOrder}
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
        <Stack.Screen
          name="ProductList"
          component={ProductList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cake"
          component={Cake}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cupcake"
          component={Cupcake}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Doughnut"
          component={Doughnut}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Chocolate"
          component={Chocolate}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Candy"
          component={Candy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Brownie"
          component={Brownie}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cookie"
          component={Cookie}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dessert"
          component={Dessert}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Roll"
          component={Roll}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Popcorn"
          component={Popcorn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bread"
          component={Bread}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Drink"
          component={Drink}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WishList"
          component={WishList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewRivals"
          component={NewRivals}
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