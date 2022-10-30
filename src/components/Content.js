import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SvgUri } from "react-native-svg";
import { WeatherContext } from "./../context/weatherContext";
import { Conditions } from "../dict";

const Content = () => {
  const { isFahrenheit, weather } = useContext(WeatherContext);
  let uri = "";
  if (weather?.icon)
    uri = `https://www.yastatic.net/weather/i/icons/funky/dark/${weather.icon}.svg`;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <SvgUri uri={uri} height="70%" width="30%" />
        <Text style={styles.text}>
          {isFahrenheit
            ? weather?.tempFahrenheit?.toFixed(1)?.toString()
            : weather?.temp?.toString()}
        </Text>
      </View>
      <Text style={styles.subText}>{Conditions[weather?.condition]}</Text>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 100,
    color: "white",
    fontFamily: "lato-regular",
  },
  subText: {
    color: "white",
    fontSize: 30,
    fontFamily: "lato-regular",
  },
});
