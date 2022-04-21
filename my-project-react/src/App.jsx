import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Currentweather from './components/Currentweather';
import './App.css'

function App() {

  const [dataWeather, setDataWeather] = useState({})
  const isLoading = !Object.keys(dataWeather).length;
  
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

  const getDataWeather = async () => {
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}8&lon=${lon}&appid=5fb6b5d7b3e1b8e74a3f2ecca13358e5&units=metric&lang=RU`)
      .then((response) => {
        setDataWeather(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getDataWeather()
  }, [])

  return (
    <div className="App">
      {!isLoading ? <Currentweather data={dataWeather} /> : <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
    </div>
  );
}

export default App;



