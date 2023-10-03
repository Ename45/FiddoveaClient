import React, { useEffect } from 'react';
import { View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import VerificationPending from "../../../../styles/components/vendor/verification/VerificationPending";

const VerificationPendingScreen = ({ navigation }) => {
    useEffect(() => {
        const checkVendorVerification = async () => {
            try {
                // Fetch the endpoint to check vendor verification status
                const response = await axios.get('YOUR_VERIFICATION_ENDPOINT');

                // Assuming the response contains a property 'isVerified' indicating vendor verification status
                const isVendorVerified = response.data.isVerified;

                if (isVendorVerified) {
                    // If the vendor is verified, navigate to the vendor dashboard
                    await AsyncStorage.setItem('isVendorVerified', 'true');
                    navigation.replace('VendorDashboard');
                } else {
                    // If not verified, show a message (optional) or handle it accordingly
                    console.log('Vendor verification pending.');
                }
            } catch (error) {
                // Handle error in fetching verification status
                console.error('Error fetching verification status:', error);
                // You might want to show an error message to the user
            }
        };

        // Call the function to check vendor verification
        checkVendorVerification();
    }, [navigation]);

    return (
        <View style={VerificationPending.container}>
            <Text style={VerificationPending.message}>
                Your account is under verification.
                {'\n'}
                Please allow up to 4 working days for the verification process.
                {'\n\n'}
                Thank you for your patience.
            </Text>
        </View>
    );
};

export default VerificationPendingScreen;















































// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
//
// const VerificationPendingScreen = ({ navigation }) => {
//     useEffect(() => {
//         // Simulate a delay of 3 days (or 4 days, adjust the timeout value accordingly)
//         const delayInDays = 3;
//         const delayInMilliseconds = delayInDays * 24 * 60 * 60 * 1000; // 3 days in milliseconds
//
//         const timer = setTimeout(async () => {
//             // After the delay, check if the vendor is verified in AsyncStorage
//             const isVendorVerified = await AsyncStorage.getItem('isVendorVerified');
//
//             if (isVendorVerified === 'true') {
//                 // If the vendor is verified, navigate to the vendor dashboard
//                 navigation.replace('VendorDashboard');
//             } else {
//                 // If not verified, show a message (optional) or handle it accordingly
//                 console.log('Vendor verification pending.');
//             }
//         }, delayInMilliseconds);
//
//         // Clear the timer if the component is unmounted before the delay expires
//         return () => clearTimeout(timer);
//     }, [navigation]);
//
//     return (
//         <View style={styles.container}>
//             <Text style={styles.message}>
//                 Your account is under verification.
//                 {'\n'}
//                 Please allow up to 4 working days for the verification process.
//                 {'\n\n'}
//                 Thank you for your patience.
//             </Text>
//         </View>
//     );
// };
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5DEB3', // Light brown background color
//         padding: 16,
//     },
//     message: {
//         fontSize: 18,
//         textAlign: 'center',
//     },
// });
//
// export default VerificationPendingScreen;
