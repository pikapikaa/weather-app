import { StyleSheet, Platform } from "react-native";
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
});
