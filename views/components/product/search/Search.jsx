import { View, Text, TouchableOpacity, SafeAreaView, FlatList } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../../../constants/theme.js";
import { Feather, Ionicons } from "@expo/vector-icons";
import InputField from "../../reusable/inputField/InputField.jsx";
import search from '../../../../styles/components/product/search/search.js'
import axios from "axios";
import { ngrokBaseUrl } from "../../../../api/Api.jsx";
import useFetch from "../../../../hook/useFetch.js";

const Search = () => {

  const [error, setError ] = useState(null);
  const [networkError, setNetworkError] = useState("");

  const [searchItem, setSearchItem] = useState("");  
  const [searchResults, setSearchResults ] = useState([]) 

  // GET http://localhost:8080/api/v1/customer/product/search

  const handleSearch = async() => {

    try {
      const response = await axios.get(`${ngrokBaseUrl}/api/v1/customer/product/search`, searchItem);
      if (response.status === 200) {
        setSearchResults(response.data)
      }
    } catch (error) {
      setError(error.response.data);
      console.log(error.response.data.data)
    }
  }

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
          <TouchableOpacity style={search.searchBtn} onPress={() => handleSearch()}>
            <Feather
              name="search"
              size={(7 / 100) * SIZES.width}
              color={COLORS.darkChocolateBrown}
            />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Text>Product not found</Text>
        </View>
      ) : (
        <FlatList
        data={searchResults}
        keyExtractor={(item) => item._productId}
        />
      )}
    </SafeAreaView>
  )
}

export default Search