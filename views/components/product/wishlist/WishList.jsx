import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const addToWishList = (product) => {
    setWishlist([...wishlist, product]);
  };

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item._productId !== productId);
    setWishlist(updatedWishlist);
  };

  // Add a product to the cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <View>
      <Text>Wishlist</Text>
      <FlatList
        data={wishlist}
        keyExtractor={(item) => item._productId}
        renderItem={({ item }) => (
          <View>
            <Text>{item.productName}</Text>
            <TouchableOpacity onPress={() => removeFromWishlist(item._productId)}>
              <Ionicons name='heart-dislike' size={24} color='red' />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => addToCart(item)}>
              <Ionicons name='cart-plus' size={24} color='green' />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default WishList;
