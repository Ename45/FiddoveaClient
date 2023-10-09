import { View, Text, ScrollView, Image } from 'react-native'
import React, { useContext } from 'react'
import { Pressable } from 'react-native'
import searchCardView from '../../../../styles/components/product/search/searchCardView'
import {  } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../../../constants/theme'
import { Context } from '../../../../context/context'

const SearchCardView = ({ productFound }) => {

  const { addToWishList } = useContext(Context);

  return (
    <ScrollView style={searchCardView.scrollContainer}>
          <Pressable onPress={()=> {}}>
        <View style={searchCardView.searchItem}>
            <View style={searchCardView.itemContent}>
            <Image
              source={{ uri: productFound.productImageUrl }}
              style={searchCardView.productImage}
            />
          </View>
            <View style={searchCardView.detailContainer}>
              <View style={searchCardView.itemDetails}>
              <View style={{flexDirection: "row", justifyContent: "space-between" }}>
              <Text style={{fontFamily: "poppinsSemiBold600",}}>{productFound.productName}</Text>
              </View>
              <Text style={searchCardView.cartItemPrice}>N{productFound.productPrice}</Text>
            </View>
            <View style={searchCardView.buttonsContainer}>
          <Pressable
            style={searchCardView.addBtn}
            onPress={() => addToWishList(productFound.productId)}
          >
            <Ionicons
              name="heart"
              size={(7 / 100) * SIZES.width}
              color={COLORS.metallicGold}
              style={{ marginTop: 1, marginBottom: -3 }}
            />
          </Pressable>
        </View>
            </View>
        </View>
          </Pressable>
    </ScrollView>
  )
}

export default SearchCardView