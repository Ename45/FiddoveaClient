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
import CustomButton from "../../../reusable/button/CustomButton";
import { imagesDataUrl, photos } from "../../../../../constants/data";
import * as ImagePicker from "expo-image-picker";

const EditProfile = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(imagesDataUrl[0]);

  

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

  const updateFormItems = [
    {
      name: "First Name",
    },
    {
      name: "Last Name",
    },
    {
      name: "PhoneNumber",
    },
    {
      name: "Email",
    },
    {
      name: "House Number",
    },
    {
      name: "Street",
    },
    {
      name: "LGA",
    },
    {
      name: "State",
    },
    //  private Gender gender;
  ];

  const renderFormItem = ({ name }) => (
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
          {name}
        </Text>
      </View >
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: COLORS.gray3,
          borderStyle: "solid",
          borderRadius: 12,
          height: "60%",
          padding: 10,
          fontSize: SIZES.medium,          
        }}
      />
    </View>
  );

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

        <ScrollView>
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
            {
              updateFormItems.map((item, index) => (
                <React.Fragment key={index}>
                  {renderFormItem(item)}
                </React.Fragment>
              ))
            }
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

//  private String firstName;
//  private String lastName;
//  private String phoneNumber;
//  private String password;
//  private Gender gender;
//  private String email;
//  private Role role;
//  private Address address;
//   private String houseNumber;
// private String street;
// private String lga;
// private String state;

{
  /* <View
          

              
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>Name</Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={name}
                onChangeText={(value) => setName(value)}
                editable={true}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>Email</Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={email}
                onChangeText={(value) => setEmail(value)}
                editable={true}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>Password</Text>
            <View
              style={{
                height: 44,
                width: "100%",
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <TextInput
                value={password}
                onChangeText={(value) => setPassword(value)}
                editable={true}
                secureTextEntry
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "column",
              marginBottom: 6,
            }}
          >
            <Text style={{ ...FONTS.h4 }}>Date or Birth</Text>
            <TouchableOpacity
              onPress={handleOnPressStartDate}
              style={{
                height: 44,
                width: "100%",
                borderColor: COLORS.secondaryGray,
                borderWidth: 1,
                borderRadius: 4,
                marginVertical: 6,
                justifyContent: "center",
                paddingLeft: 8,
              }}
            >
              <Text>{selectedStartDate}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flexDirection: "column",
            marginBottom: 6,
          }}
        >
          <Text style={{ ...FONTS.h4 }}>Country</Text>
          <View
            style={{
              height: 44,
              width: "100%",
              borderColor: COLORS.secondaryGray,
              borderWidth: 1,
              borderRadius: 4,
              marginVertical: 6,
              justifyContent: "center",
              paddingLeft: 8,
            }}
          >
            <TextInput
              value={country}
              onChangeText={(value) => setCountry(value)}
              editable={true}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            height: 44,
            borderRadius: 6,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              ...FONTS.body3,
              color: COLORS.white,
            }}
          >
            Save Change
          </Text>
        </TouchableOpacity>

        {renderDatePicker()} */
}
