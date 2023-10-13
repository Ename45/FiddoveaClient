import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import homeProductHeadings from '../../../../styles/components/homepage/homeProductHeadings/homeProductHeadings.js'
import { Ionicons } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../../../constants/theme'
import { useNavigation } from '@react-navigation/native'
import { Pressable } from 'react-native'
import { Context } from '../../../../context/context.js'

const HomeProductHeadings = () => {

  const navigation = useNavigation();
  const { refreshProducts } = useContext(Context)
  const [loading, setLoading] = useState(false);

const navigateToAllProducts = async () => {
    if (loading) {
      return;
    }
    setLoading(true);
    
    try {
      await refreshProducts();
      navigation.navigate("NewRivals")
      console.log("Products refreshed");
    } catch (error) {
      console.error("Error refreshing products:", error);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <View style={homeProductHeadings.container}>
      <View style={homeProductHeadings.header}>
        <Pressable            
            // onPress={navigateToAllProducts}
        >
          <View  style={{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
          <Text style={homeProductHeadings.headerTitle}>
          Explore By Categories
        </Text >
        <Ionicons
            name='triangle'
            size={(3 / 100) * SIZES.width}
            color={COLORS.black}
            style={{ transform: [{ rotate: '180deg' }], marginTop: (3.7 / 100) * SIZES.height }}
            />
        </View>
        </Pressable>
        <View>
          <TouchableOpacity style={{alignItems: "center", justifyContent: "center", gap: 5}} 
            onPress={navigateToAllProducts}>
            {/* disabled={loading} */}
            <Ionicons
            name='ios-grid'
            size={(7 / 100) * SIZES.width}
            color={COLORS.black}
            />
            <Text style={{fontSize: (1.8 / 100) * SIZES.height, marginTop: -5, fontFamily: "poppinsMedium500",}}>View Products</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default HomeProductHeadings