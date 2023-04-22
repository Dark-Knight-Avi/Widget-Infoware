import { combineReducers } from "redux";
import wreducer from "./fetchWeather";
import freducer from "./fetchForecast";

const reducers = combineReducers({
    weather: wreducer,
    forecast: freducer
})
export default reducers