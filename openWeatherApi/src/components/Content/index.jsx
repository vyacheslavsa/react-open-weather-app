import React, { useRef } from 'react'
import styles from './Content.module.scss'
import './style.scss'
import moment from "moment";
import {linkImageWeather} from "../../constans";
import {ReactComponent as ImageError} from "../../image/error_FILL0_wght400_GRAD0_opsz48.svg"

export default function Content({ data, errors, loading }) {

    const descriptionWeather = data?.current?.weather[0]?.description[0].toUpperCase()+data?.current?.weather[0]?.description.slice(1);
    const mmHgPressure = Math.round(data?.current?.pressure * 0.75006375541921);
    let currentImageWeather = '';
    const tempRef = useRef();
    const currentGEO = JSON.parse(localStorage.getItem('GEOLOCATIONS'));

    switch (data?.current?.weather[0]?.icon) {
        case '01d' :
            currentImageWeather = linkImageWeather[0].link
            break;
        case '02d' :
            currentImageWeather = linkImageWeather[1].link
            break;
        case '03d' :
            currentImageWeather = linkImageWeather[2].link;
            break;
        case '04d' :
            currentImageWeather = linkImageWeather[3].link;
            break;
        case '09d' :
            currentImageWeather = linkImageWeather[4].link
            break;
        case '10d' :
            currentImageWeather = linkImageWeather[5].link
            break;
        case '11d' :
            currentImageWeather = linkImageWeather[6].link
            break;
        case '13d' :
            currentImageWeather = linkImageWeather[7].link
            break;
        case '50d' :
            currentImageWeather = linkImageWeather[8].link
            break;
        default :
            currentImageWeather = linkImageWeather[2].link
    }

    if(Object.keys(errors).length > 0) return (
        <div className={styles.content}>
            <div className={styles.errorContent}>
                <ImageError/>
                <div>{errors}</div>
            </div>
        </div>
    )

  return (
    <div className={styles.content}>
        {!loading && !!Object.keys(data).length && currentImageWeather ?
        <div
            className={styles.weatherPanel}
            style={{background: `url(${currentImageWeather}) no-repeat`, backgroundSize: 'cover'}}
        >
            <div className={styles.currentWeather}>
                <div className={styles.leftInfo}>
                    <div>{currentGEO.name}</div>
                    <div>{descriptionWeather}</div>
                    <div>Today  {moment.unix(data?.current?.dt).format('Do MMMM')}</div>
                </div>
                <div
                    className={styles.rightInfo}
                    ref={tempRef}
                >{Math.round(data.current?.temp)}&deg;</div>
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



