import React, { useContext, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Pressable, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { COLORS } from '../../../constants/theme';
import { Context } from '../../../context/context';
import CartCardView from './CartCardView';
// import { useNavigation } from '@react-navigation/native';

const Cart = () => {

  const { cartItems, handleRemoveFromCart} = useContext(Context)
  // console.log("from context in cart component", cartItems);

  // const [cartData, setCartData] = useState([]);
  // const [quantity, setQuantity] = useState([]);


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
    <View >
      <Text style={cartStyles.header}>Cart</Text>
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
          />;
    }}
      keyExtractor={(item) => item.productId}
      />
      <View>
        <View style={cartStyles.totalPriceContainer}>
        <Text style={cartStyles.totalPriceLabel}>Total Price:</Text>
        <Text style={cartStyles.totalPriceAmount}>N TotalPrice</Text>
      </View>
      <Pressable
        style={cartStyles.checkoutButton}
      >
        <Text style={cartStyles.checkoutButtonText}>Check out</Text>
      </Pressable>
      </View>
    </View>
  )

};


const cartStyles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
    paddingHorizontal: 16,
  },
  totalPriceLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPriceAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: 'brown',
    paddingVertical: 16,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 16,
    width: '80%', // Added width style
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});


export default Cart;

