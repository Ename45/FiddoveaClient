import { View, TextInput } from 'react-native'
import React from 'react'
import inputField from '../../../../styles/components/reusable/inputField/inputField'

const InputField = ({ placeholder, value, onChangeText, secureTextEntry, style }) => {
  
  return (
    <View style={inputField.inputContainer}>
      <TextInput
        style={[inputField.input, style]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

export default InputField