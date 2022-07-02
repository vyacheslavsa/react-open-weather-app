import React from 'react';
import styles from './ModalSelectRegion.module.scss'

const ModalSelectRegion = ({onClose,locateCity,showCity,currentCity}) => {

    const saveCity = (currenCity) => {
        localStorage.setItem('GEOLOCATIONS', JSON.stringify(currenCity));
        onClose();
    }

    return (
        <div className={styles.backGround}>
            <div className={styles.root}>
                <div className={styles.header}>
                    <div onClick={()=>onClose()}>+</div>
                </div>
                <div className={styles.container}>
                    <div className={styles.description}>Выберите регион вручную или определите свое расположение</div>
                    <div className={styles.content}>
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
                </div>
            </div>
        </div>
    );
}

export default ModalSelectRegion;