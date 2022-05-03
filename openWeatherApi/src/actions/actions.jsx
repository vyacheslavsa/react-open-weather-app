import axios from "axios";
import { detectError, getWeather, isLoading } from "../redusers/reduser";

// const getData = async () => {
//   // Делаем запрос пользователя с данным ID
//   await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=Rostov&limit=5&appid=5fb6b5d7b3e1b8e74a3f2ecca13358e5`)
//     .then(function (response) {
//       // обработка успешного запроса
//       console.log(response);
//     })
//     .catch(function (error) {
//       // обработка ошибки
//       console.log(error);
//     })
//     .then(function () {
//       // выполняется всегда
//     });
// }

const lat = '47.221385'
const lon = '39.7114196'

export const getDataCurrentWeather = () => {
  return dispatch => {
    dispatch(isLoading(true))
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}8&lon=${lon}&appid=5fb6b5d7b3e1b8e74a3f2ecca13358e5&units=metric&lang=RU`)
      .then((response) => {
        dispatch(getWeather(response.data))
        dispatch(isLoading(false))
      })
      .catch((error) => {
        dispatch(detectError(error))
      });
  }
}