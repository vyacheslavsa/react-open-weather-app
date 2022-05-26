import React, {useEffect, useState} from 'react'
import styles from './Content.module.scss'
import './style.scss'
import moment from "moment";


export default function Content({data, errors, loading}) {

    const descriptionWeather =
        data?.current?.weather[0]?.description[0].toUpperCase()+data?.current?.weather[0]?.description.slice(1);
    const mmHgPressure = Math.round(data?.current?.pressure*0.75006375541921)

    const [ isLoading,setIsLoading ] = useState(true)

    useEffect(()=>{
        if (Object.keys(data).length > 0){
            setIsLoading(false)
        }
    },[data])

    if(Object.keys(errors).length > 0) return <div>{errors}</div>

  return (
    <div className={styles.content}>
        {!loading ?
        <div className={styles.weatherPanel}>
            <div className={styles.currentWeather}>
                <div className={styles.leftInfo}>
                    <div>Rostov-on-Don</div>
                    <div>{descriptionWeather}</div>
                    <div>Today  {moment.unix(data?.current?.dt).format('Do MMMM')}</div>
                </div>
                <div className={styles.rightInfo}>{Math.round(data.current?.temp)}&deg;</div>
            </div>
            <div className={styles.hourly}>
                <div>Hourly Forecast</div>
                <div className={styles.times}>
                    <div>{moment.unix(data?.hourly[1]?.dt).format('LT')}</div>
                    <div>{moment.unix(data?.hourly[2]?.dt).format('LT')}</div>
                    <div>{moment.unix(data?.hourly[3]?.dt).format('LT')}</div>
                    <div>{moment.unix(data?.hourly[4]?.dt).format('LT')}</div>
                    <div>{moment.unix(data?.hourly[5]?.dt).format('LT')}</div>
                    <div>{moment.unix(data?.hourly[6]?.dt).format('LT')}</div>
                    <div>{moment.unix(data?.hourly[7]?.dt).format('LT')}</div>
                    <div>{moment.unix(data?.hourly[8]?.dt).format('LT')}</div>
                    <div>{moment.unix(data?.hourly[9]?.dt).format('LT')}</div>
                    <div>{moment.unix(data?.hourly[10]?.dt).format('LT')}</div>
                </div>
                <div className={styles.tempHourse}>
                    <div>{Math.round(data?.hourly[1]?.temp)}&deg;</div>
                    <div>{Math.round(data?.hourly[2]?.temp)}&deg;</div>
                    <div>{Math.round(data?.hourly[3]?.temp)}&deg;</div>
                    <div>{Math.round(data?.hourly[4]?.temp)}&deg;</div>
                    <div>{Math.round(data?.hourly[5]?.temp)}&deg;</div>
                    <div>{Math.round(data?.hourly[6]?.temp)}&deg;</div>
                    <div>{Math.round(data?.hourly[7]?.temp)}&deg;</div>
                    <div>{Math.round(data?.hourly[8]?.temp)}&deg;</div>
                    <div>{Math.round(data?.hourly[9]?.temp)}&deg;</div>
                    <div>{Math.round(data?.hourly[10]?.temp)}&deg;</div>
                </div>
            </div>
            <div className={styles.week}>
                <div className={styles.leftInfoWeek}>
                    <div className={styles.day}>
                        <div>{moment.unix(data?.daily[1]?.dt).format('dddd')}</div>
                        <div>{moment.unix(data?.daily[2]?.dt).format('dddd')}</div>
                        <div>{moment.unix(data?.daily[3]?.dt).format('dddd')}</div>
                        <div>{moment.unix(data?.daily[4]?.dt).format('dddd')}</div>
                        <div>{moment.unix(data?.daily[5]?.dt).format('dddd')}</div>
                        <div>{moment.unix(data?.daily[6]?.dt).format('dddd')}</div>
                        <div>{moment.unix(data?.daily[7]?.dt).format('dddd')}</div>
                    </div>
                    <div className={styles.icons}>
                        <div>{moment.unix(data?.daily[1]?.dt).format('MMMM Do')}</div>
                        <div>{moment.unix(data?.daily[2]?.dt).format('MMMM Do')}</div>
                        <div>{moment.unix(data?.daily[3]?.dt).format('MMMM Do')}</div>
                        <div>{moment.unix(data?.daily[4]?.dt).format('MMMM Do')}</div>
                        <div>{moment.unix(data?.daily[5]?.dt).format('MMMM Do')}</div>
                        <div>{moment.unix(data?.daily[6]?.dt).format('MMMM Do')}</div>
                        <div>{moment.unix(data?.daily[7]?.dt).format('MMMM Do')}</div>
                    </div>
                    <div className={styles.dayTemp}>
                        <div>{Math.round(data.daily[0]?.temp?.day)}&deg;</div>
                        <div>{Math.round(data.daily[1]?.temp?.day)}&deg;</div>
                        <div>{Math.round(data.daily[2]?.temp?.day)}&deg;</div>
                        <div>{Math.round(data.daily[3]?.temp?.day)}&deg;</div>
                        <div>{Math.round(data.daily[4]?.temp?.day)}&deg;</div>
                        <div>{Math.round(data.daily[5]?.temp?.day)}&deg;</div>
                        <div>{Math.round(data.daily[6]?.temp?.day)}&deg;</div>
                    </div>
                    <div className={styles.nightTemp}>
                        <div>{Math.round(data.daily[1]?.temp?.night)}&deg;</div>
                        <div>{Math.round(data.daily[2]?.temp?.night)}&deg;</div>
                        <div>{Math.round(data.daily[3]?.temp?.night)}&deg;</div>
                        <div>{Math.round(data.daily[4]?.temp?.night)}&deg;</div>
                        <div>{Math.round(data.daily[5]?.temp?.night)}&deg;</div>
                        <div>{Math.round(data.daily[6]?.temp?.night)}&deg;</div>
                        <div>{Math.round(data.daily[7]?.temp?.night)}&deg;</div>
                    </div>
                </div>
                <div className={styles.rightInfoWeek}>
                    <div className={styles.moreInformation}>
                        <div>Sunrise: {moment.unix(data?.current?.sunrise).format('LT')}</div>
                        <div>Sunset: {moment.unix(data?.current?.sunset).format('LT')}</div>
                        <div>Humidity: {data?.current?.humidity} %</div>
                        <div>Atmosphere Pressure: {mmHgPressure} mmHg</div>
                        <div>Wind speed: {data?.current?.wind_speed} m/s</div>
                    </div>
                </div>
            </div>
        </div>
            :
        <div className="lds-dual-ring"></div>
        }
    </div>
  )
}



