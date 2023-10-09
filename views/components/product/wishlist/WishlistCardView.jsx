import { View, Text, Pressable, Image, SafeAreaView } from "react-native";
import React, { useContext, useState } from "react";
import wishlistCardView from "../../../../styles/components/product/wishlist/wishlistCardView";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { Context } from "../../../../context/context";


const WishlistCardView = ({product, handleRemoveFromWishList, currentProductId }) => {

  const navigation = useNavigation()

    const [isFocused, setIsFocused] = useState(false);

  return (
      <Pressable 
      onPress={()=> navigation.navigate("ProductDetails", { productId: currentProductId })}
      style={{backgroundColor: COLORS.pageBackgroundBrown}} 
      >
        <View style={[
          wishlistCardView.container,
        ]}>
          <View style={wishlistCardView.imageContainer}>
          <Image
            source={{ uri: product.productImageUrl }}
            style={wishlistCardView.image}
          />
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={wishlistCardView.product}>
            <Text
              style={wishlistCardView.nameText}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {product.productName}
            </Text>
          </View>
          <View style={wishlistCardView.details}>
            <Text style={wishlistCardView.price} numberOfLines={1}>
              N{product.productPrice}
            </Text>
          </View>
        </View>
        <View style={wishlistCardView.buttonsContainer}>
          <Pressable
            style={[wishlistCardView.addBtn, {backgroundColor: isFocused? "red" : COLORS.white}]}            
            onPress={()=> handleRemoveFromWishList(currentProductId)}            
            onPressIn={() => setIsFocused(true)}
            onPressOut={() => setIsFocused(false)}
          >
            <Ionicons
              name="remove"
              size={(9 / 100) * SIZES.width}
              color={COLORS.black}
              style={{ marginTop: 1, marginBottom: -3 }}
            />
          </Pressable>
        </View>
        </View>
      </Pressable>
  );
}

export default WishlistCardView