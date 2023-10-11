import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import homeProductHeadings from '../../../../styles/components/homepage/homeProductHeadings/homeProductHeadings.js'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../../../constants/theme'
import { useNavigation } from '@react-navigation/native'

const HomeProductHeadings = () => {

  const navigation = useNavigation();

  const navigateToAllProducts =() =>{
    navigation.navigate("NewRivals")
  }
  
  return (
    <View style={homeProductHeadings.container}>
      <View style={homeProductHeadings.header}>
        <View  style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
          <Text style={homeProductHeadings.headerTitle}>
          Explore By Categories
        </Text >
        <Ionicons
            name='triangle'
            size={(3 / 100) * SIZES.width}
            color={COLORS.black}            
            onPress={navigateToAllProducts}
            style={{ transform: [{ rotate: '180deg' }], marginTop: (3.7 / 100) * SIZES.height }}
            />
        </View>
        <View>
          <TouchableOpacity style={{alignItems: "center", justifyContent: "center", gap: 5}}>
            <Ionicons
            name='ios-grid'
            size={(7 / 100) * SIZES.width}
            color={COLORS.black}
            onPress={navigateToAllProducts}
            />
            <Text style={{fontSize: (1.8 / 100) * SIZES.height, marginTop: -5, fontFamily: "poppinsMedium500",}}>View Products</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default HomeProductHeadings