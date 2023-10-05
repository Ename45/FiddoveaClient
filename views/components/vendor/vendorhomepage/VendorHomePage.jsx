import { View, SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons, MaterialIcons, Ionicons, Fontisto } from '@expo/vector-icons'

import homepage from "../../../../styles/components/homepage/homepage";
import {COLORS, SIZES} from "../../../../constants/theme";
// import HomePageWelcome from './homePageWelcome/HomePageWelcome.jsx'
// import CarouselSlides from './carousel/CarouselSlides.jsx'
// import HomeProductHeadings from './homeProductHeadings/HomeProductHeadings.jsx'
// import ProductsRow  from '../product/productsRow/ProductsRow.jsx'

const VendorHomePage = ({navigation}) => {

    const [notificationCount, setNotificationCount] = useState()
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
                        size={(7 / 100) * SIZES.width}
                        color={COLORS.black}
                    />
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
                                size={(7 / 100) * SIZES.width}
                                color={COLORS.black}
                                style={{ position: "relative" }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default VendorHomePage