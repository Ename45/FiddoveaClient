import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cart from "./Cart";
import { Context } from '../../../context/context';

const CheckoutConfirmation = ({ deliveryLocation, phoneNumber, paymentMethod, totalPrice,  }) => {

    const { cartItems } = useContext(Context)

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Order Confirmation</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Delivery Information</Text>
                <Text>Delivery Location: </Text>
                <Text>Phone Number: </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Payment Method</Text>
                <Text>paymentMethod function</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Ordered Products</Text>
                {cartItems.map((product) => (
                    <View key={product.productId} style={styles.productItem}>
                        <Text>{product.productName} x{product.quantity}</Text>
                        <Text>${product.productPrice * product.quantity}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.totalPrice}>
                <Text>Total Price: N{totalPrice}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
    },
    section: {
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    productItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    totalPrice: {
        marginTop: 16,
        alignItems: 'flex-end',
    },
});

export default CheckoutConfirmation;
