import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
    Ionicons,
    MaterialCommunityIcons,
    FontAwesome,
    SimpleLineIcons,
} from '@expo/vector-icons';

const VendorDashboard = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconBox}>
                {/* Orders Menu Item */}
                <TouchableOpacity
                    style={[styles.menuItem, styles.brownBackground]}
                    onPress={() => navigation.navigate('ViewOrder')}
                >
                    <MaterialCommunityIcons
                        name="clipboard-check"
                        size={28} // Increased icon width
                        color="white"
                    />{' '}
                    {/* Orders Icon */}
                </TouchableOpacity>

                {/* Products Menu Item */}
                <TouchableOpacity
                    style={[styles.menuItem, styles.brownBackground]}
                    onPress={() => navigation.navigate('ProductsComponent')}
                >
                    <FontAwesome
                        name="shopping-bag"
                        size={28} // Increased icon width
                        color="white"
                    />{' '}
                    {/* Products Icon */}
                </TouchableOpacity>

                {/* Earnings Menu Item */}
                <TouchableOpacity
                    style={[styles.menuItem, styles.brownBackground]}
                    onPress={() => navigation.navigate('EarningsComponent')}
                >
                    <MaterialCommunityIcons
                        name="cash"
                        size={28} // Increased icon width
                        color="white"
                    />{' '}
                    {/* Earnings Icon */}
                </TouchableOpacity>

                {/* Profile Menu Item */}
                <TouchableOpacity
                    style={[styles.menuItem, styles.brownBackground]}
                    onPress={() => navigation.navigate('VendorProfile')}
                >
                    <Ionicons name="person" size={28} color="white" />{' '}
                    {/* Profile Icon */}
                </TouchableOpacity>

                {/* Settings Menu Item */}
                <TouchableOpacity
                    style={[styles.menuItem, styles.brownBackground]}
                    onPress={() => navigation.navigate('SettingsComponent')}
                >
                    <SimpleLineIcons name="settings" size={28} color="white" />{' '}
                    {/* Settings Icon */}
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'flex-end',
    },
    iconBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#3a1204',
        paddingVertical: 10,
    },
    menuItem: {
        alignItems: 'center',
        padding: 15,
        borderRadius: 15,
    },
    brownBackground: {
        backgroundColor: '#b06f55', 
    },
});

export default VendorDashboard;
