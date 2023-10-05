import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Cart from "./Cart";

const CheckoutConfirmation = ({ deliveryLocation, phoneNumber, paymentMethod, products, totalPrice, cartItems }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Order Confirmation</Text>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Delivery Information</Text>
                <Text>Delivery Location: {deliveryLocation}</Text>
                <Text>Phone Number: {phoneNumber}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Payment Method</Text>
                <Text>{paymentMethod}</Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Ordered Products</Text>
                {products.map((product) => (
                    <View key={product.id} style={styles.productItem}>
                        <Text>{product.name} x{product.quantity}</Text>
                        <Text>${product.price * product.quantity}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.totalPrice}>
                <Text>Total Price: ${totalPrice}</Text>
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
