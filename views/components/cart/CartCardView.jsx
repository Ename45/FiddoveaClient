import { View, Text, SafeAreaView, ScrollView, Image, Pressable } from 'react-native'
import React, { useContext, useEffect, useState } from 'react';
import cartCardView from '../../../styles/components/cart/cartCardView';
import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons/build/Icons';
import { COLORS, SIZES } from '../../../constants/theme';
import { Context } from '../../../context/context';

const CartCardView = ({product, handleRemoveFromCart, currentProductId, onUpdateQuantity, }) => {

  // const [productQuantity, setProductQuantity] = useState(1)
  // const [totalItemPrice, setTotalItemPrice] = useState(product.productPrice)
  
  const { productQuantity, setProductQuantity, totalItemPrice, setTotalItemPrice } = useContext(Context);

   useEffect(() => {
    setTotalItemPrice(product.productPrice * productQuantity);
  }, [productQuantity, product.productPrice]);

  const increment = () => {
    // setProductQuantity(productQuantity + 1);
    // onUpdateQuantity(currentProductId, productQuantity + 1);
    const newQuantity = productQuantity + 1;
    setProductQuantity(newQuantity);
    onUpdateQuantity(currentProductId, newQuantity);
  };

  const decrement = () => {
    if (productQuantity > 1) {
      // setProductQuantity(productQuantity - 1)      
      // onUpdateQuantity(currentProductId, productQuantity - 1);
      const newQuantity = productQuantity - 1;
      setProductQuantity(newQuantity);
      onUpdateQuantity(currentProductId, newQuantity);
    }
  };

  return (
    <ScrollView>
        <View style={cartCardView.cartItem} >
          <View style={cartCardView.itemContent}>
            <Image
              source={{ uri: product.productImageUrl }}
              style={cartCardView.cartItemImage}
            />
            <View style={cartCardView.itemDetails}>
              <View style={{flexDirection: "row", justifyContent: "space-between"}}>
              <Text>{product.productName}</Text>
                  <Pressable          
            onPress={()=> handleRemoveFromCart(currentProductId)}   
          >
            <MaterialIcons
              name="delete"
              size={(7 / 100) * SIZES.width}
              color={COLORS.black}
              style={{ marginTop: 1, marginBottom: -3 }}
            />
          </Pressable>
              </View>
              <Text style={cartCardView.cartItemPrice}>N{product.productPrice}</Text>
              <View style={cartCardView.quantityContainer}>
                <Pressable
                onPress={() => {
                  decrement();
                }}
                 >
                    <SimpleLineIcons name="minus" size={18} />
                </Pressable>
                <Text style={cartCardView.quantityText}>{productQuantity}</Text>
                <Pressable 
                onPress={() => {
                  increment();
                }} >
                    <SimpleLineIcons name="plus" size={18} />
                </Pressable>
              </View>
              <Text style={cartCardView.cartItemPrice}>total: N{totalItemPrice}</Text>
            </View>
          </View>
        </View>
    </ScrollView>
  )
}

export default CartCardView


