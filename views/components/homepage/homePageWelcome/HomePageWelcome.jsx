import { View, Text } from 'react-native'
import React from 'react'
import homePageWelcome from "../../../../styles/components/homepage/homePageWelcome/homePageWelcome.js"
import { COLORS } from '../../../../constants/theme.js'

const HomePageWelcome = () => {
  return (
    <View style={homePageWelcome.outerContainer}>
      <Text style={ homePageWelcome.welcomeText(COLORS.burlyWoodBrown)}>
        Dive into a Treasure Trove
      </Text>
      {/* <Text style={ homePageWelcome.welcomeText}>
        Of Products and Services
      </Text> */}
    </View>
  )
}

export default HomePageWelcome