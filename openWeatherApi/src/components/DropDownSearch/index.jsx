import React from 'react';
import styles from './DropDown.module.scss'
import {getDataCurrentCity, getDataCurrentWeather} from "../../actions/actions";
import {useDispatch} from "react-redux";

function Dropdown({ data, onClose }) {
    const dispatch = useDispatch()

    const updateCity = (i) => {
        dispatch({ type: "GET_DATA_WEATHER", payload: {} });
        dispatch(getDataCurrentWeather( undefined, data[i].lat, data[i].lon, undefined,undefined ));
        dispatch(getDataCurrentCity(undefined, data[i].lat, data[i].lon));
        onClose()
    }


    return (
        <div className={styles.main}>
            {data.map((item,i) =>
                <div
                    className={styles.name}
                    key={i}
                    onClick={()=>updateCity(i)}
                >
                    {item.name} {item.country}
                </div>
            )}
        </div>
    );
}

export default Dropdown;