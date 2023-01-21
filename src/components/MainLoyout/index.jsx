import React from 'react';
import styles from './MainLoyout.module.scss'
import Header from "../Header";
import SideBar from "../SideBar";
import {useSelector} from "react-redux";
import cs from "classnames";

const MainLoyout = ({children}) => {
    const openSideBar = useSelector(state => state?.data?.openSideBar)
    return (
        <div className={cs(styles.mainStyle, {[styles.openSideBar]:openSideBar})}>
            <Header/>
            {children}
            <SideBar open={openSideBar}/>
        </div>
    );
}

export default MainLoyout;