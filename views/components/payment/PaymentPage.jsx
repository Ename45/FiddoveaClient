import React from 'react';
import  { Paystack }  from 'react-native-paystack-webview';
import { View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

function PaymentPage() {

  const navigation = useNavigation();
  const route = useRoute();
  const { email, amount } = route.params;
  // console.log("payment page===>", email)
  // console.log("payment page===>", amount)

  return (
    <View style={{ flex: 1 }}>
      <Paystack  
        buttonText="Pay Now"
        showPayButton={true}
        paystackKey="pk_test_6735ae16a356e2063998cf919ed01969249e1383"
        paystackSecretKey="sk_test_bf38960616f3bade6091d7a08515ba61547e5223"
        amount={amount}
        billingEmail={email}
        activityIndicatorColor="green"
        onCancel={(e) => {
          alert(e)
        }}
        onSuccess={(res) => {
          alert(res.data.event)
          navigation.navigate("BottomTabNav")
        }}
        autoStart={true}
      />
    </View>
  );
}



export default PaymentPage;