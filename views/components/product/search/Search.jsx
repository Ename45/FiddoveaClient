import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../../../constants/theme.js";
import { Feather, Ionicons } from "@expo/vector-icons";
import InputField from "../../reusable/inputField/InputField.jsx";
import search from '../../../../styles/components/product/search/search.js'

const Search = () => {

  const [searchItem, setSearchItem] = useState("");  

  return (
    <SafeAreaView style={search.mainContainer}>
      <View style={search.searchOuterContainer}>
        <View style={search.searchWrapper}>
          <TouchableOpacity>
            <Ionicons
              name="camera-outline"
              size={(7 / 100) * SIZES.width}
              color={COLORS.darkChocolateBrown}
              style={search.searchIcon}
            />
          </TouchableOpacity>
          <InputField
            style={search.searchInput}
            value={searchItem}
            onChangeText={(text) => setSearchItem(text)}
            onPress={() => {}}
            placeholder="what are you looking for"
          />
          <TouchableOpacity style={search.searchBtn}>
            <Feather
              name="search"
              size={(7 / 100) * SIZES.width}
              color={COLORS.darkChocolateBrown}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Search