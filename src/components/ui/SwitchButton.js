import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { COMMON_COLORS } from "../../themes/colors";

const SwitchButton = ({ onPress, isFahrenheit }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.base, styles.left, isFahrenheit ? null : styles.selected]}>
          <Text style={styles.text}>C</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.base,
            styles.right,
            isFahrenheit ? styles.selected : null,
          ]}
        >
          <Text style={styles.text}>F</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SwitchButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  base: {
    borderColor: COMMON_COLORS.white,
    borderBottomWidth: 1,
    height: 30,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    borderBottomLeftRadius: 7,
    borderTopLeftRadius: 7,
    borderStartWidth: 1,
    borderTopWidth: 1,
  },
  selected: {
    backgroundColor: COMMON_COLORS.lightgray2,
  },
  right: {
    borderBottomRightRadius: 7,
    borderTopRightRadius: 7,
    borderEndWidth: 1,
    borderTopWidth: 1,
  },
  text: {
    fontSize: 17,
    color: COMMON_COLORS.white,
    fontFamily: 'lato-regular',
  },
});
