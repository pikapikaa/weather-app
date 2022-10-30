import React, { useContext } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Feather";
import SwitchButton from "./ui/SwitchButton";
import { COMMON_COLORS } from "../themes/colors";
import { WeatherContext } from "../context/weatherContext";

const Header = ({ geoPress }) => {
  const { toggleTemperature, isFahrenheit, openModal, weather } =
    useContext(WeatherContext);
    
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>{weather?.location}</Text>
        <SwitchButton
          onPress={toggleTemperature}
          isFahrenheit={isFahrenheit}
        ></SwitchButton>
      </View>
      <View style={styles.bottom}>
        <Pressable onPress={openModal}>
          <Text style={styles.text}>Сменить город</Text>
        </Pressable>
        <Pressable onPress={geoPress}>
          <View style={styles.bottom}>
            <Ionicons
              name="navigation"
              size={15}
              selectionColor="white"
              color="white"
              style={{ marginEnd: 10 }}
            />

            <Text style={styles.text}>Мое местоположение</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: { padding: 10, paddingRight: 30 },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: COMMON_COLORS.white,
    fontFamily: 'lato-regular'
  },
  text: {
    fontSize: 15,
    color: COMMON_COLORS.lightgray,
    fontFamily: 'lato-regular'
  },
});
