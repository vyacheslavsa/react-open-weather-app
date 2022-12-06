import React from 'react';
import styles from './ButtonCustom.module.scss'

const ButtonCustom = ({title, onClick, icon, width = 'fit-content'}) => {
    return (
        <div className={styles.main} onClick={onClick} style={{width: width}}>
            {title}
            {icon}
        </div>
    );
}

export default ButtonCustom;