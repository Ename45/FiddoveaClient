import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../../constants/theme";

export default StyleSheet.create({
  mainOuterContainer: {
    flex: 1,
    backgroundColor: COLORS.pageBackgroundBrown,
    width: SIZES.width,
    height: SIZES.height,
    paddingTop: (5 / 100) * SIZES.height,
    paddingBottom: (3 / 100) * SIZES.height,
  },
  scrollContainer: {
    marginHorizontal: (4 / 100) * SIZES.width,
    borderStyle: "solid",
    gap: (2 / 100) * SIZES.height,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: SIZES.width / 2,
    justifyContent: "space-between",
  },
  headerIconContainer: {
    backgroundColor: COLORS.tabBarBrown,
    borderRadius: 50,
  },
  headerText: {
    fontSize: SIZES.large,
    fontFamily: "poppinsBold700",
  },
  sectionText: {
    fontSize: SIZES.medium,
    marginVertical: 5,
    fontFamily: "poppinsMedium500",
  },
  sectionContent: {
    borderRadius: 12,
    backgroundColor: COLORS.pageBackgroundBrown,
    elevation: 10,
  },
});
