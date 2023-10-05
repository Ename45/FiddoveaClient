import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import paymentPage from '../../../styles/components/payment/paymentPage';
import { useNavigation } from '@react-navigation/native';

const PaymentPage = () => {
  const [selectedOption, setSelectedOption] = useState('');

  
    const navigation = useNavigation()
    const navigateTo = (pageName) => {
        navigation.navigate(pageName)


  };

  return (
    <View style={paymentPage.container}>
      <Text style={paymentPage.title}>Select Payment Method</Text>

      <TouchableOpacity
        style={[
          paymentPage.optionButton,
          selectedOption === 'Pay Now' && paymentPage.selectedOption,
        ]}
        onPress={() => navigateTo('Payment')}
      >
        <Text style={paymentPage.optionText}>Pay Now</Text>
      </TouchableOpacity>

    </View>
  );
};


export default PaymentPage;
