import { View, Text, Pressable, Image, SafeAreaView } from "react-native";
import React, { useContext, useState } from "react";
import allProductsCardView from "../../../../styles/components/product/allProductsCardView/allProductsCardView";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../../../context/context";


const WishlistCardView = ({wishList}) => {
  // const navigation = useNavigation();

  // console.log("This is the wishlist log ==> ", wishList);

  const [isFocused, setIsFocused] = useState(false);

  const { removeFromWishlistUsingApi } = useContext(Context)

  // const navigateToProductDetails = (productId) => {
  //   // navigation.navigate('ProductDetails', { productId: productId })
  //   navigation.navigate("ProductDetails", { productId });
  // };

  return (
    <Pressable
      onPressIn={() => setIsFocused(true)}
      onPressOut={() => setIsFocused(false)}
      // onPress={() => navigateToProductDetails(product.productId)}
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
            source={{ uri: wishList.productImageUrl }}
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
              {wishList.productName}
            </Text>
          </View>
          <View style={allProductsCardView.details}>
            <Text style={allProductsCardView.price} numberOfLines={1}>
              N{wishList.productPrice}
            </Text>
          </View>
        </View>
        <View style={allProductsCardView.buttonsContainer}>
          <Pressable
            style={allProductsCardView.addBtn}
            onPress={() => removeFromWishlistUsingApi(wishList.productId)}
          >
            <Ionicons
              name="remove"
              size={(9 / 100) * SIZES.width}
              color={COLORS.black}
              style={{ marginTop: 1, marginBottom: -3 }}
            />
          </Pressable>
          {/* <Pressable style={allProductsCardView.addBtn2}>
            <Ionicons
              name="cart-outline"
              size={(9 / 100) * SIZES.width}
              color={COLORS.goldenrod}
            />
          </Pressable> */}
        </View>
      </View>
    </Pressable>
  );
}

export default WishlistCardView