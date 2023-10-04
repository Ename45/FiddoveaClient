import { View, Text, Pressable, Image, SafeAreaView } from "react-native";
import React, { useState } from "react";
import allProductsCardView from "../../../../styles/components/product/allProductsCardView/allProductsCardView";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const AllProductsCardView = ({ product }) => {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);

  const navigateToProductDetails =(productId) => {
    // navigation.navigate('ProductDetails', { productId: productId })
    navigation.navigate('ProductDetails', { productId })
  }

  return (
    <Pressable
      onPressIn={() => setIsFocused(true)}
      onPressOut={() => setIsFocused(false)}
      onPress={() => navigateToProductDetails(product.productId)}
      // onPress={() => navigation.navigate("ProductDetails", {item: product})}
    >
      {/* product */}
      <View
        style={[
          allProductsCardView.container,
          isFocused && { backgroundColor: COLORS.pureGold },
        ]}
      >
        <View style={allProductsCardView.imageContainer}>
          <Image
            source={{ uri: product.productImageUrl }}
            style={allProductsCardView.image}
          />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={allProductsCardView.product}>
            <Text
              style={allProductsCardView.nameText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {product.productName}
            </Text>
          </View>
          <View style={allProductsCardView.details}>
            <Text style={allProductsCardView.price} numberOfLines={1}>
              N{product.productPrice}
            </Text>
          </View>
        </View>
        <View style={allProductsCardView.buttonsContainer}>
          <Pressable
            style={allProductsCardView.addBtn}
            // onPress={() => addToWishList(product)}
          >
            <Ionicons
              name="heart-outline"
              size={(9 / 100) * SIZES.width}
              color={COLORS.black}
              style={{ marginTop: 1, marginBottom: -3 }}
            />
          </Pressable>
          <Pressable style={allProductsCardView.addBtn2}>
            <Ionicons
              name="cart-outline"
              size={(9 / 100) * SIZES.width}
              color={COLORS.goldenrod}
            />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};

export default AllProductsCardView;
