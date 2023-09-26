import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import homePageWelcome from "../../../../styles/components/homepage/homePageWelcome/homePageWelcome.js"
import { COLORS, SIZES } from '../../../../constants/theme.js'
import { Feather, Ionicons } from '@expo/vector-icons'
import InputField from '../../reusable/inputField/InputField.jsx'

const HomePageWelcome = () => {
  const [searchItem, setSearchItem] = useState("");



  return (
    <View >
      <View style={homePageWelcome.outerContainer}>
      <Text style={ homePageWelcome.welcomeText(COLORS.black, (1/100*(SIZES.height)))}>
        Dive into a Treasure Trove
      </Text>
      <Text style={ homePageWelcome.welcomeText(COLORS.primary, 0)}>
        Of Products and Services
      </Text>
    </View>

    <View style={homePageWelcome.searchOuterContainer}>
      <TouchableOpacity>
        <Feather
        name='search'
        size={24}
        color={COLORS.darkChocolateBrown}
        style={homePageWelcome.searchIcon}
        />
      </TouchableOpacity>
      <View
      style={homePageWelcome.searchWrapper}
      >
        <InputField
        style={homePageWelcome.searchInput}
        value={searchItem}
        onChangeText={(text) => setSearchItem(text)}
        onPressIn={() => {}}
        placeholder='what are you looking for'
        />
      </View>
    </View>

    <View>
      <TouchableOpacity style={homePageWelcome.searchBtn}>
        <Ionicons
        name='camera-outline'
        size={SIZES.xLarge}
        color={COLORS.azureWhite}
        />
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default HomePageWelcome