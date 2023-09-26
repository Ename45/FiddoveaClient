import { View, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import homepage from '../../../styles/components/homepage/homepage.js'
import { MaterialCommunityIcons, MaterialIcons, Ionicons, Fontisto } from '@expo/vector-icons'
import { COLORS } from '../../../constants/theme.js'
import HomePageWelcome from './homePageWelcome/HomePageWelcome.jsx'

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
          size={24}
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
          style={ homepage.cartOuterContainer }
          
          >
            <View style={homepage.cartCount}>
              <Text style={homepage.cartNumberText}>
                {notificationCount}
              </Text>
            </View>

            <Fontisto
            name='bell'
            size={24}
            color={COLORS.darkChocolateBrown}
            />
          </View>
          </TouchableOpacity>
          
        </View>
      </View>

      <ScrollView>
        <HomePageWelcome
        
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomePage