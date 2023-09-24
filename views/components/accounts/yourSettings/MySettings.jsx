import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React from "react";
import { COLORS, FONT, SIZES } from "../../../../constants/theme";
import { MaterialIcons } from "@expo/vector-icons";

const MySettings = ({ navigation }) => {
  const navigateToEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };

  // const navigateToNotifications = () => {
  //   console.log("Notifications function");
  // };

  // const navigateToPrivacy = () => {
  //   console.log("Privacy function");
  // };

  // const navigateToSubscription = () => {
  //   console.log("Subscription function");
  // };

  // const navigateToSupport = () => {
  //   console.log("Support function");
  // };

  // const navigateToTermsAndPolicies = () => {
  //   console.log("Terms and Policies function");
  // };

  // const navigateToFreeSpace = () => {
  //   console.log("Free Space function");
  // };

  // const navigateToDateSaver = () => {
  //   console.log("Date saver");
  // };

  // const navigateToReportProblem = () => {
  //   console.log("Report a problem");
  // };

  // const addAccount = () => {
  //   console.log("Add account ");
  // };

  // const logout = () => {
  //   console.log("Logout");
  // };

  const accountItems = [
    {
      icon: "person-outline",
      text: "Edit Profile",
      action: navigateToEditProfile,
    },
    {
      icon: "login",
      text: "Log In or Create Account",
      action: navigateToLogin,
    },
  ];

  // const supportItems = [
  //   {
  //     icon: "credit-card",
  //     text: "My Subscription",
  //     action: navigateToSubscription,
  //   },
  //   { icon: "help-outline",
  //     text: "Help & Support",
  //     action: navigateToSupport },
  //   {
  //     icon: "info-outline",
  //     text: "Terms and Policies",
  //     action: navigateToTermsAndPolicies,
  //   },
  // ];

  // const cacheAndCellularItems = [
  //   {
  //     icon: "delete-outline",
  //     text: "Free up space",
  //     action: navigateToFreeSpace,
  //   },
  //   { icon: "save-alt", text: "Date Saver", action: navigateToDateSaver },
  // ];

  // const actionsItems = [
  //   {
  //     icon: "outlined-flag",
  //     text: "Report a problem",
  //     action: navigateToReportProblem,
  //   },
  //   { icon: "people-outline", text: "Add Account", action: addAccount },
  //   { icon: "logout", text: "Log out", action: logout },
  // ];

  const renderSettingsItem = ({ icon, text, action }) => (
    <Pressable
      onPress={action}
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 12,
      }}
    >
      <MaterialIcons name={icon} size={24} color="black" />
      <Text
        style={{
          marginLeft: 36,
          fontWeight: 600,
          fontSize: SIZES.medium,
        }}
      >
        {text}{" "}
      </Text>
    </Pressable>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.pageBackgroundBrown,
        width: SIZES.width,
        height: SIZES.height,
        paddingTop: 20,
        // alignContent: "center",
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: SIZES.width/2,
            justifyContent: "space-between"
          }}
        >
          <View>
            <Pressable>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color={COLORS.black}
            />
          </Pressable>
          </View>
          <View >
            <Text style={{ fontSize: SIZES.large, fontWeight: "bold" }}>
            Settings
          </Text>
          </View>
        </View>

        {/* AccountSettings */}
        <View style={{ marginBottom: 12 }}>
          <Text
            style={{
              fontSize: SIZES.large,
              marginVertical: 25,
              fontStyle: "italic",
            }}
          >
            Account
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORS.burlyWoodBrown,
            }}
          >
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MySettings;
