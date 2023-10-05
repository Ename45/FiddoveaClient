import { View, Text, SafeAreaView, ScrollView, Image, Pressable } from 'react-native'
import React from 'react';
import cartCardView from '../../../styles/components/cart/cartCardView';
import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons/build/Icons';
import { COLORS, SIZES } from '../../../constants/theme';

const CartCardView = ({product, handleRemoveFromCart, currentProductId }) => {
  return (
    <ScrollView>
        <View style={cartCardView.cartItem}>
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
              size={(5 / 100) * SIZES.width}
              color={COLORS.black}
              style={{ marginTop: 1, marginBottom: -3 }}
            />
          </Pressable>
              </View>
              <Text style={cartCardView.cartItemPrice}>Price: ${product.productPrice}</Text>
              <View style={cartCardView.quantityContainer}>
                <Pressable onPress={() => decreaseQuantity(product.productId)}>
                  {({ pressed }) => (
                    <Text
                      style={[
                        cartCardView.quantityButton,
                        { backgroundColor: pressed ? 'gray' : 'transparent' },
                      ]}
                    >
                      -
                    </Text>
                  )}
                </Pressable>
                <Text style={cartCardView.quantityText}>product qty</Text>
                <Pressable onPress={() => increaseQuantity(product.productId)}>
                  {({ pressed }) => (
                    <Text
                      style={[
                        cartCardView.quantityButton,
                        { backgroundColor: pressed ? 'gray' : 'transparent' },
                      ]}
                    >
                      +
                    </Text>
                  )}
                </Pressable>
              </View>
            </View>
          </View>
        </View>
    </ScrollView>
  )
}

export default CartCardView