import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet} from 'react-native';
import Splash from "./views/components/screens/splashScreens/Splash.jsx"
import Splash2 from './views/components/screens/splashScreens/Splash2.jsx';
import GetStarted from './views/components/onboarding/GetStarted.jsx'
import Register from './views/components/auth/register/Register.jsx';
import RegisterVendor from './views/components/auth/register/RegisterVendor.jsx'
import RegisterAdmin from './views/components/auth/register/RegisterAdmin.jsx'
import Login from './views/components/auth/login/Login.jsx'
import LoginAdmin from './views/components/auth/login/LoginAdmin.jsx'
import LoginVendor from './views/components/auth/login/LoginVendor.jsx'
import ForgotPassword from './views/components/auth/forgotPassword/ForgotPassword.jsx'
import BottomTabNav from './views/components/navigations/BottomTabNav.jsx';
import HomePage from './views/components/homepage/HomePage.jsx';
import Categories from './views/components/categories/Categories.jsx'
import Cart from './views/components/cart/Cart.jsx'
import MySettings from './views/components/accounts/yourSettings/MySettings.jsx';
import Profile from './views/components/accounts/profile/Profile.jsx'
import EditProfile from './views/components/accounts/profile/EditProfile.jsx'
import LiveChat from './views/components/accounts/liveChat/LiveChat.jsx'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName='BottomTabNav'></Stack.Navigator> */}
      <Stack.Navigator initialRouteName='BottomTabNav'>
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
