import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const VendorProfile = () => {
    const [profilePic, setProfilePic] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setProfilePic(result.uri);
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={pickImage} style={styles.cameraIconContainer}>
                <AntDesign name="camera" size={24} color="#5D4037" />
            </TouchableOpacity>
<<<<<<< HEAD
=======
            <TouchableOpacity onPress={handleImageSelection}>
            <Image
                source={{ uri: selectedImage }}
                style={{
                    height: 170,
                    width: 170,
                    borderRadius: 85,
                    borderWidth: 2,
                    borderColor: COLORS.primary,
                }}
            />
            </TouchableOpacity>
>>>>>>> main
            {profilePic && <Image source={{ uri: profilePic }} style={styles.profilePic} />}
            <Text style={styles.heading}>Vendor</Text>
            <Text style={styles.detail}>Vendor Email: vendor@example.com</Text>
            <Text style={styles.detail}>Vendor Address: 123 Vendor Street, City</Text>
            <Text style={styles.detail}>Phone Number: +1234567890</Text>
            <Text style={styles.detail}>Country: Country Name</Text>
            <Text style={styles.bio}>
                Vendor Bio: Write your bio here. This is where you can describe yourself and your
                business to customers.
            </Text>
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF', // Set background color to white
        alignItems: 'center',
        padding: 20,
    },
    cameraIconContainer: {
        position: 'absolute',
        top: 20,
        right: 20,
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    detail: {
        fontSize: 16,
        marginBottom: 10,
    },
    bio: {
        fontSize: 14,
        textAlign: 'center',
        marginBottom: 20,
    },
    logoutButton: {
        backgroundColor: '#5D4037', // Brown background color for the button
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF', // White text color for the button text
        fontSize: 16,
    },
});

export default VendorProfile;
