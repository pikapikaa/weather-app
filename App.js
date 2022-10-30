import React, { useState, useEffect, useCallback } from "react";
import { View } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import MainScreen from "./src/screens/MainScreen";
import WeatherState from "./src/context/WeatherState";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
          "lato-bold": require("./assets/fonts/Lato-Bold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <WeatherState>
        <MainScreen></MainScreen>
      </WeatherState>
    </View>
  );
}
