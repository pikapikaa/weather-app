import {
  FETCH_WEATHER,
  SHOW_LOADER,
  HIDE_LOADER,
  TOGGLE_TEMPERATURE,
  CLOSE_MODAL,
  OPEN_MODAL,
} from "../types";

export const weatherReducer = (state, { type, weather, coord }) => {
  switch (type) {
    case FETCH_WEATHER:
      return {
        ...state,
        weather,
        coord,
      };
    case SHOW_LOADER:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADER:
      return {
        ...state,
        loading: false,
      };
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    case TOGGLE_TEMPERATURE:
      return {
        ...state,
        isFahrenheit: !state.isFahrenheit,
      };
    default:
      return { state };
  }
};
