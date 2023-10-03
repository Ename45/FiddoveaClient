import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import orderPage from "../../../styles/components/"


const OrderPage = () => {
  const [orders, setOrders] = useState([
    { id: '1', product: 'Product A', quantity: 2 },
    { id: '2', product: 'Product B', quantity: 1 },
    { id: '3', product: 'Product C', quantity: 3 },
  ]);

  return (
    <View style={orderPage.container}>
      <Text style={orderPage.header}>My Orders</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={orderPage.orderItem}>
            <Text>{item.product}</Text>
            <Text>Quantity: {item.quantity}</Text>
          </View>
        )}
      />
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
  },
  orderItem: {
    marginBottom: 8,
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
});

export default OrderPage;
