import React, { useReducer } from "react";
import { WeatherContext } from "./weatherContext";
import { weatherReducer } from "./weatherReducer";
import {
  FETCH_WEATHER,
  SHOW_LOADER,
  HIDE_LOADER,
  TOGGLE_TEMPERATURE,
  OPEN_MODAL,
  CLOSE_MODAL,
} from "../types";
import { Http } from "./../http";
import { cities } from "../data";

const WeatherState = ({ children }) => {
  const initialState = {
    coord: {
      lat: cities[0].lat,
      lon: cities[0].lon,
    },
    weather: {},
    loading: true,
    isFahrenheit: false,
    isModalOpen: false,
  };
  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const baseUrl = `https://api.weather.yandex.ru/v2/forecast?`;

  const fetchWeather = async (lat, lon) => {
    showLoader();
    try {
      const url = `${baseUrl}lat=${lat}&lon=${lon}`;
      const response = await Http.get(url);
      dispatch({ type: FETCH_WEATHER, weather: response, coord: { lat, lon } });
    } catch (e) {
      console.log(e);
    } finally {
      hideLoader();
    }
    hideLoader();
  };

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const hideLoader = () => dispatch({ type: HIDE_LOADER });

  const toggleTemperature = () => dispatch({ type: TOGGLE_TEMPERATURE });

  const openModal = () => dispatch({ type: OPEN_MODAL });

  const closeModal = () => dispatch({ type: CLOSE_MODAL });

  return (
    <WeatherContext.Provider
      value={{
        weather: state.weather,
        loading: state.loading,
        coord: state.coord,
        isFahrenheit: state.isFahrenheit,
        fetchWeather,
        showLoader,
        hideLoader,
        toggleTemperature,
        isModalOpen: state.isModalOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
