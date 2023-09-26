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
      <ScrollView>
        <View
        style={{
          marginHorizontal: 12,
          borderStyle: "solid",
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
          <View style={{ backgroundColor: COLORS.tabBarBrown, borderRadius: 50}}>
            <Pressable>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color={COLORS.white}
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
        <View>
          <Text
            style={{
              fontSize: SIZES.large,
              marginVertical: 5,
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


        {/* SupportAndAboutSettings */}
        <View>
          <Text
            style={{
              fontSize: SIZES.large,
              marginVertical: 5,
              fontStyle: "italic",
            }}
          >
            Support & About
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORS.burlyWoodBrown,
            }}
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
            style={{
              fontSize: SIZES.large,
              marginVertical: 5,
              fontStyle: "italic",
            }}
          >
            Cache & cellular
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORS.burlyWoodBrown,
            }}
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
            style={{
              fontSize: SIZES.large,
              marginVertical: 5,
              fontStyle: "italic",
            }}
          >
            Actions
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: COLORS.burlyWoodBrown,
            }}
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
