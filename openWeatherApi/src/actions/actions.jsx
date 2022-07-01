import axios from "axios";
import {detectError, getCity, getResultCities, getWeather, isLoading, searchLoading} from "../redusers/reduser";

export const getDataCurrentWeather = (
    lat = '47.221385',
    lon = '39.7114196',
    APIkey = '5fb6b5d7b3e1b8e74a3f2ecca13358e5',
    format = 'metric',
    lang = 'EN'
    ) => {

  return dispatch => {
    dispatch(isLoading(true));
    axios
        .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${APIkey}&units=${format}&lang=${lang}`)
          .then((response) => {
            dispatch(getWeather(response.data));
            dispatch(isLoading(false));
          })
          .catch((error) => {
            dispatch(detectError(error));
          });
  }
}

export const getDataCurrentCity = (
    lat = '47.221385',
    lon = '39.7114196',
    APIkey = '5fb6b5d7b3e1b8e74a3f2ecca13358e5',
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

export const dataSearch = (city) => {
    return dispatch => {
        dispatch(searchLoading(true));
        axios
            .get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=5fb6b5d7b3e1b8e74a3f2ecca13358e5`)
            .then((response) => {
                dispatch(getResultCities(response.data));
                dispatch(searchLoading(false));
            })
            .catch((error) => {
                dispatch(detectError(error));
            });
    }
}
