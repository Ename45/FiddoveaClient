import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import allProductsCardView from '../../../../styles/components/product/allProductsCardView/allProductsCardView'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../../../constants/theme'

const AllProductsCardView = ({item}) => {
  return (
    <TouchableOpacity onPress={() => {}}>
        <View style={allProductsCardView.container}>
          <View style={allProductsCardView.imageContainer}>
            <Image
            source={{ uri: item.productImage }}
            style={allProductsCardView.image}
          />
          </View>  
          <View style={allProductsCardView.details}>            
          <Text style={allProductsCardView.nameText} numberOfLines={1}>{item.productName}</Text>
          <Text style={allProductsCardView.nameText} numberOfLines={1}>{item.price}</Text>
          </View>
          <TouchableOpacity style={ allProductsCardView.addBtn}>
            <Ionicons
            name='heart'
            size={35}
            color={COLORS.burlyWoodBrown}
            />
          </TouchableOpacity>       
        </View>
      </TouchableOpacity>
  )
}

export default AllProductsCardView