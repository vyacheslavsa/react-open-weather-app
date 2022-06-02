import React from 'react'
import styles from './Content.module.scss'
import './style.scss'
import moment from "moment";


export default function Content({data, errors, loading,currentCity}) {

    console.log(loading)

    const descriptionWeather =
        data?.current?.weather[0]?.description[0].toUpperCase()+data?.current?.weather[0]?.description.slice(1);
    const mmHgPressure = Math.round(data?.current?.pressure * 0.75006375541921);

    if(Object.keys(errors).length > 0) return <div>{errors}</div>

  return (
    <div className={styles.content}>
        {!loading ?
        <div className={styles.weatherPanel}>
            <div className={styles.currentWeather}>
                <div className={styles.leftInfo}>
                    <div>{currentCity[0]?.name}</div>
                    <div>{descriptionWeather}</div>
                    <div>Today  {moment.unix(data?.current?.dt).format('Do MMMM')}</div>
                </div>
                <div className={styles.rightInfo}>{Math.round(data.current?.temp)}&deg;</div>
            </div>
            <div className={styles.hourly}>
                <div>Hourly Forecast</div>
                <div className={styles.times}>
                    {[...new Array(10).keys()]
                        .map(index =>
                            <div key={index}>{moment.unix(data?.hourly[index+1]?.dt).format('LT')}</div>
                        )}
                </div>
                <div className={styles.tempHourse}>
                    {[...new Array(10).keys()]
                        .map(index =>
                            <div key={index}>{Math.round(data?.hourly[index+1]?.temp)}&deg;</div>
                        )}
                </div>
            </div>
            <div className={styles.week}>
                <div className={styles.leftInfoWeek}>
                    <div className={styles.day}>
                        {[...new Array(7).keys()]
                            .map(index =>
                                <div key={index}>{moment.unix(data?.daily[index+1]?.dt).format('dddd')}</div>
                            )}
                    </div>
                    <div className={styles.icons}>
                        {[...new Array(7).keys()]
                            .map(index =>
                                <div key={index}>{moment.unix(data?.daily[index+1]?.dt).format('MMMM Do')}</div>
                            )}
                    </div>
                    <div className={styles.dayTemp}>
                        {[...new Array(7).keys()]
                            .map(index =>
                                <div key={index}>{Math.round(data.daily[index+1]?.temp?.day)}&deg;</div>
                            )}
                    </div>
                    <div className={styles.nightTemp}>
                        {[...new Array(7).keys()]
                            .map(index =>
                                <div key={index}>{Math.round(data.daily[index+1]?.temp?.night)}&deg;</div>
                            )}
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
        <div className="lds-dual-ring"/>
        }
    </div>
  )
}



