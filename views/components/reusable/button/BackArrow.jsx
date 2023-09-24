import { Text, TouchableOpacity, Pressable, View } from 'react-native'
import React from 'react'
import customButton from '../../../../styles/components/reusable/button/customButton.js'
import { MaterialIcons } from '@expo/vector-icons'

const BackArrow = ({ onPress, style, miName, miSize, miColor }) => {
  return (
    <View style={customButton.buttonContainer}>
      <Pressable style={ [customButton.button, style] } onPress={onPress}>
        <MaterialIcons
        miName={miName}        
        miSize={miSize}        
        miColor={miColor}        
        />
      </Pressable>
    </View>
  )
}

export default BackArrow