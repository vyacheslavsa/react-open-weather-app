import React, { useRef } from "react";
import styles from "./Content.module.scss";
import moment from "moment";
import { ReactComponent as ImageError } from "../../assets/svg/error_FILL0_wght400_GRAD0_opsz48.svg";
import { ReactComponent as SunnyIcon } from "../../assets/svg/sunny.svg";
import { ReactComponent as SmallCloudyIcon } from "../../assets/svg/small_cloudy.svg";
import { ReactComponent as CloudyIcon } from "../../assets/svg/cloudy.svg";
import { ReactComponent as BrokeCloudsIcon } from "../../assets/svg/broken_clouds.svg";
import { ReactComponent as RainIcon } from "../../assets/svg/rain.svg";
import { ReactComponent as RainSunIcon } from "../../assets/svg/rain_sun.svg";
import { ReactComponent as ThunderstormIcon } from "../../assets/svg/thunderstorm.svg";
import { ReactComponent as SnowIcon } from "../../assets/svg/snow.svg";
import { ReactComponent as FogIcon } from "../../assets/svg/fog.svg";
import { ReactComponent as NightIcon } from "../../assets/svg/night.svg";
import { ReactComponent as SmallCloudyIconNight } from "../../assets/svg/small_cloudy_night.svg";
import { ReactComponent as CloudyIconNight } from "../../assets/svg/small_cloudy_night.svg";
import { ReactComponent as RainMoonIcon } from "../../assets/svg/rain_night_moon.svg";
import { useSelector } from "react-redux";
import { allLanguage } from "../../constans";
import cs from "classnames";
import SkeletonContent from "../SkeletonContent";
import { useMediaQuery } from "react-responsive";

export default function Content({ data, errors, loading }) {
  const descriptionWeather =
    data?.current?.weather[0]?.description[0].toUpperCase() + data?.current?.weather[0]?.description.slice(1);
  const mmHgPressure = Math.round(data?.current?.pressure * 0.75006375541921);
  const tempRef = useRef();
  const currentGEO = JSON.parse(localStorage.getItem("GEOLOCATIONS"));
  const storeLang = useSelector((state) => state.data.interfaceLanguage);
  const localLang = JSON.parse(localStorage.getItem("CURRENT_LANG"));
  const currentLang = localLang || storeLang;
  const currentMouth = moment.unix(data?.current?.dt).format("MMMM").toLowerCase();
  const isMobile = useMediaQuery({ query: "(max-width: 575px)" });

  const dataCurrentLanguage = (value) => {
    let result = null;
    for (const key in value) {
      if (currentLang === key) result = value[key];
    }
    return result;
  };

  const currentImageWeather = (item) => {
    switch (item ? item : data?.current?.weather[0]?.icon) {
      case "01d":
        return <SunnyIcon />;
      case "02d":
        return <SmallCloudyIcon />;
      case "03d":
        return <CloudyIcon />;
      case "04d":
        return <BrokeCloudsIcon />;
      case "09d":
        return <RainIcon />;
      case "10d":
        return <RainSunIcon />;
      case "11d":
        return <ThunderstormIcon />;
      case "13d":
        return <SnowIcon />;
      case "50d":
        return <FogIcon />;
      case "01n":
        return <NightIcon />;
      case "02n":
        return <SmallCloudyIconNight />;
      case "03n":
        return <CloudyIconNight />;
      case "04n":
        return <BrokeCloudsIcon />;
      case "09n":
        return <RainIcon />;
      case "10n":
        return <RainMoonIcon />;
      case "11n":
        return <ThunderstormIcon />;
      case "13n":
        return <SnowIcon />;
      case "50n":
        return <FogIcon />;
      default:
        return <BrokeCloudsIcon />;
    }
  };

  const getDayWeek = (day) => {
    switch (day) {
      case "Monday":
        return "Понедельник";
      case "Tuesday":
        return "Вторник";
      case "Wednesday":
        return "Среда";
      case "Thursday":
        return "Четверг";
      case "Friday":
        return "Пятница";
      case "Saturday":
        return "Суббота";
      case "Sunday":
        return "Воскресенье";
      default:
        return null;
    }
  };

  if (Object.keys(errors).length > 0)
    return (
      <div className={styles.content}>
        <div className={styles.errorContent}>
          <ImageError />
          <div>{errors}</div>
        </div>
      </div>
    );

  return (
    <main className={styles.content}>
      {!loading && !!Object.keys(data).length && currentImageWeather ? (
        <div className={styles.weatherPanel}>
          <div className={styles.currentWeather}>
            <div className={styles.leftInfo}>
              <div>
                {dataCurrentLanguage(allLanguage).content.today}{" "}
                {moment.unix(data?.current?.dt).format(currentLang === "en" ? "Do" : "D")}
                {currentLang !== "EN" && allLanguage[currentLang].content.endDay}{" "}
                {dataCurrentLanguage(allLanguage).content.month[currentMouth]}
              </div>
              <div>{dataCurrentLanguage(currentGEO.local_names)}</div>
              <div className={styles.descriptionWeather}>
                {descriptionWeather}
                {!isMobile && <div className={styles.iconWeather}>{currentImageWeather()}</div>}
              </div>
            </div>
            <div style={{ display: "flex" }}>
              <div className={styles.rightInfo} ref={tempRef}>
                {Math.round(data.current?.temp)}&deg;C
              </div>
              {isMobile && <div className={styles.iconWeather}>{currentImageWeather()}</div>}
            </div>
          </div>
          <div className={styles.hourly}>
            <div className={styles.titleHourly}>{dataCurrentLanguage(allLanguage).content.hourly_forecast}</div>
            <div className={styles.iconHourse}>
              {[...new Array(10).keys()].map((_, index) => (
                <div key={index}>{currentImageWeather(data?.hourly[index]?.weather[0]?.icon)}</div>
              ))}
            </div>
            <div className={styles.dayWeather}>
              <div className={styles.times}>
                {[...new Array(10).keys()].map((index) => (
                  <div key={index} className={styles.itemTime}>
                    {moment.unix(data?.hourly[index + 1]?.dt).format("LT")}
                  </div>
                ))}
              </div>
              <div className={styles.tempHourse}>
                {[...new Array(10).keys()].map((index) => (
                  <div key={index}>{Math.round(data?.hourly[index + 1]?.temp)}&deg;C</div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.week}>
            <div className={styles.leftInfoWeek}>
              <div className={styles.day}>
                {[...new Array(7).keys()].map((index) => (
                  <div
                    key={index}
                    className={cs({
                      [styles.dayOff]:
                        moment.unix(data?.daily[index]?.dt).format("dddd") === "Saturday" ||
                        moment.unix(data?.daily[index]?.dt).format("dddd") === "Sunday",
                    })}
                  >
                    {currentLang === "en"
                      ? moment.unix(data?.daily[index]?.dt).format("dddd")
                      : getDayWeek(moment.unix(data?.daily[index]?.dt).format("dddd"))}
                  </div>
                ))}
              </div>
              <div className={styles.numMouth}>
                {[...new Array(7).keys()].map((index) => (
                  <div key={index} style={{ display: "flex" }}>
                    <span style={{ minWidth: "40px" }}>
                      {moment.unix(data?.daily[index]?.dt).format(currentLang === "en" ? "Do" : "D")}
                      {currentLang !== "en" && "-e"}&nbsp;
                    </span>
                    <span className={styles.hideMobile}>
                      {dataCurrentLanguage(allLanguage).content.month[currentMouth]}
                    </span>
                  </div>
                ))}
              </div>
              <div className={styles.dayTemp}>
                {[...new Array(7).keys()].map((index) => (
                  <div key={index}>{Math.round(data.daily[index]?.temp?.day)}&deg;C</div>
                ))}
              </div>
              <div className={styles.nightTemp}>
                {[...new Array(7).keys()].map((index) => (
                  <div key={index}>{Math.round(data.daily[index]?.temp?.night)}&deg;C</div>
                ))}
              </div>
            </div>
            <div className={styles.rightInfoWeek}>
              <div className={styles.moreInformation}>
                <div>
                  {dataCurrentLanguage(allLanguage).content.sunrise}: {moment.unix(data?.current?.sunrise).format("LT")}
                </div>
                <div>
                  {dataCurrentLanguage(allLanguage).content.sunset}: {moment.unix(data?.current?.sunset).format("LT")}
                </div>
                <div>
                  {dataCurrentLanguage(allLanguage).content.humidity}: {data?.current?.humidity} %
                </div>
                <div>
                  {dataCurrentLanguage(allLanguage).content.atmospheric_pressure}: {mmHgPressure}{" "}
                  {dataCurrentLanguage(allLanguage).content.formats.pressure}
                </div>
                <div>
                  {dataCurrentLanguage(allLanguage).content.wind_speed}: {data?.current?.wind_speed}{" "}
                  {dataCurrentLanguage(allLanguage).content.formats.wind_speed}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.lastContent}>
            <div className={cs(styles.rightInfoWeek, styles.isMobileInfoWeek)}>
              <div className={styles.moreInformation}>
                <div className={styles.itemMore}>
                  {allLanguage[currentLang].content.sunrise}:{" "}
                  {moment.unix(data?.current?.sunrise + data.timezone_offset - 10800).format("LT")}
                </div>
                <div className={styles.itemMore}>
                  {allLanguage[currentLang].content.sunset}:{" "}
                  {moment.unix(data?.current?.sunset + data.timezone_offset - 10800).format("LT")}
                </div>
                <div className={styles.itemMore}>
                  {allLanguage[currentLang].content.humidity}: {data?.current?.humidity} %
                </div>
                <div className={styles.itemMore}>
                  {allLanguage[currentLang].content.atmospheric_pressure}: {mmHgPressure}{" "}
                  {allLanguage[currentLang].content.formats.pressure}
                </div>
                <div className={styles.itemMore}>
                  {allLanguage[currentLang].content.wind_speed}: {data?.current?.wind_speed}{" "}
                  {allLanguage[currentLang].content.formats.wind_speed}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SkeletonContent />
      )}
    </main>
  );
}
