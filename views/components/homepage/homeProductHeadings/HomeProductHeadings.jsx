import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import homeProductHeadings from '../../../../styles/components/homepage/homeProductHeadings/homeProductHeadings.js'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../../../constants/theme'

const HomeProductHeadings = () => {
  return (
    <View style={homeProductHeadings.container}>
      <View style={homeProductHeadings.header}>
        <Text style={homeProductHeadings.headerTitle}>
          Categories
        </Text>
        <View>
          <TouchableOpacity>
            <Ionicons
            name='ios-grid'
            size={(7 / 100) * SIZES.width}
            color={COLORS.darkChocolateBrown}
            />
            {/* <Text style={{fontSize: 12, marginTop: -5}}>All Products</Text> */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default HomeProductHeadings