import React from 'react';
import Modal from "../Modal";
import {useDispatch} from "react-redux";
import {getDataCurrentWeather} from "../../../actions/actions";

function ModalSelectPositions({ onClose,locateCity,showCity,currentCity }) {
    const dispatch = useDispatch();

    const saveCity = (currenCity) => {
        localStorage.setItem('GEOLOCATIONS', JSON.stringify(currenCity));
        dispatch(getDataCurrentWeather(currenCity.lat, currenCity.lon));
        onClose();
    }

    return (
        <Modal title={'Выберите регион вручную или определите свое расположение'}>
            <div>
                <div>Select</div>
                <button onClick={locateCity}>Определить местоположение</button>
                {showCity &&
                    <>
                        <div>Ваш город: {currentCity[0].name}?</div>
                        <div>
                            <button onClick={() => saveCity(currentCity[0])}>Да</button>
                        </div>
                    </>
                }
            </div>
        </Modal>
    );
}

export default ModalSelectPositions;