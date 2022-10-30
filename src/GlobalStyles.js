import { StyleSheet, Platform } from "react-native";
import { COMMON_COLORS } from "./themes/colors";

export default StyleSheet.create({
  flex1: {
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  droidSafeArea: {
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
  text: {
    fontFamily: "lato-regular",
    fontSize: 16,
    color: COMMON_COLORS.white
  },
});
