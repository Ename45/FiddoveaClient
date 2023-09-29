import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import productCardView from '../../../../styles/components/product/productCardView/productCardView'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../../../constants/theme'

const ProductCardView = ( {item, navigation} ) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <TouchableOpacity onPress={() => navigateToScreen(item.screen)}>
        <View style={productCardView.container}>
          <View style={productCardView.imageContainer}>
            <Image
            source={{ uri: item.categoryImage }}
            style={productCardView.image}
          />
          </View>  
          <View style={productCardView.details}>            
          <Text style={productCardView.nameText} numberOfLines={1}>{item.categoryName}</Text>
          </View>     
        </View>
      </TouchableOpacity>
  )
}

export default ProductCardView

