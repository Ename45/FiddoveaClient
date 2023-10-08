import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { COLORS, FONT, SIZES } from "../../../../constants/theme";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import mySettings from "../../../../styles/components/accounts/yourSettings/mySettings";

const MySettings = ({ navigation }) => {
  const navigateToEditProfile = () => {
    navigation.navigate("EditProfile");
  };

  const navigateToLogin = () => {
    navigation.navigate("Register");
  };

  const navigateToNotification = () => {
    navigation.navigate("Notification");
  };

  const navigateToBecomeVendor = () => {
    console.log("Become a vendor function");
  };

  const navigateToSubscription = () => {
    console.log("Subscription function");
  };

  const navigateToSupport = () => {
    console.log("Support function");
  };

  const navigateToTermsAndPolicies = () => {
    console.log("Terms and conditions function");
  };

  const navigateFAQ = () => {
    console.log("FAQ function");
  };

  const navigateToFreeSpace = () => {
    console.log("Free up space function");
  };

  const navigateToDateSaver  = () => {
    console.log("Data saver function");
  };

  const navigateToReportProblem = () => {
    navigation.navigate("LiveChat") ;
  };

  const addAccount = () => {
    console.log("Add account function");
  };

  const logout = () => {
    console.log("Logout");
  };


  const accountItems = [
    {
      icon: "head-outline",
      text: "Edit Profile",
      action: navigateToEditProfile,
    },
    {
      icon: "login",
      text: "Log In or Create Account",
      action: navigateToLogin,
    },
    {
      icon: "bell-outline",
      text: "Notification",
      action: navigateToNotification,
    },
    {
      icon: "details",
      text: "Become a Vendor",
      action: navigateToBecomeVendor,
    },
  ];

  const supportItems = [
    {
      icon: "credit-card-outline",
      text: "My Subscription",
      action: navigateToSubscription,
    },
    { icon: "folder-open-outline",
      text: "Help & Support",
      action: navigateToSupport },
    {
      icon: "simple-icons",
      text: "Terms and Policies",
      action: navigateToTermsAndPolicies,
    },
    {
      icon: "speaker",
      text: "FAQ",
      action: navigateFAQ,
    },
  ];

  const cacheAndCellularItems = [
    {
      icon: "delete-outline",
      text: "Free up space",
      action: navigateToFreeSpace,
    },
    { 
      icon: "phone-outline", 
      text: "Data Saver", 
      action: navigateToDateSaver 
    },
  ];

  const actionsItems = [
    {
      icon: "message-outline",
      text: "Live Chat",
      action: navigateToReportProblem,
    },
    { 
      icon: "mail", 
      text: "Add Account", 
      action: addAccount 
    },
    { 
      icon: "logout", 
      text: "Log out", 
      action: logout 
    },
  ];

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
      <MaterialCommunityIcons name={icon} size={24} color="black" />
      <Text
        style={{
          marginLeft: 36,
          fontFamily: "poppinsRegular400",
          fontSize: SIZES.medium,
        }}
      >
        {text}{" "}
      </Text>
    </Pressable>
  );

  return (
    <SafeAreaView
      style={mySettings.mainOuterContainer}
    >
      <ScrollView>
        <View
        style={mySettings.scrollContainer}
      >
        <View
          style={mySettings.headerContainer}
        >
          <View style={mySettings.headerIconContainer}>
            <Pressable>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color={COLORS.white}
            />
          </Pressable>
          </View>
          <View >
            <Text style={mySettings.headerText}>
            Settings
          </Text>
          </View>
        </View>

        {/* AccountSettings */}
        <View style={{ marginTop: -(2 / 100) * SIZES.height }}>
          <Text
            style={mySettings.sectionText}
          >
            Account
          </Text>
          <View
            style={mySettings.sectionContent}
          >
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>


        {/* SupportAndAboutSettings */}
        <View>
          <Text
            style={mySettings.sectionText}
          >
            Support & About
          </Text>
          <View
            style={mySettings.sectionContent}
          >
            {supportItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>


        {/* CacheAndCellularSettings */}
        <View>
          <Text
            style={mySettings.sectionText}
          >
            Cache & cellular
          </Text>
          <View
            style={mySettings.sectionContent}
          >
            {cacheAndCellularItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>


        {/* ActionsSettings */}
        <View>
          <Text
            style={mySettings.sectionText}
          >
            Actions
          </Text>
          <View
            style={mySettings.sectionContent}
          >
            {actionsItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
        
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MySettings;
