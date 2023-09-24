import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

const Splash2 = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("GetStarted");
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View>
      <Image
        source={require("../../../../assets/images/png/secondLogo.png")}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </View>
  );
};

export default Splash2;
