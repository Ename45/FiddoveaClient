import React, { useContext } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Context } from '../../../context/context';
import checkoutConfirmation from '../../../styles/components/cart/checkoutConfirmation';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../../constants/theme';
import { useRoute } from "@react-navigation/native";

const CheckoutConfirmation = () => {

    // const { cartItems } = useContext(Context)
    const navigation = useNavigation()
    const route = useRoute();

    const { cartItems, grandTotal } = route.params;

    const { productQuantity,  totalItemPrice,} = useContext(Context)

    return (
        <View style={checkoutConfirmation.container}>
            <View style={checkoutConfirmation.innerContainer}>
                <View style={checkoutConfirmation.headerBackIcon}>
                    <Pressable onPress={() => {navigation.goBack()}}>
                        <MaterialIcons
                        name="keyboard-arrow-left"
                        size={24}
                        color={COLORS.white}
                        />
                    </Pressable>
            </View>
                <Text style={checkoutConfirmation.header}>Order Confirmation</Text>
            </View>

            <View style={checkoutConfirmation.section}>
                <Text style={checkoutConfirmation.sectionTitle}>Delivery Information</Text>
                <Text>Delivery Location: </Text>
                <Text>Phone Number: </Text>
            </View>

            <View style={checkoutConfirmation.section}>
                <Text style={checkoutConfirmation.sectionTitle}>Payment Method</Text>
                <Text>paymentMethod function</Text>
            </View>

            <View style={checkoutConfirmation.section}>
                <Text style={checkoutConfirmation.sectionTitle}>Ordered Products</Text>
                {cartItems.map((product) => (
                    <View key={product.productId} style={checkoutConfirmation.productItem}>
                        <Text>x{productQuantity}      {product.productName}</Text>
                        <Text>N{totalItemPrice}</Text>
                    </View>
                ))}
            </View>

            <View style={checkoutConfirmation.totalPrice}>
                <Text>Total Price: N{grandTotal}</Text>
            </View>
        </View>
    );
};

export default CheckoutConfirmation;
