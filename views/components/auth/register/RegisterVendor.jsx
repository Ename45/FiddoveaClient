import React, { useState } from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import { COLORS } from '../../../../constants/theme.js';
import InputField from '../../reusable/inputField/InputField.jsx';
import CustomButton from '../../reusable/button/CustomButton.jsx';
import registerVendor from '../../../../styles/components/auth/register/registerVendor.js';

const RegisterVendor = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyRcNumber, setCompanyRcNumber] = useState('');
  const [companyPhoneNumber, setCompanyPhoneNumber] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [productType, setProductType] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [street, setStreet] = useState('');
  const [lga, setLga] = useState('');
  const [state, setState] = useState('');

  const navigation = useNavigation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = 'https://e895-102-89-46-66.ngrok-free.app/api/v1/vendor';

    let vendorData = {
      email,
      password,
      companyRcNumber,
      companyPhoneNumber,
      businessType,
      productType,
      houseNumber,
      street,
      lga,
      state,
    };

    if (
      email !== '' &&
      password !== '' &&
      companyRcNumber !== '' &&
      companyPhoneNumber !== '' &&
      businessType !== '' &&
      productType !== '' &&
      houseNumber !== '' &&
      street !== '' &&
      lga !== '' &&
      state !== ''
    ) {
      try {
        await axios
          .post(URL, vendorData)
          .then((response) => {
            navigation.navigate('LoginVendor');
            return response.data;
          });
      } catch (error) {
        return error;
      }
    }
  };

  return (
    <ImageBackground
      source={require('../../../../assets/images/jpg/backgroundColour3.jpeg')}
      style={registerVendor.backgroundColor}
    >
   <View style={registerVendor.logoContainer}></View>
    <Image
        source={require('../../../../assets/images/png/secondLogo.png')} 
        style={registerVendor.logo}
      />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}></Text>
        <View style={styles.inputContainer}>
          <InputField
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
          <InputField
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <InputField
            placeholder="Company Rc Number"
            onChangeText={(text) => setCompanyRcNumber(text)}
            value={companyRcNumber}
          />
          <InputField
            placeholder="Company PhoneNumber"
            onChangeText={(text) => setCompanyPhoneNumber(text)}
            value={companyPhoneNumber}
          />
          <Picker
            onValueChange={(text) => setBusinessType(text)}
            selectedValue={businessType}
          >
           <Picker.Item label="select business type" value=""/>
          <Picker.Item label="restaurant" value="RESTAURANT"/>
          <Picker.Item label="grocery" value="GROCERY"/>
          <Picker.Item label="others" value="OTHERS"/>

          </Picker>
          <Picker
            onValueChange={(itemValue) => setProductType(itemValue)}
            selectedValue={productType}
          >
             <Picker.Item label="select product type" value=""/>
          <Picker.Item label="Grill" value="GRILL"/>
          <Picker.Item label="cake" value="CAKE"/>
          <Picker.Item label="chocolate" value="CHOCOLATE"/>
          <Picker.Item label="candy" value="CANDY"/>
          <Picker.Item label="dessert" value="DESSERT"/>
          </Picker>
          <InputField
            placeholder="House Number"
            onChangeText={(text) => setHouseNumber(text)}
            value={houseNumber}
          />
          <InputField
            placeholder="Street"
            onChangeText={(text) => setStreet(text)}
            value={street}
          />
          <InputField
            placeholder="Local Government Area"
            onChangeText={(text) => setLga(text)}
            value={lga}
          />
          <InputField
            placeholder="State"
            onChangeText={(text) => setState(text)}
            value={state}
          />
        </View>
        <View>
          <CustomButton buttonName="Register" onPress={handleSubmit} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    // Add your title styles here
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: COLORS.pageBackgroundBrown, 
    padding: 20, 
    borderRadius: 15, 
  },
});

export default RegisterVendor;
