import { View, Text, SafeAreaView, Pressable, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../../../../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import CustomButton from "../../../reusable/button/CustomButton";
import { imagesDataUrl, photos } from "../../../../../constants/data";

const EditProfile = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(imagesDataUrl[0]) 

  const handleImageSelection = () => {

  }

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
          <View style={{ backgroundColor: COLORS.tabBarBrown, borderRadius: 50}}>
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
            <View style={{
              alignItems: "center",
              marginVertical: 22
            }}>
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
            </View>
          </ScrollView>


      </View>
    </SafeAreaView>
  );
};

export default EditProfile;



{/* <View
          style={{
            alignItems: "center",
            marginVertical: 22,
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
                bottom: 0,
                right: 10,
                zIndex: 9999,
              }}
            >
              <MaterialIcons
                name="photo-camera"
                size={32}
                color={COLORS.primary}
              />
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

        {renderDatePicker()} */}