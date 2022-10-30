import React, { useContext } from "react";
import { Text, View, StyleSheet } from "react-native";
import { COMMON_COLORS } from "../themes/colors";
import { WindDirection } from "../dict";
import { WeatherContext } from "./../context/weatherContext";

const Footer = () => {
  const { weather } = useContext(WeatherContext);

  let rain = 0,
    humidity = 0;
  if (weather?.rain) rain = weather.rain;
  if (weather?.humidity) humidity = weather.humidity;

  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.gap]}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Ветер</Text>
          <Text style={styles.subTitle}>
            {weather?.windSpeed}, {WindDirection[weather?.windDir]}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Давление</Text>
          <Text style={styles.subTitle}>{weather?.pressure} мм рт. ст.</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Влажность</Text>
          <Text style={styles.subTitle}>{humidity}%</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>Вероятность выпадения осадков</Text>
          <Text style={styles.subTitle}>{rain}%</Text>
        </View>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    color: COMMON_COLORS.lightgray,
    fontSize: 17,
    fontFamily: 'lato-regular'
  },
  subTitle: {
    color: COMMON_COLORS.white,
    fontSize: 19,
    fontWeight: "400",
    fontFamily: 'lato-regular'
  },
  gap: {
    marginBottom: 15,
  },
});
