import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthenticationContext = createContext(null);

// export const useAuth = () => {
//   return useContext(AuthenticationContext);
// };

export const AuthContext = ({ children }) => {
  const [jwtToken, setJwtToken] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPhoneNumber, setUserPhoneNumber] = useState(null);
  const [userFirstName, setUserFirstName] = useState(null);
  const [userLastName, setUserLastName] = useState(null);
  const [userGender, setUserGender] = useState(null);

  console.log("This is the email in the authContext=======================================================================================================================> ", userEmail)
  // console.log("This is the firstName in the authContext========================================================================================================================> ", userFirstName)

  useEffect(() => {
    loadUserData();
  }, []);

  const loadUserData = async () => {
    try {
      const token = await AsyncStorage.getItem("jwtToken");
      const storedEmail = await AsyncStorage.getItem("email");
      const storedPhoneNumber = await AsyncStorage.getItem("phoneNumber");
      const storedFirstName = await AsyncStorage.getItem("firstName");
      const storedLastName = await AsyncStorage.getItem("lastName");
      const storedGender = await AsyncStorage.getItem("gender");

      // console.log("stored email in context", storedEmail)

      setJwtToken(token);
      setUserEmail(storedEmail);
      setUserPhoneNumber(storedPhoneNumber);
      setUserFirstName(storedFirstName);
      setUserLastName(storedLastName);
      setUserGender(storedGender);
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  };

  // const storeUserData = async (data) => {
  //   try {
  //     await AsyncStorage.setItem("jwtToken", data.jwtToken);
  //     await AsyncStorage.setItem("email", data.email);
  //     await AsyncStorage.setItem("phoneNumber", data.phoneNumber);
  //     await AsyncStorage.setItem("firstName", data.firstName);
  //     await AsyncStorage.setItem("lastName", data.lastName);
  //     await AsyncStorage.setItem("gender", data.gender);
  //   } catch (error) {
  //     console.error("Error storing user data:", error);
  //   }
  // };

  const logout = async () => {
    try {
      await AsyncStorage.clear();
      setJwtToken(null);
      setUserEmail(null);
      setUserPhoneNumber(null);
      setUserFirstName(null);
      setUserLastName(null);
      setUserGender(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const contextValue = {
    jwtToken,
    userEmail,
    userPhoneNumber,
    userFirstName,
    userLastName,
    userGender,
    // storeUserData,
    logout,
  };

  return (
    <AuthenticationContext.Provider value={contextValue}>{children}</AuthenticationContext.Provider>
  );
};
