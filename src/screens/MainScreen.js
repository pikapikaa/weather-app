import React, { useCallback, useContext, useEffect } from "react";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
} from "react-native";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { WeatherContext } from "../context/weatherContext";
import { COMMON_COLORS } from "../themes/colors";
import { AppLoader } from "../components/ui/AppLoader";
import * as Location from "expo-location";
import CityModal from "../components/CityModal";
import GlobalStyles from "../GlobalStyles";

const MainScreen = () => {
  const { fetchWeather, loading, coord } = useContext(WeatherContext);

  const loadWeather = useCallback(
    async () => await fetchWeather(coord.lat, coord.lon),
    [fetchWeather]
  );

  useEffect(() => {
    loadWeather();
  }, []);

  const geoPress = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") return;

    const location = await Location.getCurrentPositionAsync({});
    if (location && location.coords)
      fetchWeather(location.coords.latitude, location.coords.longitude);
  };

  if (loading) return <AppLoader />;

  return (
    <SafeAreaView style={[styles.container, GlobalStyles.droidSafeArea]}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={loadWeather} />
        }
      >
        <View style={GlobalStyles.flex1}>
          <Header geoPress={geoPress} />
          <Content />
          <Footer />
        </View>
      </ScrollView>
      <CityModal />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COMMON_COLORS.background,
  },
});
