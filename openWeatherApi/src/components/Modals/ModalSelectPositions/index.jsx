import React from 'react';
import Modal from "../Modal";
import {useDispatch} from "react-redux";
import {getDataCurrentWeather} from "../../../actions/actions";
import ButtonCustom from "../../ButtonCustom";

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
                <ButtonCustom
                    onClick={locateCity}
                    title='Определить местоположение'
                />
                {showCity &&
                    <>
                        <div>Ваш город: {currentCity[0].name}?</div>
                        <div>
                            <ButtonCustom
                                onClick={() => saveCity(currentCity[0])}
                                title='Да'
                            />
                        </div>
                    </>
                }
            </div>
        </Modal>
    );
}

export default ModalSelectPositions;