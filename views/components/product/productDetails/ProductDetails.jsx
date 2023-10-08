import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import productDetails from "../../../../styles/components/product/productDetails/productDetails";
import {
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../../constants/theme";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { ngrokBaseUrl, productUrl } from "../../../../api/Api";
import { Context } from "../../../../context/context";

const ProductDetails = ({ navigation }) => {
  const route = useRoute();
  const { productId } = route.params;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [productDetailsData, setProductDetailsData] = useState(null);

  const [isFocused, setIsFocused] = useState(false);

  const { addToWishList, addToCart } = useContext(Context);

  useEffect(() => {
    async function getProductDetailsDataFromApi() {
      try {
        const response = await axios.get(
          `${ngrokBaseUrl}/${productUrl}/findproduct/${productId}`
        );

        // console.log("this is the response", response.data);

        if (response.status == 200) {
          setIsLoading(false);
          setProductDetailsData(response.data);
        }
      } catch (error) {
        console.log("this is the error message", error);
        setError(error);
      }
    }

    getProductDetailsDataFromApi();
  }, []);

  // console.log("this is me", productDetailsData);

  if (isLoading) {
    return (
      <ActivityIndicator size={SIZES.xxLarge} color={COLORS.tabBarBrown} />
    );
  }


  return (
    <ScrollView>
      <View style={productDetails.container}>
        <View style={productDetails.upperMainContainer}>
          <View style={productDetails.upperRow}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                elevation: 10,
                backgroundColor: COLORS.white,
                borderRadius: 50,
              }}
            >
              <Ionicons
                name="chevron-back-circle-outline"
                size={30}
                color={COLORS.black}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => addToWishList(productId)}
              onPressIn={() => setIsFocused(true)}
              style={{
                elevation: 10,
                borderRadius: 50,
                backgroundColor: COLORS.white,
                paddingTop: 2
              }}
              // onPressOut={() => setIsFocused(false)}
            >
              <Ionicons
                name={isFocused ? "heart" : "heart-outline"}
                size={30}
                color={isFocused ? "red" : COLORS.black}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={{ uri: productDetailsData?.productImageUrl }} // optional chaining
            style={productDetails.image}
          />
        </View>

        <View style={productDetails.details}>
          <View style={productDetails.titleRow}>
            <Text style={productDetails.title}>
              {productDetailsData?.productName}
            </Text>
            <View style={productDetails.priceWrapper}>
              <Text style={productDetails.productPrice}>
                N{productDetailsData?.productPrice}
              </Text>
            </View>
          </View>          

          <View style={productDetails.descriptionWrapper}>
            <Text style={productDetails.description}>Description</Text>
            <Text style={productDetails.descriptionStyle}>
              {productDetailsData?.productDescription}
            </Text>
          </View>

          <View style={productDetails.ratingRow}>
            <View style={productDetails.rating}>
              {[1, 2, 3, 4, 5].map((index) => (
                <Ionicons key={index} name="star" size={24} color={COLORS.metallicGold} />
              ))}

              <Text style={productDetails.ratingText}>..(4.9)</Text>
            </View>
          </View>

          <View style={productDetails.cartRow}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              style={productDetails.cartButton}
            >
              <Text style={productDetails.cartTitle}>BUY NOW</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={productDetails.addToCart}
            onPress={() => addToCart(productId)}
            >
              <MaterialCommunityIcons
                name="cart"
                size={24}
                color={COLORS.lightWhite}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProductDetails;
