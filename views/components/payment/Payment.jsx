import React, { useState } from 'react';
import { View, Text, SafeAreaView, ImageBackground, Pressable, Image } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import payment from "../../../styles/components/payment/payment"

const Payment = () => {
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
    <ImageBackground source={require('../../../assets/images/jpg/welcomeScreen.jpg')} 
    style={payment.cardImage}>
        
      <SafeAreaView>
      <Text style={payment.textTiltle}>Payment Details</Text> 
        <View style={payment.cardDetailLabel}>
        
          <Text style={payment.cardDetailLabel}>All Cards</Text>
      
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
    </ImageBackground>
  );
};

export default Payment;
