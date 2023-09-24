import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS } from '../../../../constants/theme'
import { MaterialIcons } from '@expo/vector-icons'
import CustomButton2 from '../../reusable/button/BackArrow'
import BottomTabNav from '../../navigations/BottomTabNav'

const MySettings = ({ navigation }) => {
  return (
    <SafeAreaView style= {{
      flex:1,
      backgroundColor: COLORS.white
    }} >
      <View style= {{
        marginHorizontal: 12,
        flexDirection: "row",
        justifyContent: "center"
      }}>
        <CustomButton2
        onPress={()=> navigation.goBack()}
        style={{
          position: "absolute",
          left: 0
        }}
        miName="keyboard-arrow-left"        
        miSize={24}        
        miColor={COLORS.black} 
        />

        <Text >
          Settings
        </Text>

      </View>
    </SafeAreaView>
  )
}

export default MySettings