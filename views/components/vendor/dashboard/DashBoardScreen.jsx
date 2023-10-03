import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

const DashboardScreen = () => {
    const [productName, setProductName] = useState('');
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        // Fetch products from the API endpoint
        try {
            const response = await axios.get('https://api.example.com/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        // Fetch products when the component mounts
        fetchProducts();
    }, []);

    const addProduct = async () => {
        // Add product to the API endpoint
        try {
            await axios.post('https://api.example.com/products', { name: productName });
            // Refetch products after adding a new one
            fetchProducts();
            // Clear the product name input field
            setProductName('');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Product Name"
                value={productName}
                onChangeText={(text) => setProductName(text)}
                style={styles.input}
            />
            <TouchableOpacity onPress={addProduct} style={styles.addButton}>
                <Text style={styles.buttonText}>Add Product</Text>
            </TouchableOpacity>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.productItem}>
                        <Text>{item.name}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5DEB3', // Light brown background color
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
    },
    addButton: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: 'green',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
    },
    productItem: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
    },
});

export default DashboardScreen;
