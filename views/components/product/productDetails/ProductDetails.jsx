import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import productDetails from "../../../../styles/components/product/productDetails/productDetails";
import { Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../../../constants/theme";
import { useRoute } from "@react-navigation/native";

const ProductDetails = ({ navigation }) => {

  const route = useRoute();
  const { item } = route.params;
  console.log(item)

  const [count, setCount] = useState(1)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count == 1) {
      setCount(count)
    }
    else{
      setCount(count - 1)
    }
    
  }

  // const navigateToWishList = () => {
  //   navigation.navigate("WishList");
  // };

  return (
    <ScrollView>
      <View style={productDetails.container}>
      <View style={productDetails.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-circle"
            size={30}
            color={COLORS.primary}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            {};
          }}
        >
          <Ionicons name="heart-outline" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: item.productImage }}
        style={productDetails.image}
      />

      <View style={productDetails.details}>
        <View style={productDetails.titleRow}>
          <Text style={productDetails.title}>{item.productName}</Text>
          <View style={productDetails.priceWrapper}>
            <Text style={productDetails.productPrice}>N{item.productPrice}</Text>
          </View>
        </View>

        <View style={productDetails.ratingRow}>
          <View style={productDetails.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}

            <Text style={productDetails.ratingText}>
              ..(4.9)
            </Text>
          </View>

          <View style={productDetails.rating2}>
            <TouchableOpacity onPress={() => {increment()}}>
              <SimpleLineIcons
              name="plus"
              size={20}
              />
            </TouchableOpacity>
            <Text style={productDetails.ratingText}>
              {count}
            </Text>
            <TouchableOpacity onPress={() => {decrement()}}>
              <SimpleLineIcons
              name="minus"
              size={20}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={productDetails.descriptionWrapper}>
          <Text style={productDetails.description}>
            Description
          </Text>
          <Text style={productDetails.descriptionStyle}>
            {item.productDescription}
          </Text>
        </View>

        <View style={{ marginBottom: SIZES.small }}>
          <View style={productDetails.location}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
            name="location-outline"
            size={20}
            />
            <Text>   Lagos   </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
            name="truck-delivery-outline"
            size={20}
            />
            <Text>   Free Delivery   </Text>
            </View>
          </View>
        </View>

        <View style={productDetails.cartRow}>
          <TouchableOpacity onPress={() => {}} style={productDetails.cartButton}>
            <Text style={productDetails.cartTitle}>
              BUY NOW
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={productDetails.addToCart}>
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
