import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../../../constants/theme.js";
import { Feather, Ionicons } from "@expo/vector-icons";
import InputField from "../../reusable/inputField/InputField.jsx";
import search from "../../../../styles/components/product/search/search.js";
import axios from "axios";
import { customerUrl, baseUrl } from "../../../../api/Api.jsx";
import useFetch from "../../../../hook/useFetch.js";
import { Image } from "react-native";
import SearchCardView from "./SearchCardView.jsx";

const Search = () => {
  const [error, setError] = useState(null);
  const [networkError, setNetworkError] = useState("");

  const [searchItem, setSearchItem] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${baseUrl}/${customerUrl}/product/search`,
        {
          params: {
            query: searchItem,
          },
        }
      );
      console.log("response==>{}", response.data);
      if (response.status === 200) {
        setSearchResults(response.data);
      }
    } catch (error) {
      setError(error.response.data);
      console.log(error.response.data);
    }
  };

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
            placeholder="what are you looking for"
          />
          <TouchableOpacity
            style={search.searchBtn}
            onPress={() => handleSearch()}
          >
            <Feather
              name="search"
              size={(7 / 100) * SIZES.width}
              color={COLORS.darkChocolateBrown}
            />
          </TouchableOpacity>
        </View>
      </View>
      {searchResults.length === 0 ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.pageBackgroundBrown,
          }}
        >
          <Image
            source={require("../../../../assets/images/jpg/searchImage.jpeg")}
            style={{ flex: 1, aspectRatio: 0.6, resizeMode: "cover" }}
          />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item, index) => `${item.productId}_${index}`}
          renderItem={({ item }) => {
            if (!item || !item.productImageUrl) {
              return null;
            }
            return (
              <SearchCardView
                productFound={item}
              />
            );
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
