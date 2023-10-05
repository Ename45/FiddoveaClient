import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const Logout = () => {
  const handleLogout = () => {
    // Make an HTTP request to your logout endpoint
    axios.post('http://your-api-url/logout')
      .then((response) => {
        // Handle success, e.g., navigate to the login screen
        console.log('Logout successful');
        // You can navigate to the login screen or perform other actions here
      })
      .catch((error) => {
        // Handle error, e.g., display an error message
        console.error('Logout error:', error);
        // Handle the error as needed, e.g., show an error message
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logout</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Logout;
