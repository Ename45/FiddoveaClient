import { View, Text, Pressable, Image, SafeAreaView } from "react-native";
import React, { useContext, useState } from "react";
import allProductsCardView from "../../../../styles/components/product/allProductsCardView/allProductsCardView";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../../../context/context";


const WishlistCardView = ({product, handleRemoveFromWishList, currentProductId }) => {

  return (
    <View style={{borderWidth: 1, padding:10, backgroundColor: "blue", marginBottom: 10}}>
      <Pressable onPress={()=> handleRemoveFromWishList(currentProductId)}>
        <View >
          <Image
            source={{ uri: product.productImageUrl }}
            style={{aspectRatio: 1, resizeMode: "cover"}}
          />
        </View>
      <Text style={{color: "white", fontSize: 20, paddingBottom: 10, fontWeight: "bold"}}>{product.productName}</Text>
      <Text style={{color: "white", fontSize: 20, paddingBottom: 10, fontWeight: "bold"}}>{product.productPrice}</Text>
      </Pressable>
    </View>
  );
}

export default WishlistCardView