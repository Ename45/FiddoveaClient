import { View, Image } from 'react-native';
import React, { useEffect } from 'react';


const Splash = ({navigation}) => {
useEffect(() => {
  const timer = setTimeout(() => {
    navigation.replace("GetStarted");
  }, 500);
  return () => clearTimeout(timer);
}, [navigation]);


return (
  <View>
    <Image
      source={require("../../../../assets/images/png/systemSplash.png")}
      style={{
        width: "100%",
        height: "100%",
      }}
    />
  </View>
);
}

export default Splash