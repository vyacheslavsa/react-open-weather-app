import React from 'react';
import styles from './MainLoyout.module.scss'
import UpMenu from "../Header";

const MainLoyout = ({children}) => {
    return (
        <div className={styles.mainStyle}>
            <UpMenu/>
            {children}
        </div>
    );
}

export default MainLoyout;