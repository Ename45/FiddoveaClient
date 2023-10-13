import { View, Text, Pressable, Image } from "react-native";
import React, { useContext, useState } from "react";
import allProductsCardView from "../../../../styles/components/product/allProductsCardView/allProductsCardView";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../../../context/context";
import { SafeAreaView } from "react-native";

const AllProductsCardView = ({ product }) => {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const [isFocused1, setIsFocused1] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);

  const { addToWishList, addToCart } = useContext(Context);

  const navigateToProductDetails = (productId) => {
    // navigation.navigate('ProductDetails', { productId: productId })
    navigation.navigate("ProductDetails", { productId });
  };

  return (
    <SafeAreaView>
      <Pressable
      onPressIn={() => setIsFocused(true)}
      onPressOut={() => setIsFocused(false)}
      onPress={() => navigateToProductDetails(product.productId)}
      // onPress={() => navigation.navigate("ProductDetails", {item: product})}
    >
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
      </View>
    </Pressable>
    <View style={allProductsCardView.buttonsContainer}>
          <Pressable
            style={allProductsCardView.addBtn}
            onPress={() => addToWishList(product.productId)}
            
              onPressIn={() => {
                setIsFocused1(true)
              }}
              onPressOut={() => setIsFocused1(false)}
          >
            <Ionicons
              size={(9 / 100) * SIZES.width}
              name={isFocused1 ? "heart" : "heart-outline"}
              color={isFocused1 ? COLORS.tabBarBrown : COLORS.black}
              style={{ marginTop: 1, marginBottom: -3, }}
            />
          </Pressable>
          <Pressable 
          style={allProductsCardView.addBtn2}
          onPress={() => addToCart(product.productId)}
          onPressIn={() => {
                setIsFocused2(true)
              }}
              onPressOut={() => setIsFocused2(false)}
          >
            <Ionicons
              name={isFocused2 ? "cart" : "cart-outline"}
              size={(9 / 100) * SIZES.width}
              color={isFocused2 ? COLORS.tabBarBrown : COLORS.goldenrod}
            />
          </Pressable>
        </View>
    </SafeAreaView>
  );
};

export default AllProductsCardView;
