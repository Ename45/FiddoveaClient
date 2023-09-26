import { Dimensions } from "react-native";
// import { useFonts } from "expo-font";

const { height, width } = Dimensions.get('window')

export const COLORS = {
  primary: "#312651",
  secondary: "#312651",
  tertiary: "#312651",

  black: "#000000",
  
  
  lightWhite: "#FAFAFC",
  white: "#F3F4F8",
  white2: "#FFFFFF",
  snowWhite: "#FFFAFA",
  honeydewWhite: "#F0FFF0",
  mintCreamWhite: "#F5FFFA",
  azureWhite: "#F0FFFF",
  aliceBlueWhite: "#F0F8FF",
  ghostWhite: "#F8F8FF",
  whiteSmoke: "#F5F5F5",


  dimGray: "#696969",
  darkGray: "#A9A9A9",
  silverGray: "#C0C0C0",
  lightGray: "#D3D3D3",
  gainsBoroGray: "#DCDCDC",
  gray: "#83829A",
  gray2: "#C1C0C8",
  gray3: "#808080",


  lightBrown: "#f9c3c3",
  pageBackgroundBrown: "#FFFBF2",
  darkBrown: "#a52a2a",
  tabBarBrown: "#3C2113",
  darkChocolateBrown: "#785036",
  darkBrown2: '#654321',
  saddleBrown: "#8B4513",
  chocolateBrown: "#D2691E",
  siennaBrown: "#A0522D",
  peruBrown: "#CD853F",
  burlyWoodBrown: "#DEB887",
  tanBrown: "#D2B48C",
  rosyBrown: "#BC8F8F",
  sandyBrown: "#F4A460",
  navajoWhiteBrown: "#FFDEAD",
  peachPuffBrown: "#FFDAB9",
  moccasinBrown: "#FFE4B5",
  bisqueBrown: "#FFE4C4",
  blanchedAlmondBrown: "#FFEBCD",
  wheatBrown: "#F5DEB3",
};

export const FAMILY = {
  croissantOneRegular: require("../assets/fonts/CroissantOne-Regular.ttf"),
  playFairRegular: require("../assets/fonts/PlayfairDisplay-Regular.ttf"),
  playFairMedium: require("../assets/fonts/PlayfairDisplay-Medium.ttf"),
  playFairBold: require("../assets/fonts/PlayfairDisplay-Bold.ttf"),
  poppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
  poppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
  poppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
  robotoRegular: require("../assets/fonts/RobotoCondensed-Regular.ttf"),
  robotoLight: require("../assets/fonts/RobotoCondensed-Light.ttf"),
  robotoBold: require("../assets/fonts/RobotoCondensed-Bold.ttf"),
}


export const SIZES = {
  xSmall: 10,
  small: 12,
  mid: 14,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  height,
  width
};