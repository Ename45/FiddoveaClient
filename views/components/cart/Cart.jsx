import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";
import { Context } from "../../../context/context";
import CartCardView from "./CartCardView";
import cartCardView from "../../../styles/components/cart/cartCardView";
import cart from "../../../styles/components/cart/cart";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

const Cart = () => {
  const navigation = useNavigation();
  const { cartItems, handleRemoveFromCart } = useContext(Context);

  const [productQuantities, setProductQuantities] = useState({});

  const calculateGrandTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      const quantity = productQuantities[item.productId] || 1;
      total += parseFloat(item.productPrice) * quantity;
    });
    return total.toFixed(2);
  };

  const increment = (item) => {
    const newQuantity = productQuantities[item.productId] + 1 || 1;
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item.productId]: newQuantity,
    }));
  };

  const decrement = (item) => {
    if (productQuantities[item.productId] > 1) {
      const newQuantity = productQuantities[item.productId] - 1;
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [item.productId]: newQuantity,
      }));
    }
  };

  const renderCartItems = ({ item }) => {
    const productQuantity = productQuantities[item.productId] || 1;

    const totalItemPrice = (item.productPrice * productQuantity).toFixed(2);

    return (
      <View style={cartCardView.cartItem}>
        <View style={cartCardView.itemContent}>
          <Image
            source={{ uri: item.productImageUrl }}
            style={cartCardView.cartItemImage}
          />
          <View style={cartCardView.itemDetails}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text>{item.productName}</Text>
              <Pressable onPress={() => handleRemoveFromCart(item.productId)}>
                <MaterialIcons
                  name="delete"
                  size={(7 / 100) * SIZES.width}
                  color={COLORS.black}
                  style={{ marginTop: 1, marginBottom: -3 }}
                />
              </Pressable>
            </View>
            <Text style={cartCardView.cartItemPrice}>N{item.productPrice}</Text>
            <View style={cartCardView.quantityContainer}>
              <Pressable onPress={() => decrement(item)}>
                <SimpleLineIcons name="minus" size={18} />
              </Pressable>
              <Text style={cartCardView.quantityText}>{productQuantity}</Text>
              <Pressable onPress={() => increment(item)}>
                <SimpleLineIcons name="plus" size={18} />
              </Pressable>
            </View>
            <Text style={cartCardView.cartItemPrice}>
              total: N{totalItemPrice}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  if (cartItems.length === 0) {
    return (
      <View
        style={{
          padding: 20,
          alignItems: "center",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20, color: "black" }}>
          Cart Empty
        </Text>
      </View>
    );
  }
  console.log("cart Items in cart component==> ", cartItems);

  return (
    <View style={cart.container}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItems}
        keyExtractor={(item) => item.productId}
      />
      <View>
        <View style={cart.totalPriceContainer}>
          <Text style={cart.totalPriceLabel}>Grand Price:</Text>
          <Text style={cart.totalPriceAmount}>N {calculateGrandTotal()}</Text>
        </View>
        <Pressable
          style={cart.checkoutButton}
          onPress={() => {
            if (cartItems.length !== 0) {
              const checkoutData = cartItems.map((item) => {
                const productQuantity = productQuantities[item.productId] || 1;
                const totalItemPrice = (
                  item.productPrice * productQuantity
                ).toFixed(2);

                return {
                  productName: item.productName,
                  quantity: productQuantity,
                  totalItemPrice: totalItemPrice,
                };
              });

              navigation.navigate("CheckoutConfirmation", {
                checkoutData: checkoutData,
                grandTotal: calculateGrandTotal(),
              });
            }
          }}
        >
          <Text style={cart.checkoutButtonText}>Check out</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
