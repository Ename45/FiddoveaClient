import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants/theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  innerContainer: {
    flexDirection: "row",
    gap: 40
  },
  headerBackIcon: {
    backgroundColor: COLORS.tabBarBrown,
    borderRadius: 50,
    height: 3.5/100*(SIZES.height)
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  totalPrice: {
    marginTop: 16,
    alignItems: "flex-end",
  },
});
