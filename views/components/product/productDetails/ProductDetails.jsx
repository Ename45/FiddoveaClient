import { View, Text } from 'react-native'
import React from 'react'
import productDetails from '../../../../styles/components/product/productDetails/productDetails'
import { Ionicons } from '@expo/vector-icons'

const ProductDetails = () => {
  return (
    <View style={productDetails.container}>
      <View style={productDetails.upperRow}>
        <Ionicons
        name='chevron-back-circle'
        />
      </View>
    </View>
  )
}

export default ProductDetails