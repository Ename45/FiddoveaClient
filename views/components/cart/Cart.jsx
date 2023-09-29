import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, Pressable, ScrollView, TouchableOpacity } from 'react-native';
import { COLORS } from '../../../constants/theme';
// import { useNavigation } from '@react-navigation/native';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [quantity, setQuantity] = useState([]);

  const sampleItems = [
    {
      id: 1,
      name: 'Chocolate Cake',
      price: 1500,
      image: 'https://i.ibb.co/W29btXp/profile.jpg', 
      quantity: 1, 
    },
    {
      id: 2,
      name: 'Strawberry Cupcakes',
      price: 1800,
      image: 'https://i.ibb.co/W29btXp/profile.jpg', 
      quantity: 1, 
    },
    {
      id: 3,
      name: 'Vanilla Donuts',
      price: 2000,
      image: 'https://i.ibb.co/W29btXp/profile.jpg',
      quantity: 1, 
    },
    {
      id: 4,
      name: 'Chocolate Brownies',
      price: 2500,
      image: 'https://i.ibb.co/W29btXp/profile.jpg',
      quantity: 1, 
    },
    // Add more sample items here
  ];

const increaseQuantity = (itemId) => {
  const updatedCartData = [...cartData];
  const index = updatedCartData.findIndex(item => item.id === itemId);
  if (index !== -1) {
    if (updatedCartData[index].quantity < 2) {
      updatedCartData[index].quantity = 2; // Increase to 2
    } else {
      updatedCartData[index].quantity += 1;
    }
    setCartData(updatedCartData);
  }
};

const decreaseQuantity = (itemId) => {
  const updatedCartData = [...cartData];
  const index = updatedCartData.findIndex(item => item.id === itemId);
  if (index !== -1 && updatedCartData[index].quantity > 1) {
    updatedCartData[index].quantity -= 1;
    setCartData(updatedCartData);
  }
};


  const calculateTotalPrice = () => {
    return cartData.reduce((total, item) => total + item.price * item.quantity, 0);
  };

// ...

// const handleCheckout = () => {
//   // You can pass the necessary checkout details as props here
//   const checkoutDetails = {
//     deliveryLocation: 'Your Delivery Location',
//     phoneNumber: 'Your Phone Number',
//     paymentMethod: 'Your Payment Method',
//     products: cartData, // Assuming cartData contains the list of products
//     totalPrice: calculateTotalPrice(), // You can calculate the total price here
//   };

//   useNavigation.navigate('CheckoutConfirmation', checkoutDetails);
// };

// ...
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Cart</Text>
      <ScrollView>
        {sampleItems.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <View style={styles.itemContent}>
              <Image
                source={{ uri: item.image }}
                style={styles.cartItemImage}
              />
              <View style={styles.itemDetails}>
                <Text>{item.name}</Text>
                <Text style={styles.cartItemPrice}>Price: ${item.price}</Text>
                <View style={styles.quantityContainer}>
                  <Pressable onPress={() => decreaseQuantity(item.id)}>
                    {({ pressed }) => (
                      <Text
                        style={[
                          styles.quantityButton,
                          { backgroundColor: pressed ? 'gray' : 'transparent' },
                        ]}
                      >
                        -
                      </Text>
                    )}
                  </Pressable>
                  <Text style={styles.quantityText}>{item.quantity}</Text>
                  <Pressable onPress={() => increaseQuantity(item.id)}>
                    {({ pressed }) => (
                      <Text
                        style={[
                          styles.quantityButton,
                          { backgroundColor: pressed ? 'gray' : 'transparent' },
                        ]}
                      >
                        +
                      </Text>
                    )}
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.totalPriceContainer}>
        <Text style={styles.totalPriceLabel}>Total Price:</Text>
        <Text style={styles.totalPriceAmount}>${calculateTotalPrice()}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [
          styles.checkoutButton,
          { backgroundColor: pressed ? 'darkred' : 'brown' },
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.checkoutButtonText}>
            Check out
          </Text>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.pageBackgroundBrown,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  cartItem: {
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  cartItemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  itemDetails: {
    flex: 1,
  },
  cartItemPrice: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  quantityButton: {
    fontSize: 24,
    paddingHorizontal: 12,
  },
  quantityText: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  totalPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  totalPriceLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPriceAmount: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: 'brown',
    paddingVertical: 16,
    borderRadius: 4,
    alignSelf: 'center',
    marginTop: 16,
    width: '80%', // Added width style
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Cart;





// import React, { useState, useEffect } from 'react';
// import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
// import axios from 'axios';
// import { COLORS } from '../../../constants/theme';
//
// const Cart = () => {
//   const [cartData, setCartData] = useState([]);
//
//   useEffect(() => {
//     // Fetch cart data from the backend endpoint
//     axios.get('http://your-backend-endpoint-url')
//         .then((response) => {
//           const responseData = response.data;
//           if (Array.isArray(responseData)) {
//             // Attach the fetched product names to the data
//             const updatedCartData = responseData.map((item) => ({
//               ...item,
//               name: item.productName, // Assuming the product name field is "productName"
//               quantity: 1, // Initial quantity
//             }));
//             setCartData(updatedCartData);
//           } else {
//             console.error('Cart data is not an array:', responseData);
//             // Handle the data format error as needed
//           }
//         })
//         .catch((error) => {
//           console.error('Cart data fetch error:', error);
//           // Handle the error as needed, e.g., show an error message
//         });
//   }, []);
//
//   // Function to increase the quantity of an item
//   const increaseQuantity = (itemId) => {
//     const updatedCartData = [...cartData];
//     const index = updatedCartData.findIndex(item => item.id === itemId);
//     if (index !== -1) {
//       updatedCartData[index].quantity += 1;
//       setCartData(updatedCartData);
//     }
//   };
//
//   // Function to decrease the quantity of an item
//   const decreaseQuantity = (itemId) => {
//     const updatedCartData = [...cartData];
//     const index = updatedCartData.findIndex(item => item.id === itemId);
//     if (index !== -1 && updatedCartData[index].quantity > 1) {
//       updatedCartData[index].quantity -= 1;
//       setCartData(updatedCartData);
//     }
//   };
//
//   // Function to calculate the total price
//   const calculateTotalPrice = () => {
//     return cartData.reduce((total, item) => total + item.price * item.quantity, 0);
//   };
//
//   return (
//       <SafeAreaView style={styles.container}>
//         <Text style={styles.header}>Cart</Text>
//         <ScrollView>
//           {cartData.map((item) => (
//               <View key={item.id} style={styles.cartItem}>
//                 <View style={styles.itemContent}>
//                   {/* Display the dummy image */}
//                   <Image
//                       source={{ uri: 'https://i.ibb.co/W29btXp/profile.jpg' }}
//                       style={styles.cartItemImage}
//                   />
//                   <View style={styles.itemDetails}>
//                     <Text>{item.name}</Text>
//                     <Text style={styles.cartItemPrice}>Price: ${item.price}</Text>
//                     <View style={styles.quantityContainer}>
//                       <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
//                         <Text style={styles.quantityButton}>-</Text>
//                       </TouchableOpacity>
//                       <Text style={styles.quantityText}>{item.quantity}</Text>
//                       <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
//                         <Text style={styles.quantityButton}>+</Text>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                 </View>
//               </View>
//           ))}
//         </ScrollView>
//         <View style={styles.totalPriceContainer}>
//           <Text style={styles.totalPriceLabel}>Total Price:</Text>
//           <Text style={styles.totalPriceAmount}>${calculateTotalPrice()}</Text>
//         </View>
//         <TouchableOpacity style={styles.checkoutButton}>
//           <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
//         </TouchableOpacity>
//       </SafeAreaView>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: COLORS.pageBackgroundBrown,
//     padding: 16,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   cartItem: {
//     backgroundColor: 'white',
//     marginBottom: 16,
//     borderRadius: 8,
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 5 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   itemContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//   },
//   cartItemImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 8,
//     marginRight: 16,
//   },
//   itemDetails: {
//     flex: 1,
//   },
//   cartItemPrice: {
//     fontWeight: 'bold',
//     marginTop: 8,
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 8,
//   },
//   quantityButton: {
//     fontSize: 24,
//     paddingHorizontal: 12,
//   },
//   quantityText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     paddingHorizontal: 12,
//   },
//   totalPriceContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   totalPriceLabel: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   totalPriceAmount: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   checkoutButton: {
//     backgroundColor: 'brown',
//     padding: 16,
//     borderRadius: 4,
//     alignSelf: 'center',
//   },
//   checkoutButtonText: {
//     color: 'white',
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });
//
// export default Cart;

