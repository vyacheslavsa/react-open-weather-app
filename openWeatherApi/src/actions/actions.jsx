import axios from "axios";
import {detectError, getCity, getWeather, isLoading} from "../redusers/reduser";


export const getDataCurrentWeather = (
    APIkey = '5fb6b5d7b3e1b8e74a3f2ecca13358e5',
    lat = '47.221385',
    lon = '39.7114196',
    format = 'metric',
    lang = 'EN'
    ) => {

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

export const getDataCurrentCity = (
    APIkey = '5fb6b5d7b3e1b8e74a3f2ecca13358e5',
    lat = '47.221385',
    lon = '39.7114196'
    ) => {
    return dispatch =>   {
        dispatch(isLoading(true))
         axios
            .get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${APIkey}`)
            .then((response) => {
                dispatch(getCity(response.data))
                dispatch(isLoading(false))
            })
            .catch((error) => {
                dispatch(detectError(error))
            });
    }
}