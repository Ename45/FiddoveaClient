import React, { useState } from 'react';
import { View, Text, SafeAreaView, ImageBackground, Pressable, Image } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import payment from "../../../styles/components/payment/payment"
import { COLORS } from '../../../constants/theme';
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';

const Payment = () => {

  const navigation = useNavigation();

  const { confirmPayment } = useStripe()

  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
  });

  const handlePayment = async () => {
    const { token, error } = await confirmPayment({
      type: 'Card',
      billingDetails: {
        name: '',
      },
      card: {
        number: cardDetails.cardNumber,
        expMonth: cardDetails.expMonth,
        expYear: cardDetails.expYear,
        cvv: cardDetails.cvc,
      },
    });

    if (error) {
      console.error('Payment failed:', error);
    } else {
      console.log('Payment successful:', token);
    }
  };

  return (
        
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.pageBackgroundBrown}}>
      <View style={payment.headerContainer}>
            <View style={payment.headerBackIcon}>
                <Pressable
                onPress={() => {
                    navigation.goBack();
                }}
                >
                <MaterialIcons
                    name="keyboard-arrow-left"
                    size={24}
                    color={COLORS.black}
                />
                </Pressable>
            </View>
            <View>
                <Text style={payment.header}>Payment Details</Text>
            </View>
            </View>
        <View style={payment.cardDetailLabel}>
        
          <Text style={payment.cardDetailLabels}>All Cards</Text>
      
          <CardField
            postalCodeEnabled={false}
            style={payment.cardField}
            onCardChange={(card) => {
              setCardDetails({
                cardNumber: card.number,
                expMonth: card.expMonth,
                expYear: card.expYear,
                cvc: card.cvv,
              });
           }}
          />
      
      </View>
          <Pressable style={payment.button} 
            onPress={handlePayment}>
            <Text style={payment.buttonText}>Pay Now</Text>
          </Pressable>
       
      </SafeAreaView>
  );
};

export default Payment;
