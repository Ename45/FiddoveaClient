import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import productCardView from '../../../../styles/components/product/productCardView/productCardView'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../../../constants/theme'

const ProductCardView = ( {item, navigation} ) => {

  const [isFocused, setIsFocused] = useState(false);

  const navigateToScreen = (screenName) => {
    // navigation.navigate(screenName);
    console.log(`${screenName} is not ready`);
  };

  return (
    <TouchableOpacity 
    onPress={() => navigateToScreen(item.screen)}
    onPressIn={() => setIsFocused(true)}
    >
        <View style={productCardView.container}>
          <View style={[
            productCardView.imageContainer, 
            isFocused && { backgroundColor: COLORS.pureGold },
          ]}
          >
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
