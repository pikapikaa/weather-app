import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";
import { COMMON_COLORS } from "../../themes/colors";

export const AppLoader = () => (
  <View style={styles.center}>
    <ActivityIndicator size="large" color={COMMON_COLORS.lightgray} />
  </View>
);

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COMMON_COLORS.background,
  },
});
