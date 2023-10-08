import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";

const Splash2 = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("GetStarted");
    }, 500);
    return () => clearTimeout(timer);
  }, [navigation]);
  return (
    <View>
      <Image
        source={require("../../../../assets/images/png/FiddoveaIcon.png")}
        style={{
          width: "50%",
          height: "50%",
        }}
      />
    </View>
  );
};

export default Splash2;
