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
import React, { useState } from "react";
import { COLORS, SIZES } from "../../../../../constants/theme";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import CustomButton from "../../../reusable/button/CustomButton";
import { imagesDataUrl, photos } from "../../../../../constants/data";
import * as ImagePicker from "expo-image-picker";
import InputField from "../../../reusable/inputField/InputField";
import editProfile from "../../../../../styles/components/accounts/myAccount/profile/editProfile.js";
import { useNavigation } from "@react-navigation/native";

const EditProfile = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(imagesDataUrl[0]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [street, setStreet] = useState("");
  const [lga, setLga] = useState("");
  const [state, setState] = useState("");
  const [gender, setGender] = useState();

  // const navigation = useNavigation();

  const handleUpdate = () => {
    navigation.navigate("Settings");
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
              <View style={editProfile.dropdownInput}>
                <Picker
                  onValueChange={(text) => setGender(text)}
                  selectedValue={gender}
                >
                  <Picker.Item label="select gender" value="" />
                  <Picker.Item label="Female" value="FEMALE" />
                  <Picker.Item label="Male" value="MALE" />
                  <Picker.Item label="Others" value="OTHERS" />
                </Picker>
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
