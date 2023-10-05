import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import homePageWelcome from "../../../../styles/components/homepage/homePageWelcome/homePageWelcome.js";
import { COLORS, SIZES } from "../../../../constants/theme.js";
import { Feather, Ionicons } from "@expo/vector-icons";
import InputField from "../../reusable/inputField/InputField.jsx";
import { useNavigation } from "@react-navigation/native";

const HomePageWelcome = () => {
  const navigation = useNavigation();

  const navigateToSearchPage = () => {
    navigation.navigate("Search");
  };

  return (
    <View>
      <View style={homePageWelcome.outerContainer}>
        <Text
          style={homePageWelcome.welcomeText(
            COLORS.black,
            (1 / 100) * SIZES.height
          )}
        >
          Dive Into A Treasure Trove
        </Text>
        <Text style={homePageWelcome.welcomeText(COLORS.primary, -5)}>
          Of Products And Services
        </Text>
      </View>

      <View style={homePageWelcome.searchOuterContainer}>
        <View style={homePageWelcome.searchWrapper}>
          <TouchableOpacity style={homePageWelcome.searchBtn}       
              onPress={navigateToSearchPage}>
          <View>
            <Text style={homePageWelcome.searchInput}>what are you looking for</Text>
          </View>
            <Ionicons
              name="search"
              size={(7 / 100) * SIZES.width}
              color={COLORS.black}        
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomePageWelcome;
