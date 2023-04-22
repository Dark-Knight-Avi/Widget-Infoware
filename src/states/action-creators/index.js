// actions.js
import axios from "axios";

export const fWeather = (city) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/weather?city=${city}`);
    dispatch({
      type: "fetchWeather",
      payload: {
        data: response.data, 
      },
    });
  };
};

export const fForcast = (city) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/forecast?city=${city}`);
    dispatch({
      type: "fetchForecast",
      payload: {
        data: response.data,
      },
    });
  };
};
