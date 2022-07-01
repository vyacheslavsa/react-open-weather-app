import React from 'react';
import styles from './ModalSelectRegion.module.scss'

const ModalSelectRegion = ({onClose,locateCity}) => {
    return (
        <div className={styles.backGround}>
            <div className={styles.root}>
                <div className={styles.header}>
                    <div onClick={()=>onClose()}>+</div>
                </div>
                <div className={styles.container}>
                    <div className={styles.description}>Выберите регио вручную или определите свое расположение</div>
                    <div className={styles.content}>
                        <div>Select</div>
                        <button onClick={locateCity}>Определить местоположение</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalSelectRegion;