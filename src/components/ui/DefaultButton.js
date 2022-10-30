import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import GlobalStyles from "./../../GlobalStyles";
import {COMMON_COLORS} from '../../themes/colors'

const DefaultButton = (props) => {
  const { title, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.base]}>
        <Text style={GlobalStyles.text} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  base: {
    backgroundColor: COMMON_COLORS.background,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    paddingHorizontal: 15,
    paddingVertical: 7
  },
});

export default DefaultButton;
