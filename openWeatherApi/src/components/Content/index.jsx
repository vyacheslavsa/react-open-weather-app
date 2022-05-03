import React from 'react'
import { useSelector } from 'react-redux'
import styles from './Content.module.scss'

export default function Content() {
  const isLoading = useSelector(state => state.data.loading)

  



  

  // const iconLink = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

  // const converterDate = (number) => {
  //   return {
  //     'format_one': new Date(number * 1000),
  //     'format_two': new Date(number * 1000).toISOString(),
  //     'format_three': new Date(number * 1000).toLocaleDateString("ru-RU"),
  //   }
  // }

  return (

    <div className={styles.root}>content</div>

    // <div>
    //   <div>Город: {data.name}</div>
    //   <div>Температура: {data.main.temp}</div>
    //   <div>Атмосферное давление: {data.main.pressure}</div>
    //   <div>Влажность: {data.main.humidity}%</div>
    //   <div>Облачность: {data.clouds.all}%</div>
    //   <div>Время восхода: {converterDate(data.sys.sunrise + data.timezone).format_three}</div>
    //   <div>Время заката: {converterDate(data.sys.sunrise + data.timezone).format_three}</div>
    //   <img src={iconLink} alt='' />
    // </div>
  )
}


