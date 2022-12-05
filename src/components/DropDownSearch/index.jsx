import React from 'react';
import styles from './DropDown.module.scss'
import {getDataCurrentWeather} from "../../actions/actions";
import {useDispatch, useSelector} from "react-redux";

function Dropdown({data, onClose, onCloseModal, positionDropdown}) {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state?.data?.searchLoading);
    const langStore = useSelector(state => state?.data?.interfaceLanguage)
    const currentLanguage = JSON.parse(localStorage.getItem('CURRENT_LANG')) || langStore

    const updateCity = (i) => {
        dispatch({type: "GET_DATA_WEATHER", payload: {}});
        dispatch(getDataCurrentWeather(data[i].lat, data[i].lon, currentLanguage));
        localStorage.setItem('GEOLOCATIONS', JSON.stringify(data[i]));
        onClose();
        if (onCloseModal) {
            onCloseModal();
        }
    }

    if (!data.length && !isLoading) return (
        <div className={styles.main}>
            <div className={styles.nameList}>
                No found :(
            </div>
        </div>
    )

    return (
        <div className={styles.main} style={positionDropdown && {top: positionDropdown}}>
            {data.map((item, i) =>
                <div
                    className={styles.nameList}
                    key={i}
                    onClick={() => updateCity(i)}
                >
                    <div className={styles.item}>
                        <div>{item.name} {item.country}</div>
                        <div>lat:{item.lat} lon:{item.lon}</div>
                    </div>
                </div>

            )}
        </div>
    );
}

export default Dropdown;