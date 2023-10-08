import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../../constants/theme";


export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.pageBackgroundBrown,
    width: SIZES.width,
    height: SIZES.height,
    paddingBottom: 20,
  },
  innerContainer: {
    width: "100%",
    height: "100%",
    padding: 15,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: SIZES.width / 2,
    justifyContent: "space-between",
    marginTop: (2 / 100) * SIZES.height,
  },
  headerBackIcon: {
    backgroundColor: COLORS.tabBarBrown,
    borderRadius: 50,
  },
  headerText: {
    fontSize: SIZES.large,
    fontWeight: "bold",
  },
  scrollView: {
    backgroundColor: COLORS.pageBackgroundBrown,
    height: "100%",
  },
  imageOuterContainer: {
    alignItems: "center",
    marginVertical: 22,
    position: "relative",
  },
  profileImage: {
    height: 170,
    width: 170,
    borderRadius: 85,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  imagePickerIcon: {
    position: "absolute",
    bottom: 3,
    right: 9,
    zIndex: 9999,
    borderRadius: 50,
    backgroundColor: COLORS.pageBackgroundBrown,
  },
  inputContainer: {
    height: (12 / 100) * SIZES.height,
  },
  inputText: {
    marginBottom: 5,
    color: COLORS.gray3,
    fontSize: SIZES.mid,
    paddingLeft: 10,
  },
  inputField: {
    width: "100%",
  },
  dropdownInput: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderStyle: "solid",
    borderRadius: 10,
    marginBottom: (6 / 100) * SIZES.height,
    marginTop: (2 / 100) * SIZES.height,
  },
  buttonStyle: {
    marginLeft: 20/100*(SIZES.width),
  },
});
