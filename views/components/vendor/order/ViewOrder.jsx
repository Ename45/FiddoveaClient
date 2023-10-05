import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import axios from 'axios';

const ViewOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('https://21fd-62-173-45-70.ngrok-free.app/myorder/vendorId');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <View>
            <FlatList
                data={orders}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <View>
                        <Text>Order ID: {item.id}</Text>
                        <Text>Customer: {item.customer}</Text>
                        <Text>Total: ${item.total}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default ViewOrder;
