import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { COLORS, SIZES } from "../../../../../constants/theme";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import CustomButton from "../../../reusable/button/CustomButton";
import { imagesDataUrl, photos } from "../../../../../constants/data";
import * as ImagePicker from "expo-image-picker";
import InputField from "../../../reusable/inputField/InputField";
import editProfile from "../../../../../styles/components/accounts/myAccount/profile/editProfile.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthenticationContext } from "../../../../../context/authContext";
import axios from "axios";
import { baseUrl, customerUrl } from "../../../../../api/Api";
import qs from "qs";
// import { useNavigation } from "@react-navigation/native";

const EditProfile = ({ navigation }) => {
  const { userEmail, userFirstName, userPhoneNumber, userLastName,  } = useContext(AuthenticationContext)


    const updatedPhoneNumber = phoneNumber
        const updatedFirstName = firstName
        const updatedLastName =  lastName


  const [selectedImage, setSelectedImage] = useState(imagesDataUrl[0]);
  const [firstName, setFirstName] = useState(updatedFirstName);
  const [lastName, setLastName] = useState(updatedLastName);
  const [phoneNumber, setPhoneNumber] = useState(updatedPhoneNumber);
  const [email, setEmail] = useState(userEmail);
  
  // const [gender, setGender] = useState();

  
  console.log("userFirstName ===============================> ", firstName);
  console.log("userLastName =================================> ", lastName);
  console.log("userPhoneNumber ===================================> ", phoneNumber);


    const [error, setError] = useState(null);
  const [inputError, setInputError] = useState("");

  useEffect(() => {
    loadUserData();
  }, []);


  const loadUserData = async () => {
    try {
      const storedFirstName = await AsyncStorage.getItem('firstName');
      const storedLastName = await AsyncStorage.getItem('lastName');
      const storedPhoneNumber = await AsyncStorage.getItem('phoneNumber');

      if (storedFirstName) {
        setFirstName(storedFirstName);
      }
      if (storedLastName) {
        setLastName(storedLastName);
      }
      if (storedPhoneNumber) {
        setPhoneNumber(storedPhoneNumber);
      }

    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };


  const saveUserData = async () => {
    try {
      await AsyncStorage.setItem('firstName', firstName);
      await AsyncStorage.setItem('lastName', lastName);
      await AsyncStorage.setItem('phoneNumber', phoneNumber);

    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };


  const handleUpdate = async (e) => {
    setError('');
    e.preventDefault();

    let customerUpdateData = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
    };

    if (firstName !== '' && lastName !== '' && phoneNumber !== '' && email !== '') {
      setInputError('');
      const tokenStorage = await AsyncStorage.getItem('jwtToken');

      try {
        const response = await axios.put(
          `${baseUrl}/${customerUrl}/update`,
          qs.stringify(customerUpdateData),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Authorization: `Bearer ${tokenStorage}`,
            },
          }
        );

        if (response.status === 200) {
          alert('Profile Updated');
          saveUserData();
          navigation.goBack();
        }
      } catch (error) {
        console.error('Update Error:', error);
        if (error.response && error.response.data) {
          console.error('Server Response Data:', error.response.data);
          setError('Server issue... try again');
        } else {
          setError('An error occurred.');
        }
      }
    } else {
      setInputError('All fields are required');
    }
  };


  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    // console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };


  return (
    <SafeAreaView style={editProfile.mainContainer}>
      <View style={editProfile.innerContainer}>
        <View style={{ paddingBottom: 15 }}>
          <View style={editProfile.headerContainer}>
            <View style={editProfile.headerBackIcon}>
              <Pressable onPress={() => {navigation.goBack()}}>
                <MaterialIcons
                  name="keyboard-arrow-left"
                  size={24}
                  color={COLORS.white}
                />
              </Pressable>
            </View>
            <View>
              <Text style={editProfile.headerText}>Edit Profile</Text>
            </View>
          </View>

          <ScrollView style={editProfile.scrollView}>
            <View style={editProfile.imageOuterContainer}>
              <TouchableOpacity onPress={handleImageSelection}>
                <Image
                  source={{ uri: selectedImage }}
                  style={editProfile.profileImage}
                />

                <View style={editProfile.imagePickerIcon}>
                  <MaterialIcons
                    name="photo-camera"
                    size={32}
                    color={COLORS.gray3}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={{ marginHorizontal: 15 }}>
              <View style={editProfile.inputContainer}>
                <View>
                  <Text style={editProfile.inputText}>First Name</Text>
                </View>
                <InputField
                  style={editProfile.inputField}
                  value={firstName}
                  onChangeText={(text) => setFirstName(text)}
                />
              </View>
              <View style={editProfile.inputContainer}>
                <View>
                  <Text style={editProfile.inputText}>Last Name</Text>
                </View>
                <InputField
                  style={editProfile.inputField}
                  value={lastName}
                  onChangeText={(text) => setLastName(text)}
                />
              </View>
              <View style={editProfile.inputContainer}>
                <View>
                  <Text style={editProfile.inputText}>Phone Number</Text>
                </View>
                <InputField
                  style={editProfile.inputField}
                  value={phoneNumber}
                  onChangeText={(text) => setPhoneNumber(text)}
                />
              </View>
              <View style={editProfile.inputContainer}>
                <View>
                  <Text style={editProfile.inputText}>Email</Text>
                </View>
                <InputField
                  style={editProfile.inputField}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              {/* <View style={editProfile.dropdownInput}>
                <Picker
                  onValueChange={(text) => setGender(text)}
                  selectedValue={gender}
                >
                  <Picker.Item label="select gender" value="" />
                  <Picker.Item label="Female" value="FEMALE" />
                  <Picker.Item label="Male" value="MALE" />
                  <Picker.Item label="Others" value="OTHERS" />
                </Picker>
              </View> */}
              <View>
            {error && <Text style={{ color: "red" }}>{error}</Text>}
            {inputError !== "" && (
              <Text style={{ color: "red" }}>{inputError}</Text>
            )}
          </View>
            </View>
            <CustomButton
              buttonName="Update Profile"
              onPress={handleUpdate}
              style={editProfile.buttonStyle}
            />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;
