import React from 'react'
import styles from './Content.module.scss'

export default function Content({data, errors, loading}) {

    let a = data.current.dt * 1000
    let d = new Date(a)
    console.log(d.toDateString())
    console.log(d.toISOString())
    console.log(d.toLocaleDateString("ru-RU"))

    console.log(data)

  return (
      <div className={styles.content}>
        <div className={styles.weatherPanel}>
          <div className={styles.currentWeather}>
            <div className={styles.leftInfo}>
                <div>Rostov-on-Don</div>
                <div>Sunny</div>
                <div>Today Wensday</div>
            </div>
            <div className={styles.rightInfo}>{Math.round(data.current?.temp)}&deg;</div>
          </div>
          <div className={styles.hourly}>
              Почасовой прогноз
          </div>
            <div className={styles.week}>
                <div className={styles.leftInfoWeek}>
                    <div className={styles.day}>
                        <div>пн</div>
                        <div>вт</div>
                        <div>ср</div>
                        <div>чт</div>
                        <div>пт</div>
                        <div>сб</div>
                        <div>вс</div>
                    </div>
                    <div className={styles.icons}>
                        <div>icon</div>
                        <div>icon</div>
                        <div>icon</div>
                        <div>icon</div>
                        <div>icon</div>
                        <div>icon</div>
                        <div>icon</div>
                    </div>
                    <div className={styles.dayTemp}>
                        <div>day</div>
                        <div>day</div>
                        <div>day</div>
                        <div>day</div>
                        <div>day</div>
                        <div>day</div>
                        <div>day</div>
                    </div>
                    <div className={styles.nightTemp}>
                        <div>night</div>
                        <div>night</div>
                        <div>night</div>
                        <div>night</div>
                        <div>night</div>
                        <div>night</div>
                        <div>night</div>
                    </div>
                </div>
                <div className={styles.rightInfoWeek}>
                    <div className={styles.moreInformation}>
                        <div>Восход</div>
                        <div>Закат</div>
                        <div>Влажноть</div>
                        <div>Давление</div>
                        <div>Ветер</div>
                    </div>
                </div>
            </div>
          </div>
      </div>
  )
}



