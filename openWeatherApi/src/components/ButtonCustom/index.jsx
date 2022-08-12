import React from 'react';
import styles from './ButtonCustom.module.scss'

const ButtonCustom = ({title, onClick}) => {
    return (
        <div className={styles.main} onClick={onClick}>{title}</div>
    );
}

export default ButtonCustom;