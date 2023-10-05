import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import VerificationPending from "../../../../styles/components/vendor/verification/VerificationPending";

const VerificationPendingScreen = ({ navigation }) => {
    useEffect(() => {
        const delayInMilliseconds = 15 * 1000;

        const timer = setTimeout(async () => {
            try {
                // Wait for 1 second to ensure AsyncStorage value is set
                await new Promise(resolve => setTimeout(resolve, 1000));

                const isVendorVerified = await AsyncStorage.getItem('isVendorVerified');

                if (isVendorVerified === 'true') {
                    navigation.replace('VendorDashboard');
                } else {
                    // Handle the case when the vendor is not verified
                    console.log("Vendor Verification Pending");
                }
            } catch (error) {
                console.error('Error checking AsyncStorage:', error);
            }
        }, delayInMilliseconds);

        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={VerificationPending.container}>
            <View style={VerificationPending.messageContainer}>
                <Text style={VerificationPending.message}>
                    Your account is under verification.
                    {'\n'}
                    Please allow up to 4 working days for the verification process.
                    {'\n\n'}
                    Thank you for your patience.
                </Text>
            </View>
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
