export const APIkey = process.env.REACT_APP_API_KEY;
export const format = 'metric';
export const lang = 'EN';
export const allLanguage = {
    EN: {
        content: {
            today: 'Today',
            dayWeek: {
                monday: 'Monday',
                tuesday: 'Tuesday',
                wednesday: 'Wednesday',
                thursday: 'Thursday',
                friday: 'Friday',
                saturday: 'Saturday',
                sunday: 'Sunday',
            },
            sunrise: 'Sunrise',
            sunset: 'Sunset',
            humidity: 'Humidity',
            atmospheric_pressure: 'Atmospheric pressure',
            wind_speed: 'Wind speed',
            hourly_forecast: 'Hourly forecast',
            formats: {
                pressure: 'mmHg',
                wind_speed: 'm/s'
            },
            month: {
                january: 'January',
                february: 'February',
                march: 'March',
                april: 'April',
                may: 'May',
                june: 'June',
                july: 'July',
                august: 'August',
                september: 'September',
                october: 'October',
                november: 'November',
                december: 'December',
            }
        },
        sideBar: {
            menu: 'Menu',
            back: 'Back',
            settings: 'Settings',
        },
        settings: {
            select_lang: 'Select Language'
        }
    },
    RU: {
        content: {
            today: 'Сегодня',
            dayWeek: {
                monday: 'Понедельник',
                tuesday: 'Вторник',
                wednesday: 'Среда',
                thursday: 'Четверг',
                friday: 'Пятница',
                saturday: 'Суббота',
                sunday: 'Воскресенье',
            },
            sunrise: 'Восход',
            sunset: 'Закат',
            humidity: 'Влажность',
            atmospheric_pressure: 'Атмосферное давление',
            wind_speed: 'Cкорость ветра',
            hourly_forecast: 'Почасовой прогноз',
            formats: {
                pressure: 'мм рт. ст.',
                wind_speed: 'м/c'
            },
            month: {
                january: 'Января',
                february: 'Февраля',
                march: 'Марта',
                april: 'Апреля',
                may: 'Мая',
                june: 'Июня',
                july: 'Июля',
                august: 'Августа',
                september: 'Сентября',
                october: 'Октября',
                november: 'Ноября',
                december: 'Декабря',
            }
        },
        sideBar: {
            menu: 'Меню',
            back: 'Назад',
            settings: 'Настройки',
        },
        settings: {
            select_lang: 'Выбор Языка'
        }
    }
}