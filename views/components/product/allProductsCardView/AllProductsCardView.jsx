import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import allProductsCardView from '../../../../styles/components/product/allProductsCardView/allProductsCardView'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const AllProductsCardView = ({item, addToWishList}) => {
  const navigation = useNavigation()

  // const navigateToProductDetails =() => {
  //   navigation.navigate('ProductDetails', {item})
  // }
  

  return (
      <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', {item})}>
        <View style={allProductsCardView.container}>
          <View style={allProductsCardView.imageContainer}>
            <Image
            source={{ uri: item.productImage }}
            style={allProductsCardView.image}
          />
          </View>  
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <View style={allProductsCardView.product}>            
          <Text style={allProductsCardView.nameText} numberOfLines={1}>{item.productName}</Text>
          </View>
          <View style={allProductsCardView.details}>            
          <Text style={allProductsCardView.price} numberOfLines={1}>N{item.productPrice}</Text>
          </View>
          </View>
          <View  style={allProductsCardView.buttonsContainer}>
            <TouchableOpacity 
            style={ allProductsCardView.addBtn}
            onPress={() => addToWishList(item)}
            >
            <Ionicons
            name='heart-outline'
            size={(9 / 100) * SIZES.width}
            color={COLORS.black}
            style={{marginTop: 1, marginBottom: -3}}
            />
          </TouchableOpacity>       
          <TouchableOpacity style={ allProductsCardView.addBtn2}>
            <Ionicons
            name='cart-outline'
            size={(9 / 100) * SIZES.width}
            color={COLORS.goldenrod}
            />
          </TouchableOpacity>   
            </View>    
        </View>
      </TouchableOpacity>
  )
}

export default AllProductsCardView