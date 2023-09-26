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
import { Picker } from '@react-native-picker/picker';
import CustomButton from "../../../reusable/button/CustomButton";
import { imagesDataUrl, photos } from "../../../../../constants/data";
import * as ImagePicker from "expo-image-picker";
import InputField from "../../../reusable/inputField/InputField";
import { useNavigation } from '@react-navigation/native';

const EditProfile = ({navigation}) => {
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
    navigation.navigate("Settings")
  }

  const handleImageSelection = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.pageBackgroundBrown,
        width: SIZES.width,
        height: SIZES.height,
        padding: 20,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          padding: 5,
        }}
      >
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: SIZES.width / 2,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ backgroundColor: COLORS.tabBarBrown, borderRadius: 50 }}
            >
              <Pressable>
                <MaterialIcons
                  name="keyboard-arrow-left"
                  size={24}
                  color={COLORS.white}
                />
              </Pressable>
            </View>
            <View>
              <Text style={{ fontSize: SIZES.large, fontWeight: "bold" }}>
                Edit Profile
              </Text>
            </View>
          </View>

          <ScrollView style={{ padding: 15,
        backgroundColor: COLORS.pageBackgroundBrown,
        height: SIZES.height,}}>
            <View
              style={{
                alignItems: "center",
                marginVertical: 22,
                position: "relative",
              }}
            >
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

                <View
                  style={{
                    position: "absolute",
                    bottom: 3,
                    right: 9,
                    zIndex: 9999,
                    borderRadius: 50,
                    backgroundColor: COLORS.pageBackgroundBrown,
                  }}
                >
                  <MaterialIcons
                    name="photo-camera"
                    size={32}
                    color={COLORS.gray3}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View>
              <View style={{ height: (12 / 100) * SIZES.height }}>
                <View>
                  <Text
                    style={{
                      marginBottom: 5,
                      color: COLORS.gray3,
                      fontSize: SIZES.mid,
                      paddingLeft: 10,
                    }}
                  >
                    First Name
                  </Text>
                </View>
                <InputField
                  style={{
                    width: "100%",
                  }}
                  value={firstName}
                  onChangeText={(text) => setFirstName(text)}
                />
              </View>
              <View style={{ height: (12 / 100) * SIZES.height }}>
                <View>
                  <Text
                    style={{
                      marginBottom: 5,
                      color: COLORS.gray3,
                      fontSize: SIZES.mid,
                      paddingLeft: 10,
                    }}
                  >
                    Last Name
                  </Text>
                </View>
                <InputField
                  style={{
                    width: "100%",
                  }}
                  value={lastName}
                  onChangeText={(text) => setLastName(text)}
                />
              </View>
              <View style={{ height: (12 / 100) * SIZES.height }}>
                <View>
                  <Text
                    style={{
                      marginBottom: 5,
                      color: COLORS.gray3,
                      fontSize: SIZES.mid,
                      paddingLeft: 10,
                    }}
                  >
                    Phone Number
                  </Text>
                </View>
                <InputField
                  style={{
                    width: "100%",
                  }}
                  value={phoneNumber}
                  onChangeText={(text) => setPhoneNumber(text)}
                />
              </View>
              <View style={{ height: (12 / 100) * SIZES.height }}>
                <View>
                  <Text
                    style={{
                      marginBottom: 5,
                      color: COLORS.gray3,
                      fontSize: SIZES.mid,
                      paddingLeft: 10,
                    }}
                  >
                    Email
                  </Text>
                </View>
                <InputField
                  style={{
                    width: "100%",
                  }}
                  value={email}
                  onChangeText={(text) => setEmail(text)}
                />
              </View>
              <View style={{ height: (12 / 100) * SIZES.height }}>
                <View>
                  <Text
                    style={{
                      marginBottom: 5,
                      color: COLORS.gray3,
                      fontSize: SIZES.mid,
                      paddingLeft: 10,
                    }}
                  >
                    House Number
                  </Text>
                </View>
                <InputField
                  style={{
                    width: "100%",
                  }}
                  value={houseNumber}
                  onChangeText={(text) => setHouseNumber(text)}
                />
              </View>
              <View style={{ height: (12 / 100) * SIZES.height }}>
                <View>
                  <Text
                    style={{
                      marginBottom: 5,
                      color: COLORS.gray3,
                      fontSize: SIZES.mid,
                      paddingLeft: 10,
                    }}
                  >
                    Street
                  </Text>
                </View>
                <InputField
                  style={{
                    width: "100%",
                  }}
                  value={street}
                  onChangeText={(text) => setStreet(text)}
                />
              </View>
              <View style={{ height: (12 / 100) * SIZES.height }}>
                <View>
                  <Text
                    style={{
                      marginBottom: 5,
                      color: COLORS.gray3,
                      fontSize: SIZES.mid,
                      paddingLeft: 10,
                    }}
                  >
                    LGA
                  </Text>
                </View>
                <InputField
                  style={{
                    width: "100%",
                  }}
                  value={lga}
                  onChangeText={(text) => setLga(text)}
                />
              </View>
              <View style={{ height: (12 / 100) * SIZES.height }}>
                <View>
                  <Text
                    style={{
                      marginBottom: 5,
                      color: COLORS.gray3,
                      fontSize: SIZES.mid,
                      paddingLeft: 10,
                    }}
                  >
                    State
                  </Text>
                </View>
                <InputField
                  style={{
                    width: "100%",
                  }}
                  value={state}
                  onChangeText={(text) => setState(text)}
                />
              </View>
              <View style={{borderWidth: 1, borderColor: COLORS.gray, borderStyle: "solid", borderRadius: 10, marginBottom: (10/100*(SIZES.height)), marginTop: (2/100*(SIZES.height))}}>
                <Picker 
                  onValueChange={(text) => setGender(text)}
                  selectedValue={gender}
                >
                  <Picker.Item  label="select gender" value="" />
                  <Picker.Item label="Female" value="FEMALE" />
                  <Picker.Item label="Male" value="MALE" />
                  <Picker.Item label="Others" value="OTHERS" />
                </Picker>
              </View>
            </View>
            <CustomButton   
            buttonName="Update Profile"
            onPress={handleUpdate}
            style={{ marginTop: -50}}
            />

          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;