import React from 'react';
import styles from './DropDown.module.scss'
import {getDataCurrentWeather} from "../../actions/actions";
import {useDispatch, useSelector} from "react-redux";

function Dropdown({ data, onClose, onCloseModal }) {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state?.data?.searchLoading);

    const updateCity = (i) => {
        dispatch({ type: "GET_DATA_WEATHER", payload: {} });
        dispatch(getDataCurrentWeather( data[i].lat, data[i].lon ));
        localStorage.setItem('GEOLOCATIONS', JSON.stringify(data[i]));
        onClose();
        if(onCloseModal) {
            onCloseModal();
        }
    }

    if(!data.length && !isLoading) return(
        <div className={styles.main}>
            <div className={styles.name}>
                No found :(
            </div>
        </div>
    )

    return (
        <div className={styles.main}>
            {data.map((item,i) =>
                <div
                    className={styles.name}
                    key={i}
                    onClick={() => updateCity(i)}
                >
                    {item.local_names ? item.local_names.ru : item.name} {item.country}
                </div>
            )}
        </div>
    );
}

export default Dropdown;