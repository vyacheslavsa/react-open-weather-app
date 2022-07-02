import React from 'react';
import styles from './DropDown.module.scss'
import {getDataCurrentCity, getDataCurrentWeather} from "../../actions/actions";
import {useDispatch, useSelector} from "react-redux";

function Dropdown({ data, onClose }) {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state?.data?.searchLoading);

    const updateCity = (i) => {
        dispatch({ type: "GET_DATA_WEATHER", payload: {} });
        dispatch(getDataCurrentWeather( data[i].lat, data[i].lon, undefined,undefined ));
        dispatch(getDataCurrentCity(data[i].lat, data[i].lon));
        onClose();
    }

    if(!data.length && !isLoading) return(
        <div className={styles.main}>
            <div className={styles.name}>
                No result :(
            </div>
        </div>
    )

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