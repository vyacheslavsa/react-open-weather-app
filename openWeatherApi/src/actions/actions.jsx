import axios from "axios";
import { detectError, getWeather, isLoading } from "../redusers/reduser";

const lat = '47.221385'
const lon = '39.7114196'
const APIkey = '5fb6b5d7b3e1b8e74a3f2ecca13358e5'
const format = 'metric'
const lang = 'EN'

// https://api.openweathermap.org/data/2.5/weather?lat=${lat}8&lon=${lon}&appid=${APIkey}&units=metric&lang=EN

export const getDataCurrentWeather = () => {
  return dispatch => {
    dispatch(isLoading(true))
    axios
        .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}&units=${format}&lang=${lang}`)
          .then((response) => {
            dispatch(getWeather(response.data))
            dispatch(isLoading(false))
          })
          .catch((error) => {
            dispatch(detectError(error))
          });
  }
}