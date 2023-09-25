import { Text, TouchableOpacity, Pressable, View } from 'react-native'
import React from 'react'
import customButton from '../../../../styles/components/reusable/button/customButton.js'

const CustomButton = ({ buttonName, onPress, style }) => {
  
  return (
    <View style={customButton.buttonContainer}>
      <Pressable style={ [customButton.button, style] } onPress={onPress}>
        <Text
        style={customButton.buttonText}
        >
          {buttonName}
        </Text>
      </Pressable>
    </View>
  )
}

export default CustomButton