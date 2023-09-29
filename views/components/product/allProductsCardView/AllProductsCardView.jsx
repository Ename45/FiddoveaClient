import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import allProductsCardView from '../../../../styles/components/product/allProductsCardView/allProductsCardView'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const AllProductsCardView = ({item }) => {
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
          <View style={allProductsCardView.details}>            
          <Text style={allProductsCardView.nameText} numberOfLines={1}>{item.productName}</Text>
          <Text style={allProductsCardView.price} numberOfLines={1}>N{item.productPrice}</Text>
          </View>
          <View  style={{alignItems: "center", paddingHorizontal: 8}}>
            <TouchableOpacity style={ allProductsCardView.addBtn}>
            <Ionicons
            name='heart'
            size={35}
            color={COLORS.white}
            />
          </TouchableOpacity>       
          <TouchableOpacity style={ allProductsCardView.addBtn2}>
            <Ionicons
            name='add-circle'
            size={35}
            color={COLORS.primary}
            />
          </TouchableOpacity>   
            </View>    
        </View>
      </TouchableOpacity>
  )
}

export default AllProductsCardView