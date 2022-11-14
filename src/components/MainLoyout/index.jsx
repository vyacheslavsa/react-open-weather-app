import React from 'react';
import styles from './MainLoyout.module.scss'
import Header from "../Header";

const MainLoyout = ({children}) => {
    return (
        <div className={styles.mainStyle}>
            <Header/>
            {children}
        </div>
    );
}

export default MainLoyout;