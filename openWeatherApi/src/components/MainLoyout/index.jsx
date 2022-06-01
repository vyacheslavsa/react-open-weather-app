import React from 'react';
import styles from './MainLoyout.module.scss'
import UpMenu from "../UpMenu";

const MainLoyout = ({children}) => {
    return (
        <div className={styles.mainStyle}>
            <UpMenu/>
            {children}
        </div>
    );
}

export default MainLoyout;