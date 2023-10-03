import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../../../constants/theme";
import newRivals from "../../../../styles/components/product/allproducts/newRivals";
import ProductList from "./ProductList";

const NewRivals = ({ navigation }) => {
  return (
    <SafeAreaView style={newRivals.mainContainer}>
      <View style={newRivals.wrapper}>
        <View style={newRivals.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons
              name="chevron-back-circle"
              size={30}
              color={COLORS.tabBarBrown}
            />
          </TouchableOpacity>

          <Text style={newRivals.heading}>Products</Text>
        </View>

        <ProductList />
      </View>
    </SafeAreaView>
  );
};

export default NewRivals;
