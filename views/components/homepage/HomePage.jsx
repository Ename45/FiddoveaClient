import { View, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import homepage from '../../../styles/components/homepage/homepage.js'
import { MaterialCommunityIcons, MaterialIcons, Ionicons, Fontisto } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../../constants/theme.js'
import HomePageWelcome from './homePageWelcome/HomePageWelcome.jsx'
import Carousel from './carousel/Carousel.jsx'

const HomePage = ({navigation}) => {

  const [notificationCount, setNotificationCount] = useState(8)
  // const [showNotification, setShowNotification] = useState(Notification[0])


  const navigateToNotification = () => {
    navigation.navigate("Notification")
  }


  return (
    <SafeAreaView
    style={homepage.outerContainer}
    >
      <View style={homepage.topBarWrap}>
        <View style={homepage.appBar}>
          <Ionicons
          name="location-outline"
          size={(9 / 100) * SIZES.width}
          color={COLORS.darkChocolateBrown}
          />
          <Text 
          style={homepage.location}
          > Lagos, Nigeria </Text>

          <TouchableOpacity
          onPress={navigateToNotification}
          style={homepage.notificationButton}
          >
            <View 
          style={ homepage.notificationOuterContainer }
          
          >
            <View style={homepage.notificationCount}>
              <Text style={homepage.notificationNumberText}>
                {notificationCount}
              </Text>
            </View>

            <Fontisto
            name='bell'
            size={(9 / 100) * SIZES.width}
            color={COLORS.darkChocolateBrown}
            style={{ position: "relative" }}
            />
          </View>
          </TouchableOpacity>
          
        </View>
      </View>

      <ScrollView>
        <HomePageWelcome/>
        <Carousel/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage