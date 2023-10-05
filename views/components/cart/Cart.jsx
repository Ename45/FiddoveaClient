import React, { useContext, useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Pressable, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { COLORS } from '../../../constants/theme';
import { Context } from '../../../context/context';
import CartCardView from './CartCardView';
import cart from '../../../styles/components/cart/cart';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {

  const navigation = useNavigation()

  const { cartItems, handleRemoveFromCart} = useContext(Context)

  const [productQuantities, setProductQuantities] = useState({});

  const onUpdateQuantity = (productId, quantity) => {
    setProductQuantities((prevState) => ({
      ...prevState,
      [productId]: quantity,
    }));
  };

  const calculateGrandTotal = () => {
    let grandTotal = 0;
    cartItems.forEach((item) => {
      const quantity = productQuantities[item.productId] || 1;
      grandTotal += item.productPrice * quantity;
    });
    return grandTotal;
  };

  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach((item) => {
      initialQuantities[item.productId] = 1;
    });
    setProductQuantities(initialQuantities);
  }, [cartItems]);


    if (!cartItems) {
    return(
      <View style={{padding: 20, alignItems: "center", flex: 1}}>
        <Text style={{fontWeight: "bold", fontSize: 20, color: "black"}}>
          Cart Empty
        </Text>
      </View>
    )
  }


  return (
    <View style={cart.container}>
      <FlatList
      data={cartItems}
      renderItem={({item}) => {
      if (!item || !item.productImageUrl) {
            return null;
          }
          return <CartCardView 
          product={item} 
          handleRemoveFromCart={handleRemoveFromCart} 
          currentProductId={item.productId}
          onUpdateQuantity={onUpdateQuantity}
          />;
    }}
      keyExtractor={(item) => item.productId}
      />
      <View>
        <View style={cart.totalPriceContainer}>
        <Text style={cart.totalPriceLabel}>Grand Price:</Text>
        <Text style={cart.totalPriceAmount}>N {calculateGrandTotal()}</Text>
      </View>
      <Pressable
        style={cart.checkoutButton}
        onPress={()=> navigation.navigate("CheckoutConfirmation")}
      >
        <Text style={cart.checkoutButtonText}>Check out</Text>
      </Pressable>
      </View>
    </View>
  )

};




export default Cart;

