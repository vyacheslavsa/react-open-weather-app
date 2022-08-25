import React from 'react';
import styles from './ButtonCustom.module.scss'

const ButtonCustom = ({title, onClick, icon}) => {
    return (
        <div className={styles.main} onClick={onClick}>
            {title}
            {icon}
        </div>
    );
}

export default ButtonCustom;